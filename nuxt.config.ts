// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    exposeConfig: true,
  },
  app: {
    head: {
      title: "Nuxt Prac",
      meta: [{ name: "description", content: "Everything about Nuxt 3" }],
      link: [{ rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons" }],
    },
  },
})
