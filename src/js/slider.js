$(document).ready(function () {
  $('.slider').slick({
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    easing: 'linear',
    // с какой картинки начинать
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnFocus: true,
    pauseOnHover: true,
    touchThreshold: 15,
    waitForAnimate: false,
    appendArrows: $('.controls'),
    appendDots: $('.dots'),
  });
});
