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
    <div class="term w-full h-full flex align-center items-center justify-center" :class="props.class">
      <slot name="term" />
    </div>
    <div class="figure1 px-2 border rounded-lg" :class="props.class" >
      <slot name="figure1" />
    </div>
    <div class="figure2 px-2 border rounded-lg" :class="props.class" >
      <slot name="figure2" />
    </div>
    <div class="text1 font-serif" :class="props.class" >
      <slot name="text1" />
    </div>
    <div class="text2 font-serif" :class="props.class" >
      <slot name="text2" />
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
  grid-area: 2 / 4 / 3 / 12;
}

.figure1 {
  grid-area: 3 / 3 / 9 / 8;
}

.text1 {
  grid-area: 9 / 3 / 11 / 8;
}

.figure2 {
  grid-area: 3 / 8 / 9 / 13;
}

.text2 {
  grid-area: 9 / 8 / 11 / 13;
}

</style>