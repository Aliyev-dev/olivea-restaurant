import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base is set for GitHub Pages project deployment
export default defineConfig({
  plugins: [react()],
  base: '/olivea-restaurant/',
})
