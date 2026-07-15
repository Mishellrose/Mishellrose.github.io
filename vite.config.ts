import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// User site: https://mishellrose.github.io  (repo: Mishellrose.github.io)
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
})