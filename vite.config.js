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
      '1be3-2406-7400-75-4cb9-c0-7084-5d67-fc83.ngrok-free.app',
      '.ngrok-free.app', // This wildcard covers all ngrok-free.app subdomains
    ]
  }
})