window.onload = function () {
  slideOne();
  slideTwo();
};

let sliderOne = document.getElementById('slider-1');
let sliderTwo = document.getElementById('slider-2');
let displayValOne = document.querySelector('.field-price-1');
let displayValTwo = document.querySelector('.field-price-2');
let minGap = 0;
let sliderTrack = document.querySelector('.slider-track');
let sliderMaxValue = document.getElementById('slider-1').max;

sliderOne.addEventListener('input', slideOne);
sliderTwo.addEventListener('input', slideTwo);

if (displayValOne) {
  displayValOne.addEventListener('input', ({ target }) => {
    sliderOne.value = target.value;
    fillColor();
  });
}

if (displayValTwo) {
  displayValTwo.addEventListener('input', ({ target }) => {
    sliderOne.value = target.value;
    fillColor();
  });
}

function slideOne() {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderOne.value = parseInt(sliderTwo.value) - minGap;
  }

  if (displayValOne) {
    displayValOne.value = sliderOne.value;
  }
  fillColor();
}
function slideTwo() {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderTwo.value = parseInt(sliderOne.value) + minGap;
  }
  if (displayValTwo) {
    displayValTwo.value = sliderTwo.value;
  }
  fillColor();
}
function fillColor() {
  let percent1 = (sliderOne.value / sliderMaxValue) * 100;
  let percent2 = (sliderTwo.value / sliderMaxValue) * 100;
  sliderTrack.style.background = `linear-gradient(to right, var(--light-gray) ${percent1}% , var(--red) ${percent1}% , var(--red) ${percent2}%, var(--light-gray) ${percent2}%)`;
}
