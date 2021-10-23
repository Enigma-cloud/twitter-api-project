import React from 'react';

import { AiOutlineDashboard, AiFillSetting, AiOutlineBarChart, AiOutlineHistory } from 'react-icons/ai';

const SideBar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-1/6 m-0
                        flex flex-col
                        bg-gray-500 text-white">
            <HeaderTitle text={"TwitterBlade"} />
            <SideBarIcon text={"Dashboard"} icon={<AiOutlineDashboard size="28" />} />
            <SideBarIcon text={"Analytics"} icon={<AiOutlineBarChart size="28" />} />
            <SideBarIcon text={"History"} icon={<AiOutlineHistory size="28" />} />
            <SideBarIcon text={"Settings"} icon={<AiFillSetting size="28" />} />
        </div>
    )
};

const HeaderTitle = ({ text }) => (
    <div className="sidebar-header">
        <h1 className="p-0.5 text-xl">
            {text}
        </h1>
    </div>
);

const SideBarIcon = ({ icon, text }) => (
    <button className="sidebar-icon">
        <i className="mx-4 mr-2">{icon}</i>
        {text}
    </button>
);


export default SideBar;
