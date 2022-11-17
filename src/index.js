import React from 'react';
import ReactDOM from 'react-dom';

const Todolist = () => {
    return (        
    <ul>
        <li>Learn React</li>
        <li>Build Awesome App</li>
        <li>To do something</li>
    </ul>
    );
};

const Appheader = () => {
    return (
        <h1> My todo list</h1>
);};

const SearchPanel = () => {
    return (
        <input placeholder='search' />
    );
};

const App = () => {
    return (
        <div>
        <Appheader />
        <SearchPanel />
        <Todolist />
    </div>        
    );
};

// const el = <App />;

// const el = React.createElement('h1', null, 'Hello world epta');

// ReactDOM.render(el, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));