var wWidth = 0;
$(function(e){
	var $this = $(this),
		$width = $(window).innerWidth(),
		wWidth = windowWidth();	

		textBanner();
		sessionSlide();
        popup();
		btnTop();
		event();
		scrollAni(700);

		function event(){		
			if(wWidth < 769){				
				gnb(40);
				sessionOpen();
				sessionMhover();
            }else{			
				gnb(80);	
				sessionHover();
			}
		}

		
	$(window).resize(function (e) {
		$width = $(window).innerWidth();
		wWidth = windowWidth();

		event();
	});
});

function Mobile(){
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
function windowWidth() {
	if ($(document).innerHeight() > $(window).innerHeight()) {
		if(Mobile()){
			return $(window).innerWidth();
		}else{
			return $(window).innerWidth() + 17;
		}		
	} else {
		return $(window).innerWidth();
	}
}
function gnb(int){
	$('.js-btn-m-open').on('click',function(e){
		$('.js-gnb').stop().animate({'right':0},400);
	});
	$('.js-btn-m-close').on('click',function(e){
		$('.js-gnb').stop().animate({'right':'-100%'},400);
	});
	$('.js-gnb ul > li > a, .js-btn-menu').on('click',function(e){
		if(!$(this).hasClass('btn-pop-open')){
			$('html, body').stop().animate({scrollTop:$(this.hash).offset().top - int}, 500);
		}
	})
}
function textBanner(){
	$('.js-text-banner').not('.slick-initialized').slick({
		variableWidth: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 15000,
        cssEase: 'linear',
        slidesToShow: 4,
        slidesToScroll: 4,
		arrows: false,
		dots: false
	});
}
function sessionHover(){
	$('.js-table-row ul > li').removeClass('on').find('p').removeAttr('style');
	$('.js-table-row dd .tit').removeClass('on');
	$('.m-con').removeAttr('style');
	$('.js-table-row ul > li').off('click');
    $('.js-table-row ul > li, .js-table-row dd .cf > div').mouseover(function(e){
        $(this).children('.hover-con').css('display','flex');
        $('.js-table-row ul > li, .js-table-row dd .cf > div').not(this).children('.hover-con').css('display','none');
    });
    $('.js-table-row').mouseleave(function(e){
        $('.hover-con').css('display','none');
    });
}
function sessionMhover(){
	$('.js-table-row ul > li, .js-table-row dd .cf > div').off('mouseover');
	$('.js-table-row').off('mouseleave');
	$('.hover-con').removeAttr('style');
	$('.js-table-row dd .tit').off().on('click',function(e){
		$(this).toggleClass('on').next('.m-con').stop().slideToggle(300);
		console.log('aaa');
	});
	$('.js-table-row ul > li .tit').off().on('click',function(e){
		if($(this).parent('li').find('.m-con').length){
			$(this).parent('li').toggleClass('on')
			$(this).parent('li').find('p, .m-con').stop().slideToggle(300);
		}
	});
}
function sessionOpen(){
    $('.js-btn-session-open').off().on('click',function(e){
        $(this).toggleClass('on').next('.con').stop().slideToggle();
    });
}
function sessionSlide(){
	$('.js-session-rolling').not('.slick-initialized').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: false
	});
	$('.js-session-rolling').on('afterChange', function(event, slick, currentSlide, nextSlide){
		var currentSlideNo = currentSlide + 1;
		$('.js-session-menu a').removeClass('on');
		$('.js-session-menu a[data-slide='+currentSlideNo+']').addClass('on');
	});
	$('.js-session-menu a, .js-btn-menu').on('click',function(e) {
		if($(this).attr('data-slide')){
			$(this).addClass('on');
			$('.js-session-menu a').not(this).removeClass('on');			
			var slideno = $(this).data('slide');
			$('.js-session-rolling').slick('slickGoTo', slideno - 1);
		}else if($(this).hasClass('session-menu')){
			$(this).addClass('on');
			$('.js-session-menu a').not(this).removeClass('on');			
		}
	});
}
function btnTop(){
	$(window).scroll(function(e){
		if ($(window).scrollTop() > 200) {
			$('.js-btn-top').addClass('on');
		} else {
			$('.js-btn-top').removeClass('on');
		}
	});
	if ($(window).scrollTop() > 200) {
		$('.js-btn-top').addClass('on');
	} else {
		$('.js-btn-top').removeClass('on');
	}
	btnTopScroll();
}
function btnTopScroll(){
	$('.js-btn-top').on('click',function(e){
		$('html, body').stop().animate({
			'scrollTop': 0
		},400);
		return false;
	});
}
function popup(){
	$('.js-btn-pop-open').on('click',function(e){
		var popName = $(this).data('pop');
		$('.js-pop-wrap#'+popName+'').stop().fadeIn(200);
		$('html, body').addClass('ovh');		
		setTimeout(function(e){
			map();
		},100);
	});
	$('.js-btn-pop-close').on('click',function(e){
		$(this).parents('.js-pop-wrap').stop().fadeOut(200);
		$('html, body').removeClass('ovh');
	});
	$('.js-pop-wrap').on('click', function(e) {
		if($('.js-pop-con-wrap').has(e.target).length == 0){
			$('.js-pop-wrap').stop().fadeOut();
			$('html, body').removeClass('ovh');
		}
	});	
}
function map(){
	new daum.roughmap.Lander({
		"timestamp" : "1689759229450",
		"key" : "2fk2u",
		"mapHeight" : "366"
	}).render();
}
function scrollAni(int){	
	$(window).scroll(function(e){
		$('.main-contents').each(function(e){
			var top = $(this).offset().top;
			if($(window).scrollTop() > top - int){
				$(this).addClass('active');
			}
		});
	});
}