// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxt/ui'],
  css:['~/assets/css/main.css'],
  colorMode: {
    preference: 'system',     // default: 'system' | 'light' | 'dark'
    fallback: 'light',        // fallback jika tidak ada system preference
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',          // class prefix (default: '')
    classSuffix: '',          // class suffix (default: '')
    storageKey: 'nuxt-color-mode', // localStorage key
  },

})
