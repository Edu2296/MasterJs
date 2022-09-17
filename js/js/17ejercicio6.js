'use strict'
/**
 * tabla de multiplicar de un numero introducidor por pantalla
 */

var numero= parseInt(prompt('Introduce el primer numero', 1));

for(var i=1; i<=10; i++){
    document.write(i+" x "+numero+" = "+(i*numero) +"<br>");
}
//todas las tablas de multiplicar
for(var c=1; c<=10; c++){
document.write("<h1>Tabla del "+c+" </h1>");
for(var i = 1; i<=10; i++){
    document.write(i+ " x "+c+" = "+(i+c)+" <br>"); 
}

}