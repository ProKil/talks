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
  grid-area: 3 / 4 / 4 / 12;
}

.definition {
  grid-area: 4 / 4 / 9 / 12;
}


</style>