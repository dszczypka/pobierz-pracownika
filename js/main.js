$(document).ready(function(){
	
	function getData(){
		$.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function(data){
			var divUser = document.createElement('div');
			$(divUser).html(
			' Imię pracownika: ' + data.imie + '<br> Nazwisko pracownika: ' + data.nazwisko + '<br> Stanowisko pracownika: ' + data.zawod + '<br> Miejsce pracy: ' + data.firma
			
			);
			
			$('body').append(divUser);
		});
	}
	
	$('#dane-pracownika').click(getData);
	
});