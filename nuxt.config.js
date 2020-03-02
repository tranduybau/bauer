export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['element-ui/lib/theme-chalk/index.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/element-ui'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/firebase',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
  firebase: {
    config: {
      production: {
        apiKey: 'AIzaSyCQjHXG1yIHDkDI-NwuXKlxqHUzgOZY4eg',
        authDomain: 'bauerwebblog-4b784.firebaseapp.com',
        databaseURL: 'https://bauerwebblog-4b784.firebaseio.com',
        projectId: 'bauerwebblog-4b784',
        storageBucket: 'bauerwebblog-4b784.appspot.com',
        messagingSenderId: '364685114936',
        appId: '1:364685114936:web:233803a49fbb2b65df70cd',
        measurementId: 'G-NPP0WKF511',
      },
      development: {
        apiKey: 'AIzaSyCQjHXG1yIHDkDI-NwuXKlxqHUzgOZY4eg',
        authDomain: 'bauerwebblog-4b784.firebaseapp.com',
        databaseURL: 'https://bauerwebblog-4b784.firebaseio.com',
        projectId: 'bauerwebblog-4b784',
        storageBucket: 'bauerwebblog-4b784.appspot.com',
        messagingSenderId: '364685114936',
        appId: '1:364685114936:web:233803a49fbb2b65df70cd',
        measurementId: 'G-NPP0WKF511',
      },
    },
    customEnv: false,
  },
}
