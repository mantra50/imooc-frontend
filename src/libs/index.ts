import type { App } from 'vue'
import { defineAsyncComponent } from 'vue'

export default {
  install: (app: App<Element>) => {
    // 自动注册组件 组件名有 m- 前缀
    const components = import.meta.glob('./*/index.vue')
    for (const [fullPath, fn] of Object.entries(components)) {
      const componentName = `m-${fullPath.split('/')[1]}`
      app.component(
        componentName,
        defineAsyncComponent(fn as () => Promise<Component>)
      )
    }
  }
}
