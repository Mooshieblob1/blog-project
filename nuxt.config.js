export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'blog-project',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/tailwind.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      prism: {
        theme: false, // Disable the default theme
      },
    },
    nestedProperties: ['author.name'],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Generate configuration
  generate: {
    async routes() {
      const { $content } = require('@nuxt/content')
      const files = await $content({ deep: true })
        .only(['slug', 'path'])
        .fetch()
      return files.map((file) => ({
        route: file.path === '/index' ? '/' : file.path,
        payload: file,
      }))
    },
    fallback: true,
  },

  // Router configuration
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'post-slug',
        path: '/posts/:slug',
        component: resolve(__dirname, 'pages/posts/_slug.vue'),
      })
    },
  },

  // Tailwind CSS configuration
  tailwindcss: {
    jit: true,
    exposeConfig: true,
    config: {
      darkMode: 'class',
    },
  },
}
