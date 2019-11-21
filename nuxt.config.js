export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon-tree.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Quicksand:400,500,600,700&display=swap&subset=vietnamese' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: '~/components/loading.vue', // { color: '#6610f2' },
  /*
   ** Global CSS
   */
  css: ['@/assets/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/font-awesome' },
    { src: '~/plugins/localStorage.js', ssr: false },
    { src: '~/plugins/cookie-storage.js' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@nuxtjs/style-resources',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  bootstrapVue: {
    config: {
      // Custom config options here
    }
  },
  styleResources: {
    // your settings here
    sass: [],
    scss: [
      './assets/*.scss',
    ],
    less: [],
    stylus: []
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend (config, ctx) {}
  },
  /*
   ** Setting Server runtime
   */
  server: {
    port: 7002
  }
};
