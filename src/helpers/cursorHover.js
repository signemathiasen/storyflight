export function cursorHover() {
  let links = document.querySelectorAll('a');
  let buttons = document.querySelectorAll('button');
  let menu = document.querySelector('.burger-wrap');
  let arrowLeft = document.querySelector('.swiper-button-prev');
  let arrowRight = document.querySelector('.swiper-button-next');

  let cursor = document.querySelector('#cursor');

  let hoverElements = [menu, arrowLeft, arrowRight, ...links, ...buttons];

  // hover på elementer
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
