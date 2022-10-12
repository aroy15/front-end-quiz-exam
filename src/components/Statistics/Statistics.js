import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';


const Statistics = () => {
    const loadMainData = useLoaderData();
    const data = [];

    loadMainData.data.map((singleData) => {
        const {name,total} = singleData;
        const dataObj = {name,uv:total,pv:2400,amt:2400}
        return data.push(dataObj)
    })
    return (
        <section className='py-5 mt-4'>
            <div className="container">
                <h1 className='text-center mb-4'>Statistics</h1>
                <div className='w-100 d-flex justify-content-center'>
                    <ResponsiveContainer width='100%' aspect={3}>
                        <LineChart width={800} height={300} data={data} >
                            <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={4} />
                            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                            <XAxis dataKey="name" />
                            <YAxis />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </section>
    );
};

export default Statistics;