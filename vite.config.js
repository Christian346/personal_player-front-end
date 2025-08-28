import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/personalplayer_front/", // Replace with your repo name
  plugins: [react()],
  server: {
    port: 3000, // Change the port number to 3000
  },
});
