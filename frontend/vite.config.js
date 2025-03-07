import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'ЕНРІ-Трейдинг',
        short_name: 'ЕНРІ',
        description: 'ЕНРІ-Трейдинг — ваш партнер у торгівлі та логістиці сантехніки та опалення',
        theme_color: '#4267B2',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  // Настройка для статических файлов
  server: {
    fs: {
      strict: false,
    },
  },
  // Убедитесь, что base path настроен правильно
  base: '/',
});