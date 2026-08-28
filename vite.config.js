import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base = nome do repositório, necessário para GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: "/gri.d.maker/",
});
