
import {heroes} from '../data/heroes'

/**
 * 
 * @param {HTMLElement} element 
 */
export const asyncAwaitComponent = async ( element ) => {

    const id = "5d86371f9f80b591f499df32";
    const id2 = "5d86371f25a058e5b1c8a65e";

    try {

        const hero1 = await findHero( id );
        const hero2 = await findHero( id2 );
    
        element.innerHTML = `${hero1.name} | ${hero2.name}`;

    } catch (ex) {
        element.innerHTML = ex;
    }


}

const findHero = async ( id ) => {

    const hero = heroes.find (hero => hero.id === id);
    if( !hero )
        throw `Hero not found`;
        
    return hero;

}