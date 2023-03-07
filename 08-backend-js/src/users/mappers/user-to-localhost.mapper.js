
import { User } from '../models/user.model'

export const userModelToLocalhost = ( user ) => {

    const {
        id,
        isActive,
        balance,
        avatar,
        firstName,
        lastName,
        gender,
    } = user

    return new User({
        id,
        isActive,
        balance,
        avatar,
        first_name: firstName,
        last_name: lastName,
        gender
    });
}