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
    <div class="figure px-2 border rounded-lg" :class="props.class" >
      <slot name="figure" />
    </div>
  </ContentBase>
</template>

<style scoped>

.figure {
  grid-area: 2 / 3 / 8 / 16;   /* Swiss: expanded figure using more width with asymmetrical spacing */
  border: none !important;     /* Remove decorative borders */
  border-radius: 0 !important; /* Remove rounded corners */
  padding: 0 !important;
}

.text {
  grid-area: 8 / 3 / 11 / 16;  /* Swiss: expanded text below figure using more width */
  text-align: left;
  font-size: 0.875rem;
}


</style>