// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["./app/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  runtimeConfig: {
    public: {
      openExchangeAppId: process.env.NUXT_OPENEXCHANGE_APP_ID,
      exchangerateApiKey: process.env.NUXT_EXCHANGE_RATE_API_KEY,
    },
  },
});
