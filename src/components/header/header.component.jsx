import React from 'react';

import IconContainer from '../icon-container/icon-container.component';
import SearchBar from '../search-bar/search-bar.component';

import { AiFillFilter } from 'react-icons/ai';

import './header.styles.css';

const PageHeader = ({ title }) => {
    return (
        <div className="relative flex flex-row items-center justify-between h-16 w-full m-0 p-4 bg-gray-300">
            <h1 className="absolute text-gray-800 text-xl mx-auto">{title}</h1>
            <div className="flex flex-row justify-end items-center w-full gap-4">
                <SearchBar />
                <div className="button-container header-button">
                    <IconContainer icon={<AiFillFilter size="28" title="Filter" />} />
                </div>
            </div>
        </div>
    )
};

export default PageHeader;