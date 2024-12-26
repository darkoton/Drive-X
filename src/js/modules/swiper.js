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

  pagination: { el: '.products__pagination' },

  navigation: {
    nextEl: '.products__next',
    prevEl: '.products__prev',
  },

  breakpoints:{
    0:{
      slidesPerView: 2,
      spaceBetween: 10,
    },
    680:{
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1300:{
      slidesPerView: 4,
      spaceBetween: 30,
    }
  }
});
