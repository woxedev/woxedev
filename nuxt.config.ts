// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content"],
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Yusuf Eren Demir - Full-stack Developer",
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap",
          rel: "stylesheet",
        },
      ],
      script: [
        {
          innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WVZ77JSH');`
        }
      ],
      meta: [
        {
          name: "title",
          content: "Yusuf Eren Demir - Full-stack Developer"
        },
        {
          name: "theme-color",
          content: "#0A0A0A"
        },
        {
          name: "robots",
          content: "index"
        },
        {
          name: "author",
          content: "Yusuf Eren Demir"
        },
        {
          name: "description",
          content: "Self taught full-stack developer based in Istanbul, Turkiye."
        },
        {
          property: "og:type",
          content: "website"
        },
        {
          property: "og:url",
          content: "https://woxe.dev"
        },
        {
          property: "og:title",
          content: "Yusuf Eren Demir - Full-stack Developer"
        },
        {
          property: "og:description",
          content: "Self taught full-stack developer based in Istanbul, Turkiye."
        },
        {
          property: "og:image",
          content: "/images/thumbnail.png"
        },
        {
          property: "twitter:card",
          content: "summary_large_image"
        },
        {
          property: "twitter:url",
          content: "https://woxe.dev"
        },
        {
          property: "twitter:title",
          content: "Yusuf Eren Demir - Full-stack Developer"
        },
        {
          property: "twitter:description",
          content: "Self taught full-stack developer based in Istanbul, Turkiye."
        },
        {
          property: "twitter:image",
          content: "/images/thumbnail.png"
        },
      ]
    }
  },
  content: {
    highlight: {
      langs: ["javascript", "typescript", "json", "css", "html", "vue", "jsx", "tsx", "bash"],
      theme: "snazzy-light"
    }
  },
  tailwindcss: {
    configPath: "./taiwlind.config.js"
  },
  build: {
    transpile: ['vue-sonner']
  }
})