requirejs.config({
	paths: {
		jquery: 'jquery-1.11.3'
	}
});

requirejs(['jquery'], function($) {
	$('#backTop').on('click',function(){
		alert("1");
	});
	// $('#backTop').on('click',move);
	// $(window).on('scroll',checkPosition);

	function move () {
		$('html','body').animate({
			scrollTop: 0
		},800);
	}
});