var swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  speed: 500,
  slidesPerView: 3,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  slidesPerView: "1.2",
  coverflowEffect: {
    rotate: 220,
    stretch: 0,
    depth: 70,
    modifier: 0.3,
    slideShadows: true,
  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    clickable: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

function search_item() {
  let input = document.getElementById('pesquisar').value
  input = input.toLowerCase()
  let x = document.getElementsByClassName('produto')
  
  for(i=0; i < x.length; i++) {
    if(!x[i].innerHTML.toLowerCase().includes(input)){
      x[i].style.display="none"
    }
    else {
      x[i].style.display='list-item'
    }
  }
}



