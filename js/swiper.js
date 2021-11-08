var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
});

var swiper2 = new Swiper(".mySwiper2", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
});

var swiper3 = new Swiper(".mySwiper3", {
  pagination: {
    el: ".swiper-pagination",
  },
  loop: true,
  autoplay:{
    delay: 3000
  }
});