import React from 'react';

import './search-panel.css';

const SearchPanel = () => {
    
    const SearchText = 'Type here to search task';
    const searchStyle = {
        fontSize: '20px'
    };
    return ( 
    <div className='search-panel'>
    <input 
        style={searchStyle}
        placeholder={SearchText} />
    </div>
    );
};


export default SearchPanel;
