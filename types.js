function EasyPeasyParallax() {
	scrollPos = $(this).scrollTop();
	$('.p1').css({
		'background-position' : '50% ' + (-scrollPos/4)+"px"
	});
  $('.p2').css({
		'background-position' : '50% ' + (-scrollPos/8)+"px"
	});
  $('.p3').css({
		'background-position' : '70% ' + (-scrollPos/16)+"px"
	});
	$('.parallax-text').css({
		'margin-top': (scrollPos/2)+"px",
		'opacity': 1-(scrollPos/230)
	});
}
$(document).ready(function(){
	$(window).scroll(function() {
		EasyPeasyParallax();
	});
});


/*scrtop*/
$(function(){
		$(window).scroll(function(){
				if ($(this).scrollTop() > 300) {
						$('#scroll').fadeIn();
				} else {
						$('#scroll').fadeOut();
				}
		});
		$('#scroll').click(function(){
				$('html, body').animate({scrollTop:0}, 'slow');
				return false;
		});
});


/*autio*/
	var audio = $("audio")[0];
	audio.play();
