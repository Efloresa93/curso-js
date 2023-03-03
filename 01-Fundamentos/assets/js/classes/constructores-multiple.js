
class Persona {

    static porObjecto({nombre, ape, pais}) {
        return new Persona(nombre, ape, pais);
    }

    constructor(nombre, ape, pais) {
        this.nombre = nombre;
        this.ape = ape;
        this.pais = pais;
    }

    getInfo() {
        console.log(this.nombre,this.ape,this.pais);
    }
}

const nombre1 = 'Exequiel',
      ape1 = 'Flores',
      pais1 = 'Chile';

const persona = 
    {
      nombre:  'Exequiel',
      ape: 'Flores',
      pais:'Chile'
    };

const persona1 = new Persona(nombre1, ape1, pais1);
const persona2 = Persona.porObjecto(persona);
