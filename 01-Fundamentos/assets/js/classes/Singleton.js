
class Singleton {

    static #instancia;
    nombre = '';

    constructor(nombre = '') {
        
        if(!!Singleton.#instancia){
            return Singleton.#instancia
        }

        Singleton.#instancia = this;
        this.nombre = nombre;
        
        return this;

    }

}

const ins = new Singleton('Exe');
const ins2 = new Singleton('Pedro');
const ins3 = new Singleton('Juan');

console.log("Nombre en la instancia es: " + ins.nombre)
console.log("Nombre en la instancia es: " + ins2.nombre)
console.log("Nombre en la instancia es: " + ins3.nombre)