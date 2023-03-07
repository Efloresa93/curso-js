import {localhostUserToModel} from '../mappers/localhost-user.mapper'

/**
 * 
 * @param {Number} page
 * @returns 
 */
export const getUserById = async ( id ) => {
    
    const url = `${import.meta.env.VITE_BASE_URL}/users`;
    const res = await fetch(url);
    const data = await res.json();
    
    const user = localhostUserToModel;

    return user;

}