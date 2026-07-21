import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig(({ command }) => ({
  // GitHub Pages publishes this repository at:
  // https://saine936.github.io/HappyRoll/
  base: command === "build" ? "/HappyRoll/" : "/",

  plugins: [react()],

  server: {
    host: "::",
    port: 3000,
    cors: true,
    headers: {
      "Cross-Origin-Embedder-Policy": "credentialless",
    },
    allowedHosts: [
      ".app-preview.com",
      ".app-preview.io",
    ],
  },

  resolve: {
    extensions: [".jsx", ".js", ".json"],
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },

  build: {
    rollupOptions: {
      external: [
        "@babel/parser",
        "@babel/traverse",
        "@babel/generator",
        "@babel/types",
      ],
    },
  },
}));