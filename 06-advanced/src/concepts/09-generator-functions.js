
/**
 * 
 * @param {HTMLElement} element 
 */
export const generatorFunctions = ( element ) => {

    //const myGenerator = myFirstGeneratorFunction();
    // console.log( myGenerator.next() );    
    // console.log( myGenerator.next() );    
    // console.log( myGenerator.next() );    
    // console.log( myGenerator.next() );    

    const genId = idGenerator();
    //console.log(genId.next()); 

    const btn = document.createElement('button');
    btn.innerHTML = 'Click me !';
    element.append(btn);

    const renderButton = () => {
        const { value } = genId.next();
        btn.innerText = `Click me ${value} !`;
    }

    btn.addEventListener('click', renderButton);

}

function* idGenerator () {
    let curentId = 0;
    while(true){
        yield ++curentId;
    }
}

function* myFirstGeneratorFunction() {

    yield 'Primer valor';
    yield 'Segundo valor';
    yield 'Tercer valor';
    return 'Ya no hay valores';

}
