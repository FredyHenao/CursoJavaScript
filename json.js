/**
 * Created by FredyHenao on 23/10/2017.
 */
var objetoJS = {
    nombre:"Fredy",
    edad: 21
};
console.log("Objeto Literal",objetoJS );

//convertir a json
var jsonString = JSON.stringify( objetoJS );
console.log( jsonString );

var objetoDesdeJson = JSON.parse(jsonString);
console.log(objetoDesdeJson);

console.log(objetoDesdeJson.nombre);