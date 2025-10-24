import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
    open: true,
    // Enable SPA fallback for client-side routing
    strictPort: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  },
  // Handle SPA routing - serve index.html for all routes
  appType: 'spa'
});

