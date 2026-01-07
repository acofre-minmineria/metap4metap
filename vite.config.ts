import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/tienda-pokemon/', // Cambia 'tienda-pokemon' por el nombre exacto de tu repositorio
})
