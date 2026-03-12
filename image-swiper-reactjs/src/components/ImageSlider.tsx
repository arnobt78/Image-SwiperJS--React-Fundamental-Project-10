import { useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const base = typeof import.meta.env?.BASE_URL === "string" ? import.meta.env.BASE_URL : "/";

const slides = [
  { id: 1, src: `${base}images/image1.png`, productId: "product1", title: "Super Solid Glass - Glanz", subtitle: "Polierter Onyxmarmor" },
  { id: 2, src: `${base}images/image2.png`, productId: "product2", title: "Glass Solid - Glanz", subtitle: "Onyxmarmor Polierter" },
  { id: 3, src: `${base}images/image3.png`, productId: "product3", title: "Super Artificial Stone - Glanz", subtitle: "Sand Beige" },
  { id: 4, src: `${base}images/image4.png`, productId: "product4", title: "Blickfang - Glanz", subtitle: "Window Display" },
  { id: 5, src: `${base}images/image5.png`, productId: "product5", title: "Comfort - Glanz", subtitle: "Smooth Surface" },
];

function ImageSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <>
      <header className="header-section" role="banner">
        <p className="heading">Shopify Style Image Swiper using React and Swiper.js</p>
        <div className="educational-callout" role="note">
          <strong>Learn:</strong> This project uses <strong>React</strong> and <strong>SwiperJS</strong> (touch-enabled
          slider). Each slide has its own <code>.text-overlay</code> inside the slide; the nav bar (arrows + dots) is
          below the image with a sliding text strip that stays in sync with the active slide.
        </div>
      </header>

      <section className="swiper-section" aria-label="Image slider">
        <div className="swiper-and-nav">
          <Swiper
            modules={[Navigation, Pagination]}
            className="swiper"
            style={{ height: "400px", width: "100%" }}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            pagination={{ clickable: false, el: ".swiper-pagination" }}
            spaceBetween={0}
            slidesPerView={1}
            onSwiper={(swiper) => setActiveIndex(swiper.activeIndex)}
            onSlideChange={handleSlideChange}
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="image-container">
                  <img src={slide.src} alt="" className="slide-image" loading="eager" decoding="async" />
                  <div className="text-overlay" aria-hidden>
                    <p className="subtitle">{slide.title}</p>
                    <p className="subsubtitle">{slide.subtitle}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-navigation-pagination-container">
            <div className="nav-bar-product-text-wrapper" aria-live="polite">
              <div
                className="nav-bar-text-slider"
                style={{ transform: `translate3d(${-activeIndex * 20}%, 0, 0)` }}
              >
                {slides.map((slide) => (
                  <div key={slide.id} className="nav-bar-text-slide">
                    <p className="nav-subtitle">{slide.title}</p>
                    <p className="nav-subsubtitle">{slide.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="nav-bar-controls">
              <div className="swiper-button-prev" />
              <div className="swiper-pagination" />
              <div className="swiper-button-next" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ImageSlider;
