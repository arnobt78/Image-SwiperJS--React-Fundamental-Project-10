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
      <header className="relative mb-5" role="banner">
        <p className="text-2xl font-bold mb-5 text-black flex justify-center items-center">
          Shopify Style Image Swiper using React and Swiper.js
        </p>
        <div className="relative py-3 px-4 bg-sky-100 border border-sky-300 rounded-lg text-sm leading-normal text-sky-900" role="note">
          <strong className="text-sky-700">Learn:</strong> This project uses <strong className="text-sky-700">React</strong> and <strong className="text-sky-700">SwiperJS</strong> (touch-enabled
          slider). Each slide has its own <code className="bg-sky-200 py-0.5 px-1.5 rounded text-[0.85em]">.text-overlay</code> inside the slide; the nav bar (arrows + dots) is
          below the image with a sliding text strip that stays in sync with the active slide.
        </div>
      </header>

      <section className="relative mt-5" aria-label="Image slider">
        <div className="flex flex-col gap-1">
          <Swiper
            modules={[Navigation, Pagination]}
            className="swiper shrink-0 w-full h-[400px]"
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
                <div className="min-h-[400px] h-full flex justify-center items-center relative overflow-hidden w-full">
                  <img src={slide.src} alt="" className="block w-full h-full object-cover" loading="eager" decoding="async" />
                  <div className="absolute bottom-[30px] w-full bg-black/50 text-white p-0 invisible" aria-hidden>
                    <p className="my-5 mx-5 mt-5 mb-0 text-base text-left leading-normal">{slide.title}</p>
                    <p className="m-0 mx-5 mb-2.5 text-[0.8rem] text-left leading-normal">{slide.subtitle}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="relative flex items-center py-7 px-6 bg-black/50 text-white min-h-[88px] box-border">
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-live="polite">
              <div
                className="flex w-[500%] h-full transition-transform duration-300 ease-out will-change-transform"
                style={{ transform: `translate3d(${-activeIndex * 20}%, 0, 0)` }}
              >
                {slides.map((slide) => (
                  <div key={slide.id} className="flex-[0_0_20%] w-[20%] min-w-0 flex flex-col justify-center pr-24 pl-6 box-border">
                    <p className="m-0 text-base font-semibold leading-tight">{slide.title}</p>
                    <p className="m-0 text-[0.8rem] opacity-90 leading-tight">{slide.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-4 z-10 pointer-events-auto nav-bar-controls">
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
