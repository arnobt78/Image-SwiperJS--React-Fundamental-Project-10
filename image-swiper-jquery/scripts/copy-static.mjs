/**
 * Build script for static deployment (e.g. Vercel).
 * Copies entry files and public assets into dist/; no bundling or API.
 * Run via: npm run build (or vercel-build).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const dist = path.join(root, "dist");

if (!fs.existsSync(dist)) fs.mkdirSync(dist, { recursive: true });

// Copy main entry files (single page + scripts + styles)
["index.html", "script.js", "styles.css"].forEach((f) => {
  fs.copyFileSync(path.join(root, f), path.join(dist, f));
});

/** Recursively copy a directory (used for public/images, favicon, etc.) */
function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const e of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, e.name);
    const d = path.join(dest, e.name);
    if (e.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}

copyDir(path.join(root, "public"), path.join(dist, "public"));
