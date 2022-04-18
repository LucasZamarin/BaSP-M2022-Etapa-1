console.log('EXERCISE 3: ARRAYS');

// Arrays
// a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).

console.log('Exercise 3.a:');

const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(months[5]);
console.log(months[11]);

// b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

console.log('Exercise 3.b:');


console.log(months.sort());

// c. Agregar un elemento al principio y al final del array (utilizar unshift y push).

console.log('Exercise 3.c:');

console.log(months.unshift("January"));
console.log(months.push("December"));

// d. Quitar un elemento del principio y del final del array (utilizar shift y pop).

console.log('Exercise 3.d:');

console.log(months.shift("January"));
console.log(months.pop("December"));

// e. Invertir el orden del array (utilizar reverse).

console.log('Exercise 3.e:');

console.log(months.reverse());

// f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).

console.log('Exercise 3.f:');

console.log(months.join("-"));

// g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

console.log('Exercise 3.g:');

var monthsArray = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(monthsArray.slice(4, 11));