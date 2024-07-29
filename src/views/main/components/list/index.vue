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
}
getPexels()
</script>

<template>
  <div>
    <m-waterfall
      :data="pexelsList"
      :column="5"
      node-key="id"
      :picture-pre-reading="false"
    >
      <template #default="{ item, width }">
        <ItemVue :data="item"></ItemVue>
      </template>
    </m-waterfall>
  </div>
</template>

<style lang="scss" scoped></style>
