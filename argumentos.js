
var arguments = 10;
function miFuncion(a,b,c,d) {
  //console.log(arguments);
  if(arguments.length !== 4){
    console.error("la funcion necesita 4 parametros");
    return;
  }
  console.log(a + b + c + d );
}
//los argumentos hacen referencia a las variables que envio en la funcion
//miFuncion(10, 20, 30, {}, function (){});
miFuncion(10, 20, 30);
