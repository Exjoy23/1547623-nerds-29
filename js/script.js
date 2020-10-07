'use strict';

function getShow(selector, selector1) {
  document.querySelector(selector).classList.add('current');
  if (selector1) {
    document.querySelector(selector1).classList.add('current');
  }
}

function removeCurrent(doc) {
  doc.forEach(item => item.classList.remove('current'));
}

function getHide(selector, selector1) {
  removeCurrent(document.querySelectorAll(selector));
  if (selector1) {
    removeCurrent(document.querySelectorAll(selector1));
  }
}

if (document.querySelector('#index')) {
  const button1 = document.querySelector('#button1');
  button1.addEventListener('click', () => {
    getHide('.advantages__slider__button', '.advantages__item');
    getShow('.advantages__slider__button:nth-child(1)',
      '.advantages__item:nth-child(1)');
  });

  const button2 = document.querySelector('#button2');
  button2.addEventListener('click', () => {
    getHide('.advantages__slider__button', '.advantages__item');
    getShow('.advantages__slider__button:nth-child(2)',
      '.advantages__item:nth-child(2)');
  });

  const button3 = document.querySelector('#button3');
  button3.addEventListener('click', () => {
    getHide('.advantages__slider__button', '.advantages__item');
    getShow('.advantages__slider__button:nth-child(3)',
      '.advantages__item:nth-child(3)');
  });
}

const buttonOpenPopup = document.querySelector('#open__popup');
buttonOpenPopup.addEventListener('click', (event) => {
  event.preventDefault();
  getShow('.contacts__popup');
});

const buttonClosePopup = document.querySelector('#close__popup');
buttonClosePopup.addEventListener('click', () => getHide('.contacts__popup'));