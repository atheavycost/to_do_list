import React from 'react';
import ReactDOM  from 'react-dom';

const ItemStatusFilter = () => {
    return (
        <div className='btn-group'>
            <button type='button' 
                    className='btn btn-info'>All</button>
            <button type='button'
                    className='btn btn-outline-selector'>Sic</button>
            <button type='button'
                    className='btn btn-outline-selector'>Sel</button>
        </div>
    )
};

export default ItemStatusFilter;
