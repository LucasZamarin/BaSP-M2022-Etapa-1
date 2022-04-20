console.log('EXERCISE 05: FOR');

// For
// Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.

console.log('Exercise 5.a:');

let numbers = ['first', 'second', 'third', 'fourth', 'fifth'];
for (var i = 0; i < numbers.length; i++) {
    alert(numbers[i]);
}

// Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.

console.log('Exercise 5.b:');

var stringMayus;
for (var l = 0; l < numbers.length; l++) {
    stringMayus = numbers[l].substring(0, 1).toUpperCase() + numbers[l].substring(1).toLowerCase();
    alert(stringMayus);
}

// Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa.

console.log('Exercise 5.c:');

var sentence = '';
for (var j = 0; j < numbers.length; j++) {
    sentence += numbers[j];
}
alert(sentence);


// Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0 hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).

console.log('Exercise 5.d:');

var emptyArray = [];
for (var m = 0; m < 10; m++) {
    emptyArray[m] = m;
}
console.log(emptyArray);