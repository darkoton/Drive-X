//< " CONNECTING JS COMPONENTS " >=============================================================================================================>//
import isWebp from './modules/webp.js'; //SUPPORT WEBP

import isDevice from './modules/device.js'; //DEFINE DEVICE

// import './modules/preloader.js'; // PRELOADER

import './modules/spoiler.js'; // SPOILERS

// import "./modules/dynamic_adap.js"  // DYNAMIC ADAPTIVE

// import "./modules/scroll_header.js"  // SCROLL HEADER

import './modules/swiper.js'; // SLIDER SWIPER

// import "./modules/animate_scroll.js"  // ANIMATE WITH SCROLL

// import "./modules/tabs.js"  // TABS

// import "./modules/parallax.js"  // PARALLAX EFFECT

import './modules/dropdown.js'; // DROPDOWN

import './modules/slider-range.js'; // Slider range

//< " СКРИПТЫ " >=============================================================================================================>//

isWebp();
isDevice();

// FILTET SIDEBAR

const buttonOpenSidebar = document.querySelector('.categories__filter-open');
const sidebarFilters = document.querySelector('.categories__sidebar');
const sidebarBackward = document.querySelector('.categories__sidebar-backward');

if (buttonOpenSidebar && sidebarFilters) {
  buttonOpenSidebar.addEventListener('click', () => {
    sidebarFilters.classList.add('active');
    sidebarBackward.classList.add('active');
  });

  sidebarFilters.querySelector('.categories__sidebar-close').addEventListener('click', () => {
    sidebarFilters.classList.remove('active');
    sidebarBackward.classList.remove('active');
  });

  sidebarBackward.addEventListener('click', () => {
    sidebarFilters.classList.remove('active');
    sidebarBackward.classList.remove('active');
  });
}

// Remove filter
const filters = document.querySelectorAll('.categories__filter');

filters.forEach(filter => {
  const button = filter.querySelector('button');

  if (button) {
    button.addEventListener('click', () => {
      if (button.dataset.all === '') {
        filters.forEach(fl => {
          fl.remove();
        });
      } else {
        filter.remove();
      }
    });
  }
});
