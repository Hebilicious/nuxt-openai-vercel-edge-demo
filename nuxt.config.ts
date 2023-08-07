// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  nitro: { preset: "vercel-edge", minify: false },
  devtools: { enabled: true },
  runtimeConfig: {
    openaiApiKey: ""
  }
})
