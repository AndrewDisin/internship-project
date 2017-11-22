$(document).ready(function () {
    svg4everybody({});


	$('.main-banner__slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
	});

  $('.mobile-menu--icon').click(function(){
    $('.mobile-menu__list').toggleClass('active-popup')
  });

  $('.about__content__left--info__links--readmore').click(function(){
    $('.about__content__left--info--descr sapn').toggleClass('hidden');
  });



  $('.main-header__top__login').click(function(){
    $('.login-popup').toggleClass('active-popup')
    $("body").css("overflow","hidden");
  });

  $('.main-header__top__contacts-btn').click(function(){
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
        $('.main-header__top__search').appendTo('.mobile-menu');
        $('.main-header__bottom__basket').appendTo('.mobile-menu');
        $('.main-header__bottom--logo').prependTo('.main-header__top');
      }
  if ($(window).width() <= '768'){
        $('.main-header__top__work-time').prependTo('.main-header__top__contacts');
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