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
    uploads: {
      drive: {
        type: "s3",
        baseUrl:
          "https://43618a8104c6c47513ac3ef37665f8ac.eu.r2.cloudflarestorage.com/recipes-local",
        bucket: "recipes-local",
        endpoint: "recipes-local",
        key: "hqHMYFwQvj3rKPj_Q7Vdkfh2ssxTA9VGJSmuhN0_",
        region: "eu",
        secret: "secret-key",
      },
    },
  },
});
