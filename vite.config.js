import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Repo bernama Puputlestarii.github.io, jadi base harus '/'
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
})