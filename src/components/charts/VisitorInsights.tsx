import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Jan', loyal: 300, new: 150, unique: 200 },
  { name: 'Feb', loyal: 320, new: 180, unique: 220 },
  { name: 'Mar', loyal: 280, new: 160, unique: 190 },
  { name: 'Apr', loyal: 350, new: 200, unique: 250 },
  { name: 'May', loyal: 310, new: 170, unique: 210 },
  { name: 'Jun', loyal: 380, new: 220, unique: 280 },
  { name: 'Jul', loyal: 340, new: 190, unique: 230 },
  { name: 'Aug', loyal: 360, new: 210, unique: 260 },
  { name: 'Sep', loyal: 390, new: 230, unique: 290 },
  { name: 'Oct', loyal: 400, new: 240, unique: 300 },
  { name: 'Nov', loyal: 370, new: 220, unique: 280 },
  { name: 'Dec', loyal: 420, new: 260, unique: 320 },
];

export function VisitorInsights() {
  return (
    <div className="bg-white p-6 rounded-[20px] shadow-sm flex flex-col h-full border border-gray-50">
      <h3 className="text-xl font-bold text-[#151D48] mb-6">Visitor Insights</h3>
      <div className="flex-1 min-h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 20, left: -20, bottom: 0 }}>
            <CartesianGrid vertical={false} stroke="#F2F4F7" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#7B91B0', fontSize: 12}} />
            <YAxis axisLine={false} tickLine={false} tick={{fill: '#7B91B0', fontSize: 12}} />
            <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
            <Legend 
                iconType="circle" 
                layout="horizontal" 
                verticalAlign="bottom" 
                align="center"
                wrapperStyle={{ paddingTop: '20px' }}
            />
            <Line type="monotone" dataKey="loyal" stroke="#A700FF" strokeWidth={3} dot={false} name="Loyal Customers" />
            <Line type="monotone" dataKey="new" stroke="#EF4444" strokeWidth={3} dot={false} name="New Customers" />
            <Line type="monotone" dataKey="unique" stroke="#3CD856" strokeWidth={3} dot={false} name="Unique Customers" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
