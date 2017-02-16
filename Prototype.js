//los protipos permiten espandir los objetos- propiedades o metodos a la clase

function Persona() {
  this.nombre = "Fredy";
  this.apellido = "Henao";
  this.edad = 20;

}
Persona.prototype.imprimirInfo = function () {
  console.log(this.nombre+" "+this.apellido+" ("+this.edad+")");
};

var per = new Persona();
console.log(per);
per.imprimirInfo();
