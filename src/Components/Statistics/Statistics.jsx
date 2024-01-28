import React from 'react';
import Header from '../Header/Header';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';


const Statistics = () => {

    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    return (
        <div>
            <Header></Header>
            <div className='mt-16 ml-4 sm:ml-28'>
                <div className='flex items-center'>
                   <div className='h-4 w-4 bg-blue-400'></div> 
                   <p className='ml-4'>Salary range: 40k - 60k</p>
                </div>
                <div className='flex items-center'>
                   <div className='h-4 w-4 bg-yellow-400'></div> 
                   <p className='ml-4'>Salary range: 60k - 80k</p>
                </div>
                <div className='flex items-center'>
                   <div className='h-4 w-4 bg-teal-400'></div> 
                   <p className='ml-4'>Salary range: 80k - 100k</p>
                </div>
                <div className='flex items-center'>
                   <div className='h-4 w-4 bg-orange-400'></div> 
                   <p className='ml-4'>Salary range: 100k - 150k</p>
                </div>
                
            </div>
            <div className='block m-auto'>
                <PieChart width={350} height={350}>
                    <Pie
                        data={data}
                        dataKey={'value'}
                        fill="#8884d8"
                        cx="50%"
                        cy="50%"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </div>

        </div>
    );
};

export default Statistics;