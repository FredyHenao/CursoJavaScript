var c = 1;
var b = "fredy";
//tipos de impresion por consola
console.log(c);
console.warn(b);
console.error(c);
console.info(b);
//datos primitivos
var num = 10;
var str = "texto";
var bool = true;
var und = undefined;
var nul = null;
//objetos
var obj ={
  //propiedades
  numero: 10,
  texto: "nuevo texto"
};
//los datos promitivos se pasan variables por valor
//Los objetos siempre se pasan por referencia
var c ={
  nombre: "juana"
};
var d = c;
c.nombre = "maria";

//la notacion punto sirve para obtener los valores de un objeto
var persona ={
  nombre: "juana",
  edad: 20,
  direccion:{
    pais: "colombia",
    ciudad: "faca",
    edificio:{
      nombre: "principal",
      telefono: "42342-32423"
    }
  }
};
//console.log(persona.direccion);
//console.log(persona.direccion.pais);
persona.direccion.code = 1234567890;//agregar una nueva variable

//notacion corchete sirve para obtener los valores de un objetos
/*console.log(persona["nombre"]);
console.log(persona["direccion"]["pais"]);*/
/*var campo = "edad";
console.log(persona[campo]);*/
