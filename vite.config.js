import { resolve } from 'path'
import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins:[
    viteStaticCopy({
      targets: [
        {
          src: 'node_modules/pyodide/*.*',
          dest: './pyodide'
        },
      ]
    })
  ],
  base:"/hello-opencv-filter-pyodide/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        main_canny: resolve(__dirname, 'canny/index.html'),
      },
    },
  },
  resolve: {
    alias: {
        'node-fetch': 'isomorphic-fetch',
    },
  },
  optimizeDeps: { exclude: ["pyodide"] },
})