import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePluginFonts } from 'vite-plugin-fonts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePluginFonts({
      google: {
        families: [
          { name: 'Lato', styles: 'wght@300;400;700' },
          { name: 'Roboto', styles: 'wght@300;400;700' },
        ],
      },
    }),
  ],
});
