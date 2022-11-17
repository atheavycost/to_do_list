import React from 'react';
import ReactDOM from 'react-dom';

const el = (
    <div>
        <h1> My todo list</h1>
        <input placeholder='search' />
        <ul>
            <li>Learn React</li>
            <li>Build Awesome App</li>
        </ul>


    </div>
);

// const el = React.createElement('h1', null, 'Hello world epta');

ReactDOM.render(el, document.getElementById('root'));
