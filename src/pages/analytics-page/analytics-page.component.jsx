import React from 'react';

import ContentContainer from '../../components/content-container/content-container.component';
import PageContent from '../../components/page-content/page-content.component';

const AnalyticsPage = () => {
    return (
        <div className="content-container">
            <ContentContainer title={'Analytics'}>
                <PageContent />
            </ContentContainer>  
        </div>
    )
}

export default AnalyticsPage;