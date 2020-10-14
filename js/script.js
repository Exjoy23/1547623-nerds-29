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

let isStorageSupport = true;
let storageName = '';
let storageEmail = '';

try {
  storageName = localStorage.getItem('name');
  storageEmail = localStorage.getItem('email');
} catch (err) {
  isStorageSupport = false;
}

buttonOpenPopup.addEventListener('click', (evt) => {
  evt.preventDefault();
  getShow('.contacts__popup');
  popup.classList.add('show');

  if (storageName && storageEmail) {
    inputPopup[0].value = storageName;
    inputPopup[1].value = storageEmail;
  }

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
    } else {

      if (isStorageSupport) {
        localStorage.setItem('name', inputPopup[0].value);
        localStorage.setItem('email', inputPopup[1].value);
      }
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

  // Range ///////////////////////////////////////////////////////////////

  const formRange = document.querySelector('.range__controls');
  const toggleMin = formRange.querySelector('.toggle__min');
  const toggleMax = formRange.querySelector('.toggle__max');
  const barPrice = formRange.querySelector('.bar');
  const minPrice = document.querySelector('#price__min');
  const maxPrice = document.querySelector('#price__max');

  let mousedownToggleMin = false;
  let mousedownToggleMax = false;
  let x = 0;
  let totalPrice = 21000;
  let positionMin = 400;
  let positionMax = 540;
  let priceStep = totalPrice / 200;

  minPrice.addEventListener('blur', () => {

    if (minPrice.value <= 0) {
      minPrice.value = 0;
    }
    positionMin = minPrice.value / priceStep + 400;

    if (positionMin > positionMax - 20) {
      positionMin = positionMax - 20;
      minPrice.value = Math.round((positionMin - 400) * priceStep);
    }
    toggleMin.style.left = (positionMin - 380) + 'px';
    barPrice.style.marginLeft = positionMin - 400 + 'px';
    barPrice.style.width = positionMax - positionMin + 'px';
  });

  maxPrice.addEventListener('blur', () => {

    if (maxPrice.value >= totalPrice) {
      maxPrice.value = totalPrice;
    }
    positionMax = maxPrice.value / priceStep + 400;

    if (positionMax < positionMin + 20) {
      positionMax = positionMin + 20;
      maxPrice.value = Math.round((positionMax - 400) * priceStep);
    }
    toggleMax.style.left = (positionMax - 380) + 'px';
    barPrice.style.marginLeft = positionMin - 400 + 'px';
    barPrice.style.width = positionMax - positionMin + 'px';
  });

  toggleMin.addEventListener('mousedown', (evt) => {
    mousedownToggleMin = true;
  });

  toggleMax.addEventListener('mousedown', (evt) => {
    mousedownToggleMax = true;
  });

  window.addEventListener('mouseup', (evt) => {

    if (mousedownToggleMin) {
      mousedownToggleMin = false;
    }

    if (mousedownToggleMax) {
      mousedownToggleMax = false;
    }
  });

  formRange.addEventListener('mousemove', (evt) => {

    if (mousedownToggleMin) {
      x = evt.screenX;
      positionMin = x;

      if (positionMin > positionMax - 20) {
        positionMin = positionMax - 20;
      }
      toggleMin.style.left = (positionMin - 380) + 'px';

      if (positionMin <= 400) {
        positionMin = 400;
        toggleMin.style.left = 7 + '%';
      }
      if (positionMin >= 600) {
        positionMin = 600;
        toggleMin.style.left = 85 + '%';
      }

      barPrice.style.marginLeft = positionMin - 400 + 'px';
      barPrice.style.width = positionMax - positionMin + 'px';

      minPrice.value = Math.round(((positionMin - 400) / 200) * totalPrice);
    }
  });

  formRange.addEventListener('mousemove', (evt) => {

    if (mousedownToggleMax) {
      x = evt.screenX;
      positionMax = x;

      if (positionMax < positionMin + 20) {
        positionMax = positionMin + 20;
      }
      toggleMax.style.left = (positionMax - 380) + 'px';

      if (positionMax <= 400) {
        positionMax = 400;
        toggleMax.style.left = 7 + '%';
      }

      if (positionMax >= 600) {
        positionMax = 600;
        toggleMax.style.left = 85 + '%';
      }

      barPrice.style.marginLeft = positionMin - 400 + 'px';
      barPrice.style.width = positionMax - positionMin + 'px';

      maxPrice.value = Math.round(((positionMax - 400) / 200) * totalPrice);
    }
  });

  const conrolEdgeMin = function () {

    if (positionMin > positionMax - 20) {
      positionMin = positionMax - 20;
      minPrice.value = Math.round((positionMin - 400) * priceStep);
    }

    if (positionMin <= 400) {
      positionMin = 400;
      toggleMin.style.left = 7 + '%';
    }

    if (positionMin >= 600) {
      positionMin = 600;
      toggleMin.style.left = 85 + '%';
    }
    toggleMin.style.left = (positionMin - 380) + 'px';
    barPrice.style.marginLeft = positionMin - 400 + 'px';
    barPrice.style.width = positionMax - positionMin + 'px';
  };

  const conrolEdgeMax = function () {

    if (positionMax < positionMin + 20) {
      positionMax = positionMin + 20;
      maxPrice.value = Math.round((positionMax - 400) * priceStep);
    }

    if (positionMax <= 400) {
      positionMax = 400;
      toggleMax.style.left = 7 + '%';
    }

    if (positionMax >= 600) {
      positionMax = 600;
      toggleMax.style.left = 85 + '%';
    }
    toggleMax.style.left = (positionMax - 380) + 'px';
    barPrice.style.marginLeft = positionMin - 400 + 'px';
    barPrice.style.width = positionMax - positionMin + 'px';
  };

  let toggleMinDown = false;
  let toggleMaxDown = false;
  let toggleMinFocus = false;
  let toggleMaxFocus = false;

  toggleMin.addEventListener('keyup', () => {
    toggleMinDown = false;
  });

  toggleMax.addEventListener('keyup', () => {
    toggleMaxDown = false;
  });

  toggleMin.addEventListener('blur', () => {
    toggleMinFocus = false;
  });

  toggleMax.addEventListener('blur', () => {
    toggleMaxFocus = false;
  });

  toggleMin.addEventListener('focus', () => {
    toggleMinFocus = true;
    document.addEventListener('keydown', (evt) => {
      toggleMinDown = true;

      if (toggleMinDown && toggleMinFocus) {

        if (evt.key === 'ArrowUp' || evt.key === 'ArrowRight') {
          evt.preventDefault();
          positionMin++;
          minPrice.value = Math.round((positionMin - 400) * priceStep);
          conrolEdgeMin();
        }

        if (evt.key === 'ArrowDown' || evt.key === 'ArrowLeft') {
          evt.preventDefault();
          positionMin--;
          minPrice.value = Math.round((positionMin - 400) * priceStep);
          conrolEdgeMin();

          if (minPrice.value <= 0) {
            minPrice.value = 0;
          }
        }
      }
    });
  });

  toggleMax.addEventListener('focus', () => {
    toggleMaxFocus = true;
    document.addEventListener('keydown', (evt) => {
      toggleMaxDown = true;

      if (toggleMaxDown && toggleMaxFocus) {

        if (evt.key === 'ArrowUp' || evt.key === 'ArrowRight') {
          evt.preventDefault();
          positionMax++;
          maxPrice.value = Math.round((positionMax - 400) * priceStep);
          conrolEdgeMax();

          if (maxPrice.value >= totalPrice) {
            maxPrice.value = totalPrice;
          }
        }

        if (evt.key === 'ArrowDown' || evt.key === 'ArrowLeft') {
          evt.preventDefault();
          positionMax--;
          maxPrice.value = Math.round((positionMax - 400) * priceStep);
          conrolEdgeMax();
        }
      }
    });
  });
}