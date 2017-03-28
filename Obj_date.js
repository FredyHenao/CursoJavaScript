
var hoy = new Date();
var fMili = new Date(0);
var fFija = new Date(2017,2,27,21,24,12,15); //Date(año,mes,dia,horas,minutos,segundos,milisegundos) javascript maneja los meses en base 0
console.log(hoy);
console.log(fMili);
console.log(fFija);

console.log(hoy.getFullYear());//saber el año actual
console.log(hoy.getDate());//saber el dia del mes actual
console.log(hoy.getHours());//saber la hora actual
console.log(hoy.getMilliseconds());//saber los milisegundos actual
console.log(hoy.getMonth());//saber los meses actuales en base 0
console.log(hoy.getSeconds());//saber los segundos actual
console.log(hoy.getTime());//convierte toda la fecha en milisegundos

//ejemplo de intervalo de tiempo
var inicio = new Date();
for (var i = 0; i < 15000; i++) {
  console.log("algo...");
}
var fin = new Date();
//console.log(inicio);
//console.log(fin);
var duracion = fin.getTime() - inicio.getTime();
console.log(duracion + ' milisegundos');
console.log((duracion/1000) + ' segundos');
