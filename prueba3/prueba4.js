
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
document.getElementById('resultado').innerHTML= horas+':'+minutos+':'+  segundos+'';
}








