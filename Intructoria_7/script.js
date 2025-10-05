// JSON (Javascript Object Notation)
/*
    --> Es una forma sencillas de representar los objetos en JS (Cadena de texto)
    --> Se usa porque es una forma ligera de procesar informacion
    --> Forma de comunicacion entre cliente y servidor
    --> API: Es un termino donde JSON es la forma de comunicacion
*/

let persona = {
    nombre: "Kevin",
    edad: 22,
    ciudad: "San salvador"
};

// Impresion del objeto
console.log(persona);

// JSON.stringify: Conversion de un objeto puro a JSON
/* 
    --> stringify(dato, separador/filtrador, legibilidad)
*/
let personaJSON = JSON.stringify(persona, ["nombre", "edad", "ciudad"], 3); 
console.log(personaJSON);

// JSON.parse: Conversion de JSON a un objeto
let personaOBJECT = JSON.parse(personaJSON); 
console.log(personaOBJECT.ciudad);

// -----------------------------------------------------------------------------
// EJERCICIO: Lista de personas
const personas = [
    { nombre: "Kevin", edad: 22, pais: "El Salvador" },
    { nombre: "Fatima", edad: 20, pais: "Guatemala" },
    { nombre: "Fulano", edad: 25, pais: "Belice" },
    { nombre: "Fulano", edad: 25, pais: "Belice" },
    { nombre: "Fulano", edad: 25, pais: "Belice" },
];

// Simulacion: Debo obtener los datos enviados de un server (OBJETO -> JSON)
const personasJSON = JSON.stringify(personas, null, 4);

// Convertir datos enviados por el server
const personasPARSE = JSON.parse(personasJSON);

// Llamar la lista por su ID
const lista = document.getElementById('lista-personas');

// Mostrar los datos del array obtenido
let valores = "";

for(let i = 0; i < personasPARSE.length; i++) {
    const pers = personasPARSE[i];

    valores += '<li>' + pers.nombre + ', ' + pers.edad + ', ' + pers.pais + '</li>';
}

// Mostrar datos en la lista
lista.innerHTML = valores;


