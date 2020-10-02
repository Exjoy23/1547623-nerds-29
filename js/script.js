'use strict';

function getShow(selector) {
  document.querySelector(selector).classList.add('current');
}

function getHide(selector) {
  document.querySelector(selector).classList.remove('current');
}

function slider1() {
  getShow('.advantages__slider__button:nth-child(1)');
  getHide('.advantages__slider__button:nth-child(2)');
  getHide('.advantages__slider__button:nth-child(3)');
  getShow('.advantages__item:nth-child(1)');
  getHide('.advantages__item:nth-child(2)');
  getHide('.advantages__item:nth-child(3)');
}

function slider2() {
  getShow('.advantages__slider__button:nth-child(2)');
  getHide('.advantages__slider__button:nth-child(1)');
  getHide('.advantages__slider__button:nth-child(3)');
  getShow('.advantages__item:nth-child(2)');
  getHide('.advantages__item:nth-child(1)');
  getHide('.advantages__item:nth-child(3)');
}

function slider3() {
  getShow('.advantages__slider__button:nth-child(3)');
  getHide('.advantages__slider__button:nth-child(2)');
  getHide('.advantages__slider__button:nth-child(1)');
  getShow('.advantages__item:nth-child(3)');
  getHide('.advantages__item:nth-child(2)');
  getHide('.advantages__item:nth-child(1)');
}

const button1 = document.querySelector('#button1');
button1.addEventListener('click', () => slider1());

const button2 = document.querySelector('#button2');
button2.addEventListener('click', () => slider2());

const button3 = document.querySelector('#button3');
button3.addEventListener('click', () => slider3());

const buttonOpenPopup = document.querySelector('#open__popup');
buttonOpenPopup.addEventListener('click', () => getShow('.contacts__popup'));

const buttonClosePopup = document.querySelector('#close__popup');
buttonClosePopup.addEventListener('click', () => getHide('.contacts__popup'));