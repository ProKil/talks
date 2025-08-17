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
    <div class="term w-full h-full flex align-center items-center justify-center" :class="props.class">
      <slot name="term" />
    </div>
    <div class="figure1 px-2 border rounded-lg" :class="props.class" >
      <slot name="figure1" />
    </div>
    <div class="figure2 px-2 border rounded-lg" :class="props.class" >
      <slot name="figure2" />
    </div>
    <div class="figure3 px-2 border rounded-lg" :class="props.class" >
      <slot name="figure3" />
    </div>
    <div class="text1 font-serif" :class="props.class" >
      <slot name="text1" />
    </div>
    <div class="text2 font-serif" :class="props.class" >
      <slot name="text2" />
    </div>
    <div class="text3 font-serif" :class="props.class" >
      <slot name="text3" />
    </div>
  </ContentBase>
</template>

<style scoped>

.term {
  grid-area: 3 / 4 / 4 / 12;
}

.figure1 {
  grid-area: 4 / 2 / 8 / 6;
}

.text1 {
  grid-area: 8 / 2 / 11 / 6;
}

.figure2 {
  grid-area: 4 / 6 / 8 / 10;
}

.text2 {
  grid-area: 8 / 6 / 11 / 10;
}

.figure3 {
  grid-area: 4 / 10 / 8 / 14;
}

.text3 {
  grid-area: 8 / 10 / 11 / 14;
}

</style>