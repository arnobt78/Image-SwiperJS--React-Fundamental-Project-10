/**
 * Slider configuration for the Shopify-style image swiper.
 * Centralizing settings here makes it easy for learners to tweak
 * behavior (e.g. slides per view, spacing) without touching component code.
 */
export interface SliderSettings {
  navigation: boolean;
  pagination: boolean;
  spaceBetween: number;
  slidesPerView: number;
}

export interface ShopifySchemaType {
  sliderSettings: SliderSettings;
}

const shopifySchema: ShopifySchemaType = {
  sliderSettings: {
    navigation: true,
    pagination: true,
    spaceBetween: 50,
    slidesPerView: 1,
  },
};

export default shopifySchema;
