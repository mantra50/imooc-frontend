import type { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/',
    component: () => import('@/views/layout/index.vue'),
    children: [{ path: '', component: () => import('@/views/main/index.vue') }]
  }
] as RouteRecordRaw[]
