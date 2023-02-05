import { defineConfig } from 'vite'

console.log('test');

export default defineConfig({
  build: {
    rollupOptions: {
      input: "src/content.ts",
      output: {
        dir: ".",
        entryFileNames: "bundle.js"
      }
    }
  }
})
