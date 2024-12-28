const main = document.querySelector('.main__banners-slider');
let mainSlider;
if (main) {
  mainSlider = new Swiper(main, {
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    speed: 800,

    pagination: { el: '.main__banners-pagination' },
  });
}

const products = document.querySelector('.products__slider');
let productsSlider;
if (products) {
  productsSlider = new Swiper(products, {
    slidesPerView: 4,
    spaceBetween: 30,
    grabCursor: true,

    pagination: { el: '.products__pagination' },

    navigation: {
      nextEl: '.products__next',
      prevEl: '.products__prev',
    },

    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      680: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1300: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
}

const reviews = document.querySelector('.reviews__slider');
let reviewsSlider;
if (reviews) {
  reviewsSlider = new Swiper(reviews, {
    slidesPerView: 1,
    spaceBetween: 10,
    grabCursor: true,
    speed: 800,

    navigation: {
      nextEl: '.reviews__slider-next',
      prevEl: '.reviews__slider-prev',
    },
  });
}

const productCardGalleryThumb = document.querySelector('.product-card__slider-thumb');

let productCardGalleryThumbSlider;
if (productCardGalleryThumb) {
  productCardGalleryThumbSlider = new Swiper(productCardGalleryThumb, {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    freeMode: true,
    watchSlidesProgress: true,
  });
}

let productCardGallery = document.querySelector('.product-card__slider');
let productCardGallerySlider;
if (productCardGallery) {
  productCardGallerySlider = new Swiper(productCardGallery, {
    loop: true,
    spaceBetween: 30,
    thumbs: {
      swiper: productCardGalleryThumbSlider,
    },
  });
}
