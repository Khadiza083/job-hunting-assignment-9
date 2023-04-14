import React from 'react';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const assignmentMarks = [
        {
            id: 1,
            name: 'assignment 1',
            mark: 60
        },
        {
            id: 2,
            name: 'assignment 2',
            mark: 60
        },
        {
            id: 3,
            name: 'assignment 3',
            mark: 60
        },
        {
            id: 4,
            name: 'assignment 4',
            mark: 60
        },
        {
            id: 5,
            name: 'assignment 5',
            mark: 52
        },
        {
            id: 6,
            name: 'assignment 6',
            mark: 58
        },
        {
            id: 7,
            name: 'assignment 7',
            mark: 60
        },
    ]
    return (
        <div className='mt-20'>
            <AreaChart
                width={500}
                height={400}
                data={assignmentMarks}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="mark" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        </div>
    );
};

export default Statistics;