import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Alias the package entry to the existing distributed ESM/CJS file
  // The package's package.json refers to a module file that isn't present
  // in the published package; point Vite at the package's actual file so
  // resolution succeeds.
  resolve: {
    alias: {
      'wasm-imagemagick': 'wasm-imagemagick/dist/src/index.js'
    }
  },
  plugins: [
    react(), 
    tailwindcss(),
  ],
})
