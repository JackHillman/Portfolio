$(document).ready(function() {

//Important To Not Have Jumpiness When Scrolling Over Parallax

	$('.nav').click(function() {
		if ($(this).attr("href") != undefined) {
			var link = $(this).attr('href');
			$(this).removeAttr("href");
			$(this).attr("link", link);
		}
		else {
			var link = $(this).attr("link");
		}

//ScrollTo Plugin Call

		$("body").scrollTo(link, 300);
	});
});