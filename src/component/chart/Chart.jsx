import React from 'react'
import './chart.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'January',
    "Active User": 4000,
  },
  {
    name: 'February',
    "Active User": 3600,
  },
  {
    name: 'March',
    "Active User": 4000,
  },
  {
    name: 'April',
    "Active User": 2890,
  },
  {
    name: 'May',
    "Active User": 3300,
  },
  {
    name: 'June',
    "Active User": 2000,
  },
  {
    name: 'July',
    "Active User": 2500,
  },
  {
    name: 'August',
    "Active User": 3800,
  },
  {
    name: 'September',
    "Active User": 4000,
  },
  {
    name: 'October',
    "Active User": 5000,
  },
  {
    name: 'November',
    "Active User": 2900,
  },
  {
    name: 'December',
    "Active User": 3000,
  },
  
];

export const Chart = () => {
  return (
    <div className='chart'>
        <h3 className='chartTitle'>User Analytics</h3>
        <ResponsiveContainer width='100%' aspect={4 / 1}>
            <LineChart data={data}>
                <XAxis dataKey="name" stroke='#5550bd'/>
                <Line type="monotone" dataKey="Active User" stroke='#5550bd'/>
                <Tooltip/>
                <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}
