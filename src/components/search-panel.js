import React from 'react';

import './search-panel.css';

const SearchPanel = () => {
    
    const SearchText = 'Type here to search text';
    const searchStyle = {
        fontSize: '20px'
    };
    return ( 
    <div>
    <input 
        style={searchStyle}
        placeholder={SearchText} />
    </div>
    );
};


export default SearchPanel;
