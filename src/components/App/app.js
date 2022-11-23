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
            this.createTodoItem('Drink coffee'),
            this.createTodoItem('Drink VODKA'),
            this.createTodoItem('Make awesome app')
        ]
    };

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        };
    };

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
        const newItem = this.createTodoItem(text);

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

    OnToggleImportant = (id) => {
        console.log('Toggle important', id)
    };
    
    OnToggleDone = (id) => {
        console.log('Toggle done', id);
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

                todos={this.state.todoData} 
                onDeleted={this.deletItem}
                OnToggleImportant={this.OnToggleImportant}
                OnToggleDone={this.OnToggleDone}/>

                <div>
                    <ItemAddForm onItemAdded={this.addItem}/>
                </div>
                
            </div>        
        );
    };
    }

