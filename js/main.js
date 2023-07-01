const menu = document.querySelector('.mobile-full-menu');
const burger = document.querySelector('.burger');
const burger2 = document.querySelector('.burger2');

burger.addEventListener('click', () => {
  menu.style = 'display: flex';
});
burger2.addEventListener('click', () => {
  menu.style = 'display: none';
});

const orderServiceBtn = document.querySelector('#order-service-btn');
const orderServiceBtnClose = document.querySelector('#order-service-btn-close');
const orderServiceContainer = document.querySelector('#order-service-container');

orderServiceBtn.addEventListener('click', () => {
  orderServiceContainer.classList.add('show');
});
orderServiceBtnClose.addEventListener('click', () => {
  orderServiceContainer.classList.remove('show');
});