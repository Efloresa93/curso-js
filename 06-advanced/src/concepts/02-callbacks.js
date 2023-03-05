
import {heroes} from '../data/heroes'

/**
 * 
 * @param {HTMLElement} element 
 */
export const callbacksComponent = (element ) => {

    const id = '5d86371f1efebc31def272e2';
    const id2 = '5d86371f2343e37870b91ef1';

    findHero(id, (error, hero ) => {
        if(error){
            element.innerHTML = error;
            return;
        }
        element.innerHTML = hero?.name ?? 'No existe el heroe';
    });

}

/**
 * 
 * @param {String} id 
 * @param {( error:String|Null, hero:Object ) => void} callback 
 */
const findHero = (id, callback) => {
    const hero = heroes.find( hero => hero.id === id );
    
    if( !hero ) {
        callback(`El heroe ${id} no existe.`);
        return;
    } 

    callback( null, hero );
}