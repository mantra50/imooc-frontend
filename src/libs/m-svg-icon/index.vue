<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  fill: {
    type: String
  },
  fillClass: {
    type: String
  }
})

const symbolId = computed(() => `#icon-${props.name}`)
</script>

<template>
  <svg aria-hidden="true">
    <use :fill="fill" :class="fillClass" :xlink:href="symbolId" />
  </svg>
</template>

<style lang="scss" scoped></style>
