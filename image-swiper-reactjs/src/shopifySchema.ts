/**
 * Slider configuration for the Shopify-style image swiper.
 * Centralizing settings here makes it easy for learners to tweak
 * behavior (e.g. slides per view, spacing) without touching component code.
 */
/** Slider options that could be passed to Swiper (e.g. from a CMS or config) */
export interface SliderSettings {
  navigation: boolean;
  pagination: boolean;
  spaceBetween: number;
  slidesPerView: number;
}

/** Top-level schema; extend with more sections (e.g. theme, products) if needed */
export interface ShopifySchemaType {
  sliderSettings: SliderSettings;
}

/* Defaults; ImageSlider currently uses inline props – import this to drive Swiper when desired */
const shopifySchema: ShopifySchemaType = {
  sliderSettings: {
    navigation: true,
    pagination: true,
    spaceBetween: 50,
    slidesPerView: 1,
  },
};

export default shopifySchema;
