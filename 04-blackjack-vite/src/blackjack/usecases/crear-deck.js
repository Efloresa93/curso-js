import _ from 'underscore';

export const miNomre = "EXequiel";

/**
 * Esta funcion crea un nuevo Deck
 * @param {Array<String>} tiposDeCarta ['C','D','H','S'];
 * @param {Array<String>} tiposEspeciales ['A','J','Q','K'];
 * @returns {Array}
 */
// Esta función crea un nuevo deck
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if(!tiposDeCarta || tiposDeCarta.length === 0) throw new Error("Tipos de carta es obligatorio");
    if(!tiposEspeciales || tiposEspeciales.length === 0) throw new Error("Tipos especiales es obligatorio");
    
    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}

//export default crearDeck;