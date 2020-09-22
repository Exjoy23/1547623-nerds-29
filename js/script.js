let slideOne = document.querySelector('.slide1');
let slideTwo = document.querySelector('.slide2');
let slideThree = document.querySelector('.slide3');

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
    slideThree.classList.remove('hidden')
}
