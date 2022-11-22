import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list/todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component {

    maxId = 100;

    state = {
        todoData: [
            { label: 'Drink Coffee', important: false, id: 1},
            { label: 'make awesome app', important: true, id: 2},
            { label: 'Drink VODKA', important: true, id: 3}
        ]
        
    }

    deletItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);

            const newArray = [
                ...todoData.slice(0, idx), ...todoData.slice(idx + 1)
            ];

            return {
                todoData: newArray
            };
        });
    };
    
    addItem = (text) => {
        const newItem = {
            label: text,
            important: false,
            id: this.maxId++
        };

        this.setState(({todoData}) => {
            const newArr = [
                ...todoData, 
                newItem
            ];

            return {
                todoData: newArr
            };
        });
       
    };

    render() {
        return (
            <div className='todo-app'>
                <AppHeader toDo={10} done={3}/>
                <div className='search-panel d-flex'>
                    <SearchPanel />
                    <ItemStatusFilter/>
                </div>
    
                <TodoList 
                // className='todo-list'
                todos={this.state.todoData} 
                onDeleted={this.deletItem}/>
                <div>
                    <ItemAddForm onItemAdded={this.addItem}/>
                </div>
                
            </div>        
        );
    };
    }

