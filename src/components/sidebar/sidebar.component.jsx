import React from 'react';

import IconContainer from '../icon-container/icon-container.component';

import { AiOutlineDashboard, AiFillSetting, AiOutlineBarChart, AiOutlineHistory } from 'react-icons/ai';

const SideBar = () => {
    return (
        <div className="sidebar button-container">
            <HeaderTitle text={"TwitBlade"} />
            <IconContainer text={"Dashboard"} icon={<AiOutlineDashboard size="28" />} />
            <IconContainer text={"Analytics"} icon={<AiOutlineBarChart size="28" />} />
            <IconContainer text={"History"} icon={<AiOutlineHistory size="28" />} />
            <IconContainer text={"Settings"} icon={<AiFillSetting size="28" />} />
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
