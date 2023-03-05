
import html from './app.html?raw';
import todoStore, { Filters } from '../store/todo.store'
import { renderTodos, renderPending } from './use-cases';

const ElementIDs = {
    clearCompleted: '.clear-completed',
    todoList: '.todo-list',
    newTodoInput: '#new-todo-input',
    TodoFilters: '.filtro',
    PendingCountLabel: '#pending-count',
}

export const App = ( elementId ) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos( todoStore.getCurrentFilter() );
        renderTodos( ElementIDs.todoList, todos );
        updatePending();
    }

    const updatePending = () => {
        renderPending( ElementIDs.PendingCountLabel );
    }

    // Cundo la funcion App se llama
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayTodos();
    })();


    const newDescriptionInput = document.querySelector(ElementIDs.newTodoInput);
    const todoList = document.querySelector(ElementIDs.todoList);
    const clearCompleted = document.querySelector(ElementIDs.clearCompleted);
    const filtersLIs = document.querySelectorAll(ElementIDs.TodoFilters);

    newDescriptionInput.addEventListener('keyup', (e) => {
        
        if (e.keyCode !== 13) return;
        if (e.target.value.trim().length === 0 ) return;

        todoStore.addTodo( e.target.value );
        displayTodos();
        e.target.value = '';

    });

    
    todoList.addEventListener('click', (e) => {
        const element = e.target.closest('[data-id]');
        todoStore.toggleTodo(element.getAttribute('data-id'));
        displayTodos();    
    });

    todoList.addEventListener('click', (e) => {
        
        if(!(e.target.className === 'destroy')) return;

        const element = e.target.closest('[data-id]');
        todoStore.deleteTodo(element.getAttribute('data-id'));
        displayTodos();

    });

    clearCompleted.addEventListener('click', (e) => {
        todoStore.deleteCompleted();
        displayTodos();
    });

    filtersLIs.forEach(element => {
        element.addEventListener('click', element => {
            filtersLIs.forEach(el => el.classList.remove('selected'))
            element.target.classList.add('selected');
            
            switch (element.target.text){
                case 'Todos':
                    todoStore.setFilter( Filters.All );
                    break;
                case 'Pendientes':
                    todoStore.setFilter( Filters.Pending );
                    break;
                case 'Completados':
                    todoStore.setFilter( Filters.Completed );
                    break;
            }

            displayTodos();

        })
    });

}
