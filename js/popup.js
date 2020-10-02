'use strict';

function getShow(selector) {
    document.querySelector(selector).classList.add('current');
  }
  
  function getHide(selector) {
    document.querySelector(selector).classList.remove('current');
  }

const buttonOpenPopup = document.querySelector('#open__popup');
buttonOpenPopup.addEventListener('click', () => getShow('.contacts__popup'));

const buttonClosePopup = document.querySelector('#close__popup');
buttonClosePopup.addEventListener('click', () => getHide('.contacts__popup'));