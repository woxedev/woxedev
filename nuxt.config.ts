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

/*
<!-- Primary Meta Tags -->
<title>Yusuf Eren Demir - Full-stack Developer</title>
<meta name="title" content="Yusuf Eren Demir - Full-stack Developer" />
<meta name="description" content="Self taught full-stack developer based in Istanbul, Turkiye." />

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://metatags.io/" />
<meta property="og:title" content="Yusuf Eren Demir - Full-stack Developer" />
<meta property="og:description" content="Self taught full-stack developer based in Istanbul, Turkiye." />
<meta property="og:image" content="https://metatags.io/images/thumbnail.png" />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://metatags.io/" />
<meta property="twitter:title" content="Yusuf Eren Demir - Full-stack Developer" />
<meta property="twitter:description" content="Self taught full-stack developer based in Istanbul, Turkiye." />
<meta property="twitter:image" content="https://metatags.io/images/thumbnail.png" />

<!-- Meta Tags Generated with https://metatags.io -->

*/