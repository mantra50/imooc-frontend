<script setup lang="ts">
import headerTheme from './header-theme.vue'
import headerMy from './header-my.vue'
import headerSearch from './header-search/index.vue'

const router = useRouter()
const onHomeClick = () => {
  router.push('/')
}
</script>

<template>
  <div class="w-screen bg-white border-b border-b-zinc-100 px-2 py-1">
    <div class="flex items-center">
      <img
        class="h-3 cursor-pointer mx-2"
        src="@/assets/images/unsplash.png"
        @click="onHomeClick"
      />
      <header-search class="mr-1"></header-search>
      <header-theme class="mr-1"></header-theme>
      <header-my class="mr-1"></header-my>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
