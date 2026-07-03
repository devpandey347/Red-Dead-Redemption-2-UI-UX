import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/Red-Dead-Redemption-2-UI-UX/',
  plugins: [
    tailwindcss(),
    react(),
  ],
});