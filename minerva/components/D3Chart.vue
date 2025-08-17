<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import * as d3 from 'd3'

interface ChartDataItem {
  category: string
  value1: number
  value2: number
}

interface ChartProps {
  data?: ChartDataItem[]
  value1Label?: string
  value2Label?: string
  value1Color?: string
  value2Color?: string
  width?: number
  height?: number
  animationDuration?: number
}

const props = withDefaults(defineProps<ChartProps>(), {
  data: () => [
    { category: 'Q1', value1: 23, value2: 18 },
    { category: 'Q2', value1: 31, value2: 25 },
    { category: 'Q3', value1: 28, value2: 22 },
    { category: 'Q4', value1: 35, value2: 29 },
  ],
  value1Label: 'Revenue',
  value2Label: 'Profit',
  value1Color: '#3b82f6',
  value2Color: '#10b981',
  width: 600,
  height: 300,
  animationDuration: 800
})

const chartContainer = ref<HTMLDivElement>()

onMounted(() => {
  createD3Chart()
})

// Watch for data changes and recreate chart
watch(() => props.data, () => {
  createD3Chart()
}, { deep: true })

function createD3Chart() {
  if (!chartContainer.value || !props.data.length) return

  // Clear any existing chart
  d3.select(chartContainer.value).selectAll("*").remove()

  const margin = { top: 20, right: 30, bottom: 40, left: 40 }
  const width = props.width - margin.left - margin.right
  const height = props.height - margin.top - margin.bottom

  // Create SVG
  const svg = d3.select(chartContainer.value)
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)

  const g = svg.append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`)

  // Scales
  const x = d3.scaleBand()
    .domain(props.data.map(d => d.category))
    .range([0, width])
    .padding(0.3)

  const y = d3.scaleLinear()
    .domain([0, d3.max(props.data, d => Math.max(d.value1, d.value2)) || 40])
    .range([height, 0])

  // Create grouped bars
  const categories = g.selectAll('.category')
    .data(props.data)
    .enter().append('g')
    .attr('class', 'category')
    .attr('transform', d => `translate(${x(d.category)},0)`)

  const barWidth = x.bandwidth() / 2

  // Value1 bars
  categories.append('rect')
    .attr('class', 'value1-bar')
    .attr('x', 0)
    .attr('y', height)
    .attr('width', barWidth)
    .attr('height', 0)
    .attr('fill', props.value1Color)
    .transition()
    .duration(props.animationDuration)
    .attr('y', d => y(d.value1))
    .attr('height', d => height - y(d.value1))

  // Value2 bars
  categories.append('rect')
    .attr('class', 'value2-bar')
    .attr('x', barWidth)
    .attr('y', height)
    .attr('width', barWidth)
    .attr('height', 0)
    .attr('fill', props.value2Color)
    .transition()
    .duration(props.animationDuration)
    .delay(200)
    .attr('y', d => y(d.value2))
    .attr('height', d => height - y(d.value2))

  // Add value labels on bars
  categories.append('text')
    .attr('class', 'value1-label')
    .attr('x', barWidth / 2)
    .attr('y', d => y(d.value1) - 5)
    .attr('text-anchor', 'middle')
    .style('font-size', '12px')
    .style('font-weight', 'bold')
    .style('fill', '#374151')
    .text(d => d.value1)
    .style('opacity', 0)
    .transition()
    .duration(props.animationDuration)
    .delay(400)
    .style('opacity', 1)

  categories.append('text')
    .attr('class', 'value2-label')
    .attr('x', barWidth + barWidth / 2)
    .attr('y', d => y(d.value2) - 5)
    .attr('text-anchor', 'middle')
    .style('font-size', '12px')
    .style('font-weight', 'bold')
    .style('fill', '#374151')
    .text(d => d.value2)
    .style('opacity', 0)
    .transition()
    .duration(props.animationDuration)
    .delay(600)
    .style('opacity', 1)

  // Add axes
  g.append('g')
    .attr('class', 'x-axis')
    .attr('transform', `translate(0,${height})`)
    .call(d3.axisBottom(x))
    .selectAll('text')
    .style('font-family', 'Futura, sans-serif')
    .style('font-size', '12px')

  g.append('g')
    .attr('class', 'y-axis')
    .call(d3.axisLeft(y).tickFormat(d => `${d}M`))
    .selectAll('text')
    .style('font-family', 'Futura, sans-serif')
    .style('font-size', '12px')

  // Add legend
  const legend = svg.append('g')
    .attr('class', 'legend')
    .attr('transform', `translate(${width - 100}, 20)`)

  const legendData = [
    { label: props.value1Label, color: props.value1Color },
    { label: props.value2Label, color: props.value2Color }
  ]

  const legendItems = legend.selectAll('.legend-item')
    .data(legendData)
    .enter().append('g')
    .attr('class', 'legend-item')
    .attr('transform', (d, i) => `translate(0, ${i * 20})`)

  legendItems.append('rect')
    .attr('width', 12)
    .attr('height', 12)
    .attr('fill', d => d.color)
    .attr('rx', 2)

  legendItems.append('text')
    .attr('x', 16)
    .attr('y', 6)
    .attr('dy', '0.35em')
    .style('font-family', 'Futura, sans-serif')
    .style('font-size', '12px')
    .style('fill', '#374151')
    .text(d => d.label)

  // Add hover effects
  categories.selectAll('rect')
    .on('mouseover', function(event, d) {
      d3.select(this)
        .transition()
        .duration(200)
        .attr('opacity', 0.8)
    })
    .on('mouseout', function(event, d) {
      d3.select(this)
        .transition()
        .duration(200)
        .attr('opacity', 1)
    })
}
</script>

<template>
  <div 
    ref="chartContainer"
    style="width: 100%; height: 100%; display: flex; justify-content: center; align-items: center;"
  ></div>
</template>

<style scoped>
/* D3 chart styling to match the minerva theme */
:deep(.x-axis line),
:deep(.y-axis line) {
  stroke: #d1d5db;
}

:deep(.x-axis path),
:deep(.y-axis path) {
  stroke: #d1d5db;
}

:deep(.x-axis text),
:deep(.y-axis text) {
  fill: #374151;
}

:deep(svg) {
  font-family: 'Futura', sans-serif;
}
</style>