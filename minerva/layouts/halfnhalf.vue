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
    <div class="col-left" :class="props.class">
      <slot name="left" />
    </div>
    <div class="col-right" :class="props.class">
      <slot name="right" />
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

.col-left {
  grid-area: 2 / 2 / 11 / 8;   /* Adjusted for new grid */
}
.col-right {
  grid-area: 2 / 8 / 11 / 14;  /* Adjusted for new grid */
}

</style>