import React, { useState } from 'react';

// import IconContainer from '../icon-container/icon-container.component';
// import { FaSearch } from 'react-icons/fa';

import './search-bar.styles.css';

const SearchBar = ({ handleSubmit }) => {
    const [ inputValue, setInputValue ] = useState('');

    return (
        <div className='search'>
            <form onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(inputValue);
                setInputValue('');
            }}>
                <input 
                    className='search-input' 
                    type='text' 
                    onChange={(e) => setInputValue(e.target.value)}
                    value={inputValue}
                    placeholder='Search user...' 
                />
                <button type="submit">
                </button>
                {/* <div className="flex justify-center w-16 text-gray-500">
                    <IconContainer icon={<FaSearch size='18' className='text-secondary my-auto' title='Search' />} />
                </div> */}
            </form>
        </div>
    )
};



export default SearchBar;
