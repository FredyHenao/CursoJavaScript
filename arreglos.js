
var arr = [5,4,3,2,1];
console.log(arr);
arr.reverse();//invertir el arreglo
console.log(arr);

//recorrer el arreglo sin necesidad de hacerlo con un for o while
arr = arr.map(function (elem) {
  elem *= elem;
  return elem;
});
console.log(arr);
arr = arr.map( Math.sqrt);
console.log(arr);

//convierte o pega todas las posiciones del arreglo separado por comas
arr = arr.join("|");
console.log(arr);

//cortar el arreglo
arr = arr.split("|");
console.log(arr);

//agregar un nuevo elemento al array a la ultima posicion
arr.push("6");
console.log(arr);

//agregar un nuevo elemento al array a la primera posicion
arr.unshift("0");
console.log(arr);

//es parecido al split pero mas rapido
console.log(arr.toString());

//quitar el ultimo elemento del array
var elimine = arr.pop();
console.log(arr, elimine);

//eliminar, modificar elementos de una posicion a otra
arr.splice(1,0,"10","20","30");
console.log(arr);

//cortar un array de una posicion a otra sin contar la posicion final
arr = arr.slice(0,2);
console.log(arr);
