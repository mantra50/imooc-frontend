<script setup lang="ts">
import HintVue from './hint.vue'

const inputValue = ref('')

const onSearchHandler = (item: string) => {
  inputValue.value = item
}
</script>

<template>
  <div class="w-full">
    <m-search v-model="inputValue">
      <template #dropdown>
        <div>
          <HintVue
            :search-text="inputValue"
            @item-click="onSearchHandler"
          ></HintVue>
        </div>
      </template>
    </m-search>
  </div>
</template>

<style lang="scss" scoped></style>
