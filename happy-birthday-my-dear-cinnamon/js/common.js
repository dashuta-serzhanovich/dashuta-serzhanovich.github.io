document.addEventListener('DOMContentLoaded', function(){
	
	if($(window).width() >= 992) {
		$('#fullpage').fullpage({
			controlArrows: true
		});
	}

	$('.fa-chevron-up').click(function(){
		$.fn.fullpage.moveSectionUp();
	});
	$('.fa-chevron-down').click(function(){
		$.fn.fullpage.moveSectionDown();
	});

	function run() {
		var image = document.getElementById('background');
		image.onload = function() {
			var engine = new RainyDay({
				image: this
			});
			engine.rain([ [1, 2, 8000] ]);
			engine.rain([ [3, 3, 0.88], [5, 5, 0.9], [6, 2, 1] ], 100);
		};
		image.crossOrigin = 'anonymous';
		image.src = 'http://i.imgur.com/N7ETzFO.jpg';
	}
	console.meme("Мне кажется или ты всё ещё не закрыл дев тулз?", ". . .", "Not Sure Fry", 400, 300);
});