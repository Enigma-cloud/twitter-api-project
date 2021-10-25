import React from 'react';

import { BarChart, LineChart, DoughnutChart, RadarChart } from '../charts/charts.component';

const PageContent = () => {
    return (
        <div className="flex flex-col justify-center gap-10 p-12 h-full bg-gray-50">
            <div className="flex flex-row justify-evenly gap-3">
                <div className="relative w-80 flex justify-center">
                    <LineChart 
                        labels={['Red', 'Green', 'Blue', 'Purple', 'Gold']} 
                        data={[44, 42.5, 45.6, 45.8, 46.2]}
                        height={300}
                        width={300}
                    />
                </div>
                <div className="relative w-80 flex justify-center">
                    <DoughnutChart 
                        labels={['Red', 'Green', 'Blue', 'Purple', 'Gold']} 
                        data={[2, 3, 5, 7, 10]}
                        height={300}
                        width={300}
                    />
                </div>
                <div className="relative w-80 flex justify-center">
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
                </div>
            </div>
            <div className="relative w-full flex justify-center">
                <BarChart 
                    labels={['Red', 'Green', 'Blue', 'Purple', 'Gold']} 
                    data={[2, 3, 5, 7, 10]}
                    height={300}
                    width={500}
                />
            </div>
        </div>
    )
}

export default PageContent;
