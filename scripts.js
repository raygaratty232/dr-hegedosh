

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
		nextArrow : '<button type="button" class="google-next"><img src="images/arrow.png" alt=""></button>'
	})
	$('.BA-slider').slick({
		arrows : false,
		dots : true,
		dotsClass : 'sl-dots'  
	})

	$('.photo-gallery-slider').slick({
		arrows : false,
		dots : true,
		dotsClass : 'sl-dots , pg-dots'  
	})

	

	$('#date').datepicker({
		language : 'en'
	})

	$('#date').data('datepicker')

	$('.mobile-btn').click(function(){
		$('.menu').slideToggle()
	})

	

	$('.learn').magnificPopup({
		type:'inline'
	});


	/*попап с формой и слайдером*/

	$('.request-btn').magnificPopup({
		callbacks: {
    		open: function() {
     				$('.calendar-block').slick({
						arrows : true,
						dots : false ,
						easing : 'linear',
						slidesToShow: 1,
						prevArrow : '<button type="button" class="calendar-prev"><img src="images/arrow.png" alt=""></button>',
						nextArrow : '<button type="button" class="calendar-next"><img src="images/arrow.png" alt=""></button>'
					})
    			}
  
  		}
	});




	/*скрол блоков с временем*/



	$('.scroller').each(function(){
		
		$(this).click(function(){
            let parentBlock =  $(this).parent().find('.not-empty');
            let countOfTimes = parentBlock.find('a').length;
			if ( parseInt(parentBlock.css('margin-top')) == countOfTimes* -39){
                parentBlock.css({
                    'margin-top' : '0px'
                })
			}else {

                parentBlock.css({
                    'margin-top': '-=39'
                })
            }

		})
		
	})


	$('.btn-cancel').on( "click", function() {
  		$.magnificPopup.close();
	});


 	$('.selectbox-out').click(function(){
 		$('.selectbox-menu').toggleClass('show-local')
 	})

 	/*areas-accardoin*/

 	$('.areas-menu > li > a').on('click', f_areas_acc);
 	$('.areas-item > li > a').on('click', f_code_acc);

 	function f_areas_acc(e){
  		$('.areas-item').not($(this).next()).slideUp(500);
   		$(this).next().slideToggle(500);
   		e.preventDefault();
	}
	function f_code_acc(e){
  		$('.areas-code').not($(this).next()).slideUp(500);
   		$(this).next().slideToggle(500);
   		e.preventDefault();
	}

 	/*faq-accardion*/



	$('.faq-accordeon > .faq-acc-box > .faq-acc-head').on('click', f_acc);
	$('.faq-accordeon > .faq-acc-box > .faq-acc-head').on('click', f_ico);
 
	function f_acc(){
  		$('.faq-accordeon > .faq-acc-box > .faq-acc-body').not($(this).next()).slideUp(500);
   		$(this).next().slideToggle(500);

	}

	function f_ico(){
		$(this).find($('.pm-box')).toggleClass('minus')
	}

 	/*gallery*/


 	$('.photo-gallery-box').magnificPopup({
  		delegate: 'a', 
  		type: 'image'
	});   
	

 	$('.video-gallery-box').magnificPopup({
  		delegate: 'a', 
  		type: 'iframe'
	});   
	
 	/*validation*/



 	var inp = $('.request-form').find('input');


 	$('.send-request').click(function(){
 		sendReq()
 	})

 	function sendReq(){
 		if(inp.val().length === 0){
 			$('.send-request').addClass('red-request')
 			$('.send-request').text('Please, fill in all form fields')
 		}			
 	}



 	var inp_name = $('.request-form').find('input[type="name"]').val()
 	var	inp_phone = $('.request-form').find('input[type="phone"]').val()
 	var	inp_mail = $('.request-form').find('input[type="email"]').val()

 	inp.each(function(){
 		inp.change(function(){
			if(inp_name != ' ' && inp_phone !=' ' && inp_mail != ' ') {
			 		$('.send-request').removeClass('red-request')
			 		$('.send-request').text('Send request')
			 	}
 		})
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





	$(function($){
		$('[name="phone"]').mask("+7(999) 999-9999");
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
		
	})


	function windowSize(){
	    if ($(window).width() <= 1080){
	        $('.menu > .hover-desk').removeClass('hover-desk');
	        $('.drop-menu > .btn-lvl-2').removeClass('btn-lvl-2');	
	        $('.drop-menu > .hover-desk').removeClass('hover-desk');
	        $('.menu  span').click(function(){
	 		$(this).toggleClass('color-sub')
		 		if($('.menu span').hasClass('color-sub')){
		 			$(this).parent().removeClass('arr-cl')
		 		}
		 		else{
		 			$(this).parent().addClass('arr-cl')
		 		}
		 		if($('.drop-menu span').hasClass('color-sub')){
		 			$(this).parent().removeClass('list-del')
		 		}
		 		$(this).next().slideToggle()
		 	})
	      
	    } 
	}

	$(window).on('load resize',windowSize);


	 (function( $ ) {
 	 $.fn.selectbox = function() {

    var selectDefaultHeight = $('#selectBox-form').height();
    var rotateDefault = "rotate(0deg)";
   
        
        $('#selectBox-form > p.valueTag').click(function() {
          var currentHeight = $('#selectBox-form ').height();
          
          if (currentHeight < 100 || currentHeight == selectDefaultHeight) {
              
              $('#selectBox-form').height("250px");  
          }
          if (currentHeight >= 250) {
            $('#selectBox-form').height(selectDefaultHeight);
            $('img.arrow').css({transform: rotateDefault});
          }
      });

      $('#selectMenuBox li').click(function() {
        $('#selectBox-form').height(selectDefaultHeight);
       $('img.arrow').css({transform: rotateDefault});
        $('p.valueTag').text($(this).text());
      });
  };
  $('selector').selectbox();
})( jQuery );

	

})


