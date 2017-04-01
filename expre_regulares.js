// hay dos maneras de definir expresiones regulares en javascript es la explicita usando un constructor y un literal simplemente se define en el momento
/*tienen tres controladores y se escriben al final de la expresion regulares
i = insesible ej /m/i no importa si esta en mayuscula o minuscula
g = todas las apariciones /[aeiou]/g aparacen todas las letras
m = que sea multilinea  cuando tenemos separaciones de carretas o enter
ej /[aeiou]/ig aparezcan todas sin importar si son mayusculas o minusculas
*/
/*Un diptongo es una cadena sonora que consiste en la articulación de dos vocales, una a continuación de la otra,
1 sin interrupción y produciéndose una transición suave en las frecuencias sonoras que caracterizan los timbres de cada una de las dos vocales.*/
//var reg1 = RegExp("a");
var reg2 = /a/;

var texto = "Hola Mundoo.";
// /^a/ el pico significa buscar si encuentra en la primera palabra
// /a$/ significa buscar si se encuentra en la ultima letra
// /.../ el punto significa quiero cualquier caracter
/* /[]/ son utilizadas para rangos eje [0-9] solo esten estos numeros [023518]
[a-zA-Z] rango de mayusculas y minusculas
/^H[a-z]/ la primera letra tiene que ser H y la segunda cualquiera en el rango
/[a-z].$/ cualquier letra despues cualquier caracter pero que este al final
/\s/ buscar cualquier separacion en el texto
/\w/ = [a-zA-Z0-9] cualquier letra
/\d/ = [0-9] cualquier numero
/[aeiou]|é/ig la tuberia | actua como un or quiero todas las vocales o una é
/[aeiou]|[áéíóú]/ig caracteres especiales
estructuras de repiticiones o operadors de repiticiones buscan patrones repetitivos
ej  "Holaa Mundoo."  /a/ig
operadores de repitición
1.  /o+/g  + aparace la letra una o mas veces seguidas de ese carcater
2.  /o?/g  ? tiene que aparecer o no el caracter
3. o*  * significa de 0 o mas veces
4. /o{2}/  cuantas veces quiero que aparezcan se utilizan casi siempre para los diptongos
*/
var arr = texto.match(/o*/g);//devuelve un arreglo si encuentra algo si no devuelve NULL
console.log(arr);
