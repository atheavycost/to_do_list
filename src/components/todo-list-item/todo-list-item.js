import React from 'react';
import './todo-list-item';

const TodoListItem = ({label, important = false}) => {

    const style = {
        color: important ? 'tomato' : 'blue'
    };
    return (
        <span className='todo-list-item' 
              style={style}>
            { label }
        </span>
    );
};

export default TodoListItem;