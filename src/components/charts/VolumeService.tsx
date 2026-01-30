import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: '1135', volume: 600, service: 400 },
  { name: '1136', volume: 500, service: 300 },
  { name: '1137', volume: 700, service: 500 },
  { name: '1138', volume: 400, service: 200 },
  { name: '1139', volume: 500, service: 300 },
  { name: '1140', volume: 600, service: 400 },
];

export function VolumeService() {
  return (
    <div className="bg-white p-6 rounded-[20px] shadow-sm flex flex-col h-full border border-gray-50">
      <h3 className="text-xl font-bold text-[#151D48] mb-6">Volume vs Service Level</h3>
      <div className="flex-1 min-h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 5, right: 0, left: -25, bottom: 0 }} stackOffset="sign">
            <CartesianGrid vertical={false} stroke="#F2F4F7" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#7B91B0', fontSize: 12}} />
            <YAxis axisLine={false} tickLine={false} tick={{fill: '#7B91B0', fontSize: 12}} />
            <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
            <Legend iconType="circle" />
            <Bar dataKey="volume" stackId="a" fill="#0095FF" radius={[0, 0, 4, 4]} barSize={16} name="Volume" />
            <Bar dataKey="service" stackId="a" fill="#00E096" radius={[4, 4, 0, 0]} barSize={16} name="Service" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
