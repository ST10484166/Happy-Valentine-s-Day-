import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Happy-Valentine-s-Day-/',
  build: {
    outDir: 'docs'  // Build to docs folder instead of dist
  }
})
