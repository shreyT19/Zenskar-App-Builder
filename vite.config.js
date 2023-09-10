/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";

import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh({
    
    exclude: [/\.stories\.(t|j)sx?$/, /node_modules/],
    // Only .jsx files
    include: '**/*.jsx'
  })],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setup.js",
    css: true,
  },
});
