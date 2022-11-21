import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list/todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';

const App = () => {

    const todoDate = [
        { label: 'Drink Coffee', important: false, id: 1},
        { label: 'make awesome app', important: true, id: 2},
        { label: 'Drink VODKA', important: true, id: 3}
    ];
    
    return (
        <div className='todo-app'>
            <AppHeader toDo={10} done={3}/>
            <div className='search-panel d-flex'>
                <SearchPanel />
                <ItemStatusFilter/>
            </div>

            <TodoList todos={todoDate} 
            onDeleted={(id) => console.log('deleted', id)}/>
        </div>        
    );
};

export default App;
