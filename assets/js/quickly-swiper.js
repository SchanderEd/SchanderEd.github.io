const swiper = new Swiper('.quickly__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  spaceBetween: 24,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 32,
    },

    640: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
  }
});