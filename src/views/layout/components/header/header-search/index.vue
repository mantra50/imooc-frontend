<script setup lang="ts">
const inputValue = ref('')
</script>

<template>
  <div class="w-full">
    <m-search v-model="inputValue">
      <template #dropdown>
        <div></div>
      </template>
    </m-search>
  </div>
</template>

<style lang="scss" scoped></style>
