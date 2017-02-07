
/*var a = 50;
function primeraFuncion() {
  var a = 20;
  console.log(a);
}

primeraFuncion();*/

//las funciones siempre devuelven un valor

/*function imprimir(nombre, apellido) {
    apellido = apellido || "xxx";
    console.log(nombre+" "+apellido);
}

imprimir("fredy", "henao");*/

//funciones con objetos
/*function imprimir( persona ) {
    console.log( persona.nombre+" "+persona.apellido);
}
imprimir({
  nombre: "fredy",
  apellido: "henao"
});*/

//enviar funciones a funciones
function imprimir( fn ) {
    fn();
}

imprimir(function () {
  console.log("funcion anonima");
});
