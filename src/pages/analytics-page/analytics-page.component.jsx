import React from 'react';

import ContentContainer from '../../components/content-container/content-container.component';
import PageContent from '../../components/page-content/page-content.component';
import Card from '../../components/card/card.component';
import { BarChart, LineChart, DoughnutChart, RadarChart } from '../../components/charts/charts.component';

const AnalyticsPage = () => {
    return (
        <div className="content-container">
            <ContentContainer title={'Analytics'}>
                <PageContent>
                    <div className="flex flex-row justify-between w-full">
                        <div className="relative w-96 flex justify-center">
                            <Card>
                                <LineChart 
                                    labels={['Red', 'Green', 'Blue', 'Purple', 'Gold']} 
                                    data={[44, 42.5, 45.6, 45.8, 46.2]}
                                    height={300}
                                    width={300}
                                />
                            </Card>
                        </div>
                        <div className="relative w-96 flex justify-center">
                            <Card>
                                <DoughnutChart 
                                    labels={['Red', 'Green', 'Blue', 'Purple', 'Gold']} 
                                    data={[2, 3, 5, 7, 10]}
                                    height={300}
                                    width={300}
                                />
                            </Card>
                        </div>
                        <div className="relative w-96 flex justify-center">
                            <Card>
                                <RadarChart 
                                    labels={['Eating',
                                    'Drinking',
                                    'Sleeping',
                                    'Designing',
                                    'Coding',
                                    'Cycling',
                                    'Running']}
                                    data={[65, 59, 90, 81, 56, 55, 40]}
                                    height={300}
                                    width={300}
                                />
                            </Card> 
                        </div>
                    </div>
                    <div className="relative w-full flex justify-center">
                        <Card>
                            <BarChart 
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

export default AnalyticsPage;