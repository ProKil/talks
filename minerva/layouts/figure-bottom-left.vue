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
    <div class="text font-serif w-full h-full flex align-center items-center justify-center" :class="props.class">
      <slot name="text" />
    </div>
    <div class="figure-left w-full h-full flex align-center items-center justify-center" :class="props.class">
      <slot name="figure-left" />
    </div>
    <div class="figure px-2 border rounded-lg" :class="props.class" >
      <slot name="figure" />
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

.figure {
  grid-area: 2 / 6 / 7 / 13;   /* Adjusted for new 11-row grid */
}

.text {
  grid-area: 7 / 3 / 9 / 13;   /* Adjusted for new 11-row grid */
}

.figure-left {
  grid-area: 2 / 3 / 7 / 6;    /* Adjusted for new 11-row grid */
}


</style>