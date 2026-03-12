/**
 * Global type definitions for script.js (no imports; jQuery and Swiper from script tags).
 * Referenced via /// <reference path="globals.d.ts" /> for editor/IDE support.
 */

/** Minimal jQuery-like interface used in this project (ready, find, prepend, append, text, css) */
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

/** Swiper instance: created in script.js with new Swiper(".swiper", options) */
declare class Swiper {
  constructor(selector: string | HTMLElement, options?: SwiperOptions);
  readonly el: HTMLElement;
  readonly slides: HTMLCollectionOf<Element>;
  readonly activeIndex: number;
}

/** Options passed to Swiper; on.init and on.slideChange are used to wire nav bar and text strip */
interface SwiperOptions {
  pagination?: { clickable?: boolean; el?: string };
  navigation?: { nextEl?: string; prevEl?: string };
  on?: {
    init?: (this: Swiper) => void;
    slideChange?: (this: Swiper) => void;
  };
}
