import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    hmr: {
      clientPort: 443, // Add this for ngrok
    },
    allowedHosts: [
      'localhost',
      'https://a600-2406-7400-75-e8a0-1138-7863-be66-26ac.ngrok-free.app',
      '.ngrok-free.app', // This wildcard covers all ngrok-free.app subdomains
    ]
  }
})