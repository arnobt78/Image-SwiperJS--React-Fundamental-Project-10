/**
 * Vite config: React (JSX/TSX) and Tailwind v4.
 * Dev server and build output; no env or base path overrides by default.
 */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
