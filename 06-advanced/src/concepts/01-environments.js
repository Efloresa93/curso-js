

/**
 * 
 * @param {HTMLElement} element 
 */
export const environmentsComponent = ( element ) => {

    const env = import.meta.env;

    const html = `
        DEV: ${env.DEV} <br />
        PROD: ${env.PROD} <br />
        KEY: ${env.VITE_API_KEY} <br />
        KEY: ${env.VITE_BASE_URL} <br />`;
        
    element.innerHTML = html;

}