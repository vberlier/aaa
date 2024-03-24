// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/image", "@vueuse/nuxt", "nuxt3-leaflet"],
  typescript: {
    strict: true,
  },
  vite: {
    server: {
      proxy: {
        "/_/": "http://localhost:8090",
        "/api/": "http://localhost:8090",
      },
    },
  },
})
