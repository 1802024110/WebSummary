import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue';
import monkey, { cdn } from 'vite-plugin-monkey';
import { VarletUIResolver } from 'unplugin-vue-components/resolvers'
import components from 'unplugin-vue-components/vite'
import autoImport from 'unplugin-auto-import/vite'
import { visualizer } from "rollup-plugin-visualizer";
// https://vitejs.dev/config/
export default defineConfig({
  server:{
    open:true
  },
  plugins: [
    vue(),
    monkey({
      entry: 'src/main.ts',
      userscript: {
        icon: 'https://jsdelivr.nodream.cf/gh/1802024110/GitHub_Oss@main/img/博客插件github_issue总结.png',
        namespace: '007666.xyz',
        match: ['*://github.com/*/*/issues']
      },
      build: {
        externalGlobals: {
          vue: cdn.jsdelivr('Vue', 'dist/vue.global.prod.js'),
        },
      },
      server:{
        open:true,
        mountGmApi: true
      }
    }),
    components({
      resolvers: [VarletUIResolver()]
    }),
    autoImport({
      resolvers: [VarletUIResolver({ autoImport: true })]
    }),
    visualizer()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});
