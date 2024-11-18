<template>
    <svg
      :width="size"
      :height="size"
      viewBox="0 0 300 300"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      :style="{ display: 'inline-block' }"
    >
      <path
        d="M150,108.33c0,46.03,55.96,83.33,125,83.33V25c-69.04,0-125,37.31-125,83.33Z"
        :fill="color"
        stroke-width="0"
      />
      <path
        d="M150,191.67c0-46.03-55.96-83.33-125-83.33v166.67c69.04,0,125-37.31,125-83.33Z"
        :fill="color"
        stroke-width="0"
      />
      <path
        d="M150,25h-65c-33.14,0-60,26.86-60,60v23.33c69.04,0,125-37.31,125-83.33Z"
        :fill="color"
        stroke-width="0"
      />
      <path
        d="M150,275h65c33.14,0,60-26.86,60-60v-23.33c-69.04,0-125,37.31-125,83.33Z"
        :fill="color"
        stroke-width="0"
      />
    </svg>
  </template>
  
  <script>
  export default {
    name: 'CurvedLogo',
    props: {
      // Size in pixels
      size: {
        type: [Number, String],
        default: 24
      },
      // Color of the icon
      color: {
        type: String,
        default: '#000000'
      }
    }
  }
  </script>