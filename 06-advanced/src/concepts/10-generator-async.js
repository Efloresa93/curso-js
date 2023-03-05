
import {heroes} from '../data/heroes'

/**
 * 
 * @param {HTMLElement} element 
 */
export const generatorAsyncComponent = async ( element ) => {

    const heroGenerator = getHeroGenerator();
    let isFinisehd = false;

    while (!isFinisehd) {
        
        const {value, done} = await heroGenerator.next();
        isFinisehd = done;
        if(isFinisehd) break;
        
        element.innerHTML = value;
    }

}

async function* getHeroGenerator() {
    for (const hero of heroes) {
        await sleep();
        yield hero.name;
    }

    return 'No hay mas valores'
}

const sleep = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve();
        }, 500);
    })
}