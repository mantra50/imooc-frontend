import type { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/',
    component: () => import('@/views/layout/index.vue')
  }
] as RouteRecordRaw[]
