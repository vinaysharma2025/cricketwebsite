/*--------------- Team Slider ---------------*/ 
var swiper = new Swiper(".team-slider", {

    spaceBetween: 20,
    loop:true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false, 
    },
  
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
  },
  
  }); 
  