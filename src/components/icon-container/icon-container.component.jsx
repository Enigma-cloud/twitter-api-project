import React from 'react';

const IconContainer = ({ icon, text }) => {
    return (
        <button className="icon" title={text}>
            <i className="mx-4 mr-2">{icon}</i>
            <span className="sidebar-text">
                {text}
            </span>
        </button>
    )
};


IconContainer.defaultProps = {
    text: ''
}

export default IconContainer;