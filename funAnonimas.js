/*las funciones anonimas sirven para no hacer conflicto con otros
archivos de javascript los cuales tienen variables globales,  tambien sirven para encapsular el codigo*/

//declarar una funcion anonimas
(function(){
  var a = 10;

  console.log(a);

  function cambiarA() {
    a = 20;
  }
  cambiarA();
  console.log(a);
})();
//otra forma de declarar funciones anonimas
function ejecutarFuncion( fn ) {
  if(fn() === 1){
    return true;
  }else{
    return false;
  }
};

console.log(
  ejecutarFuncion(function(){
    console.log("Funcion anonima ejecutada!!");
    return 1;
  })
);
