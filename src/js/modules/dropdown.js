const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const button = dropdown.querySelector('.dropdown-open');
  const value = dropdown.querySelector('.dropdown-open > span');
  const list = dropdown.querySelector('.dropdown-list');

  button.onclick = () => {
    dropdown.classList.toggle('active');
  };

  list.querySelectorAll('li').forEach(li => {
    li.onclick = () => {
      dropdown.classList.remove('active');

      if(dropdown.classList.contains('no-value')){
        return;
      }
      value.textContent = li.textContent
      value.dataset.value = li.dataset.value
    };
  });
});

window.addEventListener('click', ({ target }) => {
  if (!target.closest('.dropdown')) {
    dropdowns.forEach(dropdown => {
      dropdown.classList.remove('active');
    });
  }
});
