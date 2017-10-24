/**
 * Created by FredyHenao on 24/10/2017.
 */

//comando continue

for( var i = 0; i <= 10; i++ ){
    if( i == 5 ){
        continue;
    }
    console.log(i);
}
//for in se utiliza en objetos

var Persona = function () {
    this.nombre = "Fredy";
    this.apellido = "Henao";
    this.edad = 18;
}

var juan = new Persona();
Persona.prototype.direccion = "Faca";

for( prop in juan ){
    //saber si la propiedad esta en el objeto
    console.log( juan.hasOwnProperty( prop ) );

    console.log( prop, ":" ,juan[prop]);
}

[1,2,3,4,true,6,false,8,"nombre",10].forEach(function (val) {
    console.log(val);
});

/* Rotulación de ciclos */

for_principal:
for( var i = 1; i<=5; i++ ){
    console.log("i",i);

    for_secundario:
    for( var j = 1; j<=5; j++ ){
        console.log("j",j);

        for( var x= 1; x<=5; x++ ){
            console.log("x",x);

            break for_secundario;
        }
    }
}
/* Funciones de tiempo */

setTimeout(function () {
    console.log( "Paso un segundo" );
}, 1000);

var segundos = 0;
var intervalo = setInterval(function () {
    segundos ++;
    console.log("seg", segundos);

    if( segundos === 3){
        clearInterval( intervalo );
    }
}, 1000);


var juan = {
    nombre: "juan",
    edad: 18,
    imprimir: function () {

        var self = this;

        setTimeout(function () {
            console.log( self.nombre, self.edad );
        }, 1000);
    }
};

juan.imprimir();