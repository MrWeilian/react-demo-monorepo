import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    /*alias: [
      {
        find: '@my/react-bundle-context',
        replacement: path.resolve('../react-bundle-context/index.ts'),
      },
      {
        find: '@my/react-bundle',
        replacement: path.resolve('../react-bundle/index.ts'),
      }
    ]*/
  }
})
