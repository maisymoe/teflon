import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import devtools from "solid-devtools/vite";
import uno from "@unocss/vite";

export default defineConfig({
    plugins: [devtools(), solid(), uno()],
    server: {
        port: 3000,
    },
    build: {
        target: "esnext",
    },
});
