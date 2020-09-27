let slideOne = document.querySelector('.advantages__item:nth-child(1)');
let slideTwo = document.querySelector('.advantages__item:nth-child(2)');
let slideThree = document.querySelector('.advantages__item:nth-child(3)');

function slider1() {
  slideOne.classList.remove('hidden');
  slideTwo.classList.add('hidden');
  slideThree.classList.add('hidden');
}

function slider2() {
  slideOne.classList.add('hidden');
  slideTwo.classList.remove('hidden');
  slideThree.classList.add('hidden');
}

function slider3() {
  slideOne.classList.add('hidden');
  slideTwo.classList.add('hidden');
  slideThree.classList.remove('hidden');
}

function openPopup() {
  document.querySelector('.contacts__popup').classList.remove('hidden');
}

function closePopup() {
  document.querySelector('.contacts__popup').classList.add('hidden');
}