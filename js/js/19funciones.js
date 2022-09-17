'use strict'
/**unafuncion es una  agrupacion reutilizables
 *se ejecutan varias insytrucciones que son invocadas
 */
//Creamo otro funcion para llamar
function porConsola(numero1,numero2) {
    console.log("Suma : " +(numero1+numero2));
    console.log("Resta : " +(numero1-numero2));
    console.log("Multiplicacion : " +(numero1*numero2));
    console.log("Division : " +(numero1/numero2));
    console.log("*********************************")
}
function porPantalla(numero1,numero2) {
    document.write("Suma : " +(numero1+numero2)+"<br>");
document.write("Resta : " +(numero1-numero2)+"<br>");
document.write("Multiplicacion : " +(numero1*numero2)+"<br>");
document.write("Division : " +(numero1/numero2)+"<br>");
document.write("*********************************"+"<br>")
}
//defino la funcion
//usando parametros
function calculadora(numero1, numero2, mostrar = false){
//return "hola soy la calculadora";
    if(mostrar == false){
        porConsola(numero1, numero2);
    }else{
        porPantalla(numero1, numero2);
         }
        return true;
 }
// a esta funcion le puedo llamar las veces que quiera
calculadora(1,4);
calculadora(2,5,true);
/* 
for (var i = 1; i <=10; i++)
{
    console.log(i);
    calculadora(i,8);
}*/

