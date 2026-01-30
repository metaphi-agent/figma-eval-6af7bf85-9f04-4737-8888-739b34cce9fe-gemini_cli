import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Jan', last: 3000, current: 4000 },
  { name: 'Feb', last: 3200, current: 3500 },
  { name: 'Mar', last: 2800, current: 4500 },
  { name: 'Apr', last: 3500, current: 4200 },
  { name: 'May', last: 3100, current: 4800 },
  { name: 'Jun', last: 3800, current: 5000 },
  { name: 'Jul', last: 3400, current: 4900 },
];

export function CustomerSatisfaction() {
  return (
    <div className="bg-white p-6 rounded-[20px] shadow-sm flex flex-col h-full border border-gray-50">
      <h3 className="text-xl font-bold text-[#151D48] mb-6">Customer Satisfaction</h3>
      <div className="flex-1 min-h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
             <defs>
              <linearGradient id="colorCurrent" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0095FF" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#0095FF" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorLast" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#07E098" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#07E098" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke="#F2F4F7" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#7B91B0', fontSize: 12}} />
            <YAxis axisLine={false} tickLine={false} tick={{fill: '#7B91B0', fontSize: 12}} />
            <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
            <Legend iconType="circle" />
            <Area type="monotone" dataKey="last" stroke="#07E098" strokeWidth={2} fill="url(#colorLast)" name="Last Month" />
            <Area type="monotone" dataKey="current" stroke="#0095FF" strokeWidth={2} fill="url(#colorCurrent)" name="This Month" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
