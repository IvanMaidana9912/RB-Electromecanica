import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import copy from 'rollup-plugin-copy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    copy({
      targets: [
        { src: 'src/*.html', dest: 'dist' } // Copia todos los archivos HTML en la carpeta 'dist'
      ],
      flatten: false
    })
  ],
  server: {
    port: 3010
  }
});