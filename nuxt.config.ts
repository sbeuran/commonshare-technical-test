// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  modules: [
    "nuxt-icon-tw",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    '@pinia-plugin-persistedstate/nuxt',
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          "Plus+Jakarta+Sans": true,
        },
      },
    ],
  ],
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
});