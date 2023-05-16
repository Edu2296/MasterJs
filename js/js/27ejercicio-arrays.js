'use strict'

/* 
1. Pida 6 numeros por pantalla y los meta en un array
2. Mostrar  el array entero(todos sus elementos) en el cuerpo de la pagina y en la consola
3. Ordenarlo y mostrarlo
4. Invertir el orden y mostrarlo
5.Mostrar cuantos elementos tiene el array
6.Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice
*/
//para introducir texto aleatorio
function mostrarArray(elemento,textoCustom=""){
//mostrar en pantalla
document.write("<h1>Mostar elementos de array"+textoCustom+"</h1>")
document.write("<ul>")
elemento.forEach((elemento,index) => {
        document.write("<li>"+elemento+"</li>")
    });
    document.write("</ul>")
}
///---Pedir 6 numeros
//var numeros= new Array(6)
var numeros=[]

for(var i =0;i<=5;i++){
   // numeros[i]=parseInt(prompt("Introduce los numeros:",0))
   numeros.push(parseInt(prompt("Introduce los numeros:",0)))
}
//mostrar numero en pantalla
mostrarArray(numeros)

//mostrar en consola
console.log(numeros)

///ordenar y mostrar

numeros.sort(function(a,b){return a-b});
mostrarArray(numeros," ordenado")
console.log(numeros)

//invertir y mostrarw
numeros.reverse();
mostrarArray(numeros," revetido")

//contar elementos
document.write("<h1>El array tiene: "+numeros.length+" elementos</h1>")

//busqueda

var busqueda=parseInt(prompt("Busca un numero:",0))
var posicion=numeros.findIndex(numeros =>numeros ==busqueda)
if(posicion&&posicion!=-1){
    document.write("<h1>ENCONTRADO</h1>")
    document.write("<h1>Posicion de la busqueda:"+posicion+"</h1>")
}
else{
    document.write("<h1>NO ENCONTRADO</h1>")
}





