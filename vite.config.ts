import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
// 从 url 模块导入 fileURLToPath
import {fileURLToPath} from 'url';
// https://vite.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            //用 @ 作为 src 目录的别名
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
