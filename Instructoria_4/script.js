// FUNCIONES
/*
--> Son bloques de codigo para realizar una accion o instruccion
--> Son reutilizables

*/

// Funcion basica
function suma() {
    let suma = 4 + 1;  // Logica
    console.log(suma); // Imprimi ese resultado
}

suma();
suma();
suma();

// Funcion con argumentos
// --> Los argumentos son valores que deben pasarse a la funcion para ejecutarse
// --> NaN: Not a Number
function suma1(numero1, numero2) {
    let suma1 = numero1 + numero2;
    alert(suma1); 
}

// suma1(2, 7);

// let num1 = parseInt(prompt('Ingresa el numero 1'));
// let num2 = parseInt(prompt('Ingresa el numero 2'));

// suma1(num1, num2);

// Ejercicio de funciones
// Pedir al usuario los datos: Nombre, apellido, edad y verificar si es mayor de edad

/*  IDEAS
--> Crear la funcion
*/

function informacionUsuario(nombre, apellido, edad) {

    if(edad >= 18) {
        alert(nombre + ' - ' + apellido + ' - ' + edad + ' - ' + 'Mayor de edad');
    } else {
        alert(nombre + ' - ' + apellido + ' - ' + edad + ' - ' + 'Menor de edad');
    }
}

// let nombre = prompt('Ingresa tu nombre');
// let apellido = prompt('Ingresa tu apellido');
// let edad = parseInt(prompt('Ingresa tu nombre'));

// informacionUsuario(nombre, apellido, edad);

// -------------------------------------------------------------
// FUNCIONES CON RETORNO
// --> Son funciones que devuelven un resultado la cual puede ser utilizado posteriormente
function suma2(num1, num2) {
    let suma = num1 + num2; // Logica
    return suma;            // Retornar resultado de la logica
}

// let numero1 = parseInt(prompt('Numero 1'));
// let numero2 = parseInt(prompt('Numero 2'));

// let resultado1 = suma2(numero1, numero2); // 14

// let sumaMayor = resultado1 + 5; // 14 + 5
// console.log(sumaMayor);