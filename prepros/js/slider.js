$(document).ready(function () {
  $(".slider").slick({
    dots: true,
    adaptiveHeight: true,
    arrows: false,
    adaptiveWeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
    waitForAnimate: false,
    appendDots: $(".dots"),
  });
});
