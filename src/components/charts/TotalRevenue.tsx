import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', value: 15 },
  { name: 'Tue', value: 25 },
  { name: 'Wed', value: 20 },
  { name: 'Thu', value: 10 },
  { name: 'Fri', value: 12 },
  { name: 'Sat', value: 18 },
  { name: 'Sun', value: 22 },
];

export function TotalRevenue() {
  return (
    <div className="bg-white p-6 rounded-[20px] shadow-sm flex flex-col h-full border border-gray-50">
      <h3 className="text-xl font-bold text-[#151D48] mb-6">Total Revenue</h3>
      <div className="flex-1 min-h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 5, right: 0, left: -25, bottom: 0 }}>
            <CartesianGrid vertical={false} stroke="#F2F4F7" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#7B91B0', fontSize: 12}} />
            <YAxis axisLine={false} tickLine={false} tick={{fill: '#7B91B0', fontSize: 12}} />
            <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
            <Bar dataKey="value" fill="#0095FF" radius={[4, 4, 4, 4]} barSize={20} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
