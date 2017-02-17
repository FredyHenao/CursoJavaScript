//la funcion typeof sirve para saber el tipo de dato que es
//instanceof permite comparar objetos

function identifica(param) {
  console.log(typeof param);
  console.log(param instanceof Persona);
}

function Persona(){

}
var juan = new Persona();

identifica(juan);
