import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import path from 'node:path'
const basePath = process.env.VITE_BASE_PATH || '/';



const svgIconsPath = path.resolve(process.cwd(), 'src/shared/assets/img/svg'); 

// https://vite.dev/config/
export default defineConfig({
  
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
      routesDirectory: 'src/app/routes',
    }),
    react(),
  createSvgIconsPlugin({
      // Указываем папку, где лежат ваши исходные SVG-файлы
      iconDirs: [svgIconsPath],
      
      // Имя спрайта (по умолчанию symbol/svg/index.html)
      symbolId: 'icon-[dir]-[name]',
      
      // Позволяет генерировать index.html для предпросмотра спрайтов (только в dev)
      inject: 'body-last', 
      
      // Настройка для режима production:
      customDomId: '__svg__icons__dom__',
    }),
  
  ],
    
    base: basePath,
    resolve: {
    alias: {
      '@shared': path.resolve(__dirname, 'src/shared'),
      '@app': path.resolve(__dirname, 'src/app'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@widgets': path.resolve(__dirname, 'src/widgets'),
      // добавьте другие алиасы по необходимости
    },
  },

})
