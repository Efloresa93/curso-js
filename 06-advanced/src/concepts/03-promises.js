
import {heroes} from '../data/heroes'


/**
 * 
 * @param {HTMLElement} element 
 */
export const promiseComponent = ( element ) => {

    const renderHero = ( hero ) => {
        element.innerHTML = hero.name;
    }
    const renderError = (error) => {
        element.innerHTML = `<h3>${ error }</h3>`;
    }

    const renderTwoHeros = ( hero1, hero2 ) => {
        element.innerHTML = `${hero1.name} <br /> ${hero2.name}` ;
    }

    const id = '5d86371f25a058e5b1c8a65e';
    const id2 = '5d86371f9f80b591f499df32';

    Promise.all([
        findHero(id),
        findHero(id2)
    ])
    .then( ([hero1, hero2]) => {
        renderTwoHeros(hero1, hero2);
    })
    .catch( renderError );

    // findHero(id)
    //     .then( renderHero )
    //     .catch( renderError );



}

/**
 * 
 * @param {String} id 
 * @returns {Promise}
 */
const findHero = ( id ) => {

    return new Promise( (resolve, reject) => {

        const hero = heroes.find( hero => hero.id === id );
        if ( hero ) {
            resolve( hero );
            return;
        }

        reject( `Error con el heroe (id: ${id})` ) 
        
    });
    
} 