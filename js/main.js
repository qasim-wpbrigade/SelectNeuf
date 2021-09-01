$(document).ready(function () {
  // Toggle navbar
  $("#nav-toggle").click(function () {
    $(".main-nav").toggleClass("active");
    let navheight = $(".main-nav").prop("scrollHeight");
    if ($(".main-nav").height() == "0") {
      $(".main-nav").css("height", `${navheight + 40}px`);
    } else {
      $(".main-nav").css("height", `0`);
    }
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
      prevEl: ".swiper-left-arrow",
      nextEl: ".swiper-right-arrow",
    },
    breakpoints: {
      // when window width is >= 320px
      767: {
        slidesPerView: 2,
      },
      // when window width is >= 480px
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  // advisers slider
  var swiper = new Swiper(".advisor-Swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      prevEl: ".swiper-left-arrow",
      nextEl: ".swiper-right-arrow",
    },
    breakpoints: {
      // when window width is >= 320px
      767: {
        slidesPerView: 2,
      },
      // when window width is >= 480px
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  // advisers slider
  var swiper = new Swiper(".dp-thumbnail-slider", {
    slidesPerView: 1,
    loop: true,
    grabCursor: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    navigation: {
      prevEl: ".dp-left-arrow",
      nextEl: ".dp-right-arrow",
    },
  });

  //active fav btn
  $(".fav-btn").click(function () {
    $(this).toggleClass("active");
  });

  // for media queries
  $(window).resize(mq767);
  mq767();
});

let argumentSlider = undefined;


var mq767 = function(){
  if ($(window).innerWidth() <= 767 && argumentSlider == undefined) {
    $(".argSlider").addClass("argument-slider");
    $(".arguments-wraper").removeClass("active");
    argumentSlider = new Swiper(".argument-slider", {
      slidesPerView: 1,
      loop: true,
      grabCursor: true,
    });
  }else if($(window).innerWidth() >= 767 && argumentSlider != undefined){
    $(".argSlider").removeClass("argument-slider");
    $(".arguments-wraper").addClass("active");
    argumentSlider.destroy();
    argumentSlider = undefined;
  }
}