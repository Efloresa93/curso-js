const personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ["Mark 1", "Mark V"]
};

console.log('nombre', personaje.nombre);
console.log('nombre', personaje['nombre']);
console.log('Edad', personaje.edad);

const vivo = 'vivo';
console.log('vivo', personaje[vivo]);

delete personaje.edad;

console.log(personaje);

// Lo convierte en arreglo
const entriesPares = Object.entries( personaje );
console.log(entriesPares);

personaje.casado = true;
console.log(personaje);

// Bloquea los nuevos cambios al objecto seleccionado
Object.freeze( personaje );

const propiedades = Object.getOwnPropertyNames( personaje );
const values = Object.values( personaje );
console.log(propiedades, values);