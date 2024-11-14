import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import basicSsl from '@vitejs/plugin-basic-ssl'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Fonts from 'unplugin-fonts/vite'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  // mode: development | staging | production
  const environment = 'production'

  return {
    base: environment === 'production' ? '/vue-shopping-cart' : '/',
    mode: environment,
    logLevel: 'info',
    plugins: [
      vue(),
      basicSsl(),
      AutoImport({
        dts: 'auto-imports.d.ts',
        imports: ['vue', 'pinia', 'vue-router'],
        dirs: ['./src/composables', './src/stores']
      }),
      Components({
        dirs: ['src/components']
      }),
      Fonts({
        google: {
          families: [
            {
              name: 'Roboto',
              styles: 'wght@100;300;400;500;700;900'
            },
            {
              name: 'Unna',
              styles: 'wght@400;700'
            },
            {
              name: 'Verdana',
              styles: 'wght@100;300;400;500;700;900'
            }
          ]
        }
      })
    ],
    envPrefix: ['VITE_'],
    clearScreen: true,
    build: {
      target: 'esnext'
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
        '@images': fileURLToPath(
          new URL('./src/assets/images', import.meta.url)
        )
      }
    },
    optimizeDeps: {
      entries: ['./src/**/*.vue']
    },
    server: {
      cors: true,
      port: env.VITE_SERVER_PORT
    }
  }
})
