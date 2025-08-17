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
  grid-area: 2 / 2 / 12 / 9;   /* Swiss: asymmetrical, more white space */
}
.col-right {
  grid-area: 2 / 10 / 12 / 18;  /* Swiss: asymmetrical layout */
}

/* Swiss design: remove decorative elements, left-align content */
.col-left h1, .col-left h2, .col-left h3,
.col-right h1, .col-right h2, .col-right h3 {
  text-align: left;
  margin-bottom: 16px;
}

.col-left ul, .col-right ul {
  text-align: left;
  padding-left: 0;
  list-style: none;
}

.col-left li, .col-right li {
  margin-bottom: 8px;
  position: relative;
  padding-left: 16px;
}

.col-left li::before, .col-right li::before {
  content: "—";
  position: absolute;
  left: 0;
  color: #000000;
}

</style>