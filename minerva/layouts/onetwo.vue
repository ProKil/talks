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
    <div class="col-left" :class="props.class">
      <slot name="left" />
    </div>
    <div class="col-right" :class="props.class">
      <slot name="right" />
    </div>
  </ContentBase>
</template>

<style scoped>


.col-left {
  grid-area: 2 / 2 / 11 / 6;   /* Adjusted for new 11-row grid */
}
.col-right {
  grid-area: 2 / 6 / 11 / 14;  /* Adjusted for new 11-row grid */
}

</style>