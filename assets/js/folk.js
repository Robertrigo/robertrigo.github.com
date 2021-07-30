$(document).ready(function () {

	////////////////////////////////////////////
	// Table of Content
	$('.contentLink').click( function () {
		var targetDiv = $(this).data('link');
		$('.folkRight').addClass('hidden');
		$('#' + targetDiv).removeClass('hidden');
	});


	////////////////////////////////////////
  // Initialize tooltip and its functions
  $('[data-toggle="tooltip"]').tooltip();


});