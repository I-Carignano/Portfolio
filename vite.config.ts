import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages sirve el sitio en /<nombre-del-repo>/
export default defineConfig({
  base: '/Portfolio/',
  plugins: [react(), tailwindcss()],
})
