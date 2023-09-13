// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/devtools',
    '@nuxtjs/tailwindcss',
    'unplugin-vue-components/webpack'
//    '@nuxt/naive-ui',
//    '@ant-design-vue/nuxt'
  ],
  
  runtimeConfig: {
        public: {
            wordpressUrl: 'http://localhost:8888/ScottGrooves/graphql'
        }
    }
})