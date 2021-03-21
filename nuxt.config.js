require('dotenv').config();
export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'designhouse',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script:[
      {src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.slim.min.js"},
      {src: "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/js/bootstrap.bundle.min.js"},
      {Src: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/js/all.min.js"}
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [ '@/assets/scss/main.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [ '~plugins/vform','~components/DesignComment',
'~components/_global',{ src: '~/plugins/gmaps', ssr: false } ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/router'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxt/content',
    '@nuxtjs/dotenv',
    '@nuxtjs/auth',
    '@nuxtjs/proxy',

  ],
  proxy: {
    '/api': {
      target: 'http://designhouse.test/',
      pathRewrite: {
        '^/api' : ''
        }
      },
      // changeOrigin: true
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'login', method: 'post', propertyName: 'token' },
          logout: { url: 'logout', method: 'post' },
          user: { url: 'me', method: 'get', propertyName: 'data' }
        },
        // tokenRequired: true,
        // tokenType: 'bearer',
      }
    }
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseUrl: process.env.API_URL,
    // proxy:true
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
