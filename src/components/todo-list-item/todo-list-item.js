import React from 'react';
import './todo-list-item';


class TodoListItem extends React.Component {

    render() {
        const {label, important = false} = this.props;

        const style = {
                color: important ? 'tomato' : 'blue',
                fontWeight: important ? 'bold' : 'normal'
            };

        return (
            <span className='todo-list-item'>
                <span 
                    className='todo-list-item-label'
                    style={style}>
                    { label }
                </span>
        
                <button type='button'
                        className='btn btn-out-line-success btn-sm float-right'>
                    <li className='fa fa-exclamation' />
                </button>
        
                <button type='button'
                        className='btn btn-out-line-danger btn-sm float-right'>
                    <li className='fa fa-trash-o' />
                </button>

            </span>
        
            );
        };
    
    }

export default TodoListItem;
