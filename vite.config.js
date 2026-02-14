import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Happy-Valentines-Day-/',
  build: {
    outDir: 'docs'  // Build to docs folder instead of dist
  }
})
