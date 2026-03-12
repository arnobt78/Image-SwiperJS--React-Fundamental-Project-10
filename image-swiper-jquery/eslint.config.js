/**
 * ESLint flat config for this project.
 * Lints .js files only; jQuery and Swiper are globals (loaded via script tags in index.html).
 */
import js from "@eslint/js";
import globals from "globals";

export default [
  { ignores: ["node_modules", "public", "eslint.config.js"] },
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "script",
      globals: {
        ...globals.browser,
        $: "readonly",
        jQuery: "readonly",
        Swiper: "readonly",
      },
    },
    rules: {
      "no-unused-vars": ["warn", { varsIgnorePattern: "^swiper$" }],
    },
  },
];
