<script setup lang="ts">
const props = defineProps({
  class: {
    type: String,
  },
  layoutClass: {
    type: String,
  },
});

import {
  onSlideEnter,
  onSlideLeave,
  useDarkMode,
  useIsSlideActive,
  useNav,
  useSlideContext,
} from "@slidev/client";

const { $slidev } = useSlideContext();
const { title, author, slidesTitle } = $slidev.configs;
const { currentPage, currentLayout, currentSlideRoute } = useNav();
const { isDark } = useDarkMode();
const isActive = useIsSlideActive();
import TitleRenderer from "#slidev/title-renderer";
</script>

<template>
  <div class="slidev-layout header-footer w-full h-full" :class="layoutClass">
    <!-- Vertical slide title on left margin -->
    <div class="vertical-slide-title">
      <TitleRenderer />
    </div>

    <!-- Main content area - to be filled by child layouts -->
    <slot />

    <!-- Footer with page number only -->
    <div
      class="col-bottom border-t border-muted text-primary"
      :class="props.class"
    >
      <div class="flex-content">
        <div>Page {{ currentPage }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Content layout styles are inherited from layout.css */
</style>
