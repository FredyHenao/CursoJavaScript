
function crearProducto(nombre, precio) {
  nombre = nombre || "sin nombre";
  precio = precio || 0;
  console.log("Producto: ", nombre, "Precio: ", precio );
}

function crearProducto100(nombre) {
  crearProducto(nombre , 100);
}

function crearProductoCamisa(precio){
  crearProducto("camisa", precio);
}

crearProducto("Lapiz");
crearProducto100("corrector");
crearProductoCamisa(200);
