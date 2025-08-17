<script setup lang="ts">
const props = defineProps({
  class: {
    type: String,
  },
  layoutClass: {
    type: String,
  },
})

import { onSlideEnter, onSlideLeave, useDarkMode, useIsSlideActive, useNav, useSlideContext } from '@slidev/client'

const { $slidev } = useSlideContext()
const { title, author, slidesTitle } = $slidev.configs
const { currentPage, currentLayout, currentSlideRoute } = useNav()
const { isDark } = useDarkMode()
const isActive = useIsSlideActive()
import TitleRenderer from '#slidev/title-renderer'
</script>

<template>
  <div class="slidev-layout header-footer w-full h-full" :class="layoutClass">
    <div class="vertical-page-title">
      {{ title }}
    </div>
    <div class="vertical-slide-title">
      <TitleRenderer />
    </div>
    <div class="term" :class="props.class">
      <slot name="term" />
    </div>
    <div class="definition px-2 font-serif" :class="props.class" >
      <slot name="explanation" />
    </div>
    <div class="col-bottom border-t border-primary text-primary" :class="props.class">
      <div class="flex-content">
        <div>
          Page {{ currentPage }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.term {
  grid-area: 3 / 4 / 4 / 12;
}

.definition {
  grid-area: 4 / 4 / 9 / 12;
}


</style>