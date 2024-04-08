// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@vueuse/nuxt"],
  pinia: {
    storesDirs: ["./stores/**", "./custom-folder/stores/**"],
  },
  css: ["@/assets/css/main.scss"],
  // plugins:["@/plugins/websocket.client.ts"],
  vite: {
    server: {
      watch: {
        usePolling: true,
        interval: 1000,
      },
    },
  },
  nitro: {
    experimental: {
      websocket: true,
    },
  },
  app: {
    pageTransition: { name: "page", mode: "default" },
  },
});
