$(document).ready(function(){
	$('.main-slider').slick({
		fade: true,
		// autoplay : true,
		// autoplaySpeed: 3000,
		arrows : false,
		responsive : [{
			breakpoint : 480,
			settings : {
						
			}
		}]
	});

	$('.google-slider').slick({
		prevArrow : '<button type="button" class="google-prev"><img src="images/arrow.png" alt=""></button>',
		nextArrow : '<button type="button" class="google-next"><img src="images/arrow.png" alt=""></button>',
	})
	$('.BA-slider').slick({
		arrows : false,
		dots : true,
		dotsClass : 'sl-dots'  
	})
	$('.services-btn').on('mouseenter' , function(){
		$('.services-btn > a').addClass('color')
		$('.drop-menu').addClass('show')
	})
	$('.services-btn').mouseleave(function(){
		$('.services-btn a').removeClass('color')
		$('.drop-menu').removeClass('show')
	})
	$('.btn-lvl-2').mouseenter(function(){
		$('.drop-menu-lvl-2').addClass('show')
	})
	$('.btn-lvl-2').mouseleave(function(){
		$('.drop-menu-lvl-2').removeClass('show')
	})
	$('.mobile-btn').click(function(){
		$('.menu').slideToggle()
	})

	function windowSize(){
	    if ($(window).width() <= 480){
	        $('.services-btn').on('click' , function(){
				$('.services-btn > a').toggleClass('color')
				$('.drop-menu').toggleClass('show')
			})
	    } 
	}
	 $(window).on('load resize',windowSize);
})