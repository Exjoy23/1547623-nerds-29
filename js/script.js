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

function addVisuallyHidden(selector, selector1) {
  selector.classList.add('visually__hidden');
  if (selector1) {
    selector1.classList.add('visually__hidden');
  }
}

function removeVisuallyHidden(selector) {
  selector.classList.remove('visually__hidden');
}

if (document.querySelector('#index')) {
  const sliderItem = document.querySelectorAll('.advantages__item');
  const button1 = document.querySelector('#button1');
  button1.addEventListener('click', () => {
    getHide('.advantages__slider__button');
    getShow('.advantages__slider__button:nth-child(1)');
    removeVisuallyHidden(sliderItem[0]);
    addVisuallyHidden(sliderItem[1], sliderItem[2]);
  });

  const button2 = document.querySelector('#button2');
  button2.addEventListener('click', () => {
    getHide('.advantages__slider__button', '.advantages__item');
    getShow('.advantages__slider__button:nth-child(2)',
      '.advantages__item:nth-child(2)');
    removeVisuallyHidden(sliderItem[1]);
    addVisuallyHidden(sliderItem[0], sliderItem[2]);
  });

  const button3 = document.querySelector('#button3');
  button3.addEventListener('click', () => {
    getHide('.advantages__slider__button', '.advantages__item');
    getShow('.advantages__slider__button:nth-child(3)',
      '.advantages__item:nth-child(3)');
    removeVisuallyHidden(sliderItem[2]);
    addVisuallyHidden(sliderItem[0], sliderItem[1]);
  });
}

const buttonOpenPopup = document.querySelector('#open__popup');
buttonOpenPopup.addEventListener('click', (event) => {
  event.preventDefault();
  document.querySelector(
    '.contacts__popup').classList.remove('visually__hidden');
});

const buttonClosePopup = document.querySelector('#close__popup');
buttonClosePopup.addEventListener('click', () => {
  document.querySelector(
    '.contacts__popup').classList.add('visually__hidden');
});

if (document.querySelector('#catalog')) {
  const btns = document.querySelectorAll('.goods__pagination__link');
  btns.forEach((item, i) => {
    btns[i].addEventListener('click', (event) => {
      event.preventDefault();
      btns.forEach((items, ii) => {
        btns[ii].classList.remove('current');
      });
      btns[i].classList.add('current');
    });
  });

  const btnNext = document.querySelector('.goods__next');
  btnNext.addEventListener('click', (event) => {
    event.preventDefault();
    let count;
    btns.forEach((item, i) => {
      const currentLink = btns[i].classList.contains('current');
      if (currentLink) {
        count = i + 1;
      }
      btns[i].classList.remove('current');
    });
    if (count < btns.length) {
      btns[count].classList.add('current');
    } else {
      btns[btns.length - 1].classList.add('current');
    }
  });

  const goodsPopupLinks = document.querySelectorAll('.goods__popup__link');
  goodsPopupLinks.forEach((item, i) => {
    goodsPopupLinks[i].addEventListener('click', (event) => {
      event.preventDefault();
    });
  });
}