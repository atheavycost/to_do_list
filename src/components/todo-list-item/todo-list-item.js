import React, { Component } from 'react';
import './todo-list-item';


export default class TodoListItem extends Component {

    constructor() {
        super();

        this.onLabelClick = () => {
            console.log(`Done: ${this.props.label}`)    
        };
    }

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
                    style={style}
                    onClick={ this.onLabelClick }>
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