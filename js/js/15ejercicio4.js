'use strict'

/**
 * Muestre todos los numeros divisores de un numero en prompt
 */

var numero1= parseInt(prompt('Introduce el primer numero', 1));
for(var i=1; i<=numero1;i++){
    if(numero1%i==0){
    //console.log("Divisor: "+i);
    document.write('Divisor '+i+ '<br>');
    }
}