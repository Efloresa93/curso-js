
/**
 * 
 * @param {HTMLElement} element 
 */
export const asyncAwait2Component = async ( element ) => {

    element.innerHTML = "Cargando...";

    const [value1, value2, value3] = await Promise.all([
        slowPromise(),
        mediumPromise(),
        fastPromise()
    ]);

    element.innerHTML = `
        value1: ${ value1 } <br />
        value2: ${ value2 } <br />
        value3: ${ value3 }
    `;

}

const slowPromise = () => new Promise ( resolve => {
    setTimeout( () => {
        resolve('Slow Promise');
    },5000 )
});

const mediumPromise = () => new Promise ( resolve => {
    setTimeout( () => {
        resolve('Medium Promise');
    },4000 )
});

const fastPromise = () => new Promise ( resolve => {
    setTimeout( () => {
        resolve('Fast Promise');
    },3000 )
});