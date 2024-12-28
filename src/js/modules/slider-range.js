window.onload = function () {
  const sliderRanges = document.querySelectorAll('.slider-range');

  sliderRanges.forEach(sliderRange => {
    const sliderOne = sliderRange.querySelector('.slider-1');
    const sliderTwo = sliderRange.querySelector('.slider-2');
    const parent = sliderRange.closest('[slider-body]');
    const displayValOne = parent.querySelector('.field-price-1');
    const displayValTwo = parent.querySelector('.field-price-2');
    const sliderTrack = sliderRange.querySelector('.slider-track');

    const sliderMaxValue = sliderOne.max;
    const minGap = 0;

    sliderOne.addEventListener('input', () => slide(sliderOne, sliderTwo, displayValOne, displayValTwo, sliderTrack, sliderMaxValue, minGap, 'one'));
    sliderTwo.addEventListener('input', () => slide(sliderOne, sliderTwo, displayValOne, displayValTwo, sliderTrack, sliderMaxValue, minGap, 'two'));

    if (displayValOne) {
      displayValOne.addEventListener('input', ({ target }) => {
        sliderOne.value = target.value;
        updateTrack(sliderOne, sliderTwo, sliderTrack, sliderMaxValue);
      });
    }

    if (displayValTwo) {
      displayValTwo.addEventListener('input', ({ target }) => {
        sliderTwo.value = target.value;
        updateTrack(sliderOne, sliderTwo, sliderTrack, sliderMaxValue);
      });
    }

    // Initialize the slider colors
    updateTrack(sliderOne, sliderTwo, sliderTrack, sliderMaxValue);
  });
};

function slide(sliderOne, sliderTwo, displayValOne, displayValTwo, sliderTrack, sliderMaxValue, minGap, slider) {
  if (slider === 'one') {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
      sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    if (displayValOne) {
      displayValOne.value = sliderOne.value;
    }
  } else {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
      sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    if (displayValTwo) {
      displayValTwo.value = sliderTwo.value;
    }
  }
  updateTrack(sliderOne, sliderTwo, sliderTrack, sliderMaxValue);
}

function updateTrack(sliderOne, sliderTwo, sliderTrack, sliderMaxValue) {
  let percent1 = (sliderOne.value / sliderMaxValue) * 100;
  let percent2 = (sliderTwo.value / sliderMaxValue) * 100;
  sliderTrack.style.background = `linear-gradient(to right, var(--light-gray) ${percent1}%, var(--red) ${percent1}%, var(--red) ${percent2}%, var(--light-gray) ${percent2}%)`;
}
