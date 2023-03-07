
import { localhostUserToModel } from '../mappers/localhost-user.mapper';
import { userModelToLocalhost } from '../mappers/user-to-localhost.mapper';
import { User } from '../models/user.model'

/**
 * 
 * @param {Like<User>} userLike 
 */
export const saveUser = async ( userLike ) => {

    const user = new User( userLike );
    
    if(!user.firstName || !user.lastName)
        throw new Error("Error en datos digitados");

    const userToSave =  userModelToLocalhost(user);
    let userUpdated;

    if(user.id) {
        userToSave = await updateUser( userToSave );
    } else {
        userUpdated = await createUser( userToSave );
    }

    return localhostUserToModel( userUpdated );

}

const createUser = async ( user ) => {
    const url = `${ import.meta.env.VITE_BASE_URL }/users`;
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const newUser = await res.json();
    return newUser;
}

const updateUser = async ( user ) => {
    const url = `${ import.meta.env.VITE_BASE_URL }/users/${user.id}`;
    const res = await fetch(url, {
        method: 'PATCH',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const uploadUser = await res.json();
    return uploadUser;
}
