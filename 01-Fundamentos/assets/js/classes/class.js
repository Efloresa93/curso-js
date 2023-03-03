
class Persona {

    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + " instancia";
    }

    static mensaje() {
        console.log(this.nombre);
    }

    comida = '';

    constructor(nombre = 'Sin Nombre', codigo = 'Sin Codigo', frase = 'Sin Frase') {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }

    set setComidaFavorita(comida) {
        this.comida = comida;
    }

    get getComidaFavorita() {
        return  this.comida;
    }

    mostrarPersona() {
        console.log(`Soy ${this.nombre} y me dicen ${this.codigo}`);
    }

    mostrarMiFrase() {
        console.log(`Mi frase es: ${this.frase}`)
    }

}

const persona = new Persona("Exequiel", "Exe", "Soy un crack");
const persona2 = new Persona("Pedro", "Pedri", "No es un crack");

persona.mostrarPersona();
persona.mostrarMiFrase();

persona.setComidaFavorita = "Sushi";

console.log(persona.getComidaFavorita);
console.log(Persona._conteo);
console.log(Persona.conteo);

// Propiedad externa estática
Persona.propiedadExterna = 'Hola Mundo';
console.log(Persona.propiedadExterna);
