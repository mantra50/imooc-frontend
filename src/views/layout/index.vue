<script setup lang="ts">
import Floating from './components/floating.vue'
import HeaderVue from './components/header/index.vue'
import MainVue from './components/main.vue'
</script>

<template>
  <header-vue class="h-header"></header-vue>

  <main-vue class="h-main"> </main-vue>
  <floating></floating>
</template>

<style lang="scss" scoped></style>
