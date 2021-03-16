$(document).ready(function () {

    $('#main-slider').slick({
      slidesToShow: 1,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      infinite : true,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      swipe: true,
      touchMove: true,
      draggable: true,
      fade: false,
      focusOnSelect: true,
      pauseOnHover: false,
      variableWidth: false,
      centerMode: false,
      nextArrow:'<button class="slick-next"><svg width="53" height="102" viewBox="0 0 53 102" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.3" d="M1 1L51 51L1 101" stroke="white" stroke-width="2"/></svg></button>',
      prevArrow:'<button class="slick-prev"><svg width="53" height="102" viewBox="0 0 53 102" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.3" d="M52 1L2 51L52 101" stroke="white" stroke-width="2"/></svg></button>',
    });

    $('.catalog-slider').slick({
      slidesToShow: 5,
      speed: 500,
      infinite : true,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      swipe: true,
      touchMove: true,
      draggable: true,
      fade: false,
      focusOnSelect: true,
      pauseOnHover: false,
      variableWidth: false,
      centerMode: false,
      nextArrow:'<button class="slick-next"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 15L8 8L1 1" stroke="#878787" stroke-width="2"/></svg></button>',
      prevArrow:'<button class="slick-prev"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 15L2 8L9 1" stroke="#878787" stroke-width="2"/></svg></button>',
    });

    $('.promo-slider').slick({
      slidesToShow: 3,
      speed: 500,
      infinite : true,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      swipe: true,
      touchMove: true,
      draggable: true,
      fade: false,
      focusOnSelect: true,
      pauseOnHover: false,
      variableWidth: false,
      centerMode: false,
    });

    $('.promo2-slider').slick({
      slidesToShow: 1,
      speed: 500,
      infinite : true,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      swipe: true,
      touchMove: true,
      draggable: true,
      fade: false,
      focusOnSelect: true,
      pauseOnHover: false,
      variableWidth: false,
      centerMode: false,
    });

});
