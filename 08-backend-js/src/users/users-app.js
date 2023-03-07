

import { renderAddButton } from './presentation/render-add-button/render-add-button';
import { renderButtons } from './presentation/render-buttons/render-buttons';
import { renderModal } from './presentation/render-modal/render-modal';
import { renderTable } from './presentation/render-table/render-table';
import userStore from './store/users-store';
import { saveUser } from './use-cases/save-user';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const UsersApp = async (element) => {

    element.innerHTML = 'Cargando...';
    await userStore.loadNextPage();
    renderTable( element );
    renderButtons( element );
    renderAddButton( element );
    renderModal( element, async ( userLike ) => {
        const user = await saveUser( userLike );
        userStore.onUserChanged( user );
        renderTable();
    });
}