/// <reference path="globals.d.ts" />
/**
 * Swiper + jQuery: initializes the image slider and syncs the nav bar text strip
 * with the active slide. No API or backend; runs after DOM is ready.
 */

$(document).ready(function () {
  // Create one Swiper instance on the .swiper container (see index.html)
  var swiper = new Swiper(".swiper", {
    // Pagination: dots element; we keep clickable: false and move prev/next into it below
    pagination: {
      clickable: false,
      el: ".swiper-pagination",
    },
    // Navigation: Swiper will attach click handlers to these elements
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      // After Swiper is initialized: reorder DOM so prev | dots | next appear in one row (Shopify-style)
      init: function () {
        var $pagination = $(this.el).find(".swiper-pagination");
        var $nextButton = $(this.el).find(".swiper-button-next");
        var $prevButton = $(this.el).find(".swiper-button-prev");
        $pagination.prepend($prevButton);
        $pagination.append($nextButton);
        // Sync the nav bar text strip to the current slide
        syncNavBarTextSlide(this);
      },
      // On every slide change (swipe, arrow, dot): update the visible nav bar text
      slideChange: function () {
        syncNavBarTextSlide(this);
      },
    },
  });

  /**
   * Moves the .nav-bar-text-slider so the active slide’s text is visible.
   * The strip has 5 cells at 20% each (500% width); we set transform to -index * 20%.
   */
  function syncNavBarTextSlide(swiperInstance) {
    var index = swiperInstance.activeIndex;
    var offset = -index * 20; /* 20% per slide (5 slides) */
    var slider = document.querySelector(".nav-bar-text-slider");
    if (slider && slider instanceof HTMLElement) {
      slider.style.transform = "translate3d(" + offset + "%, 0, 0)";
    }
  }
});
