import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "deault"
declare module "/Users/husainsalah/Projects/sg-nuxt3/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}