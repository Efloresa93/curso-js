const arr = new Array(10);
console.log(arr);

const arrJuegos = ['Max Payne', 'Fornite', 'The Last of us', 'Age of Empires 2'];
console.log({ arrJuegos });

arrJuegos.forEach((element, index, array) => {
    console.log({index, element, arr });
});

// Inserta un nuevo elemento
const length = arrJuegos.push('Life is STrange');
console.log({length, arrJuegos});

// Agrega un nuevo elemento al principio del arreglo
const nuevaLength = arrJuegos.unshift('Commandos');
console.log({nuevaLength, arrJuegos});

// Elimina el ultimo elemento del arreglo
arrJuegos.pop();
console.log({ arrJuegos });

// ELimina un elemento del arreglo
const post = 0;
arrJuegos.splice(post, 1);

console.log({ arrJuegos });

const maxPayne = arrJuegos.indexOf('Max Payne');
console.log(`indice de ${ arrJuegos[maxPayne] } es ${ maxPayne }`)