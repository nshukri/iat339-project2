// source: https://codepen.io/nxworld/pen/OyRrGy?editors=0110
$(function() {
	$('#arrow').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
		console.log("scroll")
	});
});