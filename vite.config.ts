import path from 'node:path';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
    css: {
        postcss: {
            plugins: [tailwind(), autoprefixer()],
        },
    },
    plugins: [vue()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            'lib': path.resolve(__dirname, './src/lib'), // Alias para shadcn vue
        },
    },
    build: {
        lib: {
            entry: './src/index.ts',
            name: 'ui-library', // New name for your library
            fileName: (format) => `ui-library.${format}.js`,
        },
        rollupOptions: {
            external: ['vue', 'vue-router'],
            output: {
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
});
