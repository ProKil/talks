<script setup lang="ts">
const props = defineProps({
  class: {
    type: String,
  },
  layoutClass: {
    type: String,
  },
})

import ContentBase from './content-base.vue'
</script>

<template>
  <ContentBase :class="props.class" :layoutClass="layoutClass">
    <div class="chart-title" :class="props.class">
      <slot name="title" />
    </div>
    <div class="chart-content" :class="props.class">
      <slot name="chart" />
    </div>
    <div class="chart-description" :class="props.class">
      <slot name="description" />
    </div>
  </ContentBase>
</template>

<style scoped>
.chart-title {
  grid-area: 2 / 2 / 4 / 18;
  display: flex;
  align-items: center;
  justify-content: center;
}

.chart-content {
  grid-area: 4 / 2 / 11 / 18;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin: 0 20px;
}

.chart-description {
  grid-area: 11 / 3 / 12 / 17;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.chart-title h1, .chart-title h2 {
  text-align: center;
  margin: 0;
  font-weight: bold;
}

.chart-description p {
  margin: 0;
  font-style: italic;
  color: #666;
}
</style>