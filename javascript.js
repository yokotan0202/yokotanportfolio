//NavBar Scrolled Effect//
$(function () {
	$(document).scroll(function () {
		let $nav = $(".navbar-default");
		$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
});
