/*--------------- Latest Result Slider ---------------*/ 
var swiper = new Swiper(".latest-result", {

    loop:true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,  
    },

    pagination: {
      el: ".swiper-pagination2",
      clickable:true,
    },

}); 