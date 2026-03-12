# Shopify Style Image Swiper - React, TypeScript, Swiper.js, TailwindCSS Fundamental Project 10

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.3.1-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue)](https://www.typescriptlang.org/)
[![Swiper](https://img.shields.io/badge/Swiper-12.1-0078D4)](https://swiperjs.com/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC)](https://tailwindcss.com/)

A **Shopify-style image swiper** built with **React**, **TypeScript**, **Tailwind CSS**, and **Swiper.js**. This is a single-page tutorial project: a product image gallery with touch-enabled sliding, a nav bar with sliding product text and centered arrows/dots, and no backend. Ideal for learning React components, Swiper integration, and Tailwind styling.

- **React Swiper Live Demo:** [https://image-swiperjs-react.vercel.app/](https://image-swiperjs-react.vercel.app/)

![Screenshot 2026-03-12 at 15 17 05](https://github.com/user-attachments/assets/599ca088-2622-4ede-8943-dd24b31df04d)

## Project overview

This repo is a **static, client-side** React app. The UI shows a heading, an educational callout, and a Swiper image slider with a bar below it. The bar displays the active slide’s title and subtitle (sliding in sync with the images) and centered prev/next arrows plus pagination dots. The app is responsive, uses Vite for dev and build, and can be deployed to any static host (e.g. Vercel).

---

## Features

| Feature                  | Description                                                                                                             |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| **Responsive layout**    | Centered container (max-width 800px); works on desktop and mobile.                                                      |
| **Swiper.js slider**     | Touch/swipe, smooth transitions, one slide per view; Navigation and Pagination modules.                                 |
| **Sliding nav bar text** | Product title/subtitle under the slider slide horizontally in sync with the active image (CSS transform + React state). |
| **React + TypeScript**   | Typed components and props; no runtime type checks.                                                                     |
| **Tailwind CSS v4**      | Utility-first styling via `global.css` and component classes.                                                           |
| **Single entry point**   | No router; one page with header + slider + nav bar.                                                                     |
| **SEO-friendly**         | Meta tags, Open Graph, and Twitter Card in `index.html`.                                                                |

---

## Project structure

```bash
image-swiper-reactjs/
├── public/                  # Static assets (served at root in dev/build)
│   ├── images/              # Product images (image1.png … image5.png)
│   └── vite.svg             # Favicon
├── src/
│   ├── App.tsx              # Root component: wrapper + ImageSlider
│   ├── main.tsx             # Entry: createRoot, mounts App into #root
│   ├── global.css            # Tailwind import + base + Swiper overrides
│   ├── shopifySchema.ts      # Optional slider config (navigation, pagination, etc.)
│   ├── vite-env.d.ts        # Vite client types
│   └── components/
│       └── ImageSlider.tsx   # Header, Swiper, nav bar with sliding text
├── index.html               # HTML shell, meta tags, #root, script to main.tsx
├── vite.config.ts           # Vite + React + Tailwind plugins
├── tsconfig.json             # TypeScript for src
├── eslint.config.js         # ESLint for TS/TSX
├── vercel.json               # SPA rewrites for deployment
├── package.json              # Scripts and dependencies
└── README.md                 # This file
```

---

## How to run and use

### Local development

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the dev server:

   ```bash
   npm run dev
   ```

   The app runs at **<http://localhost:5173>** (or the port Vite prints).

3. Lint:

   ```bash
   npm run lint
   ```

### Build and preview

- Build:

  ```bash
  npm run build
  ```

  Output is in **dist/** (HTML, JS, CSS, and `public/` assets).

- Preview production build:

  ```bash
  npm run preview
  ```

### Deploy

- Deploy the **dist/** folder to any static host. For Vercel, connect the repo; the default build command `npm run build` and output directory `dist` work with the included `vercel.json` rewrites for SPA fallback.

---

## Walkthrough: how it works

1. **Entry** – `index.html` loads `/src/main.tsx` as a module. `main.tsx` imports `App` and `global.css`, finds `#root`, and renders `<App />` with `createRoot`.
2. **App** – `App.tsx` renders a centered container (`max-w-[800px] mx-auto px-4`) and a single child: `<ImageSlider />`.
3. **ImageSlider** – The main UI:
   - **Header**: Title (“Shopify Style Image Swiper…”) and an educational callout (Tailwind-styled).
   - **Swiper**: Uses `Swiper` and `SwiperSlide` from `swiper/react` with `Navigation` and `Pagination` modules. Each slide has an image (from `public/images/`) and an invisible overlay div (same text as nav bar). Image `src` uses `import.meta.env.BASE_URL` so paths work in dev and production.
   - **State**: `activeIndex` is updated in `onSwiper` and `onSlideChange` so the nav bar text strip stays in sync.
   - **Nav bar**: A full-width bar below the Swiper with:
     - A sliding strip of five text cells (each 20% width, total 500%). The strip’s `transform` is `translate3d(-activeIndex * 20%, 0, 0)` so the visible cell matches the active slide.
     - Centered prev, pagination, and next elements (Swiper binds to `.swiper-button-prev`, `.swiper-pagination`, `.swiper-button-next`).
4. **Styles** – `global.css` imports Tailwind and defines base layout and Swiper overrides (e.g. pagination/arrows `position: static` so they sit in the nav bar).

---

## Components and functionality

- **App.tsx** – Root layout: max-width wrapper and `ImageSlider`. No router or other routes.
- **ImageSlider.tsx** – Holds all visible UI: header, Swiper, nav bar. Manages `activeIndex` and passes it to the sliding text strip. Slide data is a local `slides` array (id, src, productId, title, subtitle).
- **shopifySchema.ts** – Optional shared config (e.g. `sliderSettings` with navigation, pagination, spaceBetween, slidesPerView). The current `ImageSlider` does not import it; you can use it to drive slider props or for learning.

---

## Technologies and dependencies

| Technology          | Role                                                                                                   |
| ------------------- | ------------------------------------------------------------------------------------------------------ |
| **React 18**        | UI components and state (`useState`).                                                                  |
| **TypeScript**      | Typing for props, state, and Swiper callbacks.                                                         |
| **Swiper 12**       | Slider behavior; `swiper/react` for `Swiper` and `SwiperSlide`; `Navigation` and `Pagination` modules. |
| **Tailwind CSS v4** | Utility classes and `global.css` via `@tailwindcss/vite`.                                              |
| **Vite 6**          | Dev server, build, and asset handling; `import.meta.env.BASE_URL` for image paths.                     |
| **ESLint**          | Linting for TS/TSX (see `eslint.config.js`).                                                           |

There is no backend and no API calls; the app is static.

---

## .env and environment variables

You **do not** need a `.env` file or any environment variables to run or build this project. Configuration is in code (e.g. `slides` in `ImageSlider.tsx`, Vite/Tailwind in config files).

If you later add a backend or feature flags, you can add an optional `.env` (e.g. `VITE_API_URL`) and use `import.meta.env.VITE_*` in the app. See [Vite env variables](https://vitejs.dev/guide/env-and-mode.html). Do not commit secrets; only `VITE_`-prefixed variables are exposed to the client.

---

## API, backend, and routes

- **No backend** – The app is static HTML/JS/CSS generated by Vite.
- **No API calls** – No `fetch` or XHR; images and scripts are loaded normally.
- **Routes** – Single page only. There is no React Router; the only “route” is the one page that shows the slider. If you add routes later (e.g. `/product/:id`), configure SPA fallback (e.g. `vercel.json` rewrites) so the server serves `index.html` for all paths.

---

## Reusing and integrating in other projects

1. **Copy core files** – Take `src/App.tsx`, `src/main.tsx`, `src/global.css`, `src/components/ImageSlider.tsx`, and optionally `src/shopifySchema.ts`. Ensure `index.html` and your build tool (e.g. Vite) match.
2. **Images** – Put assets in `public/images/` (or your static folder) and update the `slides` array in `ImageSlider.tsx` (paths relative to `BASE_URL` or root).
3. **Slides** – Add or remove items in the `slides` array. For a different number of slides, change the nav bar strip width (e.g. 6 slides → 600% width, 16.666% per cell) and the transform offset (e.g. `-activeIndex * (100/6)`).
4. **Styling** – Adjust Tailwind classes in `ImageSlider.tsx` and rules in `global.css`. Swiper’s default styles are overridden in `global.css` so the nav bar layout works.
5. **Swiper options** – Change props on `<Swiper>` (e.g. `spaceBetween`, `slidesPerView`, `loop`) or wire them from `shopifySchema.ts` if you use it.

---

## Example: adding a new slide

In `src/components/ImageSlider.tsx`, extend the `slides` array:

```tsx
const slides = [
  // ...existing slides
  {
    id: 6,
    src: `${base}images/image6.png`,
    productId: "product6",
    title: "Your Product Title",
    subtitle: "Your product subtitle",
  },
];
```

Add `image6.png` to `public/images/`. If you change the number of slides (e.g. to 6), update the nav bar strip: e.g. `w-[600%]`, each cell `flex-[0_0_16.666%]`, and `transform: translate3d(${-activeIndex * (100/6)}%, 0, 0)`.

---

## Example: Swiper and nav bar (ImageSlider.tsx)

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
    <SwiperSlide key={slide.id}>
      <div className="...">
        <img
          src={slide.src}
          alt=""
          className="block w-full h-full object-cover"
        />
        {/* optional overlay */}
      </div>
    </SwiperSlide>
  ))}
</Swiper>;

{
  /* Nav bar: sliding text + centered controls */
}
<div className="relative flex items-center py-7 px-6 bg-black/50 text-white min-h-[88px]">
  <div className="absolute inset-0 overflow-hidden ..." aria-live="polite">
    <div
      style={{ transform: `translate3d(${-activeIndex * 20}%, 0, 0)` }}
      className="flex w-[500%] ..."
    >
      {slides.map((slide) => (
        <div key={slide.id} className="flex-[0_0_20%] ...">
          <p>{slide.title}</p>
          <p>{slide.subtitle}</p>
        </div>
      ))}
    </div>
  </div>
  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-4 ...">
    <div className="swiper-button-prev" />
    <div className="swiper-pagination" />
    <div className="swiper-button-next" />
  </div>
</div>;
```

---

## Keywords

Shopify, Swiper, Slider, React, TypeScript, Image Slider, Product Gallery, Responsive, E-commerce, Arnob Mahmud, Frontend, Tailwind CSS, SwiperJS, Vite, Static Site, Web Components.

---

## Conclusion

This project is a minimal, self-contained example of a Shopify-style image swiper with React, TypeScript, Swiper.js, and Tailwind. It is suitable for learning component structure, Swiper integration, and responsive layout, and can be reused or extended in other React/Vite projects without a backend.

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
