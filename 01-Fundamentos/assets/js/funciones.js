function saludar() {
    console.log(arguments);
    console.log("Hola mundo");
}

saludar("Hola", 123, {"nombre" : "Pedro"});

const saludarFecha = () => {
    console.log("Hola Fecha");
}

saludarFecha();

const retornarNull = () => {
    let n = null;
    return n ?? 123;
}

console.log(retornarNull());

const retornarUndefined = () => {

}

console.log(retornarUndefined());

const sumar = (a,b) => a + b;
console.log(sumar(2,2)); 

const getAleatorio = () => Math.random();
console.log("Aleatorio", getAleatorio());