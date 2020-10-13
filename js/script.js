'use strict';

// Slider //////////////////////////////////////////

function getShow(selector, selector1) {
  document.querySelector(selector).classList.add('current');
  if (selector1) {
    document.querySelector(selector1).classList.add('current');
  }
}

function getHide(selector, selector1) {
  removeCurrent(document.querySelectorAll(selector));
  if (selector1) {
    removeCurrent(document.querySelectorAll(selector1));
  }
}

function removeCurrent(doc) {
  doc.forEach(item => item.classList.remove('current'));
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

function getHidePopup() {
  getHide('.contacts__popup');
}

function clearHide() {
  popup.classList.remove('hide');
}

function clearShow() {
  popup.classList.remove('show');
}

if (document.querySelector('#index')) {

  const sliderItem = document.querySelectorAll('.advantages__item');
  const button1 = document.querySelector('#button1');
  const button2 = document.querySelector('#button2');
  const button3 = document.querySelector('#button3');

  button1.addEventListener('click', () => {
    getHide('.advantages__slider__button');
    getShow('.advantages__slider__button:nth-child(1)');
    removeVisuallyHidden(sliderItem[0]);
    addVisuallyHidden(sliderItem[1], sliderItem[2]);
  });

  button2.addEventListener('click', () => {
    getHide('.advantages__slider__button', '.advantages__item');
    getShow('.advantages__slider__button:nth-child(2)',
      '.advantages__item:nth-child(2)');
    removeVisuallyHidden(sliderItem[1]);
    addVisuallyHidden(sliderItem[0], sliderItem[2]);
  });

  button3.addEventListener('click', () => {
    getHide('.advantages__slider__button', '.advantages__item');
    getShow('.advantages__slider__button:nth-child(3)',
      '.advantages__item:nth-child(3)');
    removeVisuallyHidden(sliderItem[2]);
    addVisuallyHidden(sliderItem[0], sliderItem[1]);
  });

  const slides = document.querySelectorAll('.advantages__item');
  const sliderButtons = document.querySelectorAll(
    '.advantages__slider__button');
  const btns = document.querySelectorAll('.advantages__link');

  btns.forEach((item, i) => {
    item.addEventListener('focus', () => {
      slides.forEach(item => {
        item.classList.add('visually__hidden');
      });
      document.querySelector(`.advantages__item:nth-child(
        ${i + 1})`).classList.remove('visually__hidden');
      sliderButtons.forEach(item => {
        item.classList.remove('current');
      });
      sliderButtons[i].classList.add('current');
    });
  });
}

// Popup /////////////////////////////////////////////

const popup = document.querySelector('.contacts__popup');
const buttonOpenPopup = document.querySelector('#open__popup');
const buttonClosePopup = popup.querySelector('#close__popup');
const inputPopup = popup.querySelectorAll('.popup__input');
const submitPopup = popup.querySelector('.contacts__popup__button');

buttonOpenPopup.addEventListener('click', (evt) => {
  evt.preventDefault();
  getShow('.contacts__popup');
  popup.classList.add('show');
  if (!inputPopup[0].value) {
    inputPopup[0].focus();
  } else if (!inputPopup[1].value) {
    inputPopup[1].focus();
  } else {
    inputPopup[2].focus();
  }
});

buttonClosePopup.addEventListener('click', (evt) => {
  evt.preventDefault();
  popup.classList.add('hide');
  setTimeout(getHidePopup, 500);
  setTimeout(clearHide, 500);
  setTimeout(clearShow, 500);
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    popup.classList.add('hide');
    setTimeout(getHidePopup, 500);
    setTimeout(clearHide, 500);
    setTimeout(clearShow, 500);
  }
});

submitPopup.addEventListener('click', (evt) => {
  inputPopup.forEach(item => {
    if (!item.value) {
      evt.preventDefault();
      const clearWrong = () => {
        item.classList.remove('wrong');
      };
      item.classList.add('wrong');
      setTimeout(clearWrong, 500);
    }
  });
});

// Pagination ///////////////////////////////////////////////

if (document.querySelector('#catalog')) {

  const btns = document.querySelectorAll('.goods__pagination__link');
  const btnNext = document.querySelector('.goods__next');

  btns.forEach((item, i) => {
    item.addEventListener('click', (evt) => {
      evt.preventDefault();
      btns.forEach((item) => {
        item.classList.remove('current');
      });
      btns[i].classList.add('current');
    });
  });

  btnNext.addEventListener('click', (evt) => {
    evt.preventDefault();
    let count;
    btns.forEach((item, i) => {
      const currentLink = item.classList.contains('current');
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

  // Goods popup ////////////////////////////////////////////////////

  const goodsPopup = document.querySelectorAll('.goods__popup');
  const goodsPopupLinks = document.querySelectorAll('.goods__popup__link');
  const goodsPopupButtons = document.querySelectorAll('.goods__popup__button');

  goodsPopupLinks.forEach((item, i) => {
    item.addEventListener('click', (evt) => {
      evt.preventDefault();

      const goodsItem = document.querySelectorAll('.goods__item');
      const hiddenPopup = document.createElement('div');
      hiddenPopup.classList.add('goods__popup__hidden');
      hiddenPopup.textContent = '3.10. Карточка товара: название товара является ссылкой, клик по нему открывает модальное окно с демонстрацией товара. Модальное окно верстать не нужно. Для закрытия кликни по мне';
      goodsItem[i].append(hiddenPopup);
      hiddenPopup.addEventListener('click', () => {
        hiddenPopup.remove(hiddenPopup);
      });

    });
  });

  goodsPopupLinks.forEach((item, i) => {
    item.addEventListener('focus', () => {
      goodsPopup[i].classList.add('current');
    });
    item.addEventListener('blur', () => {
      goodsPopup[i].classList.remove('current');
    });
  });

  goodsPopupButtons.forEach((item, i) => {
    item.addEventListener('focus', () => {
      goodsPopup[i].classList.add('current');
    });
    item.addEventListener('blur', () => {
      goodsPopup[i].classList.remove('current');
    });
  });


}