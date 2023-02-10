import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'AUG',
    uv: 150,
    pv: 2400,
    amt: 2400,
    sv: 10,
  },
  {
    name: 'SEP',
    uv: 130,
    pv: 1398,
    amt: 2210,
    sv: 20,
  },
  {
    name: 'OCT',
    uv: 138,
    pv: 9800,
    amt: 2290,
    sv: 30,
  },
  {
    name: 'NOV',
    uv: 170,
    pv: 3908,
    amt: 2000,
    sv: 40,
  },
  {
    name: 'DEC',
    uv: 190,
    pv: 4800,
    amt: 2181,
    sv: 50,
  },
  {
    name: 'JAN',
    uv: 90,
    pv: 3800,
    amt: 2500,
    sv: 60,
  },
  {
    name: 'FEB',
    uv: 70,
    pv: 4300,
    amt: 2100,
    sv: 70,
  },
  {
    name: 'MAR',
    uv: 66,
    pv: 4300,
    amt: 2100,
    sv: 70,
  },
  {
    name: 'APR',
    uv: 30,
    pv: 4300,
    amt: 2100,
    sv: 70,
  },
  {
    name: 'MAY',
    uv: 10,
    pv: 4300,
    amt: 2100,
    sv: 70,
  },
  {
    name: 'JUN',
    uv: 10,
    pv: 4300,
    amt: 2100,
    sv: 70,
  },
  {
    name: 'JUL',
    uv: 0,
    pv: 4300,
    amt: 2100,
    sv: 200,
  },
  
];

export default function Graphy() {
    return (
      <ResponsiveContainer width="100%" aspect={3} style={{paddingTop:"100px"}}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis dataKey=  {`sv`}/>
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }