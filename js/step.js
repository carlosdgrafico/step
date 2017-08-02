$(document).ready(function(){

	var totalFotos = $('.secuencia--foto img');
	var avance = ['0', '33.3%', '66.6%', '100%'];

	$('.secuencia--steps--item').on('click', function() {
		var ubicacion = $(this).index();
		var imagen = totalFotos[ubicacion-1];
		var avanceTotal = avance[ubicacion-1];

		$('.secuencia--steps--item').removeClass('secuencia--steps--item__active');
		$(this).addClass('secuencia--steps--item__active');
		$(totalFotos).hide();
		$('.secuencia--steps--linea').css('width', avanceTotal);
		$(imagen).show();
	});


});
