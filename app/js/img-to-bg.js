// img-to-bg.js
$(function(){
	$.each($('.container a'), function () {
		if ($(this).find('img')) {
			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
		}
	});
})
