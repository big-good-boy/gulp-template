// menu.js
$('.menu__icon').click(function (event) {
	$(this).toggleClass('active');
	$('.menu__body').toggleClass('active');
	if ($(this).hasClass('active')) {
		$('body').data('scroll', $(window).scrollTop());
	}
	$('body').toggleClass('menu__lock');
	if (!$(this).hasClass('active')) {
		$('body, html').scrollTop(parseInt($('body').data('scroll')));
	}
})
