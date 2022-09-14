'use strict'

//condicionales if 
// si a es igual b entonces haz algo 
var edad =34;
var nombre = "David suarez";
///operadores relacionales
/*
mayor : >
menor : <
mayor o igual : >=
menor igual : <=
igual: ==
distinto : !=
*/
//si pasa esto 
if(edad >= 18 ){
    console.log(nombre + " tiene " +edad+ " años , es mayor de edad");
    if(edad <= 33){
        console.log("todavia eres milenial");
    }else if(edad>=70){
        console.log("eres anciano");
    } else{
        "ya no ers milenial";
    }
} else{
    console.log(nombre + " tiene "+ edad + " años , es menor de edad");
}
// operadores logicos

/*
AND( Y):&&
OR (O): ||
NEGACION : !
*/
//NEGACION
 var year = 2015;
 if(year!=2023);
 {
    console.log("el año no es 2023 realmente es: "+year);
 }
 //AND
  if(year>=2000 && year <=2022 && year !=2018){
    console.log("Estamos en la era actual");
  } else{
    console.log("Estamos en la post moderna");
}
//OR 
if(year ==2002 || (year >=2020 && year==2022 )){
console.log("El año acaba en 2");
}
else{
    console.log("El año no esta registrado");
}