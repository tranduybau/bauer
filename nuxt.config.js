export default {
  mode: 'universal',
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
  loading: { color: '#fff' },
  css: ['element-ui/lib/theme-chalk/index.css'],
  plugins: ['@/plugins/element-ui'],
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
  ],
  modules: ['@nuxtjs/axios', '@nuxtjs/firebase'],
  axios: {},
  build: {
    transpile: [/^element-ui/],
    extend(config, ctx) {},
  },
  firebase: {
    config: {
      apiKey: 'AIzaSyApiiF3U_eR1SrxIvIRx6MTGfLmG7wO1-g',
      authDomain: 'bauer-web-blog.firebaseapp.com',
      databaseURL: 'https://bauer-web-blog.firebaseio.com',
      projectId: 'bauer-web-blog',
      storageBucket: 'bauer-web-blog.appspot.com',
      messagingSenderId: '192792860070',
      appId: '1:192792860070:web:ffd11794085dd7ff5d6b67',
      measurementId: 'G-3JW2QXRSEM',
    },
    services: {
      services: {
        auth: true,
        firestore: true,
        functions: true,
        storage: true,
        realtimeDb: true,
        messaging: true,
        performance: true,
        analytics: true,
        remoteConfig: true,
      },
    },
  },
}
