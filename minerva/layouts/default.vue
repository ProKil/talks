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
    <div class="col-header border-b-2">
      <div class="flex-content font-serif text-3xl text-primary items-end">
        <div>
          {{ author }}
        </div>
        <div class="italic">
          {{ title }}
        </div>
      </div>
    </div>
    <div class="col-content" :class="props.class">
      <slot name="default" />
    </div>
    <div class="col-bottom border-t border-primary text-primary" :class="props.class">
      <div class="flex-content">
        <div>
          <TitleRenderer />
        </div>
        <div>
          Page {{ currentPage }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.col-content {
  grid-area: 3 / 2 / 9 / 14;   /* End at 7 instead of 6 */
}

</style>