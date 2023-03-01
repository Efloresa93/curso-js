
const dia = 0;

const diasLetras = {
    0: () => 'Domingo - 0',
    1: () => 'Lunes - 0',
    2: () => 'Martes - 0',
    3: () => 'Miercoles - 0',
    4: () => 'Jueves - 0',
    5: () => 'Viernes - 0',
    6: () => 'Sabado - 0',
};

console.log(diasLetras[dia]());

const edad = 15;
const tipoEdad = (edad > 0 && edad < 3) ? "Bebe" : 
                 (edad < 12) ? "Niño" : 
                 (edad < 18) ? "Adolecente" :
                 (edad < 21) ? "Joven" : 
                 (edad < 40) ? "Joven Adulto" :
                 (edad < 60) ? "Adulto" :
                 "Adulto Mayor";
                 
console.log("Tipo Edad:", tipoEdad);
