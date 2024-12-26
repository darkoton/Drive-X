const mainSlider = new Swiper('.main__banners-slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  grabCursor: true,
  loop: true,
  speed: 800,

  pagination: { el: '.main__banners-pagination' },
});

const productsSlider = new Swiper('.products__slider', {
  slidesPerView: 4,
  spaceBetween: 30,
  grabCursor: true,
  loop: true,
  speed: 800,

  autoplay: {
    delay: 3500,
  },

  pagination: { el: '.products__pagination' },

  navigation: {
    nextEl: '.products__prev',
    prevEl: '.products__next',
  },
});
