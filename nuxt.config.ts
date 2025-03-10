// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["pruvious"],

  pruvious: {
    jwt: {
      secretKey:
        "fWKzzam9GdW3gtwGTQ7BBUmpCHgR7Nq9vQztdzVFaYy7cMwEKZlxq9204LMIYebi",
    },
  },
});
