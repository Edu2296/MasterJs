'use strict'
//Arrays, arreglos, matrices

var nombre= "victor robles";
var nombres=["victor  robles", "juan lopez", "manolo garcia", "jose martin",52, true];

var lenguajes= new Array("php","js","go","java","c#","pascal","console.log()");
/*var elemento = parseInt(prompt("QUE ELEMENTO DEL ARRAY QUIERES",0));
if (elemento>= nombres.length){
    alert("Introduce el numero correcto menor que "+ nombres.length)
}else{
    alert("el usuario seleccionado es : "+ nombres[elemento]);
}
alert(nombres[elemento]);*/
/*console.log(nombres);
console.log(lenguajes);*/

//console.log(nombres[5]);
//console.log(nombres.length);

document.write("<h1>Lenguajes de programacion</h1>");
document.write("<ul>");
/*for(var i = 0; i < lenguajes.length; i++){
    document.write("<li>"+lenguajes[i]+"</li>");
}*/
lenguajes.forEach((elemento,indice)=>{
    document.write("<li>"+indice+" - "+elemento+"</li>");
})
document.write("</ul>");