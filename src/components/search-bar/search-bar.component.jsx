import React, { useState } from 'react';

import IconContainer from '../icon-container/icon-container.component';
import { FaSearch } from 'react-icons/fa';

import './search-bar.styles.css';

const SearchBar = ({ handleSubmit }) => {
    return (
        <div className='search'>
            <input className='search-input' type='text' onSubmit={() => {handleSubmit(this.inputValue)}} placeholder='Search user...' />
            <div className="flex justify-center w-16 text-gray-500">
                <IconContainer icon={<FaSearch size='18' className='text-secondary my-auto' title='Search' />} />
            </div>
        </div>
    )
};

export default SearchBar
