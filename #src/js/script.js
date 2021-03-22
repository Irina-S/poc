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

  $('[data-fancybox]').fancybox({
      afterShow : function( instance, current ) {
        console.info( instance );
    //     $(".fast-view").niceScroll({
    //       cursorwidth:12,
    //       cursoropacitymin:0.4,
    //       cursorcolor:'#6e8cb6',
    //       cursorborder:'none',
    //       cursorborderradius:4,
    //       autohidemode:'leave'
    // });

        $(".fast-view").mCustomScrollbar({
          axis:'y'
        });
      }
  });

  
  try{
    let phoneVal = '';
    if($('#phone').val() !== ''){
        phoneVal = $('#phone').val();
    }
    var cleave = new Cleave('#phone', {
    prefix: '+7',
    delimiters: [" (", ")", " ", "-", "-"],
    blocks: [2, 3, 0, 3, 2, 2],
    uppercase: true,
    noImmediatePrefix: true
    });
    
    if(phoneVal !== ''){
      $('#phone').val(phoneVal); 
    }

  } catch(e){}

  function isPhoneValid(val){
    const pattern = "^\\+7 \\(\\d{3}\\) \\d{3}-\\d{2}-\\d{2}$";
    const regex = new RegExp(pattern, "g");
    return regex.test(val);
  }

  $('.phone-field').change(function () {
    if(!isPhoneValid($(this).val())){
      $(this).siblings('.error-field').css('display', 'block');
      $(this).addClass('has-error');
    } else{
      $(this).siblings('.error-field').css('display', 'none');
      $(this).removeClass('has-error');
    }
  });

  $('.name-field').change(function (){
    if($(this).val()==''){
      $(this).siblings('.error-field').css('display', 'block');
      $(this).addClass('has-error');
    } else{
      $(this).siblings('.error-field').css('display', 'none');
      $(this).removeClass('has-error');
    }
  });

  function isStep1Success(){
    const phone = $('.phone-field');
    const name = $('.name-field');
    if(name.val().length !== 0 && isPhoneValid(phone.val()) && !phone.hasClass('has-error')){
      $('#order-step-1').addClass('success');
    } else{
      $('#order-step-1').removeClass('success');
    }
  }

  $('#order-step-1 input').change(function () {
    isStep1Success();
  });

  // ВАЛИДАЦИЯ ШАГ 2

  // СВЯЗЬ РАДИО-КНОПОК ДОСТАВКИ И ОПЛАТЫ
  function setPayment(){
    const deliveryType = $('input[name="shk_delivery"]:checked').attr('id');
    if (deliveryType=='delivery'){
        $('label[for="pay-1"]').css('display', 'block').closest('.field-group').addClass('curr-pay');
        $('label[for="pay-2"]').css('display', 'block').closest('.field-group').addClass('curr-pay');
        $('label[for="pay-4"]').css('display', 'none').closest('.field-group').removeClass('curr-pay');
        
    }
    else if (deliveryType=='by-myself'){
        $('label[for="pay-1"]').css('display', 'none').closest('.field-group').removeClass('curr-pay');
        $('label[for="pay-2"]').css('display', 'none').closest('.field-group').removeClass('curr-pay');
        $('label[for="pay-4"]').css('display', 'block').closest('.field-group').addClass('curr-pay');
    }
    $('input[name="payment"]').prop('checked', false);
  }

  function isAddrValid(){
    let hasDeliveryAddr = true;
    $('input.required-group').each(function () {
      if($(this).val() === ''){
        hasDeliveryAddr = false;
      }
    });

    return hasDeliveryAddr;
  }

  $('#order-step-2 .required-group').change(function () {
    if (!isAddrValid()){
        $('#order-step-2').removeClass('success');
        $('#order-step-2>.delivery-tab>.error-field').css('display', 'block');
        
      } else{
        $('#order-step-2').addClass('success');
        $('#order-step-2>.delivery-tab>.error-field').css('display', 'none');
      }
  });


  function isStep2Success(){
    $('#order-step-2').removeClass('success');
    const delivType = $('input[name=shk_delivery]:checked').attr('id');
    if (delivType=='delivery'){
      $('.delivery-tab').addClass('checked');
      $('.bymslf-tab').removeClass('checked');
    }
    else if (delivType=='by-myself'){
      $('.delivery-tab').removeClass('checked');
      $('.bymslf-tab').addClass('checked');
      $('#order-step-2').addClass('success');
    }
    $('input[name=pay-type]:checked').prop('checked', false);

    setPayment();
  };

  $('input[name=shk_delivery]').change(function () {
    isStep2Success();
    isStep3Success();
  });

  isStep2Success();

  // ВАЛИДАЦИЯ ШАГ 3

  function isStep3Success(){
      if($('input[name=pay-type]:checked').length > 0){
          $('#order-step-3').addClass('success');
          // $('#order-step-3 .error-field').css('display', 'none');
      } else{
          $('#order-step-3').removeClass('success');
          // $('#order-step-3 .error-field').css('display', 'block');
      }
  }

  $('#order-step-3 input').change(function () {
    isStep3Success();
  });

  // ПРОВЕРКА ВСЕХ ШАГОВ

  function canBeProcessed(){
    if($('.order-step.success').length === $('.order-step').length){
      $('.order-summary .send-submit-btn').get(0).disabled = false;
    } else{
      $('.order-summary .send-submit-btn').get(0).disabled = true;
    }
  }

  $('.order-steps input').change(function () {
    canBeProcessed();
  });
  

});
