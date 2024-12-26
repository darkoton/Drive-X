const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const button = dropdown.querySelector('.dropdown-open');
  const list = dropdown.querySelector('.dropdown-list');

  button.onclick = () => {
    dropdown.classList.add('active');
  };

  list.querySelectorAll('li').forEach(li => {
    li.onclick = () => {
      dropdown.classList.remove('active');
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
