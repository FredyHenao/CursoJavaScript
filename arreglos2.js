
var array = [
  true,
  false,
  true,
  {
    nombre:"fredy",
    apellido:"henao"
  },
  function () {
    console.log("estoy en un arreglo");
  },
  function (persona) {
    console.log(persona.nombre + " " + persona.apellido);
  },
  [
    "xiomis",
    "miguel",
    "laura",
    "daniel",
    "fabian",
    [
      "maria",
      "lucia",
      function () {
        console.log(this);
      }
    ]
  ]

];
//saber el tamaño del arreglo  con la funcion length example : console.log(array.length);
console.log(array);
console.log(array[0]);
console.log(array[3].nombre + " " + array[3].apellido);
array[4]();
array[5](array[3]);
console.log(array[6][5][1]);
var array2 = array[6][5];
array2[1] = "angie";
console.log(array2);
console.log(array);
array2[2]();
