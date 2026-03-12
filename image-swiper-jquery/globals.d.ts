/** Global types for script tags (jQuery, Swiper) */
interface JQueryLike {
  ready(fn: () => void): JQueryLike;
  find(selector: string): JQueryLike;
  prepend(el: JQueryLike): JQueryLike;
  append(el: JQueryLike): JQueryLike;
  text(): string;
  text(value: string): JQueryLike;
  css(property: string, value: string): JQueryLike;
}
declare const $: (selector: string | Document | HTMLElement | Element) => JQueryLike;
declare const jQuery: typeof $;

declare class Swiper {
  constructor(selector: string | HTMLElement, options?: SwiperOptions);
  readonly el: HTMLElement;
  readonly slides: HTMLCollectionOf<Element>;
  readonly activeIndex: number;
}

interface SwiperOptions {
  pagination?: { clickable?: boolean; el?: string };
  navigation?: { nextEl?: string; prevEl?: string };
  on?: {
    init?: (this: Swiper) => void;
    slideChange?: (this: Swiper) => void;
  };
}
