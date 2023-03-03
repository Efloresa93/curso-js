
const persona = {
    nombre: "Exequiel",
    edad: 30
}

const persona2 = {
    nombre: "Pedro",
    edad: 28
}

function Persona(nombre, edad) {
    
    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = () => {
        console.log(`${nombre} ${edad}`);
    }
}

const maria = new Persona("Exequiel", 18);
maria.imprimir();
