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
    // uploads: {
    //   drive: {
    //     type: "s3",
    //     baseUrl: process.env.SS3_BASE_URL ?? "",
    //     bucket: process.env.SS3_BUCKET_NAME ?? "",
    //     endpoint: process.env.SS3_ENDPOINT ?? "",
    //     key: process.env.SS3_ACCESS_KEY ?? "",
    //     region: process.env.SS3_REGION ?? "",
    //     secret: process.env.SS3_SECRET_KEY ?? "",
    //     forcePathStyle: true,
    //   },
    // },
    pageCache: false,
  },
});
