
function determinaDato( a ) {
    if(a === undefined){
      console.log("A es undefined... no se que hacer");
    }
    if(typeof a === "number"){
      console.log("Es de tipo numero");
    }
    if(typeof a === "string"){
      console.log("Es de tipo texto");
    }
    if(typeof a === "object"){
      console.log("Es de tipo objeto");

      if(a instanceof Number ){
        console.log("A es un objeto de tipo numerico");
      }
    }
}

var b = new Number(3);
console.log(b);
determinaDato(b);
