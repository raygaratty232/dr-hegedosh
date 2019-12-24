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

	$('#date').datepicker({
		language : 'en'
	})

	$('#date').data('datepicker')

	$('.mobile-btn').click(function(){
		$('.menu').slideToggle()
	})


	$('.arr-cl').click(function(){
		$(this).toggleClass('color-sub')
		if($(".menu .arr-cl").hasClass('color-sub')){
			$('.color-sub > .drop-menu').slideDown()
			$('.color-sub > .drop-menu-lvl-2').slideDown()
		}
		else{
			$('.arr-cl > .drop-menu').slideUp()
			$('.arr-cl > .drop-menu-lvl-2').slideUp()
		}
	})


 	$('.selectbox-out').click(function(){
 		$('.selectbox-menu').toggleClass('show-local')
 	})




    $('#validate').validate({
      rules: {
	        name : {
	        	required: true,
	        	minlength : 3
	        	},
	        email : {
	        	required: true
	        },
	        
	        phone : {
	    		required: true
	
	    	},
	    	date : {
	    		required: true
	    	}
        },
        messages: {
	    		name: "Please specify your name",
	    		phone : {
	    			required : "Please enter your phone number"
	    		},
	    		email: {
	      		required: "We need your email address to contact you"
    		}
  		},

  		
	});

	$('#validate').submit(function() { 
		if ($('[name="name"]') !== '' || $('[name="phone"]') !== '' || $('[name="email"]') !== '' || $('[name="text"]') !=='') {
			valid = false;
			return valid;
		}
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$('.form-pop-container').fadeIn();
			$(this).find('input').val('');
		});
		$(function($){
		$('[name="phone"]').mask("+7(999) 999-9999");
		});
	})


	function windowSize(){
	    if ($(window).width() <= 480){
	        $('.menu > .hover-desk').removeClass('hover-desk');
	        $('.drop-menu > .btn-lvl-2').removeClass('btn-lvl-2');
	        $('.drop-menu > .hover-desk').removeClass('hover-desk');
	       
	    } 
	}
	 $(window).on('load resize',windowSize);


})


