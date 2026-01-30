import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { ShoppingBag, Ticket } from 'lucide-react';

const data = [
  { name: 'Jan', target: 200, reality: 150 },
  { name: 'Feb', target: 220, reality: 180 },
  { name: 'Mar', target: 250, reality: 200 },
  { name: 'Apr', target: 210, reality: 170 },
  { name: 'May', target: 260, reality: 220 },
  { name: 'Jun', target: 230, reality: 190 },
  { name: 'Jul', target: 270, reality: 230 },
];

export function TargetVsReality() {
  return (
    <div className="bg-white p-6 rounded-[20px] shadow-sm flex flex-col h-full border border-gray-50">
      <h3 className="text-xl font-bold text-[#151D48] mb-6">Target vs Reality</h3>
      <div className="flex-1 min-h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 5, right: 0, left: -25, bottom: 0 }} barGap={0}>
            <CartesianGrid vertical={false} stroke="#F2F4F7" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#7B91B0', fontSize: 12}} />
            <YAxis axisLine={false} tickLine={false} tick={{fill: '#7B91B0', fontSize: 12}} />
            <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
            <Legend iconType="circle" />
            <Bar dataKey="reality" fill="#4AB58E" radius={[4, 4, 4, 4]} barSize={16} name="Reality Sales" />
            <Bar dataKey="target" fill="#FFCF00" radius={[4, 4, 4, 4]} barSize={16} name="Target Sales" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 flex flex-col gap-3">
          <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#E2FFF3] rounded-xl flex items-center justify-center text-[#4AB58E]">
                  <ShoppingBag size={20} />
              </div>
              <div>
                  <div className="font-semibold text-[#151D48] text-sm">Reality Sales</div>
                  <div className="text-xs text-[#737791]">Global</div>
              </div>
              <div className="ml-auto font-bold text-[#27AE60]">8.823</div>
          </div>
          <div className="flex items-center gap-3">
               <div className="w-10 h-10 bg-[#FFF4DE] rounded-xl flex items-center justify-center text-[#FFA800]">
                  <Ticket size={20} />
              </div>
              <div>
                  <div className="font-semibold text-[#151D48] text-sm">Target Sales</div>
                  <div className="text-xs text-[#737791]">Commercial</div>
              </div>
              <div className="ml-auto font-bold text-[#FFA800]">12.122</div>
          </div>
      </div>
    </div>
  );
}
