// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Omar Rezk',
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css',
          integrity: 'sha384-LN+7fdVzj6u52u30Kp6M/trliBMCMKTyK833zpbD+pXdCLuTusPj697FH4R/5mcr',
          crossorigin: 'anonymous'
        },
        {
          rel: 'stylesheet',
          type: 'text/css',
          href: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css'
        }
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js',
          integrity: 'sha384-ndDqU0Gzau9qJ1lfW4pNLlhNTkCfHzAVBReH9diLvGRem5+R9g2FzA8ZGN954O5Q',
          crossorigin: 'anonymous'
        }
      ]
    }
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
})
