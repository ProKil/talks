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
    <div class="text font-serif w-full h-full flex align-center items-center justify-center" :class="props.class">
      <slot name="text" />
    </div>
    <div class="figure-left w-full h-full flex align-center items-center justify-center" :class="props.class">
      <slot name="figure-left" />
    </div>
    <div class="figure px-2 border rounded-lg" :class="props.class" >
      <slot name="figure" />
    </div>
  </ContentBase>
</template>

<style scoped>

.figure {
  grid-area: 2 / 8 / 7 / 16;   /* Swiss: expanded right figure using more width */
  border: none !important;     /* Remove decorative borders */
  border-radius: 0 !important; /* Remove rounded corners */
  padding: 0 !important;
}

.text {
  grid-area: 7 / 3 / 9 / 16;   /* Swiss: expanded text spanning bottom using more width */
  text-align: left;
  font-size: 0.875rem;
}

.figure-left {
  grid-area: 2 / 3 / 7 / 8;    /* Swiss: expanded left figure using more width */
  text-align: left;
}


</style>