console.log('EXERCISE 6: FUNCTIONS');

// Funciones
// Crear una función suma que reciba dos valores numéricos y retorne el resultado. 
// Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.

console.log('Exercise 6.a:');

function addition(num1, num2) {
    return num1 + num2;
}
var addNum = addition(5, 6);
console.log(addNum);

// A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número,
//  mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.

console.log('Exercise 6.b:');
function additionValidation(num1, num2) {
    if (typeof (num1) !== 'number' || typeof (num2) !== 'number') {
        alert('Error. One of the parameters shows issues (is not a number).');
        return NaN;
    }
    return num1 + num2;
}
var addNum2 = additionValidation(2, 'string');
console.log(addNum2);

// Crear una función validate integer que reciba un número como parámetro
// y devuelva verdadero si es un número entero.

console.log('Exercise 6.c:');

function validateInteger(num3) {
    return Number.isInteger(num3);
}
var addNum3 = validateInteger(12);
console.log(addNum3);

// A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros.
//  En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).

console.log('Exercise 6.d:');

function additionValidationInteg(num4, num5) {
    if (typeof (num4) !== 'number' || typeof (num5) !== 'number') {
        alert('Error. One of the parameters shows issues (is not a number).');
        return NaN;
    }
    if (validateInteger(num4) != true && validateInteger(num5) != true) {
        alert('Error. Both numbers are not integer. The closest integer numbers are: ');
        return [Math.round(num4), Math.round(num5)];
    }
    if (validateInteger(num4) != true) {
        alert('Error. The first number is not an integer. The closest integer number is: ');
        return Math.round(num4);
    }
    if (validateInteger(num5) != true) {
        alert('Error. The second number is not an integer. The closest integer number is: ');
        return Math.round(num5);
    }
    return num4 + num5;
}
var addNum4 = additionValidationInteg(2.1, 2.2);
console.log(addNum4);

// Convertir la validación del ejercicio 6d) en una función separada 
// y llamarla dentro de la función suma probando que todo siga funcionando igual.

console.log('Exercise 6.e:');

function additionValidationIntegers(num6, num7) {
    if (typeof (num6) !== 'number' || typeof (num7) !== 'number') {
        alert('Error. One of the parameters shows issues (is not a number).');
        return NaN;
    }
    if (validateInteger(num6) != true && validateInteger(num7) != true) {
        alert('Error. Both numbers are not integer. The closest integer numbers are: ');
        return [Math.round(num6), Math.round(num7)];
    }
    if (validateInteger(num6) != true) {
        alert('Error. The first number is not an integer. The closest integer number is: ');
        return Math.round(num6);
    }
    if (validateInteger(num7) != true) {
        alert('Error. The second number is not an integer. The closest integer number is: ');
        return Math.round(num7);
    }
    return num6 + num7;
}
function additionLast(num8, num9) {
    if (typeof (num8) !== 'number' || typeof (num9) !== 'number') {
        alert('Error. One of the parameters is not a number.');
        return NaN;
    }
    return additionValidationIntegers(num8, num9);
}

var addNum5 = additionLast(5, 7.5);
console.log(addNum5);

