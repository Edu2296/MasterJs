'use strict'
//Parametros REST Y SPREAD
//parametro rest en resto_frutas
function listadoFrutas(fruta1,fruta2,...resto_frutas){
    console.log("Fruta 1:",fruta1);
    console.log("Fruta 2:",fruta2);
    console.log(resto_frutas);
}
listadoFrutas("Naranja","Manzana","Sandia","Pera","Melon");
 var frutas=["Naranja","Manzana"];
 //paramentro spread
 listadoFrutas(...frutas,"Sandia","Pera","Melon");
 