import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import TodoList from './components/todo-list';
import SearchPanel from './components/search-panel';
import TodoListItem from './components/todo-list-item';

const App = () => {
    
    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList />
            <TodoListItem />
        </div>        
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
