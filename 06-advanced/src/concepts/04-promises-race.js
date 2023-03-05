
/**
 * 
 * @param {HTMLElement} element 
 */
export const promiseRaceComponent = ( element ) => {

    element.innerHTML = "Cargando...";

    const renderValue = (value) => {
        element.innerHTML = value;
    }

    // Muestra el más rapido
    Promise
        .race([ 
            slowPromise(), 
            mediumPromise(), 
            fastPromise() 
        ]).then( renderValue );

}

const slowPromise = () => new Promise ( resolve => {
    setTimeout( () => {
        resolve('Slow Promise');
    },2000 )
});

const mediumPromise = () => new Promise ( resolve => {
    setTimeout( () => {
        resolve('Medium Promise');
    },1500 )
});

const fastPromise = () => new Promise ( resolve => {
    setTimeout( () => {
        resolve('Fast Promise');
    },1000 )
});
