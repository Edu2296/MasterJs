'use strict'

/*
Utilizando bucle, mostrar la suma y la media de los numero introducidos hasta intruducir un numero negativo y ahi mostrar el resultado
*/

var suma = 0;
var contador = 0;

do{
    var numero = parseInt(prompt("Numero positivos hasta un numero negativo",0));
    if(isNaN(numero)){
        numero=0;
    }else if(numero>=0){
        suma+=numero;
        contador++;
    }
    console.log(suma);
    console.log(contador);
}while(numero>=0);

alert ("La suma de todos los numeros es: "+suma);
alert ("La media de todos los numeros es: "+(suma/contador));