let a = 10;
let b = a;
a = 30;

console.log(a, b);

// Paso por referencia
let juan = {nombre: 'Juan'};
let ana = {...juan};
ana.nombre = 'Ana';

console.log({juan, ana});

const cambiaNombre = ( persona ) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter' };
let tony = cambiaNombre( peter );

console.log(peter, tony);

const json = {nombre: "Peter"}
const json2 = {apellido: "Dize"};

const json3 = {...json, ...json2};
console.log(json3);

const frutas = ['Manzana', 'Pera', 'Sandia'];
const otrasFrutas = [...frutas];

frutas.push('Kiwi');

console.table({frutas, otrasFrutas});

console.time('slice');
const otrasFrutas2 = frutas.slice();
console.timeEnd('slice');

console.time('spread');
const otrasFrutas3 = [...frutas];
console.timeEnd('spread');

