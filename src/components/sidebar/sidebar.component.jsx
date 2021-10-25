import React from 'react';

import { Link } from 'react-router-dom';
import IconContainer from '../icon-container/icon-container.component';

import { AiOutlineDashboard, AiFillSetting, AiOutlineBarChart, AiOutlineHistory } from 'react-icons/ai';

import './sidebar.styles.css';

const SideBar = () => {
    return (
        <div className="sidebar button-container">
            <HeaderTitle text={"TwitBlade"} />
            <Link to={'/'}>
                <IconContainer modifier={"icon-sidebar"} text={"Dashboard"} icon={<AiOutlineDashboard size="28" />} />
            </Link>
            <Link to={'/analytics'}>
                <IconContainer modifier={"icon-sidebar"} text={"Analytics"} icon={<AiOutlineBarChart size="28" />} />
            </Link>
            <Link to={'/history'}>
                <IconContainer modifier={"icon-sidebar"} text={"History"} icon={<AiOutlineHistory size="28" />} />
            </Link>
            <Link to={'/settings'}>
                <IconContainer modifier={"icon-sidebar"} text={"Settings"} icon={<AiFillSetting size="28" />} />
            </Link>
        </div>
    )
};

const HeaderTitle = ({ text }) => (
    <div className="sidebar-header">
        <h1 className="p-0.5 text-md lg:text-xl">
            {text}
        </h1>
    </div>
);

export default SideBar;
