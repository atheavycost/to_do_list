import React from 'react';

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
