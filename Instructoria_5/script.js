// Programacion Orientada a Objetos
/*
--> Clases, Objetos, atributos o propiedades, metodos
--> POO involucra 4 temas principales: PILARES POO

---------------------------------------------------------------

-  CLASE DE AHORA -
--> Number (Objeto de conversion a numeros)
--> String (Objeto de conversion a cadenas de texto)
--> Array (Funciona para crear arrays)

--> OBJETOS DE NAVEGADOR (Window, history)
--> DOM (Document, Link, Image)

*/

// Manipulacion del objeto de documento (DOM)
let numero = document.getElementById('aleatorio'); // Declaracion de variables

const numAleatorio = Math.floor(Math.random() * 10 ) + 1;    // Logica del ejercicio
// JS genera aleatorios entre 0 y 1

numero.innerText = 'Tu numero aleatorio es: ' + numAleatorio;

// --------------------------------------------------------------------------
// Otra forma de usar POO con JS
// --> No necesariamente se usan las clases en JS
// --> Se pueden crear propiedades y metodos desde un codigo cualquiera

// Aqui se definen los atributos o propiedades
const persona = {
    nombre: 'Kevin', 
    edad: 22,
    altura: 186, // En centimetros                                              
    colorCabello: 'Castaño',

    mostrarInfo() {
        return this.nombre + ', ' + this.edad + ', ' + this.altura+ ', ' + this.colorCabello;
    }
};

// DOM = Document Object Modeling
let btnMostrar = document.getElementById('btnMostrar');
let resultado = document.getElementById('resultado');

// Logica del ejercicio
// FUNCIONES: function nombre(), function nombre (arg, arg)
btnMostrar.addEventListener("click", () => {
    resultado.innerText = persona.mostrarInfo();
});

// -----------------------------------------------------------------------------
// Objeto definido en JS: Fechas y horas
const fecha = new Date();

console.log('Año:', fecha.getFullYear());     // Año actual
console.log('Mes:', fecha.getMonth());        // 0 = Enero, 1 = Febrero, 2 = Marzo
console.log('Dia:', fecha.getDate());         // Dia del mes
console.log('Dia semana:', fecha.getDay());   // 0 = Domingo, 1 = Lunes, 2 = Martes
console.log('Horas:', fecha.getHours());      // Hora actual
console.log('Minutos:', fecha.getMinutes());  // Minutos actuales
console.log('Segundos:', fecha.getSeconds()); // Segundos actuales

// En el DOM la fecha
const fecha1 = document.querySelector('#fecha');        // .clase {} => CLASES ; #id {} => IDs

function mostrarFecha() {
    const hoy = new Date();
    fecha1.textContent = 'Hoy es: ' + hoy.toLocaleDateString() + ', y la hora es: ' + hoy.toLocaleTimeString();                                   // innerText, innerHTML, textContent
}

mostrarFecha();


