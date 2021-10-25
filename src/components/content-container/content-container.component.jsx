import React from 'react';

import PageHeader from '../header/header.component';

const ContentContainer = ({ title, children }) => {
    return (
        <>
            <PageHeader title={title} />
            {children}
        </>
    )
}

export default ContentContainer;
