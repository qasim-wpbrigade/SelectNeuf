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
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      prevEl: '.swiper-left-arrow',
      nextEl: '.swiper-right-arrow'
    }
  });

  //active fav btn
  $(".fav-btn").click(function(){
    $(this).addClass("active")
  });
  
});
