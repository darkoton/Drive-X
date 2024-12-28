
(()=>{"use strict";var __webpack_modules__=({"./src/js/modules/device.js":((__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\r\n  let isMobile = {\r\n    Android: function () { return navigator.userAgent.match(/Android/i); },\r\n    BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },\r\n    iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },\r\n    Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },\r\n    Windows: function () { return navigator.userAgent.match(/IEMobile/i); },\r\n    any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }\r\n  };\r\n\r\n  if (isMobile.any()) {\r\n    document.body.classList.add(\"_touch\");\r\n  } else {\r\n    document.body.classList.add(\"_pc\");\r\n  }\r\n} \n\n//# sourceURL=webpack://Drive-X/./src/js/modules/device.js?");}),"./src/js/modules/dropdown.js":((__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\nconst dropdowns = document.querySelectorAll('.dropdown');\r\n\r\ndropdowns.forEach(dropdown => {\r\n  const button = dropdown.querySelector('.dropdown-open');\r\n  const value = dropdown.querySelector('.dropdown-open > span');\r\n  const list = dropdown.querySelector('.dropdown-list');\r\n\r\n  button.onclick = () => {\r\n    dropdown.classList.toggle('active');\r\n  };\r\n\r\n  list.querySelectorAll('li').forEach(li => {\r\n    li.onclick = () => {\r\n      dropdown.classList.remove('active');\r\n\r\n      if(dropdown.classList.contains('no-value')){\r\n        return;\r\n      }\r\n      value.textContent = li.textContent\r\n      value.dataset.value = li.dataset.value\r\n    };\r\n  });\r\n});\r\n\r\nwindow.addEventListener('click', ({ target }) => {\r\n  if (!target.closest('.dropdown')) {\r\n    dropdowns.forEach(dropdown => {\r\n      dropdown.classList.remove('active');\r\n    });\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://Drive-X/./src/js/modules/dropdown.js?");}),"./src/js/modules/slider-range.js":((__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\nwindow.onload = function () {\r\n  const sliderRanges = document.querySelectorAll('.slider-range');\r\n\r\n  sliderRanges.forEach(sliderRange => {\r\n    const sliderOne = sliderRange.querySelector('.slider-1');\r\n    const sliderTwo = sliderRange.querySelector('.slider-2');\r\n    const parent = sliderRange.closest('[slider-body]');\r\n    const displayValOne = parent.querySelector('.field-price-1');\r\n    const displayValTwo = parent.querySelector('.field-price-2');\r\n    const sliderTrack = sliderRange.querySelector('.slider-track');\r\n\r\n    const sliderMaxValue = sliderOne.max;\r\n    const minGap = 0;\r\n\r\n    sliderOne.addEventListener('input', () => slide(sliderOne, sliderTwo, displayValOne, displayValTwo, sliderTrack, sliderMaxValue, minGap, 'one'));\r\n    sliderTwo.addEventListener('input', () => slide(sliderOne, sliderTwo, displayValOne, displayValTwo, sliderTrack, sliderMaxValue, minGap, 'two'));\r\n\r\n    if (displayValOne) {\r\n      displayValOne.addEventListener('input', ({ target }) => {\r\n        sliderOne.value = target.value;\r\n        updateTrack(sliderOne, sliderTwo, sliderTrack, sliderMaxValue);\r\n      });\r\n    }\r\n\r\n    if (displayValTwo) {\r\n      displayValTwo.addEventListener('input', ({ target }) => {\r\n        sliderTwo.value = target.value;\r\n        updateTrack(sliderOne, sliderTwo, sliderTrack, sliderMaxValue);\r\n      });\r\n    }\r\n\r\n    // Initialize the slider colors\r\n    updateTrack(sliderOne, sliderTwo, sliderTrack, sliderMaxValue);\r\n  });\r\n};\r\n\r\nfunction slide(sliderOne, sliderTwo, displayValOne, displayValTwo, sliderTrack, sliderMaxValue, minGap, slider) {\r\n  if (slider === 'one') {\r\n    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {\r\n      sliderOne.value = parseInt(sliderTwo.value) - minGap;\r\n    }\r\n    if (displayValOne) {\r\n      displayValOne.value = sliderOne.value;\r\n    }\r\n  } else {\r\n    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {\r\n      sliderTwo.value = parseInt(sliderOne.value) + minGap;\r\n    }\r\n    if (displayValTwo) {\r\n      displayValTwo.value = sliderTwo.value;\r\n    }\r\n  }\r\n  updateTrack(sliderOne, sliderTwo, sliderTrack, sliderMaxValue);\r\n}\r\n\r\nfunction updateTrack(sliderOne, sliderTwo, sliderTrack, sliderMaxValue) {\r\n  let percent1 = (sliderOne.value / sliderMaxValue) * 100;\r\n  let percent2 = (sliderTwo.value / sliderMaxValue) * 100;\r\n  sliderTrack.style.background = `linear-gradient(to right, var(--light-gray) ${percent1}%, var(--red) ${percent1}%, var(--red) ${percent2}%, var(--light-gray) ${percent2}%)`;\r\n}\r\n\n\n//# sourceURL=webpack://Drive-X/./src/js/modules/slider-range.js?");}),"./src/js/modules/spoiler.js":((__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\nconst spollersArray = document.querySelectorAll('[data-spollers]');\r\n\r\nif (spollersArray.length > 0) {\r\n  // Получение обычных спойлеров\r\n  const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {\r\n    return !item.dataset.spollers.split(\",\")[0];\r\n  });\r\n  // Инициализация обычных спойлеров\r\n  if (spollersRegular.length > 0) {\r\n    initSpollers(spollersRegular);\r\n  }\r\n\r\n  // Получение спойлеров с медиа запросами\r\n  const spollersMedia = Array.from(spollersArray).filter(function (item, index, self) {\r\n    return item.dataset.spollers.split(\",\")[0];\r\n  });\r\n\r\n  // Инициализация спойлеров с медиа запросами\r\n  if (spollersMedia.length > 0) {\r\n    const breakpointsArray = [];\r\n    spollersMedia.forEach(item => {\r\n      const params = item.dataset.spollers;\r\n      const breakpoint = {};\r\n      const paramsArray = params.split(\",\");\r\n      breakpoint.value = paramsArray[0];\r\n      breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : \"max\";\r\n      breakpoint.item = item;\r\n      breakpointsArray.push(breakpoint);\r\n    });\r\n\r\n    // Получаем уникальные брейкпоинты\r\n    let mediaQueries = breakpointsArray.map(function (item) {\r\n      return '(' + item.type + \"-width: \" + item.value + \"px),\" + item.value + ',' + item.type;\r\n    });\r\n    mediaQueries = mediaQueries.filter(function (item, index, self) {\r\n      return self.indexOf(item) === index;\r\n    });\r\n\r\n    // Работаем с каждым брейкпоинтом\r\n    mediaQueries.forEach(breakpoint => {\r\n      const paramsArray = breakpoint.split(\",\");\r\n      const mediaBreakpoint = paramsArray[1];\r\n      const mediaType = paramsArray[2];\r\n      const matchMedia = window.matchMedia(paramsArray[0]);\r\n\r\n      // Объекты с нужными условиями\r\n      const spollersArray = breakpointsArray.filter(function (item) {\r\n        if (item.value === mediaBreakpoint && item.type === mediaType) {\r\n          return true;\r\n        }\r\n      });\r\n      // Событие\r\n      matchMedia.addListener(function () {\r\n        initSpollers(spollersArray, matchMedia);\r\n      });\r\n      initSpollers(spollersArray, matchMedia);\r\n    });\r\n  }\r\n  // Инициализация\r\n  function initSpollers(spollersArray, matchMedia = false) {\r\n    spollersArray.forEach(spollersBlock => {\r\n      spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;\r\n      if (matchMedia.matches || !matchMedia) {\r\n        spollersBlock.classList.add('_init');\r\n        initSpollerBody(spollersBlock);\r\n        spollersBlock.addEventListener(\"click\", setSpollerAction);\r\n      } else {\r\n        spollersBlock.classList.remove('_init');\r\n        initSpollerBody(spollersBlock, false);\r\n        spollersBlock.removeEventListener(\"click\", setSpollerAction);\r\n      }\r\n    });\r\n  }\r\n  // Работа с контентом\r\n  function initSpollerBody(spollersBlock, hideSpollerBody = true) {\r\n    const spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');\r\n    if (spollerTitles.length > 0) {\r\n      spollerTitles.forEach(spollerTitle => {\r\n        if (hideSpollerBody) {\r\n          spollerTitle.removeAttribute('tabindex');\r\n          if (!spollerTitle.classList.contains('_active')) {\r\n            spollerTitle.nextElementSibling.hidden = true;\r\n          }\r\n        } else {\r\n          spollerTitle.setAttribute('tabindex', '-1');\r\n          spollerTitle.nextElementSibling.hidden = false;\r\n        }\r\n      });\r\n    }\r\n  }\r\n  function setSpollerAction(e) {\r\n    const el = e.target;\r\n    if (el.hasAttribute('data-spoller') || el.closest('[data-spoller]')) {\r\n      const spollerTitle = el.hasAttribute('data-spoller') ? el : el.closest('[data-spoller]');\r\n      const spollersBlock = spollerTitle.closest('[data-spollers]');\r\n      const oneSpoller = spollersBlock.hasAttribute('data-one-spoller') ? true : false;\r\n      if (!spollersBlock.querySelectorAll('._slide').length) {\r\n        if (oneSpoller && !spollerTitle.classList.contains('_active')) {\r\n          hideSpollersBody(spollersBlock);\r\n        }\r\n        spollerTitle.classList.toggle('_active');\r\n        _slideToggle(spollerTitle.nextElementSibling, 500);\r\n      }\r\n      e.preventDefault();\r\n    }\r\n  }\r\n  function hideSpollersBody(spollersBlock) {\r\n    const spollerActiveTitle = spollersBlock.querySelector('[data-spoller]._active');\r\n    if (spollerActiveTitle) {\r\n      spollerActiveTitle.classList.remove('_active');\r\n      _slideUp(spollerActiveTitle.nextElementSibling, 500);\r\n    }\r\n  }\r\n}\r\n\r\nlet _slideUp = (target, duration = 500) => {\r\n  if (!target.classList.contains('_slide')) {\r\n    target.classList.add('_slide');\r\n    target.style.transitionProperty = 'height, margin, padding';\r\n    target.style.transitionDuration = duration + 'ms';\r\n    target.style.height = target.offsetHeight + 'px';\r\n    target.offsetHeight;\r\n    target.style.overflow = 'hidden';\r\n    target.style.height = 0;\r\n    target.style.paddingTop = 0;\r\n    target.style.paddingBottom = 0;\r\n    target.style.marginTop = 0;\r\n    target.style.marginBottom = 0;\r\n    window.setTimeout(() => {\r\n      target.hidden = true;\r\n      target.style.removeProperty('height');\r\n      target.style.removeProperty('padding-top');\r\n      target.style.removeProperty('padding-bottom');\r\n      target.style.removeProperty('margin-top');\r\n      target.style.removeProperty('margin-bottom');\r\n      target.style.removeProperty('overflow');\r\n      target.style.removeProperty('transition-duration');\r\n      target.style.removeProperty('transition-property');\r\n      target.classList.remove('_slide');\r\n    }, duration);\r\n  }\r\n}\r\nlet _slideDown = (target, duration = 500) => {\r\n  if (!target.classList.contains('_slide')) {\r\n    target.classList.add('_slide');\r\n    if (target.hidden) {\r\n      target.hidden = false;\r\n    }\r\n    let height = target.offsetHeight;\r\n    target.style.overflow = 'hidden';\r\n    target.style.height = 0;\r\n    target.style.paddingTop = 0;\r\n    target.style.paddingBottom = 0;\r\n    target.style.marginTop = 0;\r\n    target.style.marginBottom = 0;\r\n    target.offsetHeight;\r\n    target.style.transitionProperty = \"height, margin, padding\";\r\n    target.style.transitionDuration = duration + 'ms';\r\n    target.style.height = height + 'px';\r\n    target.style.removeProperty('padding-top');\r\n    target.style.removeProperty('padding-bottom');\r\n    target.style.removeProperty('margin-top');\r\n    target.style.removeProperty('margin-bottom');\r\n    window.setTimeout(() => {\r\n      target.style.removeProperty('height');\r\n      target.style.removeProperty('overflow');\r\n      target.style.removeProperty('transition-duration');\r\n      target.style.removeProperty('transition-property');\r\n      target.classList.remove('_slide');\r\n    }, duration);\r\n  }\r\n}\r\nlet _slideToggle = (target, duration = 500) => {\r\n  if (target.hidden) {\r\n    return _slideDown(target, duration);\r\n  } else {\r\n    return _slideUp(target, duration);\r\n  }\r\n}\n\n//# sourceURL=webpack://Drive-X/./src/js/modules/spoiler.js?");}),"./src/js/modules/swiper.js":((__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\nconst main = document.querySelector('.main__banners-slider');\r\nlet mainSlider;\r\nif (main) {\r\n  mainSlider = new Swiper(main, {\r\n    slidesPerView: 1,\r\n    spaceBetween: 30,\r\n    grabCursor: true,\r\n    loop: true,\r\n    speed: 800,\r\n\r\n    pagination: { el: '.main__banners-pagination' },\r\n  });\r\n}\r\n\r\nconst products = document.querySelector('.products__slider');\r\nlet productsSlider;\r\nif (products) {\r\n  productsSlider = new Swiper(products, {\r\n    slidesPerView: 4,\r\n    spaceBetween: 30,\r\n    grabCursor: true,\r\n\r\n    pagination: { el: '.products__pagination' },\r\n\r\n    navigation: {\r\n      nextEl: '.products__next',\r\n      prevEl: '.products__prev',\r\n    },\r\n\r\n    breakpoints: {\r\n      0: {\r\n        slidesPerView: 2,\r\n        spaceBetween: 10,\r\n      },\r\n      680: {\r\n        slidesPerView: 3,\r\n        spaceBetween: 10,\r\n      },\r\n      1300: {\r\n        slidesPerView: 4,\r\n        spaceBetween: 30,\r\n      },\r\n    },\r\n  });\r\n}\r\n\r\nconst reviews = document.querySelector('.reviews__slider');\r\nlet reviewsSlider;\r\nif (reviews) {\r\n  reviewsSlider = new Swiper(reviews, {\r\n    slidesPerView: 1,\r\n    spaceBetween: 10,\r\n    grabCursor: true,\r\n    speed: 800,\r\n\r\n    navigation: {\r\n      nextEl: '.reviews__slider-next',\r\n      prevEl: '.reviews__slider-prev',\r\n    },\r\n  });\r\n}\r\n\r\nconst productCardGalleryThumb = document.querySelector('.product-card__slider-thumb');\r\n\r\nlet productCardGalleryThumbSlider;\r\nif (productCardGalleryThumb) {\r\n  productCardGalleryThumbSlider = new Swiper(productCardGalleryThumb, {\r\n    spaceBetween: 10,\r\n    slidesPerView: 4,\r\n    navigation: {\r\n      nextEl: '.product-card__slider-thumb-next',\r\n      prevEl: '.product-card__slider-thumb-prev',\r\n    },\r\n    watchSlidesProgress: true,\r\n    breakpoints: {\r\n      0: {\r\n        slidesPerView: 3,\r\n        spaceBetween: 10,\r\n      },\r\n      680: {\r\n        slidesPerView: 4,\r\n        spaceBetween: 10,\r\n      },\r\n    },\r\n  });\r\n}\r\n\r\nlet productCardGallery = document.querySelector('.product-card__slider');\r\nlet productCardGallerySlider;\r\nif (productCardGallery) {\r\n  productCardGallerySlider = new Swiper(productCardGallery, {\r\n    spaceBetween: 30,\r\n    thumbs: {\r\n      swiper: productCardGalleryThumbSlider,\r\n    },\r\n  });\r\n}\r\n\r\nconst feeds = document.querySelectorAll('.feed__slider');\r\n\r\nfeeds.forEach(feed => {\r\n  const parent = feed.closest('.feed');\r\n  const pagination = parent.querySelector('.feed__pagination');\r\n  const prev = parent.querySelector('.feed__prev');\r\n  const next = parent.querySelector('.feed__next');\r\n\r\n  let feedSlider;\r\n  if (feed) {\r\n    feedSlider = new Swiper(feed, {\r\n      slidesPerView: 4,\r\n      spaceBetween: 30,\r\n      grabCursor: true,\r\n\r\n      pagination: { el: pagination },\r\n\r\n      navigation: {\r\n        nextEl: next,\r\n        prevEl: prev,\r\n      },\r\n\r\n      breakpoints: {\r\n        0: {\r\n          slidesPerView: 2,\r\n          spaceBetween: 10,\r\n        },\r\n        440: {\r\n          slidesPerView: 2.5,\r\n          spaceBetween: 10,\r\n        },\r\n        680: {\r\n          slidesPerView: 3,\r\n          spaceBetween: 10,\r\n        },\r\n        1300: {\r\n          slidesPerView: 4,\r\n          spaceBetween: 30,\r\n        },\r\n      },\r\n    });\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://Drive-X/./src/js/modules/swiper.js?");}),"./src/js/modules/tabs.js":((__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\nlet tabs = () => {\r\n  let nav = document.querySelectorAll('.tab'),\r\n    result = document.querySelectorAll('.tab-block'),\r\n    tabName;\r\n\r\n  nav.forEach(item => {\r\n    item.addEventListener('click', selectnav);\r\n  });\r\n\r\n  function selectnav() {\r\n    const parent = this.closest('.tabs');\r\n    if (!parent) {\r\n      return;\r\n    }\r\n\r\n    const currentNav = parent.querySelectorAll('.tab');\r\n    currentNav.forEach(item => {\r\n      item.classList.remove('_active');\r\n    });\r\n    this.classList.add('_active');\r\n    tabName = this.getAttribute('data-tab-name');\r\n    selectresult(tabName, parent);\r\n  }\r\n\r\n  function selectresult(tabName, parent) {\r\n    const blocks = parent.querySelectorAll('.tab-block');\r\n    blocks.forEach(item => {\r\n      item.classList.contains(tabName) ? item.classList.add('_active') : item.classList.remove('_active');\r\n    });\r\n  }\r\n};\r\n\r\ntabs();\r\n\n\n//# sourceURL=webpack://Drive-X/./src/js/modules/tabs.js?");}),"./src/js/modules/webp.js":((__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isWebp)\n/* harmony export */ });\n/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */\r\nfunction isWebp() {\r\n  // Проверка поддержки webp\r\n  function testWebP(callback) {\r\n    let webP = new Image();\r\n    webP.onload = webP.onerror = () => {\r\n      callback(webP.height == 2)\r\n    }\r\n    webP.src = \"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA\"\r\n  }\r\n\r\n  // Добавление класса _webp или _no-webp для HTML\r\n  testWebP((support) => {\r\n    let className = support === true ? \"webp\" : \"no-webp\";\r\n    document.documentElement.classList.add(className);\r\n  })\r\n}\n\n//# sourceURL=webpack://Drive-X/./src/js/modules/webp.js?");}),"./src/js/script.js":((__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_webp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/webp.js */ \"./src/js/modules/webp.js\");\n/* harmony import */ var _modules_device_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/device.js */ \"./src/js/modules/device.js\");\n/* harmony import */ var _modules_spoiler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/spoiler.js */ \"./src/js/modules/spoiler.js\");\n/* harmony import */ var _modules_swiper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/swiper.js */ \"./src/js/modules/swiper.js\");\n/* harmony import */ var _modules_tabs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs.js */ \"./src/js/modules/tabs.js\");\n/* harmony import */ var _modules_dropdown_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/dropdown.js */ \"./src/js/modules/dropdown.js\");\n/* harmony import */ var _modules_slider_range_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider-range.js */ \"./src/js/modules/slider-range.js\");\n//< \" CONNECTING JS COMPONENTS \" >=============================================================================================================>//\r\n //SUPPORT WEBP\r\n\r\n //DEFINE DEVICE\r\n\r\n// import './modules/preloader.js'; // PRELOADER\r\n\r\n // SPOILERS\r\n\r\n// import \"./modules/dynamic_adap.js\"  // DYNAMIC ADAPTIVE\r\n\r\n// import \"./modules/scroll_header.js\"  // SCROLL HEADER\r\n\r\n // SLIDER SWIPER\r\n\r\n// import \"./modules/animate_scroll.js\"  // ANIMATE WITH SCROLL\r\n\r\n  // TABS\r\n\r\n// import \"./modules/parallax.js\"  // PARALLAX EFFECT\r\n\r\n // DROPDOWN\r\n\r\n // Slider range\r\n\r\n//< \" СКРИПТЫ \" >=============================================================================================================>//\r\n\r\n(0,_modules_webp_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_device_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\r\n// FILTET SIDEBAR\r\n\r\nconst buttonOpenSidebar = document.querySelector('.categories__filter-open');\r\nconst sidebarFilters = document.querySelector('.categories__sidebar');\r\nconst sidebarBackward = document.querySelector('.categories__sidebar-backward');\r\n\r\nif (buttonOpenSidebar && sidebarFilters) {\r\n  buttonOpenSidebar.addEventListener('click', () => {\r\n    sidebarFilters.classList.add('active');\r\n    sidebarBackward.classList.add('active');\r\n  });\r\n\r\n  sidebarFilters.querySelector('.categories__sidebar-close').addEventListener('click', () => {\r\n    sidebarFilters.classList.remove('active');\r\n    sidebarBackward.classList.remove('active');\r\n  });\r\n\r\n  sidebarBackward.addEventListener('click', () => {\r\n    sidebarFilters.classList.remove('active');\r\n    sidebarBackward.classList.remove('active');\r\n  });\r\n}\r\n\r\n// Remove filter\r\nconst filters = document.querySelectorAll('.categories__filter');\r\n\r\nfilters.forEach(filter => {\r\n  const button = filter.querySelector('button');\r\n\r\n  if (button) {\r\n    button.addEventListener('click', () => {\r\n      if (button.dataset.all === '') {\r\n        filters.forEach(fl => {\r\n          fl.remove();\r\n        });\r\n      } else {\r\n        filter.remove();\r\n      }\r\n    });\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://Drive-X/./src/js/script.js?");})});var __webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(cachedModule!==undefined){return cachedModule.exports;}
var module=__webpack_module_cache__[moduleId]={exports:{}};__webpack_modules__[moduleId](module,module.exports,__webpack_require__);return module.exports;}
(()=>{__webpack_require__.d=(exports,definition)=>{for(var key in definition){if(__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)){Object.defineProperty(exports,key,{enumerable:true,get:definition[key]});}}};})();(()=>{__webpack_require__.o=(obj,prop)=>(Object.prototype.hasOwnProperty.call(obj,prop))})();(()=>{__webpack_require__.r=(exports)=>{if(typeof Symbol!=='undefined'&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});}
Object.defineProperty(exports,'__esModule',{value:true});};})();var __webpack_exports__=__webpack_require__("./src/js/script.js");})();