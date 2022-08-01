// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        form: resolve(__dirname, 'pages/form/form.html'),
        creativeCard: resolve(__dirname, 'pages/creative-card/card.html')
      }
    }
  }
})
