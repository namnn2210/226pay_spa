// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE || 'http://localhost:3000/api'
    }
  },
  css: [
    'bootstrap/dist/css/bootstrap.css'
  ],
  build: {
    transpile: ['bootstrap'],
  },
  hooks: {
    'vite:extendConfig': (config) => {
      config.plugins?.push({
        name: 'load-bootstrap-js',
        configureServer(server) {
          server.middlewares.use('/', (req, res, next) => {
            if (/bootstrap\.js$/.test(req.url || '')) {
              res.setHeader('Cache-Control', 'no-store');
            }
            next();
          });
        }
      });
    }
  },
  modules: [
    '@pinia/nuxt'
  ],
  plugins: [
    '@/plugins/bootstrap.js',
  ]
})
