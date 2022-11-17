import React from 'react';
import ReactDOM from 'react-dom';

const Todolist = () => {

    const items = ['gang', 'bang', 'drink coffee'];

    return (        
    <ul>
        <li>{ items[0] }</li>
        <li>{ items[1] }</li>
        <li>{ items[2] }</li>
    </ul>
    );
};

const Appheader = () => {
    return (
        <h1> My todo list</h1>
);};

const SearchPanel = () => {
    
    const SearchText = 'Type here to search text';
    const searchStyle = {
        fontSize: '20px'
    };
    return ( <input 
        style={searchStyle}
        placeholder={SearchText} />
    );
};

const App = () => {
    
    const isLoggedIn = true;
    const welcomBox = <span>Welcome Back</span>
    const loginBox = <span>log in, please!</span>; 
    
    return (
        <div>
            { isLoggedIn ? welcomBox : loginBox }
            {/* { loginBox } */}
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
