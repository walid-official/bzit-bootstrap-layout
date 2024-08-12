(function($){
	'use Strict'


	$('.social-icon .fa-bars').on('click', function(){

		$('.nav-menu ul').slideDown();

		$(this).hide();

		$('.social-icon .fa-times').show();

	})

	$('.social-icon .fa-times').on('click', function(){

		$('.nav-menu ul').slideUp();

		$(this).hide();

		$('.social-icon .fa-bars').show();

	})







}) (jQuery);