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

class Heroe extends Persona {
    poder = 'Sin Poder';
    constructor(nombre, codigo, frase, poder) {
        super(nombre, codigo, frase);
        this.poder = poder;
    }

    mostrarPersona() {
        console.log(`Soy ${this.nombre} y mi poder es: ${this.poder}`);
        super.mostrarPersona();
    }
}

const heroe = new Heroe("Exequiel", "Exe", "Soy un crack", "Fuego");
heroe.mostrarPersona();
