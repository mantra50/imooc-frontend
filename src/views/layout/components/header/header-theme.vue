<script setup lang="ts">
import { ThemeType } from '@/constants'

const themeArr = [
  { id: 0, type: ThemeType.THEME_LIGHT, icon: 'theme-light', name: '极简白' },
  { id: 1, type: ThemeType.THEME_DARK, icon: 'theme-dark', name: '极夜黑' },
  {
    id: 2,
    type: ThemeType.THEME_SYSTEM,
    icon: 'theme-system',
    name: '跟随系统'
  }
]
</script>

<template>
  <m-popover placement="bottom-left">
    <template #reference>
      <m-svg-icon
        name="theme-light"
        class="w-4 h-4 p-1 cursor-pointer rounded-sm duration-200 hover:bg-zinc-100/60 outline-none"
      ></m-svg-icon>
    </template>
    <div class="w-[110px] overflow-hidden">
      <div
        class="hover:bg-zinc-100/60 flex items-center p-1 rounded cursor-pointer duration-200"
        v-for="item in themeArr"
        :key="item.id"
      >
        <m-svg-icon
          :name="item.icon"
          class="w-1.5 h-1.5 mr-1"
          fill-class="fill-zinc-900"
        ></m-svg-icon>
        <span class="text-zinc-800 text-sm">{{ item.name }}</span>
      </div>
    </div>
  </m-popover>
</template>

<style lang="scss" scoped></style>
