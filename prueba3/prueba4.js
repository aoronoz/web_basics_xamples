
var seleccion= function(){

	var entrada=document.getElementById('numero').value;

	var horas = entrada/3600;
	
	horas = Math.trunc(horas);
	
	console.log(horas);
	
	var residuoHoras = entrada%3600;
	
	var minutos = residuoHoras/60;
	
	minutos = Math.trunc(minutos)
	
	var segundos= residuoHoras%60;

	console.log(minutos);
	
	console.log(segundos);
	
	console.log(horas+':'+minutos+':'+  segundos+'');

	var horasMostrar='';
	
	if (horas===0) {
	
		horasMostrar= horas+'0';
	
	} else {
	
		horasMostrar= horas;
	}

	var minutosMostrar='';
	
	if (minutos===0) {
	
		minutosMostrar= minutos+'0';
	
	} else {
	
		minutosMostrar=minutos;
	}

	var segundosMostrar='';
	
	if (segundos===0) {
	
		segundosMostrar=segundos+'0';
	} else {
	
		segundosMostrar=segundos;

	}
	
	document.getElementById('resultado').innerHTML= horasMostrar+':'+minutosMostrar+':'+segundosMostrar;
}








