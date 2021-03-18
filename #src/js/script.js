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
      responsive:[
        {
          breakpoint: 1630,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 1380,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1
          }
        },
      ]
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
      responsive:[
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1
          }
        }
      ]
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

  // ОТКРЫТИЕ И ЗАКРЫТИЕ МЕНЮ, КАТАЛОГА
  const mobileCatalog = $('.aside');
  const mobileMenu = $('.header__top');

  const mobileCatalogBtn = $('.catalog-btn');
  const mobileMenuBtn = $('.main-nav-btn');

  function clickDarkBodyHandler(event){
    const target = $(event.target);
    if(target.is('body.dark')){
      $('body.dark').off('click', clickDarkBodyHandler);
      $('.opened').removeClass('opened');
      $(document.body).removeClass('dark').removeClass('overflow-hid');
    }
  }

  // КАТАЛОГ
  $(mobileCatalogBtn).click(function () {
    $(mobileCatalog).toggleClass('opened');
    $(document.body).toggleClass('dark').toggleClass('overflow-hid');

    if($(document.body).hasClass('dark')){
      $('body.dark').on('click', clickDarkBodyHandler);
    }
  });

  // НАВИГАЦИЯ
  $(mobileMenuBtn).click(function () {
    $(mobileMenu).toggleClass('opened');
    $(document.body).toggleClass('dark').toggleClass('overflow-hid');

    if($(document.body).hasClass('dark')){
      $('body.dark').on('click', clickDarkBodyHandler);
    }
  });

  // КАТАЛОГ ЗАКРЫТИЕ
  $('.aside .close-btn').click(function(){
    $('.aside').removeClass('opened');
    $(document.body).removeClass('dark').removeClass('overflow-hid');
  });

  // НАВИГАЦИЯ ЗАКРЫТИЕ
  $('.main-nav .close-btn').click(function(){
    $('.main-nav').removeClass('opened');
    $(document.body).removeClass('dark').removeClass('overflow-hid');
  });

  // ПОИСК ОТКРЫТИЕ
  $('.search-open-btn').on('click', function(){
    $('.search-block').addClass('opened');
  });

  $('.search-form__close-btn').on('click', function(){
    $('.search-block').removeClass('opened');
  });

  $('#sort-select').niceSelect();

  const stickyPhoto = new Sticky('.card-photo', {
    stickyFor:992,
    marginTop:70
  });

  $('[data-fancybox]').fancybox();

});
