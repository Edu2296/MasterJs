'use strict'

var nombre = prompt("mete tu nombre");
var apellido = prompt("mete tus apellidos");
/*/var texto = "Mi nombre es : "+ nombre + "<br> Mis apellidos son : "+ apelido;*/
var texto=`
<h1>Hola que tal</h1>
<h3> Mi nombre es : ${nombre}</h3>
<h3> Mi apellido es : ${apellido}</h3>
`;

document.write(texto);