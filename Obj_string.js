
var a = new String("fredy henao");
console.log(a);
console.log(a.toUpperCase());//convertir a mayusculas
console.log(a.toLowerCase());//convertir a minusculas

var i = a.indexOf("e");//saber la posicion de una letra
console.log("la letra esta en la posición: "+i);

i = a.lastIndexOf("e");//saber la posicion de una letra en su ultima posicion
console.log("la letra esta en la posición: "+i);

var nombre = a.substr( 0, a.indexOf(" ") );//se utiliza para recortar una palabra
console.log(nombre);

var split = a.split(" ");//sirve para separar las palabras por medio de comas
console.log(split);
console.log(split.length);

//================
document.write(a.italics());//convertir las palabras a tipo de letra italic <i></i>
