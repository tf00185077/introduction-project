// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@pinia/nuxt"],
  pinia: {
    storesDirs: ["./stores/**", "./custom-folder/stores/**"],
  },
  css: [
    '@/assets/css/main.scss',
  ],
  vite: {
    server: {
      watch: {
        usePolling: true,
        interval: 1000,
      },
    },
  },
  app: {
    pageTransition: { name: 'page', mode: 'default' }
  },
});
