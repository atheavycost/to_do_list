import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list/todo-list';
import TodoListItem from '../todo-list-item';

import './app.css';

const App = () => {

    const todoDate = [
        { label: 'Drink Coffee', important: false, id: 1},
        { label: 'make awesome app', important: true, id: 2},
        { label: 'Drink VODKA', important: true, id: 3}
    ];
    
    return (
        <div className='app-s'>
            <AppHeader />
            <SearchPanel />
            <TodoList todos={todoDate} />
            <TodoListItem />
        </div>        
    );
};

export default App;
