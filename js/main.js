$(document).ready(function () {
  // Toggle navbar
  $("#nav-toggle").click(function () {
    $(".main-nav").toggleClass("active");
  });

  // cookie notification close
  $(".cookie-noti-close").click(function () {
    $(".cookie-noti").animate({ height: "0", padding: "0" });
  });

  // home page slider
  var swiper = new Swiper(".selection-Swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      prevEl: '.swiper-left-arrow',
      nextEl: '.swiper-right-arrow'
    },
    breakpoints: {
      // when window width is >= 320px
      767: {
        slidesPerView: 2,
      },
      // when window width is >= 480px
      1024: {
        slidesPerView: 3,
        spaceBetween: 30
      },
    }
  });

  // advisers slider
  var swiper = new Swiper(".advisor-Swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      prevEl: '.swiper-left-arrow',
      nextEl: '.swiper-right-arrow'
    },
    breakpoints: {
      // when window width is >= 320px
      767: {
        slidesPerView: 2,
      },
      // when window width is >= 480px
      1024: {
        slidesPerView: 3,
        spaceBetween: 30
      },
    }
  });

  //active fav btn
  $(".fav-btn").click(function(){
    $(this).toggleClass("active")
  });
  
});
