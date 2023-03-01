function crearPersona(nombre, apellido) {
    return { nombre, apellido }
}

const crearPersonaFlecha = (nombre, apellido) => ({ nombre, apellido })

const persona = crearPersona("Exequiel", "Flores");
console.log(persona);

imprimeArgumentos = (...args) => {
    return args;
}

const [nombre, apellido2, edad, sexo] = imprimeArgumentos("Exequiel", "Flores", 30, "M");
console.log({ nombre, apellido2, edad, sexo });

const { apellido } = crearPersona("Alexis", "Garin");
console.log(apellido);

const personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ["Mark 1", "Mark V"]
};

const imprimePropiedades = ({nombre, codeName, vivo, edad = 15, trajes}) => {
    console.log({ nombre, codeName, vivo, edad, trajes });
}