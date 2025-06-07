import {fileURLToPath, URL} from "node:url";
import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import qiankun from "vite-plugin-qiankun";
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'

export default defineConfig({
    // 开发或生产环境服务的公共基础路径
    base: "/",
    // 将目录设定为静态资源服务目录，可设置 false 关闭
    publicDir: "public",
    // 存储缓存文件的目录。此目录下会存储预打包的依赖项或 vite 生成的某些缓存文件，使用缓存可以提高性能。默认为 .vite
    cacheDir: ".vite",
    // 定义全局常量
    define: {
        __APP_VERSION__: JSON.stringify("v1.0.0"),
        __window_API__: "window", // 此 window 为 window 对象
    },
    // 解析选项，路径别名替换、导入时想要省略的扩展名列表。
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
            "~": fileURLToPath(new URL("./src/assets", import.meta.url)),
        },
        extensions: [".mjs", ".js", ".mts", ".ts", ".jsx", ".tsx", ".json", ".vue"],
    },
    // 插件数组
    plugins: [
        vue(),
        qiankun("vue-study-demo", {
            useDevMode: true,
        }),
        // ...
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver({importStyle: "sass"})],
        }),
    ],
    // 开发选项：服务器主机、端口、端口被占用直接退出、自动打开浏览器、代理规则、配置 cors 默认true、定义调试阶段生成资源的 origin、配置headers等。
    server: {
        host: "0.0.0.0",
        port: 3002,
        strictPort: true,
        open: true,
        proxy: {
            "/api": {
                target: "http://jsonplaceholder.typicode.com",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ""),
            },
        },
        cors: true,
        origin: "http://localhost:3002",
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
    },
    // 构建选项：输出目录、存放静态资源的目录、静态资源内联限制、CSS代码拆分、是否生成sourcemap文件、删除console和debugger、rollup打包规则配置等
    build: {
        outDir: "dist",
        assetsDir: "assets",
        assetsInlineLimit: 4096, // 小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项。
        cssCodeSplit: true,
        sourcemap: false,
        terserOptions: {
            compress: {
                drop_console: true, // 生产环境下去除console
                drop_debugger: true, // 生产环境下去除debugger
            },
        },
        rollupOptions: {
            input: {
                main: fileURLToPath(new URL("index.html", import.meta.url)),
            },
            output: {
                manualChunks: {
                    vue: ["vue"],
                },
            },
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "@/styles/element/index.scss" as *;`,
            },
        },
    },
});

