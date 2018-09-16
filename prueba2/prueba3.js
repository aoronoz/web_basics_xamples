
var seleccion = function(){
	var a=document.getElementById('a').value;
	var b=document.getElementById('b').value;
	var c=document.getElementById('c').value;
	var d = Math.pow(+b,2)-4*+a*+c;
if (d<0){
	console.log(' no tiene raices reales');
	document.getElementById("resultado").innerHTML= d+ 'no tiene raices'
}else {
	console.log('si tiene raices');

	var x1= (-+b*Math.sqrt(+d))/2*+a;
	console.log('x1 '+x1);
	document.getElementById("resultado1").innerHTML= 'x1' +x1 
	var x2= (-+b-Math.sqrt(+d))/2*a;
	console.log('x2' +x2);
	document.getElementById("resultado2").innerHTML=  'x2' +x2

}
}