$(document).ready(function(){

	$('menu').click(function(){
		$(this).toggleClass('fa-times');
		$('header').toggleClass('toggle');

		// body...
	});

	$(window).on('scroll load', function(){
		$('#menu').RemoveClass('fa-times');
		$('header').RemoveClass('toggle');

		if($(window).scrollTop() > 0){
			$('.top').show();
		}else{
			$('.top').hide();
		}
	});


	//smooth scrolling

	$('a[href*="#"]').on('click', function(e){
		// body...
		e.preventDefault();

		$('html, body').animate({

			scrollTop :  $($(this).attr('href')).offset().top,

		},
			500,
			'linear'
		);
	});

});