import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';


const Statistics = () => {
    const loadMainData = useLoaderData();
    console.log(loadMainData);
    const data = [];
    // {name: 'Page A', uv: 100, pv: 2400, amt: 2400},
    //     {name: 'Page B', uv: 300, pv: 2400, amt: 2400},
    //     {name: 'Page C', uv: 200, pv: 2400, amt: 2400},
    //     {name: 'Page D', uv: 140, pv: 2400, amt: 2400},
    loadMainData.data.map((singleData) => {
        const {name,total} = singleData;
        const dataObj = {name,uv:total,pv:2400,amt:2400}
        data.push(dataObj)
    })
    return (
        <section className='py-5 mt-4'>
            <div className="container">
                <h1 className='text-center mb-4'>Statistics</h1>
                <div className='w-100 d-flex justify-content-center'>
                    <LineChart width={800} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                    </LineChart>
                </div>
            </div>
        </section>
    );
};

export default Statistics;