import React from 'react';

import Card from '../../components/card/card.component';
import { LineChart } from '../../components/charts/charts.component';
import ContentContainer from '../../components/content-container/content-container.component';
import PageContent from '../../components/page-content/page-content.component';

const DashboardPage = () => {
    return (
        <div className="content-container">
            <ContentContainer title={'Dashboard'}>
                <PageContent>
                    <div className="flex flex-row justify-start">
                        <h1 className="text-2xl text-gray-800">John Doe's statistics</h1>
                    </div>
                    <div className="flex flex-row justify-between gap-6 w-full">
                        <Card>
                            <div className="flex flex-col gap-3">
                                <h1 className="text-2xl">Total number of tweets</h1>
                                <div className="flex flex-col gap-1 text-black">
                                    <h1 className="text-4xl font-semibold">10000</h1>
                                    <span>
                                        since 2010
                                    </span>
                                </div>
                    
                            </div>
                        </Card>
                        <Card>
                            <div className="flex flex-col gap-3">
                                <h1 className="text-2xl">Number of followers</h1>
                                <div className="flex flex-col gap-1 text-green-500">
                                    <h1 className="text-4xl font-semibold">11000</h1>
                                    <span>
                                        +10% from last month
                                    </span>
                                </div>
         
                            </div>
                        </Card>
                        <Card>
                            <div className="flex flex-col gap-3">
                                <h1 className="text-2xl">Number of likes</h1>
                                <div className="flex flex-col gap-1 text-red-500">
                                    <h1 className="text-4xl font-semibold">90000</h1>
                                    <span>
                                        -10% from last month
                                    </span>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="relative w-full flex justify-center">
                        <Card>
                            <LineChart 
                                labels={['Red', 'Green', 'Blue', 'Purple', 'Gold']} 
                                data={[2, 3, 5, 7, 10]}
                                height={300}
                                width={500}
                            />
                        </Card>
                    </div>
                </PageContent>
            </ContentContainer>  
        </div>
    )
}

export default DashboardPage;
