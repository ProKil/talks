<script setup lang="ts">
const props = defineProps({
  class: {
    type: String,
  },
  layoutClass: {
    type: String,
  },
})
</script>

<template>
  <div class="slidev-layout w-full h-full flex" :class="layoutClass">
    <div class="intro-left flex-1 p-8" :class="props.class">
      <slot name="left" />
    </div>
    <div class="intro-right flex-1 p-8" :class="props.class">
      <slot name="right" />
    </div>
  </div>
</template>

<style scoped>

.intro-left {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.intro-right {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

</style>