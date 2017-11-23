$(document).ready(function () {
    svg4everybody({});


	$('.main-banner__slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
	});

  $('.icon').click(function(){
    $('.mobile-menu__list').toggleClass('active-popup')
  });

  $('.about__content__left--info__links--readmore').click(function(){
    $('.about__content__left--info--descr sapn').toggleClass('hidden');
  });



  $('.login').click(function(){
    $('.login-popup').toggleClass('active-popup')
    $("body").css("overflow","hidden");
  });

  $('.call-btn').click(function(){
    $('.back-call-popup').toggleClass('active-popup')
    $("body").css("overflow","hidden");
  });



  $('.close-form-btn.backcall').click(function(){
    $('.back-call-popup').toggleClass('active-popup')
    $("body").css("overflow","auto");
  });

   $('.close-form-btn.login').click(function(){
    $('.login-popup').toggleClass('active-popup')
    $("body").css("overflow","auto");
  });



  $('.back-call-popup').click(function(event){
    $('.back-call-popup').toggleClass('active-popup')
    $("body").css("overflow","auto");
    event.stopPropagation();
  });
 
 $('.login-popup').click(function(event){
    $('.login-popup').toggleClass('active-popup')
    $("body").css("overflow","auto");
    event.stopPropagation();
  });


  $('.back-call-popup__container').click(function(event){
    event.stopPropagation();
  });

  $('.login-popup__container').click(function(event){
    event.stopPropagation();
  });

  if ($(window).width() <= '992'){
        $('.search').appendTo('.mobile-menu');
        $('.basket').appendTo('.mobile-menu');
        $('.logo').prependTo('.main-header__top');
      }
  if ($(window).width() <= '768'){
        $('.work-time').prependTo('.contacts');
      }

  jQuery('.login-popup__container__list .login-popup__container__list--item a').on('click', function(e)  {
        var currentAttrValue = jQuery(this).attr('href');
 
        // Show/Hide Tabs
        jQuery('.login-popup__container__tabs--item').removeClass('active');
        jQuery(currentAttrValue).addClass('active').siblings().removeClass('active');
 
        // Change/remove current tab to active
        jQuery(this).parent('li').addClass('active-tab').siblings().removeClass('active-tab');
 
        e.preventDefault();
    });


});