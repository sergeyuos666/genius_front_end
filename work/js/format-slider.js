const swiper = new Swiper('.swiper', {
 
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,

  breakpoints: {

    // when window width is >= 480px
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 640px
    1280: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  },


  pagination: {
    el: '.pagination',
    bulletClass: 'pagination__button',
    bulletActiveClass: 'pagination__button--active',
  },

  navigation: {
    nextEl: '.carousel_button.next',
    prevEl: '.carousel_button.prev',
  },

});