
// La comilla simple es mas liviana que comilla doble
const nombre = 'Exequiel';
console.log(nombre, typeof nombre);

const bandera = true;
console.log(bandera, typeof bandera);

const numero = 123;
console.log(numero, typeof numero);

const decimal = 33.001;
console.log(decimal, typeof decimal);

const funcion = () => {
    return "Hola MUndo";
}
console.log(funcion);

let soyUndefined;
let soyNull = null;

console.log(soyUndefined, typeof soyUndefined);
console.log(soyNull, typeof soyNull);

let symboll = Symbol('a');
let symbol2 = Symbol('a');

console.log(symboll, typeof symboll);
console.log(symboll === symbol2);