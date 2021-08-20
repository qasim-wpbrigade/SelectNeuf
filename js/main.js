// Toggle navbar

$(document).ready(function () {
  $("#nav-toggle").click(function () {
    $(".main-nav").toggleClass("active");
  });
});

$(document).ready(function () {
    $(".cookie-noti-close").click(function () {
      $(".cookie-noti").animate({height: '0',padding: '0'});
    });
  });
