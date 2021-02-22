'use strict';

// Slider

const optionSlider = {
  sliderPerView: 1,
  loop: true,
  autoplay: true,
  effect: 'coverflow',
};
const swiper = new Swiper('.swiper-container', optionSlider)

// Modal cart

const cartButton = querySelector("#cart-button");
const modal = querySelector(".modal");
const close = querySelector(".close");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
}

// day 1

console.log(document.querySelector('.button-auth'))



init();
