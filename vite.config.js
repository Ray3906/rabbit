import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'


// vite.config.ts Element Plus 自动按需导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

//icon字符导入
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),

            // ...
            AutoImport({
              resolvers: [
                ElementPlusResolver(),
                IconsResolver({
                  prefix: 'Icon',
                }),
              ],
              
            }),

            Components({
              resolvers: [
                IconsResolver({
                  enabledCollections: ['ep'],
                }),
                //sass样式导入
                ElementPlusResolver({importStyle: "sass"}),
                Icons({
                  autoInstall: true,
                }),
              ],
            }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: 
        `@use "@/styles/element/index.scss" as *;
         @use "@/styles/var.scss" as *;`
      },
    },
  },



})
