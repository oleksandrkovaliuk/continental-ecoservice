const menu = document.querySelector('.mobile-full-menu');
const burger = document.querySelector('.burger');
const burger2 = document.querySelector('.burger2');
const contactsHeadMenuBtn = document.querySelector('#contacts-headmenu');
const headMenuContainer = document.querySelector('#headmenu-container');

burger.addEventListener('click', () => {
  menu.style = 'display: flex';
});
burger2.addEventListener('click', () => {
  menu.style = 'display: none';
});
contactsHeadMenuBtn.addEventListener('click', () => {
  contactsContainer.classList.add('show');
})
contactsHeadMenuBtn.addEventListener('click', () => {
  menu.style = 'display:none';
})


const orderServiceBtn = document.querySelector('#order-service-btn');
const orderServiceBtnClose = document.querySelector('#order-service-btn-close');
const orderServiceContainer = document.querySelector('#order-service-container');
const orderInContacts = document.querySelector('#orderservice-contacts');

orderServiceBtn.addEventListener('click', () => {
  orderServiceContainer.classList.add('show');
});
orderServiceBtnClose.addEventListener('click', () => {
  orderServiceContainer.classList.remove('show');
});
orderInContacts.addEventListener('click', () => {
  orderServiceContainer.classList.add('show');
})

const contactsBtn = document.querySelector('#contacts-btns');
const contactsContainer = document.querySelector('#contacts-container');
const contactsRemove = document.querySelector('#contacts-remove');
const orderIncontactsremove = document.querySelector('#orderservice-contacts');

contactsBtn.addEventListener('click', () => {
  contactsContainer.classList.add('show');
});
contactsRemove.addEventListener('click', () => {
  contactsContainer.classList.remove('show');
})
orderIncontactsremove.addEventListener('click', () => {
  contactsContainer.classList.remove('show');
})