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
    <div class="definition border rounded-lg px-2 font-serif" :class="props.class" >
      <slot name="definition" />
    </div>
  </ContentBase>
</template>

<style scoped>

.term {
  grid-area: 2 / 2 / 7 / 17;  /* Larger area for big typography */
  position: relative;
  z-index: 1;
}

.definition {
  grid-area: 2 / 2 / 11 / 17;  /* Overlaps with term area */
  border-radius: 0 !important;
  border: 1px solid var(--border);
  padding: 24px;
  position: relative;
  z-index: 2;
}

/* Very large word styling */
.term h2 {
  font-size: 8rem !important;
  font-weight: 900 !important;
  line-height: 0.7 !important;
  margin: 0 !important;
  color: var(--muted);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  letter-spacing: -0.02em;
  opacity: 0.3;
  text-transform: uppercase;
}

/* Small definition text that wraps */
.definition {
  padding-top: 140px !important; /* Space for the large word */
  padding-left: 24px !important;
  padding-right: 24px !important;
  padding-bottom: 24px !important;
}

.definition .flex {
  height: auto !important;
}

.definition h3 {
  font-size: 1.1rem !important;
  font-weight: bold !important;
  margin-bottom: 12px !important;
  color: var(--primary);
  z-index: 3;
  position: relative;
}

.definition .italic {
  font-style: italic !important;
  font-size: 0.95rem !important;
  line-height: 1.6 !important;
  color: var(--primary);
  z-index: 3;
  position: relative;
}

.definition div:last-child {
  font-size: 0.85rem !important;
  margin-top: 16px !important;
  text-align: right !important;
  color: var(--primary);
  z-index: 3;
  position: relative;
}

/* Dark mode adjustments */
:root.dark .term h2 {
  color: var(--muted);
}

</style>