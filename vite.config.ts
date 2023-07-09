import {defineConfig} from 'vitest/config';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    test: {
        environment: "jsdom"
    },
    build: {
        lib: {
            entry: './src/index.ts',
            name: 'NumberFormat',
            fileName: (format) => `numberformat-${format}.js`,
        },
        rollupOptions: {
            external: ['vue', 'numeral'],
            output: {
                globals: {
                    vue: 'Vue'
                }
            }
        }
    }
});