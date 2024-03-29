// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@pinia/nuxt"],
  pinia: {
    storesDirs: ["./stores/**", "./custom-folder/stores/**"],
  },
  // nitro: {
  //   devProxy: {
  //     '/api': {
  //       target: 'http://localhost',
  //       changeOrigin: true
  //     }
  //   }
  // },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/css/main.scss" as *;',
        },
      },
    },
    server: {
      proxy: {
        // "/api": {
        //   target: "http://localhost:80/server",
        //   changeOrigin: true,
          // rewrite: (path) => path.replace(/^\/api/, ""),
        // },
      },
    },
  },
  // nitro: {
  //   devProxy: {
  //     "/api": {
  //       target: "http://localhost/server/api",
  //       changeOrigin: true,
  //     },
  //   },
  // },
});
