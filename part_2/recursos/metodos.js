/* Métodos Find, Map, Filter y Reduce

!Find()
El método find() devuelve el valor del primer elemento 
del array que cumple la función de prueba proporcionada.

const array1 = [5, 12, 8, 130, 44];
const found = array1.find((element) => element > 10);
console.log(found); // 12

!Map()
El método map() se utiliza para crear un nuevo arreglo a partir de una existente, 
aplicando una función a cada uno de los elementos de la primera arreglo.

const numeros = [1, 2, 3, 4];
const duplicar = numeros.map(elemento => elemento * 2);
console.log(duplicar); // [2, 4, 6, 8]

!Filter()
El método filter() toma cada elemento de un arreglo 
y aplica una instrucción condicional contra él.

const numeros = [1, 2, 3, 4];
const pares = numeros.filter(item => item % 2 === 0);
console.log(pares); // [2, 4]

!Reduce()
El método reduce() reduce un arreglo de valores a un solo valor. 
Para obtener el valor de salida, ejecuta una función reductora en cada elemento del arreglo.

const numeros = [1, 2, 3, 4];
const suma = numeros.reduce(function (resultado, elemento) {
  return resultado + elemento;
}, 0);
console.log(suma); // 10

*/
