const mainMenu = document.querySelector('.navbar-links');
const hamburgerIcon = document.querySelector('.hamb');
const crossIcon = document.querySelector('.navbar-links img.cross');

hamburgerIcon.addEventListener('click', () => {
  mainMenu.classList.toggle('show');
  hamburgerIcon.classList.toggle('cross');
});

crossIcon.addEventListener('click', () => {
  mainMenu.classList.remove('show');
  hamburgerIcon.classList.remove('cross');
});