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
  grid-area: 2 / 3 / 8 / 13;   /* Adjusted for new 11-row grid */
}

.text {
  grid-area: 8 / 3 / 11 / 13;  /* Adjusted for new 11-row grid */
}


</style>