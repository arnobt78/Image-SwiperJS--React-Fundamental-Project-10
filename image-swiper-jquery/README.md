# Shopify Style Image Swiper - JavaScript, jQuery, Swiper.js, Custom CSS Project Tutorial Fundamental Project 10

- **jQuery Swiper Live Demo:** []()

---

## Features

- Responsive, mobile-friendly design
- SwiperJS-powered slider with navigation and pagination
- jQuery-based initialization and event handling
- Clickable product slides with redirect functionality
- Customizable styles and easy-to-edit structure
- SEO-optimized HTML with rich metadata

---

## Project Structure

```bash
image-swiper-jquery/
├── public/
│   ├── images/       # Product images for the slider
│   │   ├── image1.png
│   │   └── ...
│   └── vite.svg      # Favicon
├── index.html        # Main HTML file (entry point)
├── script.js         # jQuery and SwiperJS logic
├── styles.css        # Custom styles for the slider
├── package.json      # Scripts: dev, lint, preview
└── README.md         # Project documentation
```

---

## How It Works

- The `index.html` file sets up the Swiper slider structure and includes all required scripts and styles.
- `script.js` initializes Swiper with custom navigation and pagination, and handles product click events.
- `styles.css` provides custom styling for the slider, navigation, pagination, and overlays.
- Product images are stored in the `images/` directory and referenced in the slider.

---

## Quick Start

### Option A: Run on localhost (recommended)

1. **Install dependencies:**  
   `npm install`
2. **Start the dev server:**  
   `npm run dev`  
   This serves the project at **http://localhost:3000**
3. **Lint:**  
   `npm run lint`

### Option B: Open in browser

1. **Clone or Download** this repository.
2. **Open `index.html`** directly in your browser. No build step required!
3. **Enjoy the slider!**

---

## Usage & Integration

### Using in Your Own Project

- Copy the `index.html`, `script.js`, `styles.css`, and `images/` folder into your project.
- Update image paths and product details as needed.
- Customize styles in `styles.css` to match your branding.
- The slider is fully client-side and works without a backend.

### Example: Adding a New Slide

```html
<div
  class="swiper-slide image-container"
  data-product-id="product6"
  onclick="redirectToProduct(this)"
>
  <img src="images/image6.png" alt="" />
  <div class="text-overlay">
    <p class="subtitle">New Product Title</p>
    <p class="subsubtitle">Product Subtitle</p>
  </div>
</div>
```

---

## Components & Functionality

- **Swiper Slider**: Handles slide transitions, navigation, and pagination.
- **jQuery**: Used for DOM manipulation and Swiper initialization.
- **Product Redirect**: Clicking a slide redirects to `/product/{productId}` (customize as needed).
- **Custom CSS**: Easily modify the look and feel in `styles.css`.

---

## Technologies Used

- HTML5, CSS3
- [jQuery](https://jquery.com/)
- [SwiperJS](https://swiperjs.com/)

---

## .env File & Environment Variables

This project is fully static and does **not** require a `.env` file or any environment variables. All configuration is handled in the HTML, JS, and CSS files. If you wish to extend the project with API endpoints or dynamic data, you can add your own `.env` file and reference variables in your scripts as needed.

---

## API Endpoints & Routes

- **Product Redirect**: Clicking a slide triggers a redirect to `/product/{productId}`. You can implement these routes in your backend or static site as needed.
- **No external API calls** are made by default.

---

## Reusing Components

- The Swiper slider structure and logic can be copied into any HTML project.
- Update the `script.js` to match your new selectors or add more Swiper options.
- The CSS is modular and can be imported into other projects.

---

## Example Code Snippet: Swiper Initialization

```js
$(document).ready(function () {
  var swiper = new swiper(".swiper", {
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
      },
    },
  });
});
```

---

## Keywords

Shopify, Swiper, Slider, jQuery, Image Slider, Product Gallery, Responsive, E-commerce, Arnob Mahmud, Frontend, Static Site, Web Components

---

## Conclusion

This project is a great starting point for anyone looking to build a modern, responsive image slider with jQuery and SwiperJS. It’s easy to customize, extend, and integrate into any web project. Perfect for learning, teaching, or production use!

---

## Happy Coding! 🎉

Feel free to use this project repository and extend this project further!

If you have any questions or want to share your work, reach out via GitHub or my portfolio at [https://arnob-mahmud.vercel.app/](https://arnob-mahmud.vercel.app/).

**Enjoy building and learning!** 🚀

Thank you! 😊

---
