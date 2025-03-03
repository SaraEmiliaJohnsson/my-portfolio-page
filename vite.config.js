import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sass from "sass";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgr()],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass
      }
    }
  }
});
