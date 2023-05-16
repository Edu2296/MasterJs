'use strict';

var categoria =['accion','terror','comedia']
var pelicula=['la verdad duele', 'la vida es bella','el gran torino']

//ordenar un array en orden alfabetico
//pelicula.sort();
pelicula.reverse();
console.log(pelicula)


var cine =[categoria, pelicula]

 ///console.log(cine[0][1]);
 ///console.log(cine[1][2]);
/*
 var elemento= "";
do{
    elemento=prompt("Introduce una pelicula: ")
    pelicula.push(elemento)
    
 } while(elemento!="ACABAR")
 //elimina el ultimo elemento
 pelicula.pop();
*/
//Borra un elemento de un array , por busqueda
var indice=pelicula.indexOf('la vida es bella')
//console.log(indice)
if(indice>-1){
    pelicula.splice(indice,1)
}
//convierte en un string el array
var pelicula_string=pelicula.join();
 console.log(pelicula_string);
  
