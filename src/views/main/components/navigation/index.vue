<script setup lang="ts">
import { isMobileTerminal } from '@/utils/flexibel'
import MobileNavigation from './mobile/index.vue'
import PcNavigation from './pc/index.vue'
</script>

<template>
  <MobileNavigation v-if="isMobileTerminal" />
  <PcNavigation v-else />
</template>

<style lang="scss" scoped></style>
