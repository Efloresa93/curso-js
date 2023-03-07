
import './render-modal.css'
import modalHtml from './render-modal.html?raw';
import {User} from '../../models/user.model'
import { getUserById } from '../../use-cases/get-user-ny-id';

let modal, form;
let loadedUser = {};

/**
 * 
 * @param {*} id 
 */
export const showModal = async ( id ) => {
    modal?.classList.remove('hide-modal');
    loadedUser = {};
    if(!id) return;
    const user = await getUserById();
    setFormValues(user);
};



const setFormValues = ( user ) => {
    form.querySelector("[name='firstName']").value = user.firstName;
    form.querySelector("[name='lastName']").value = user.lastName;
    form.querySelector("[name='balance']").value = user.balance;
    form.querySelector("[name='isActive']").value = user.isActive;
    loadedUser = user;
} 

export const hideModal =  () => {
    modal?.classList.add('hide-modal');
    form?.reset();
}

export const renderModal = ( element, callback ) => {
    
    if(modal) return;

    modal = document.createElement('div');
    modal.innerHTML = modalHtml;
    modal.className = 'modal-container hide-modal';
    form = modal.querySelector("form");

    modal.addEventListener('click', (evt) => {
        if(evt.target.className === 'modal-container')
            hideModal();
    });

    form-addEventListener('submit', async (evt) => {
        evt.preventDefault();

        const formData = new FormData(form);
        const userLike = { ...loadedUser };
        for (const [key, value] of formData) {

            if( key === 'balance' ){
                userLike[key] = +value;
                continue;
            }

            if( key === 'isActive' ){
                userLike[key] = (value === 'on');
                continue;
            }
            
            userLike[key] = value;
            
        }

        await callback(userLike);
        hideModal();

    });

    element.append( modal );

}