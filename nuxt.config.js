import highlightjs from "highlight.js";

const wrap = (code, lang) =>
  `<pre><code class="hljs ${lang}">${code}</code></pre>`;

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  image: {
    cloudinary: {
      baseURL: "https://res.cloudinary.com/kennyy/image/upload/"
    }
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Ekene Eze",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        hid: "stripe",
        src: "https://cdn.jsdelivr.net/npm/theme-change@2.0.2/index.js",
        defer: true
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/main.css", "highlight.js/styles/nord.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxt/image"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxt/content"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  content: {
    markdown: {
      prism: {
        theme: "prism-themes/themes/prism-night-owl.css"
      },
      highlighter(rawCode, lang) {
        if (!lang) {
          return wrap(highlightjs.highlightAuto(rawCode).value, lang);
        }
        return wrap(highlightjs.highlight(lang, rawCode).value, lang);
      }
    }
  }
};
