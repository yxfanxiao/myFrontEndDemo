$(function () {
	$('h3').on('click', function () {
		var rankID = '#rank' + $(this).attr('id').substring(3);
		$(this).addClass('active').siblings().removeClass('active');
		$(this).children('span').addClass('arrow');
		$(this).siblings().children('span').removeClass('arrow');
		$(rankID).css('display','block').siblings().css('display','none');
	});
});