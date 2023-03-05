
/**
 * @returns {Object} Quote information
 */
const fetchQuote = async () => {
    
    try {
        const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
        const data = await res.json();
        return data[0];
    }
    catch (ex) {
        console.error(ex);
    }

}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingBadApp = async ( element ) => {

    document.querySelector('#app-title').innerHTML = 'Breaking Bad App';
    element.innerHTML = "Cargando...";

    const quoteLabel = document.createElement('blockquote');
    const authorLabel = document.createElement('h3');
    const nextQuoteButton = document.createElement('button');
    nextQuoteButton.innerText = 'Next Quote';

    const renderQuote = (data) => {
        quoteLabel.innerHTML = data.quote;
        authorLabel.innerHTML = data.author;
        element.replaceChildren( quoteLabel, authorLabel, nextQuoteButton );
    }

    fetchQuote()
        .then(renderQuote);

    nextQuoteButton.addEventListener('click', async () => {
        element.innerHTML = "Cargando...";
        renderQuote(await fetchQuote());
    })


}


