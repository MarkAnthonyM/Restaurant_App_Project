const hamIcon = document.querySelector('.hamburger');
const hamMenu = document.querySelector('.hamburger-container');
const main = document.querySelector('main');

/**********************
  Hamburger menu script
**********************/
hamIcon.addEventListener('click', function(event) {
  hamMenu.classList.toggle('nav-open');
});

main.addEventListener('click', function(event) {
  this.classList.remove('nav-open');
});
