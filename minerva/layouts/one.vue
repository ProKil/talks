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
    <div class="col-content" :class="props.class">
      <slot name="default" />
    </div>
  </ContentBase>
</template>

<style scoped>

.col-content {
  grid-area: 2 / 2 / 11 / 17;   /* Swiss: single column using most of content area */
  text-align: left;
}

</style>