/**
 * Mostrar todos los numero impares
que hay entre dos numeros introducidos por el usuarios
*/
var numero1= parseInt(prompt('Introduce el primer numero', 0));
var numero2= parseInt(prompt('Introduce el segundo numero', 0));
while(numero1<numero2) {
    numero1++;
    if(numero1%2 != 0){
        //console.log('El'+numero1+' numero es impar');
        document.write('El '+numero1+' numero es impar <br>');
    }
}