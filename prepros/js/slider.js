$(document).ready(function () {
  $(".slider").slick({
    dots: true,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
    waitForAnimate: false,
    appendDots: $(".slider-item-right"),
  });
});
