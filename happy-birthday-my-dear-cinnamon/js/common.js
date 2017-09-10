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

	(function(){

		setInterval(function(){
			var start = new Date();
			var end = new Date(2017, 9, 4, 0, 0, 0);
			var daysSeptember = 30;
			var dayLeave = 4;
			var daysRemaining = daysSeptember + dayLeave - start.getDate()
			var hoursRemaining =  23 - start.getHours();
			var minutesRemaining =  59 - start.getMinutes();
			var secondsRemaining =  59 - start.getSeconds();
			var daysRemainingText;

			switch(daysRemaining){
				case 31:
				case 21:
				case 1: daysRemainingText = 'день'; break;
				case 3:
				case 4:
				case 22:
				case 23:
				case 24:
				case 2: daysRemainingText = 'дня'; break;
				case 6:
				case 7:
				case 8:
				case 9:
				case 10:
				case 11:
				case 12:
				case 13:
				case 14:
				case 15:
				case 16:
				case 17:
				case 18:
				case 19:
				case 20:
				case 25:
				case 26:
				case 27:
				case 28:
				case 29:
				case 30:
				case 5: daysRemainingText = 'дней'; break;
			}

			if(hoursRemaining < 10){
				hoursRemaining = '0' + hoursRemaining;
			}
			if(minutesRemaining < 10){
				minutesRemaining = '0' + minutesRemaining;
			}
			if(secondsRemaining < 10){
				secondsRemaining = '0' + secondsRemaining;
			}

			var string = daysRemaining + ' ' + daysRemainingText + ' - ' + hoursRemaining + ' часов ' + minutesRemaining + ' мин. - ' + secondsRemaining + ' сек.';
			console.log(string);
			

			$('.grid__item--nav-next').attr('data-text', string);
		}, 1000);


	})();

});