import React from 'react';

import { createRoot } from 'react-dom/client';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel/search-panel';
import TodoList from './components/todo-list/todo-list';
import TodoListItem from './components/todo-list-item/todo-list-item';

import './index.css';

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

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);
