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
  grid-area: 2 / 2 / 11 / 8;   /* Swiss: expanded narrow left column using more width */
  text-align: left;
}
.col-right {
  grid-area: 2 / 8 / 11 / 17;  /* Swiss: expanded wider right column for asymmetrical layout */
  text-align: left;
}

</style>