<script setup lang="ts">
import ItemVue from './item.vue'
import { getPexelsList } from '@/api/pexels'

const query = {
  page: 1,
  size: 20
}
const pexelsList = ref<PexelsDataType[]>([])
const getPexels = async () => {
  const { list } = await getPexelsList(query)
  pexelsList.value = list
  console.log(pexelsList.value)
}
getPexels()
</script>

<template>
  <div>
    <ItemVue v-for="item in pexelsList" :key="item.id" :data="item"></ItemVue>
  </div>
</template>

<style lang="scss" scoped></style>
