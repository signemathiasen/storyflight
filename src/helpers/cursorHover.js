export function cursorHover() {
  let links = document.querySelectorAll('a');
  let buttons = document.querySelectorAll('button');
  let menu = document.querySelector('.burger-wrap');
  let cursor = document.querySelector('#cursor');

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

  menu.addEventListener('mouseover', function () {
    cursor.style.transform = 'scale(1.5)';
  });
  menu.addEventListener('mouseout', function () {
    cursor.style.transform = 'scale(1)';
  });
}
