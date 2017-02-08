var persona={
  nombre: "juan",
  apellido: "gomez",
  //metodo
  imprimirNombre: function () {
    console.log(this.nombre+ " "+this.apellido);
  },
  direccion: {
    pais: "costa rica",
    obtenerPais: function () {
      var self = this;//obtener el objeto direccion
      var nuevaDireccion = function () {
        console.log(self);
        console.log("la direccion es en " + self.pais);
      }
      nuevaDireccion();
    }
  }
}

persona.imprimirNombre();
persona.direccion.obtenerPais();
