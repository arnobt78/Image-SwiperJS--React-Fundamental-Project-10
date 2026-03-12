# Shopify Style Image Swiper - JavaScript, jQuery, Swiper.js, Custom CSS Project Tutorial Fundamental Project 10

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![jQuery](https://img.shields.io/badge/jQuery-3.6.0-0769AD?logo=jquery)](https://jquery.com/)
[![Swiper](https://img.shields.io/badge/Swiper.js-8+-0078D4)](https://swiperjs.com/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

A **Shopify-style image swiper** built with plain **JavaScript**, **jQuery**, and **Swiper.js**. This project is a tutorial-style, frontend-fundamentals demo: a single-page product image gallery with touch-enabled sliding, a nav bar with sliding text and centered arrows/dots, and no backend. Ideal for learning DOM manipulation, slider UX, and static site structure.

- **Live demo:** [https://image-swiperjs-jquery.vercel.app/](https://image-swiperjs-jquery.vercel.app/)

![Screenshot 2026-03-12 at 15 17 29](https://github.com/user-attachments/assets/f9fb0390-4a41-4a43-b501-cee5d805504b)

## Project overview

This repo contains a **static, client-side only** image slider. Each slide shows a product image and optional overlay text; a bar below the slider shows the active slide’s title/subtitle and slides in sync with the images. Navigation uses previous/next arrows and pagination dots (centered in the bar, Shopify-style). The UI is responsive, uses no build step for basic use, and can be served from any static host or opened directly from the file system.

---

## Features

| Feature                  | Description                                                                                     |
| ------------------------ | ----------------------------------------------------------------------------------------------- |
| **Responsive layout**    | Works on desktop and mobile; page and slider are centered and scale with viewport.              |
| **Swiper.js slider**     | Touch/swipe support, smooth transitions, and configurable navigation and pagination.            |
| **jQuery integration**   | DOM setup and moving nav elements (arrows + dots) into the pagination container on init.        |
| **Sliding nav bar text** | Product title/subtitle under the slider slide horizontally in sync with the active image.       |
| **Clickable slides**     | Each slide can trigger an action (e.g. set `window.location.hash` to a product id for routing). |
| **Custom CSS**           | All layout and styling in `styles.css`; no CSS framework required.                              |
| **SEO-friendly**         | Semantic HTML, meta tags, Open Graph and Twitter Card metadata for sharing.                     |

---

## Project structure

```bash
image-swiper-jquery/
├── public/
│   ├── images/           # Product images (image1.png … image5.png)
│   └── vite.svg          # Favicon
├── scripts/
│   └── copy-static.mjs   # Build script: copies static files into dist/ for deployment
├── index.html            # Single entry: structure, metadata, Swiper markup, scripts
├── script.js             # Swiper init, nav bar DOM moves, sliding text sync
├── styles.css            # Layout, swiper section, nav bar, typography, overrides
├── globals.d.ts          # TypeScript declarations for jQuery and Swiper (editor support)
├── jsconfig.json         # JS/TS checking (checkJs) and include paths
├── eslint.config.js     # ESLint flat config for .js files
├── package.json          # Scripts: dev, build, lint, preview
├── vercel.json           # Vercel: build command, output dir, optional rewrites
└── README.md             # This file
```

- **index.html** – One HTML file: `<head>` (meta, styles, favicon), then a container with header (title + educational callout), then the swiper section (wrapper, slides, nav bar). Scripts at bottom: jQuery, Swiper bundle, `script.js`, and inline `redirectToProduct`.
- **script.js** – Runs after DOM ready: creates one `Swiper` instance, uses `on.init` to move prev/next into the pagination container and call `syncNavBarTextSlide`, and uses `on.slideChange` to keep the nav bar text in sync. No imports; globals `$` and `Swiper` from script tags.
- **styles.css** – Body/container, header, educational callout, swiper layout (image area + gap + nav bar), sliding text strip, nav controls (arrows + dots), image container and overlay, and Swiper overrides.

---

## How to run and use

### Option A: Local dev server (recommended)

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the dev server:

   ```bash
   npm run dev
   ```

   The app is served at **<http://localhost:3000>**.

3. Lint:

   ```bash
   npm run lint
   ```

### Option B: Open in browser (no install)

1. Clone or download the repo.
2. Open **index.html** in a browser (e.g. double-click or `file://`).
3. Note: With `file://`, some CDN or CORS behavior may differ; for full behavior use Option A or a static server.

### Build for production (e.g. Vercel)

- Run:

  ```bash
  npm run build
  ```

  This copies `index.html`, `script.js`, `styles.css`, and `public/` into **dist/**.

- Deploy the **dist/** folder (e.g. set Vercel **Output Directory** to `dist` and **Build Command** to `npm run build`).

---

## Walkthrough: how it works

1. **Page load** – The browser loads `index.html`, then Swiper CSS (CDN), then `styles.css`, then the DOM (header + swiper section).
2. **Swiper markup** – `.swiper` wraps `.swiper-wrapper` (one `.swiper-slide.image-container` per product). Each slide has an `img`, optional `.text-overlay` (hidden in this design), and `data-product-id` / `onclick` for redirect. Below the wrapper, `.swiper-navigation-pagination-container` holds the sliding text strip and the controls (prev, pagination, next).
3. **script.js** – On `$(document).ready`, a new `Swiper(".swiper", { ... })` is created with:
   - **pagination**: `el: ".swiper-pagination"`, `clickable: false`.
   - **navigation**: `prevEl` / `nextEl` for the arrow elements.
   - **on.init**: Uses jQuery to find the pagination and prev/next nodes inside the swiper and reorder them so prev and next wrap the dots (centered). Then calls `syncNavBarTextSlide(this)` to set the initial text position.
   - **on.slideChange**: Calls `syncNavBarTextSlide(this)` so the nav bar text strip’s transform stays in sync with `activeIndex`.
4. **Sliding text** – `.nav-bar-text-slider` has five `.nav-bar-text-slide` children (20% width each, so 500% total). `syncNavBarTextSlide(swiper)` sets `transform: translate3d(-activeIndex * 20%, 0, 0)` so the visible “window” matches the active slide.
5. **Click behavior** – Inline `redirectToProduct(element)` reads `data-product-id` and sets `window.location.hash` to that id (you can replace this with a full URL or router later).

---

## Components and functionality

- **Swiper instance** – One Swiper on `.swiper`: handles touch, transition, and slide index. Pagination and navigation elements are moved by jQuery inside the same container so they appear as one row (prev | dots | next).
- **Sliding text strip** – A full-width strip of five text cells; CSS `transform` is updated in JS so the active slide’s title/subtitle are visible. Uses `aria-live="polite"` for accessibility.
- **Image container** – Fixed height (e.g. 400px), `object-fit: cover` so images fill the area without layout shift.
- **Product redirect** – Each slide has `data-product-id` and `onclick="redirectToProduct(this)"`. You can change the inline script to navigate to `/product/{id}` or any URL.

---

## Technologies and dependencies

| Technology                        | Role                                                                                                              |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| **HTML5**                         | Structure, sections, meta tags, accessibility attributes.                                                         |
| **CSS3**                          | Flexbox, positioning, transitions, Swiper overrides.                                                              |
| **JavaScript (ES5-style)**        | Used in `script.js`; no modules, runs in browser.                                                                 |
| **jQuery 3.6.0**                  | DOM selection and manipulation (`$(...)`, `.find()`, `.prepend()`, `.append()`). Loaded from CDN in `index.html`. |
| **Swiper (bundle)**               | Slider behavior (touch, pagination, navigation). Loaded from unpkg in `index.html`.                               |
| **serve**                         | Dev dependency to serve the project on port 3000 (`npm run dev`).                                                 |
| **ESLint + @eslint/js + globals** | Lint and recommended rules for browser globals; config in `eslint.config.js`.                                     |

No backend, no API calls, and no runtime environment variables are required to run the app.

---

## .env and environment variables

This project **does not use a `.env` file** or any environment variables. All configuration is in:

- **index.html** – CDN URLs, asset paths, meta tags.
- **script.js** – Selectors and Swiper options.
- **styles.css** – Colors, sizes, breakpoints.

To run or deploy, you **do not need** to set env vars. If you later add a backend or feature flags, you can introduce an optional `.env` (e.g. for API base URL) and document the variables here; for the current static setup, nothing is required.

---

## API, backend, and routes

- **No backend** – The app is static HTML/CSS/JS. No server-side API.
- **No API calls** – No `fetch` or XHR; images and scripts are loaded via normal HTML/CSS/JS.
- **“Routes”** – Only client-side behavior: clicking a slide runs `redirectToProduct(this)`, which sets `window.location.hash` to the slide’s `data-product-id`. You can replace this with `window.location.href = '/product/' + productId` or a SPA router if you integrate with another system.

---

## Reusing and integrating in other projects

1. **Copy core files** – Take `index.html`, `script.js`, `styles.css`, and the `public/` (or at least `public/images/`) folder. Adjust paths if your site uses a different directory layout.
2. **Swiper markup** – Keep the structure: `.swiper` → `.swiper-wrapper` → `.swiper-slide.image-container` (each with `img` and optional overlay), then the nav container with text strip and controls. Add or remove slides by duplicating the slide div and the matching `.nav-bar-text-slide` block.
3. **script.js** – If you change class names, update the selectors (e.g. `.swiper`, `.swiper-pagination`, `.nav-bar-text-slider`). The `syncNavBarTextSlide` offset is `-index * 20` for five slides; for N slides use `-index * (100 / N)`.
4. **Styling** – Replace or extend `styles.css`; the main hooks are `.container`, `.header-section`, `.swiper-section`, `.swiper`, `.swiper-navigation-pagination-container`, `.nav-bar-text-slider`, `.nav-bar-controls`, and Swiper’s own classes.
5. **jQuery/Swiper** – Ensure the same jQuery and Swiper script tags (or equivalent bundles) are loaded before `script.js`.

---

## Example: adding a new slide

1. In **index.html**, add a new slide inside `.swiper-wrapper`:

```html
<div
  class="swiper-slide image-container"
  data-product-id="product6"
  onclick="redirectToProduct(this)"
>
  <img src="public/images/image6.png" alt="Product 6" />
  <div class="text-overlay">
    <p class="subtitle">Product Six Title</p>
    <p class="subsubtitle">Product Six Subtitle</p>
  </div>
</div>
```

1. Add the matching nav bar text cell inside `.nav-bar-text-slider`:

```html
<div class="nav-bar-text-slide">
  <p class="nav-subtitle">Product Six Title</p>
  <p class="nav-subsubtitle">Product Six Subtitle</p>
</div>
```

1. In **script.js**, update the offset in `syncNavBarTextSlide` so the percentage matches the number of slides (e.g. for 6 slides use `-index * (100/6)` and set `.nav-bar-text-slider` width to 600% and each `.nav-bar-text-slide` to `flex: 0 0 16.666%` or equivalent in CSS).

---

## Example: Swiper and nav bar setup (script.js)

```javascript
$(document).ready(function () {
  var swiper = new Swiper(".swiper", {
    pagination: {
      clickable: false,
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      init: function () {
        var $pagination = $(this.el).find(".swiper-pagination");
        var $nextButton = $(this.el).find(".swiper-button-next");
        var $prevButton = $(this.el).find(".swiper-button-prev");
        $pagination.prepend($prevButton);
        $pagination.append($nextButton);
        syncNavBarTextSlide(this);
      },
      slideChange: function () {
        syncNavBarTextSlide(this);
      },
    },
  });

  function syncNavBarTextSlide(swiperInstance) {
    var index = swiperInstance.activeIndex;
    var offset = -index * 20; /* 20% per slide (5 slides) */
    var slider = document.querySelector(".nav-bar-text-slider");
    if (slider && slider instanceof HTMLElement) {
      slider.style.transform = "translate3d(" + offset + "%, 0, 0)";
    }
  }
});
```

---

## Keywords

Shopify, Swiper, Slider, jQuery, Image Slider, Product Gallery, Responsive, E-commerce, Arnob Mahmud, Frontend, Static Site, Web Components, SwiperJS, JavaScript, HTML5, CSS3, touch slider, carousel.

---

## Conclusion

This project is a small, self-contained example of a Shopify-style image swiper using jQuery and Swiper.js. It is suitable for learning DOM manipulation, slider UX, and static site layout, and can be reused or extended in other HTML/jQuery projects without a build step or backend.

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). The license file is at the repository root. Feel free to use, modify, and distribute the code as per the terms of the license.

---

## Happy Coding! 🎉

This is an **open-source project** — feel free to use, enhance, and extend it.

If you have any questions or want to share your work, reach out via GitHub or my portfolio at [https://www.arnobmahmud.com](https://www.arnobmahmud.com).

**Enjoy building and learning!** 🚀

Thank you! 😊

---
