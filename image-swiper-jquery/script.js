/// <reference path="globals.d.ts" />
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
