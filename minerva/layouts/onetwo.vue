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
    <div class="col-left" :class="props.class">
      <slot name="left" />
    </div>
    <div class="col-right" :class="props.class">
      <slot name="right" />
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
.header-footer {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(8, 1fr);
  gap: 20px;
}

.flex-content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.col-header {
  grid-area: 1 / 1 / 2 / 13;  /* Extended to full width */
}
.col-left {
  grid-area: 2 / 1 / 8 / 5;   /* End at 7 instead of 6 */
}
.col-right {
  grid-area: 2 / 5 / 8 / 13;  /* New center column */
}
.col-bottom {
  align-self: end;
  grid-area: 8 / 1 / 9 / 13;  /* Start at 7 instead of 8, end at 13 */
}
</style>