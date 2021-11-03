import React from 'react';

import { connect } from 'react-redux';
import { searchUserProfile } from '../../redux/dashboard/dashboard.actions';

import IconContainer from '../icon-container/icon-container.component';
import SearchBar from '../search-bar/search-bar.component';

import { AiFillEdit} from 'react-icons/ai';

import './header.styles.css';

const PageHeader = ({ title, setSearchedUserProfileProp }) => {

    return (
        <div className="relative flex flex-row items-center justify-between h-16 w-full m-0 pl-4 pr-4 pt-6 bg-gray-200">
            <h1 className="absolute text-gray-800 font-bold text-3xl ml-8 mx-auto">{title}</h1>
            <div className="flex flex-row justify-end items-center w-full gap-4">
                <SearchBar handleSubmit={setSearchedUserProfileProp} />
                <div className="button-container flex justify-center w-16 bg-gray-200 text-gray-800">
                    <IconContainer icon={<AiFillEdit size="28" title="Edit" />} />
                </div>
            </div>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => ({
    setSearchedUserProfileProp: user => dispatch(searchUserProfile(user))
});

export default connect(null, mapDispatchToProps)(PageHeader);