export function cursorHover() {
  let links = document.querySelectorAll('a');
  let buttons = document.querySelectorAll('button');
  let menu = document.querySelector('.burger-wrap');
  let arrowLeft = document.querySelector('.swiper-button-prev');
  let arrowRight = document.querySelector('.swiper-button-next');
  let cursor = document.querySelector('#cursor');

  let hoverElements = [menu, arrowLeft, arrowRight];

  console.log(hoverElements);

  // hover på links
  links.forEach((link) => {
    link.addEventListener('mouseover', function () {
      cursor.style.transform = 'scale(1.5)';
    });
  });
  links.forEach((link) => {
    link.addEventListener('mouseout', function () {
      cursor.style.transform = 'scale(1)';
    });
  });

  // hover på knapper
  buttons.forEach((button) => {
    button.addEventListener('mouseover', function () {
      cursor.style.transform = 'scale(1.5)';
    });
  });
  buttons.forEach((button) => {
    button.addEventListener('mouseout', function () {
      cursor.style.transform = 'scale(1)';
    });
  });

  hoverElements.forEach((elm) => {
    elm.addEventListener('mouseover', function () {
      cursor.style.transform = 'scale(1.5)';
    });
  });
  hoverElements.forEach((elm) => {
    elm.addEventListener('mouseout', function () {
      cursor.style.transform = 'scale(1)';
    });
  });
}
