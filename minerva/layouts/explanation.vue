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
    <div class="term" :class="props.class">
      <slot name="term" />
    </div>
    <div class="definition px-2 font-serif" :class="props.class" >
      <slot name="explanation" />
    </div>
  </ContentBase>
</template>

<style scoped>

.term {
  grid-area: 2 / 2 / 4 / 17;   /* Swiss: full width like definition layout */
  text-align: left;
}

.definition {
  grid-area: 4 / 2 / 11 / 15;   /* Swiss: wider, asymmetrical */
  text-align: left;
  padding: 0 !important;      /* Remove padding for clean Swiss design */
}


</style>