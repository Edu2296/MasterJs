'use strict'

/**
 * calculadora 
 * pida dos numero por pantalla
 * si metemos  un numero mal vuelva a pedir
 * en el cuerpo de la pagina, se muestre el resultado de sumar , restar,dividir, multiplicar
 */
var numero1= parseInt(prompt('Introduce el primer numero', 0));
var numero2= parseInt(prompt('Introduce el segundo nuemro',0));
while(numero1<0|| numero2<0 || isNaN(numero1) || isNaN(numero2)){
    var numero1= parseInt(prompt('Introduce el primer numero', 0));
var numero2= parseInt(prompt('Introduce el segundo nuemro',0));
}

var resultado= "La suma es : "+(numero1+numero2)+" <br>"+"La resta es : "+(numero1-numero2)+"<br>"+"La multiplicacion es : "+(numero1*numero2)+"<br>"+"La suma es : "+(numero1/numero2)+"<br>";

var resultadoCMD= "La suma es : "+(numero1+numero2)+" \n"+"La resta es : "+(numero1-numero2)+" \n"+"La multiplicacion es : "+(numero1*numero2)+" \n"+"La suma es : "+(numero1/numero2)+" \n";

document.write(resultado);
alert(resultadoCMD);