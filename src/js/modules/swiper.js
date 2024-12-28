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
    spaceBetween: 10,
    slidesPerView: 4,
    navigation: {
      nextEl: '.product-card__slider-thumb-next',
      prevEl: '.product-card__slider-thumb-prev',
    },
    watchSlidesProgress: true,
    breakpoints: {
      0: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      680: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
  });
}

let productCardGallery = document.querySelector('.product-card__slider');
let productCardGallerySlider;
if (productCardGallery) {
  productCardGallerySlider = new Swiper(productCardGallery, {
    spaceBetween: 30,
    thumbs: {
      swiper: productCardGalleryThumbSlider,
    },
  });
}

const feeds = document.querySelectorAll('.feed__slider');

feeds.forEach(feed => {
  const parent = feed.closest('.feed');
  const pagination = parent.querySelector('.feed__pagination');
  const prev = parent.querySelector('.feed__prev');
  const next = parent.querySelector('.feed__next');

  let feedSlider;
  if (feed) {
    feedSlider = new Swiper(feed, {
      slidesPerView: 4,
      spaceBetween: 30,
      grabCursor: true,

      pagination: { el: pagination },

      navigation: {
        nextEl: next,
        prevEl: prev,
      },

      breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        440: {
          slidesPerView: 2.5,
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
});
