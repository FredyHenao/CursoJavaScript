//poner una funcion con la primera letra mayuscula hace como referencia a una clase"funcion de primera clase"

function Jugador( nombre ) {
    this.nombre = nombre;
    this.pv = 100;
    this.sp = 100;

    this.curar = function (jugadorObjetivo) {
      if(this.sp >= 40){
        this.sp -= 40;
        jugadorObjetivo.pv +=20;
      }else{
        console.info(this.nombre + " no tiene sp");
      }
      this.estado(jugadorObjetivo);
    }
    this.tirarFecha = function(jugadorObjetivo){
      if(jugadorObjetivo.pv > 40){
        jugadorObjetivo.pv -= 40;
      }else{
        jugadorObjetivo.pv = 0;
        console.error(jugadorObjetivo.nombre+" Murio!!!");
      }

      this.estado(jugadorObjetivo);
    }

    this.estado = function (jugadorObjetivo) {
      console.info(this);
      console.info(jugadorObjetivo);
    }
}

var gandalf = new Jugador("gandalf");
var legona = new Jugador("legona");

console.log(gandalf);
console.log(legona);

gandalf.curar(legona);
