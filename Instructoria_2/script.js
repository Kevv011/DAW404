// Bucles en JavaScript
/*
--> For, While y Do-While

--> FOR: Utilizado cuando se sabe exactamente cuantas veces repetir algo
--> WHILE: Utilizado indefinidamente siempre que se cumpla una condicion
            While primero verifica una condicion, y despues ejecuta
--> DO-WHILE: Siempre se ejecuta y despues verifica

*/

// ---------------------------------------------------------------------
//BUCLE FOR: Imprimir los numeros del 1 al 10
let i = 1; // Variable iterativa

// for (i ; i <= 10 ; i++) {  // (Variable iterativa ; Condicion ; Comportamiento)
//     console.log(i); 
// }

// BUCLE WHILE: Imprimir numeros del 1 al 10
// while(i <= 10) {
//     console.log(i);
//     i++;
// }

// BUCLE DO-WHILE
// let password;

// do {
//     password = prompt('Ingresa tu contraseña: ');
// }while(password !== '1234'); // Valida el dato y el tipo de dato

// alert('Contraseña correcta');

// --------------------------------------------------------------------------------
/* Ejercicio: Imprimir los primeros 10 valores de la tabla que yo quiera 
--> Bucle mas favorable: FOR
*/

// let tabla = prompt('Ingresa el valor a generar la tabla de multiplicar');
// let producto = 1;

// for (let i = 1 ; i <= 10 ; i++) {
//     producto = tabla * i;              
//     console.log(producto);
// }

// Prompt, alert

// --------------------------------------------------------------------------------
// EJERCICIO: Imprimir los numeros pares del siguiente array
/*
--> Array es una ESTRUCTURA DE DATOS
--> Almacena varios valores de cualquier tipo
--> Un array se compone se indices
--> Un array en JS, inicia con indice de valor CERO
--> Propiedad para contar valores de un array --> LENGTH
*/

/* Utilizacion de CONTINUE y BREAK 
--> Se usan sobretodo en condicionales
--> CONTINUE: Indica que si una condicion se cumple, evita los valores especificados
--> BREAK: Indica que si una condicion se cumple, se rompe el bucle
*/

const numeros = [8, 14, 17, 18, 20, 32, 65];
//               0  1  2   3   4   5   6   7

for (let i = 0 ; i < numeros.length ; i++) {

    if(numeros[i] % 2 !== 0) {
        break;
    }

    console.log(numeros[i]);
}

//              Dividendo / Divisor
//              Residuo  / Cociente         4 / 3 = !0 