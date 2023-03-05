import {heroes} from '../data/heroes'

/**
 * 
 * @param {HTMLElement} element 
 */
export const asyncComponent = async ( element ) => {


    const id = `5d86371f9f80b591f499df32`;
    
    const renderSuccess = (hero) => {
        element.innerHTML = hero.name;
    }

    const renderError = (error) => {
        element.innerHTML = `<h2>${error}</h2>`;
    } 

    findHero(id)
        .then( renderSuccess )
        .catch( renderError );
    

}

const findHero = async (id) => {
    
    const hero = heroes.find( hero => hero.id === id );
    if(!hero) throw `Error Aqui: ${ id }`;
    return hero;
    
}