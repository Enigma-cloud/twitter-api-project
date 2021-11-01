import React from 'react'

import { Bar, Line, Doughnut, Radar } from 'react-chartjs-2';

export const BarChart = ({ labels, data, height, width }) => {
    return (
        <Bar
            data={{
                labels: labels,
                datasets: [{
                    label: '# of votes',
                    data: data,
                    backgroundColor: '#06b6d4',
                }]
            }}
            height={height}
            width={width}
            options={{
                responsive: true,
                maintainAspectRatio: false,
            }}
        />     
    )
};

export const LineChart = ({ labels, data, height, width }) => {
    return (
        <Line
            data={{
                labels: labels,
                datasets: [{
                    label: 'First dataset',
                    data: data,
                    fill: false,
                    backgroundColor: 'rgb(75, 192, 192)',
                    tension: 0.1,
                }]
            }}
            height={height}
            width={width}
            options={{
                responsive: true,
                maintainAspectRatio: false,
            }}
        />     
    )
};

export const DoughnutChart = ({ labels, data, height, width }) => {
    return (
        <Doughnut
            data={{
                labels: labels,
                datasets: [{
                    label: '# of votes',
                    data: data,
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                      ],
                    hoverOffset: 4,
                }]
            }}
            height={height}
            width={width}
            options={{
                responsive: true,
                maintainAspectRatio: false,
            }}
        />     
    )
};

export const RadarChart = ({ labels, data, height, width }) => {
    return (
        // Can have multiple data sets
        <Radar
            data={{
                labels: labels,
                datasets: [{
                    label: '# of votes',
                    data: data,
                    fill: true,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: '#06b6d4',
                    pointBackgroundColor: '#06b6d4',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: '#06b6d4'
                }]
            }}
            height={height}
            width={width}
            options={{
                responsive: true,
                maintainAspectRatio: false,
            }}
        />     
    )
};
