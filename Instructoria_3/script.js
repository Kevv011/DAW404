// ARRAYS O ARREGLOS

/* 
--> Son estructuras de datos 
--> Almacenan varios datos en forma de indices (Index)
--> En JavaScript, los arrays inician en el Index 0
*/

let array = [];                 // --> Inicializar un array vacio
let array1 = [0, 1, 2, 3, 4];   // --> Agregar valores en un array

let array2 = ['fresa', 'piña', 'kiwi', 'manzana', 'melon'];

console.log(array);
console.log(array1);
console.log(array2[0]);

// ----------------------------------------------------------
// Los arrays manejan diversas propiedades o metodos
let array3 = ['fresa', 'piña', 'kiwi', 'manzana', 'melon'];

// POP() --> Utilizado para eliminar elementos al final del array
array3.pop();
console.log(array3);

// SHIFT() --> Elimina elementos al inicio del array
array3.shift();
console.log(array3);

// SPLICE() --> Altera el array original, agregar elementos en el array original
// Notacion: .splice(index_inicio, cuantos_elementos, 'Item1', 'item2', ...)
let array4 = ['fresa', 'piña', 'kiwi', 'manzana', 'melon'];
let array5 = ['fresa', 'piña', 'kiwi', 'manzana', 'melon'];
let array6 = ['fresa', 'piña', 'kiwi', 'manzana', 'melon'];

array4.splice(2, 2); // --> Eliminar elementos segun un index especifico
console.log(array4);

array5.splice(1, 2, 'guineo', 'sandia', 'valor'); // --> Agregar items segun el index especifico
console.log(array5);                              // Y eliminar

array6.splice(0, 0, 'valor', 'valor', 'valor')
console.log(array6);

// --------------------------------------------------------------------
let array7 = [0, 1, 2, 3, 4];
let array8 = [5, 6, 7, 8];
let array88 = [5, 6, 7, 8];

// CONCAT() --> Une 2 o mas arrays
// Al unir 2 arrays, yo creo uno nuevo
let array9 = array7.concat(array8).concat(array88);
console.log(array9);

// [1, 2, 3, 4] --> 1, 2, 3, 4 --> 1 - 2 - 3 - 4
// JOIN(Delimitador) --> Vuelve un array en un string segun un delimitador
// toString()        --> Vuelve un array en un string sin delimitador
const frutas = array4.join(' - ');
const frutas2 = array4.toString();
console.log(frutas);
console.log(frutas2);

// ---------------------------------------------------------------------
// SLICE(index_inicio, index_fin)
// --> Crea una copia de un array o una parte de un array
// --> Crea un array nuevo, no altera el original
let array4_duplicado = array4.slice(0, 2);
console.log(array4_duplicado);        

// ---------------------------------------------------------------------
// PUSH() --> Agregar elementos al final de un array
array4_duplicado.push('anona', 'valor', 'valor2');
console.log(array4_duplicado);


// ---------------------------------------------------------------------
/* EJERCICIO 
    - Crear una lista de tareas (Tarea, descripcion y prioridad)
    - Prioridad va de 1 al 3
    - Agregar cada tarea en una matriz
*/

/*
    IDEAS
    - Declarar variables (Arrays y variables)
    - Cada tarea es un array
    - Se usara bucle do-while
*/

// PARTE I: Pedir datos al usuario
let agregar = true;

do{
    const nombreTarea = prompt('Ingresar el nombre de la tarea');
    const descripcion = prompt('Ingresar descripcion de la tarea');
    const prioridad = prompt('Ingresar prioridad (1 al 3)');
    
    // PARTE II: Procesamiento de los datos
    let tareas = [];
    let tarea = [];
    
    tarea = [nombreTarea, descripcion, prioridad];
    tareas.push(tarea);
    
    alert(tareas);
    
    agregar = prompt('Desea agregar otra tarea? (SI = 1, NO = Cualquier letra');

}while(agregar)
