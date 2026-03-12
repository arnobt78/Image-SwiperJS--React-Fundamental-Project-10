# Shopify Style Image Swiper - JavaScript, jQuery, React, TypeScript, Swiper.js, TailwindCSS, Custom CSS Fundamental Project 10

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![jQuery](https://img.shields.io/badge/jQuery-3.6-0769AD?logo=jquery)](https://jquery.com/)
[![React](https://img.shields.io/badge/React-18.3.1-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue)](https://www.typescriptlang.org/)
[![Swiper](https://img.shields.io/badge/Swiper-12-0078D4)](https://swiperjs.com/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC)](https://tailwindcss.com/)

This repository is a **monorepo** with two separate implementations of a Shopify-style image swiper: one with **jQuery + Swiper.js + plain HTML/CSS**, and one with **React + TypeScript + Swiper.js + Tailwind CSS + Vite**. Both are static, client-side only, and aimed at learning and reuse. No backend or environment variables are required to run either project.

---

- **image-swiper-jquery**: Static HTML/CSS/JS using jQuery and SwiperJS.
- **jQuery Swiper Live Demo:** [https://image-swiperjs-jquery.vercel.app/](https://image-swiperjs-jquery.vercel.app/)

- **image-swiper-reactjs**: React app using SwiperJS, TypeScript, Tailwind, and Vite.
- **React Swiper Live Demo:** [https://image-swiperjs-react.vercel.app/](https://image-swiperjs-react.vercel.app/)

Both projects share the same UX: a product image slider with a nav bar below showing sliding title/subtitle and centered prev/dots/next controls.

![Screenshot 2026-03-12 at 15 17 05](https://github.com/user-attachments/assets/599ca088-2622-4ede-8943-dd24b31df04d)
![Screenshot 2026-03-12 at 15 17 29](https://github.com/user-attachments/assets/f9fb0390-4a41-4a43-b501-cee5d805504b)

## Project overview

At the root you have two independent projects under one repo:

- **image-swiper-jquery** – Single HTML file, one CSS file, one JS file. Uses jQuery for DOM (e.g. moving nav elements on Swiper init) and Swiper for the slider. Can be opened by loading `index.html` in a browser or served with `npm run dev` (e.g. port 3000). Deployment copies files into `dist/` via a small Node script.
- **image-swiper-reactjs** – Vite + React + TypeScript app. One main page: header, educational callout, and `ImageSlider` (Swiper + nav bar with sliding text). Styling is Tailwind in `global.css` and component classes. Run with `npm run dev` (e.g. port 5173), build with `npm run build`, deploy the `dist/` folder.

Neither project talks to a backend or uses environment variables by default.

---

## Features

| Feature               | jQuery project                              | React project                                          |
| --------------------- | ------------------------------------------- | ------------------------------------------------------ |
| **Responsive layout** | Centered container, works on mobile         | Same                                                   |
| **Swiper.js slider**  | Touch/swipe, one slide per view             | Same; React components                                 |
| **Nav bar**           | Sliding product text + centered arrows/dots | Same; state-driven transform                           |
| **No backend**        | Static files only                           | Static build (Vite)                                    |
| **SEO**               | Meta tags in `index.html`                   | Meta tags in `index.html`                              |
| **Extensibility**     | Add slides in HTML + nav bar cells          | Add slides in `slides` array; optional `shopifySchema` |

---

## Repository structure

```bash
shopify-swiper/
├── image-swiper-jquery/           # jQuery + Swiper static site
│   ├── public/
│   │   ├── images/               # Product images (image1.png … image5.png)
│   │   └── vite.svg              # Favicon
│   ├── scripts/
│   │   └── copy-static.mjs       # Build: copies files to dist/ for deploy
│   ├── index.html                # Entry: structure, meta, Swiper markup, scripts
│   ├── script.js                 # Swiper init, nav bar DOM, sliding text sync
│   ├── styles.css                # Layout, nav bar, Swiper overrides
│   ├── globals.d.ts              # Types for $ and Swiper (IDE support)
│   ├── package.json              # dev, build, lint, preview
│   ├── vercel.json               # Deploy: buildCommand, outputDirectory, rewrites
│   └── README.md                 # jQuery project docs
├── image-swiper-reactjs/         # React + TypeScript + Vite app
│   ├── public/
│   │   ├── images/               # Product images
│   │   └── vite.svg              # Favicon
│   ├── src/
│   │   ├── App.tsx               # Root: wrapper + ImageSlider
│   │   ├── main.tsx              # Entry: createRoot, mount App
│   │   ├── global.css            # Tailwind + Swiper overrides
│   │   ├── shopifySchema.ts      # Optional slider config
│   │   └── components/
│   │       └── ImageSlider.tsx   # Header, Swiper, nav bar
│   ├── index.html                # Shell, meta, #root, script to main.tsx
│   ├── vite.config.ts            # Vite + React + Tailwind
│   ├── package.json              # dev, build, lint, preview
│   ├── vercel.json                # SPA rewrites
│   └── README.md                 # React project docs
├── LICENSE                        # MIT
└── README.md                      # This file
```

---

## How to run each project

### image-swiper-jquery

**Option A – Dev server (recommended)**

```bash
cd image-swiper-jquery
npm install
npm run dev
```

Opens at **<http://localhost:3000>**.

**Option B – No install**

Open `image-swiper-jquery/index.html` in a browser (file or any static server).

**Build for deploy**

```bash
cd image-swiper-jquery
npm run build
```

Output is in `image-swiper-jquery/dist/`. Point your host (e.g. Vercel) to that folder.

---

### image-swiper-reactjs

```bash
cd image-swiper-reactjs
npm install
npm run dev
```

Opens at **<http://localhost:5173>** (or the port Vite prints).

**Build and preview**

```bash
npm run build
npm run preview
```

Deploy the `image-swiper-reactjs/dist/` folder to any static host.

---

## Walkthrough: how each project works

### jQuery project

1. **index.html** – Loads Swiper CSS (CDN), `styles.css`, then jQuery, Swiper bundle, and `script.js`. The page has a container, header (title + callout), and a `.swiper` with `.swiper-wrapper` (one `.swiper-slide` per product) and a nav bar div (sliding text strip + prev, pagination, next).
2. **script.js** – On `$(document).ready`, creates `new Swiper(".swiper", { ... })` with pagination and navigation. In `on.init`, jQuery moves the prev/next nodes into the pagination container so they appear as one row, then calls `syncNavBarTextSlide`. On `slideChange`, it calls `syncNavBarTextSlide` again so the nav bar text strip’s `transform` matches the active slide index (e.g. `-index * 20%` for 5 slides).
3. **styles.css** – Layout (centered page, swiper column, fixed-height image area), nav bar and sliding strip (e.g. 500% width, 20% per cell), and overrides so Swiper’s pagination/arrows are `position: static` in the bar.

### React project

1. **index.html** – Loads `/src/main.tsx` as a module. No React or Swiper in the HTML; everything is mounted by the script.
2. **main.tsx** – Imports `App` and `global.css`, finds `#root`, and runs `createRoot(rootEl).render(<App />)`.
3. **App.tsx** – Renders a max-width wrapper and `<ImageSlider />` (no router).
4. **ImageSlider.tsx** – Holds a `slides` array (id, src, productId, title, subtitle). Renders header, `<Swiper>` with `SwiperSlide` per slide (image + hidden overlay), and the nav bar. Uses `activeIndex` state, updated in `onSwiper` and `onSlideChange`, to set the sliding strip’s `transform: translate3d(-activeIndex * 20%, 0, 0)`. Image `src` uses `import.meta.env.BASE_URL` so paths work in dev and production.
5. **global.css** – Imports Tailwind and defines Swiper overrides (wrapper height, slide height, pagination/arrows static, bullet styles).

---

## Technologies and dependencies

| Layer       | jQuery project                  | React project                   |
| ----------- | ------------------------------- | ------------------------------- |
| **Markup**  | HTML in `index.html`            | HTML in `index.html`; UI in TSX |
| **Styling** | `styles.css` (custom)           | Tailwind v4 + `global.css`      |
| **Logic**   | jQuery 3.6 (CDN), Swiper (CDN)  | React 18, TypeScript, Swiper 12 |
| **Build**   | Optional: Node script → `dist/` | Vite 6: dev + build → `dist/`   |
| **Lint**    | ESLint (flat config)            | ESLint + TypeScript + React     |

There is no shared package.json at the root; each subfolder has its own `package.json` and dependencies.

---

## .env and environment variables

**Neither project needs a `.env` file or any environment variables** to run or build. All configuration is in the code (HTML/JS/CSS in jQuery; TSX and config in React).

If you later add a backend or feature flags:

- **jQuery** – You could add a small build step that reads env and injects values into HTML or a config object; the current setup does not do this.
- **React** – Use [Vite env variables](https://vitejs.dev/guide/env-and-mode.html). Only `VITE_*` vars are exposed to the client. Example: `VITE_API_URL`. Do not commit secrets.

---

## API, backend, and routes

- **No backend** – Both apps are static. No server-side API.
- **No API calls** – No `fetch` or XHR; assets and scripts are loaded normally.
- **“Routes”**
  - **jQuery**: Clicking a slide runs inline `redirectToProduct(this)`, which sets `window.location.hash` to the slide’s `data-product-id`. You can replace this with a full URL or SPA router.
  - **React**: Single page only (no React Router in the current app). To add routes (e.g. `/product/:id`), use React Router and configure your host (e.g. `vercel.json` rewrites) so `index.html` is served for all paths.

---

## Reusing and integrating in other projects

- **jQuery** – Copy `index.html`, `script.js`, `styles.css`, and `public/` (or `images/`). Adjust image paths and slide count; if you change the number of slides, update the nav bar strip width and the `syncNavBarTextSlide` offset (e.g. 6 slides → 600% width, `-index * (100/6)%`).
- **React** – Copy `src/App.tsx`, `src/main.tsx`, `src/global.css`, `src/components/ImageSlider.tsx`, and optionally `src/shopifySchema.ts`. Ensure your Vite/React setup matches (e.g. Tailwind, `index.html`). Update the `slides` array and add/remove slides; adjust the nav bar percentage math if the slide count changes.

Both implementations keep the same UX: image swiper + nav bar with sliding text and centered controls.

---

## Example: adding a slide (jQuery)

In `index.html`, add a new slide inside `.swiper-wrapper` and a matching cell in `.nav-bar-text-slider`:

```html
<div
  class="swiper-slide image-container"
  data-product-id="product6"
  onclick="redirectToProduct(this)"
>
  <img src="public/images/image6.png" alt="" />
  <div class="text-overlay">
    <p class="subtitle">New Product Title</p>
    <p class="subsubtitle">Product Subtitle</p>
  </div>
</div>
```

In `script.js`, update the offset in `syncNavBarTextSlide` (e.g. for 6 slides use `-index * (100/6)`). In CSS, set the text strip width and cell width accordingly (e.g. 600%, 16.666% per cell).

---

## Example: adding a slide (React)

In `src/components/ImageSlider.tsx`, extend the `slides` array:

```tsx
const slides = [
  // ...existing
  {
    id: 6,
    src: `${base}images/image6.png`,
    productId: "product6",
    title: "New Product Title",
    subtitle: "Product Subtitle",
  },
];
```

Add `image6.png` under `public/images/`. If you have 6 slides, change the nav bar strip to `w-[600%]`, each cell to `flex-[0_0_16.666%]`, and the transform to `translate3d(${-activeIndex * (100/6)}%, 0, 0)`.

---

## Example: Swiper init (jQuery)

```js
$(document).ready(function () {
  var swiper = new Swiper(".swiper", {
    pagination: { clickable: false, el: ".swiper-pagination" },
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
});
```

---

## Example: Swiper and state (React)

```tsx
const [activeIndex, setActiveIndex] = useState(0);

<Swiper
  modules={[Navigation, Pagination]}
  onSwiper={(swiper) => setActiveIndex(swiper.activeIndex)}
  onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
  navigation={{ prevEl: ".swiper-button-prev", nextEl: ".swiper-button-next" }}
  pagination={{ clickable: false, el: ".swiper-pagination" }}
  spaceBetween={0}
  slidesPerView={1}
>
  {slides.map((slide) => (
    <SwiperSlide key={slide.id}>{/* slide content */}</SwiperSlide>
  ))}
</Swiper>;

{
  /* Nav bar strip: transform syncs with activeIndex */
}
<div style={{ transform: `translate3d(${-activeIndex * 20}%, 0, 0)` }}>
  {slides.map((slide) => (
    <div key={slide.id}>{/* title, subtitle */}</div>
  ))}
</div>;
```

---

## Keywords

Shopify, Swiper, Slider, jQuery, React, TypeScript, Image Slider, Product Gallery, Responsive, E-commerce, Arnob Mahmud, Frontend, Static Site, Web Components, Vite, Tailwind CSS.

---

## Conclusion

This repo gives you two ways to build the same Shopify-style image swiper: one with jQuery and plain assets, one with React and TypeScript. Both are static, easy to run and deploy, and suitable for learning or reuse. Pick the stack you prefer and extend from there.

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute the code as per the terms of the license.

---

## Happy Coding! 🎉

This is an **open-source project** - feel free to use, enhance, and extend this project further!

If you have any questions or want to share your work, reach out via GitHub or my portfolio at [https://www.arnobmahmud.com](https://www.arnobmahmud.com).

**Enjoy building and learning!** 🚀

Thank you! 😊

---
