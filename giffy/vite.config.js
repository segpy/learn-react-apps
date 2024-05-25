/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    reporters: ['verbose', 'vitest-sonar-reporter'],
    setupFiles: 'src/test/setup.ts',
    outputFile: {
      'vitest-sonar-reporter': './sonar-report.xml'
    },
    coverage: {
      reporter: 'lcov',
      provider: 'v8'
    }
  }
})
