import React from 'react'

import IconContainer from '../icon-container/icon-container.component';

import { FaSearch } from 'react-icons/fa';
import { AiFillFilter } from 'react-icons/ai';

const PageContent = () => {
    return (
        <div className="page-content">
            <PageHeader title={"Dashboard"} />
        </div>
    )
}

const PageHeader = ({ title }) => (
    <div className="top-0 flex flex-row items-center justify-evenly w-full h-16 m-0 shadow-lg">
        <h1>{title}</h1>
        <div className="flex flex-row justify-end w-full">
            <div className='search'>
                <input className='search-input' type='text' placeholder='Search...' />
                <FaSearch size='18' className='text-secondary my-auto' />
            </div>
            <div className="button-container">
                <IconContainer text={"Filter"} icon={<AiFillFilter size="28" />} />
            </div>
        </div>
    </div>
);

export default PageContent;
