import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';
import TodoListItem from './components/todo-list-item';

const App = () => {

    const todoDate = [
        { label: 'Drink Coffee', important: false},
        { label: 'make awesome app', important: true},
        { label: 'Drink VODKA', important: true}
    ];
    
    return (
        <div>
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


// ReactDOM.render(<App />, document.getElementById('root'));


