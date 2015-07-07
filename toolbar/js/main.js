requirejs.config({
	paths: {
		jquery: 'jquery-1.11.3'
	}
});

requirejs(['jquery', 'backtop'], function($, backtop) {
	// new backtop.BackTop($('#backTop'), {
	// 	mode: 'move',
	// 	speed: 0
	// });
	
	$('#backTop').backtop({
		mode: 'move'
	});

});