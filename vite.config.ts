import { defineConfig } from 'vite'

console.log('test');

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        bundle: "src/content/entry.ts",
        background: "src/background/background.ts"
      },
      output: {
        dir: ".",
        entryFileNames: "[name].js"
      }
    }
  }
})
