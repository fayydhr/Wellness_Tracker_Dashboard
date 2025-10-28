import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '_createCaseFirst': 'lodash/startCase', 
    }
  },
  optimizeDeps: {
    include: ['lodash'],
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/],
    }
  }
});
