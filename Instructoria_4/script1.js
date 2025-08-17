// PROGRAMACION ORIENTADA A OBJETOS
/* 

--> Paradigma de programacion
--> Organiza el codigo mediante objetos

CONCEPTOS FUNDAMENTALES DE POO
--> CLASES: Es un molde o plantilla que me servira para crear objetos. Aqui se contiene todo
--> ATRIBUTOS O PROPIEDADES: Son las variables que se usan en una clase
--> METODOS: Son funciones que ejecutan logica especifica
--> CONSTRUCTOR: Sirve para inicializar propiedades o atributos

--> OBJETOS: Instancia de una clase (Ejemplar de la clase)
*/
// CLASE PERSONA --> Es una persona X
// OBJETO --> Persona1, Carlitos, PersonaTal

/* REGLAS EN POO
--> Las clases se escriben con su primer letra en Mayuscula (Igual los objetos)

// PILARES DE POO: Encapsulamiento, abstraccion, herencia, polimorfismo

*/

// Ejemplo de una clase Persona
class Persona { // Es una plantilla que me va a generar ALGO

    // Metodo constructor con mis atributos
    constructor(nombreParam, apellidoParam, edadParam) {
        this.nombre = nombreParam;
        this.apellido = apellidoParam;
        this.edad = edadParam;
        
        this.estaDespierto = false;
    }

    // Metodos
    saludar() { 
        console.log('Mi nombre es ' + this.nombre + ' ' + this.apellido + ' y tengo ' + this.edad + ' años');
        // console.log(`Mi nombre es ${this.nombre} ${this.apellido} y tengo ${edad}`);
    }

    // Yo quiero verificar si una persona es mayor de edad
}

// Objetos
const kevin = new Persona('Kevin', 'Arevalo', 21);
const fatima = new Persona('fatima', 'gonzales', 21);
const pamela = new Persona('Pamela', 'maradiaga', 21);

// Mostrar un metodo
// kevin.saludar();
// fatima.saludar();
// pamela.saludar();

// --------------------------------------------------------------------------------------------------

class Auto {

    // Atributos o propiedades
    color;
    modelo;
    marca;
    año;
    precio;

    esDiesel; // BOOL

    // Definir el constructor
    constructor(colorParam, modeloParam, marcaParam, añoParam, precioParam) {
        this.color = colorParam;
        this.modelo = modeloParam;
        this.marca = marcaParam;
        this.año = añoParam;
        this.precio = precioParam;

        this.esDiesel = false;
    }

    // Definir mi logica (Metodos)
    obtenerInformacion() {
        console.log('Color ' + this.color + ', marca: ' + this.marca + ' modelo: ' + this.modelo + 'año' + this.año);
    }

    obtenerPrecio() {
        console.log('El auto tiene un valor de $' + this.precio);
    }

    informacionCombustible() {
        if(this.esDiesel) {
            console.log('El auto SI es Diesel');
        } else {
            console.log('El auto NO es Diesel');
        }
    }
}

const mazda = new Auto('Rojo', '3', 'mazda', 2013, 5000);
mazda.obtenerInformacion();
mazda.obtenerPrecio();

mazda.informacionCombustible();
