import React, { Component } from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {
 
    state = {
        term: ''
    };
    
    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onSearchChange(term);
    };

    render() {

        const searchText = 'Type here to search task';
        const searchStyle = {
            fontSize: '16px'
        };

        return ( 
            <div 
                className='form-control top-panel'>
                    <input 
                        style={searchStyle}
                        placeholder={searchText} 
                        value={this.state.term}
                        onChange={this.onSearchChange} />
            </div>
        );

    };
   
};
