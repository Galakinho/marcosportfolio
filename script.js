
var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
  perSlideOffset: 8,
  perSlideRotate: 1,
  slideShadows: true,
  shadowOffset: 10,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});



function hideElement() {
  var element = document.querySelector('.hide');
  element.classList.add('hidden');
}

function hideElement1() {
  var element = document.querySelector('.overlay');
  element.classList.add('hidden');
}





