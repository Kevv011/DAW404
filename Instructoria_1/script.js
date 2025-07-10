// Variables y constantes
let variable = 'Hola mundo';
const constante = 0;

// Console.log
console.log(constante);

// Alert, prompt
// let num1 = prompt('Numero 1: ');
// let num2 = prompt('Numero 2: ');

// num1 = parseInt(num1);
// num2 = parseInt(num2);

// if (num2 > 0) {
//     division = num1 / num2;
// }
// else {
//     alert('No se puede la division entre cero');
// }

// alert(division);

// --------------------------------------------------------------------------------------------------

/* EJERCICIO: Crear una app para realizar un calculo de presupuesto en un hospital. Dado un valor
   de presupuesto por el usuario el presupuesto se calcula el total asignado a tres areas
   --> Deramtologia 40%, Traumatologia 33% y pediatria 27%  */

// Un total de porcentaje, debe de ser el 100%  --> 40% + 33% + 27% = 100%
// 100% = 1   --> 10% = 0.1 --> 5% = 0.05 

/* IDEAS 
--> Multiplicar segun el porcentaje por el presupuesto
*/

let presupuesto = prompt('Ingresar el presupuesto: $');

let dermatologia = 0;
let traumatologia = 0;
let pediatria = 0;

dermatologia = Math.round(presupuesto * 0.40, 2);
traumatologia = Math.round(presupuesto * 0.33, 2);
pediatria = Math.round(presupuesto * 0.27, 2);

alert('A pediatria le tocan $' + dermatologia + ', a traumatologia le tocan $' + traumatologia + ' y a pediatria le tocan $' + pediatria);
