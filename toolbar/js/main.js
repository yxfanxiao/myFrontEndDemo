requirejs.config({
	paths: {
		jquery: 'jquery-1.11.3'
	}
});

requirejs(['jquery','validate'], function($,validate) {
	console.log(validate.isEqual(2, 2));
});