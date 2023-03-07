
import { User } from '../models/user.model'

/**
 * 
 * @param {Like<User>} localhostHost 
 * @returns { Promise<User[]> }
 */
export const localhostUserToModel = ( localhostHost ) => {

    const {
        id,
        isActive,
        balance,
        avatar,
        first_name,
        last_name,
        gender,
    } = localhostHost

    return new User({
        id,
        isActive,
        balance,
        avatar,
        firstName: first_name,
        lastName: last_name,
        gender
    });
}
