const menu = document.querySelector('.mobile-full-menu');
const burger = document.querySelector('.burger');
const burger2 = document.querySelector('.burger2');

burger.addEventListener('click', () => {
  menu.style = 'display: flex';
});
burger2.addEventListener('click', () => {
  menu.style = 'display: none';
});