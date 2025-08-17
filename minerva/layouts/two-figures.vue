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
    <div class="text1 font-serif" :class="props.class" >
      <slot name="text1" />
    </div>
    <div class="text2 font-serif" :class="props.class" >
      <slot name="text2" />
    </div>
  </ContentBase>
</template>

<style scoped>

.term {
  grid-area: 2 / 3 / 3 / 15;   /* Swiss: wider term area with asymmetrical spacing */
  text-align: left;
}

.figure1 {
  grid-area: 3 / 2 / 9 / 9;    /* Swiss: expanded left figure using more width */
  border: none !important;     /* Remove decorative borders */
  border-radius: 0 !important; /* Remove rounded corners */
  padding: 0 !important;
}

.text1 {
  grid-area: 9 / 2 / 11 / 9;   /* Swiss: text below left figure, wider */
  text-align: left;
  font-size: 0.875rem;
}

.figure2 {
  grid-area: 3 / 9 / 9 / 17;   /* Swiss: expanded right figure using more width */
  border: none !important;     /* Remove decorative borders */
  border-radius: 0 !important; /* Remove rounded corners */
  padding: 0 !important;
}

.text2 {
  grid-area: 9 / 9 / 11 / 17;  /* Swiss: text below right figure, wider */
  text-align: left;
  font-size: 0.875rem;
}

</style>