import React from 'react';

const IconContainer = ({ icon, text, modifier }) => {
    return (
        <button className={`icon ${modifier ? modifier : ''}`} title={text}>
            <i className={`${modifier ? 'mx-4 mr-2' : ''}`}>{icon}</i>
            <span className="sidebar-text">
                {text}
            </span>
        </button>
    )
};


IconContainer.defaultProps = {
    text: '',
    modifier: ''
}

export default IconContainer;