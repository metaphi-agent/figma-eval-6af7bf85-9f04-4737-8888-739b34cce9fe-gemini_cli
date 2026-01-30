import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Upload } from 'lucide-react';

const data = [
  { name: '00:00', sales: 120 },
  { name: '04:00', sales: 150 },
  { name: '08:00', sales: 180 },
  { name: '12:00', sales: 220 },
  { name: '14:00', sales: 160 },
  { name: '16:00', sales: 250 },
  { name: '18:00', sales: 200 },
  { name: '20:00', sales: 240 },
  { name: '22:00', sales: 280 },
];

export function TodaySales() {
  return (
    <div className="bg-white p-6 rounded-[20px] shadow-sm flex flex-col gap-6 h-full border border-gray-50">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-bold text-[#151D48] mb-1">Today's Sales</h3>
          <p className="text-sm text-[#737791]">Sales Summary</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-[#C3D3E2] rounded-lg text-xs font-medium text-[#151D48] hover:bg-gray-50 transition-colors">
            <Upload size={16} /> Export
        </button>
      </div>

      <div className="flex gap-8 overflow-x-auto pb-2">
          <div className="flex flex-col gap-1 min-w-[100px]">
              <span className="text-2xl font-bold text-[#151D48]">$1k</span>
              <span className="text-xs text-[#737791]">Total Sales</span>
              <span className="text-[10px] text-[#FFA412] font-medium">+8% from yesterday</span>
          </div>
           <div className="flex flex-col gap-1 min-w-[100px]">
              <span className="text-2xl font-bold text-[#151D48]">300</span>
              <span className="text-xs text-[#737791]">Total Order</span>
              <span className="text-[10px] text-[#FFA412] font-medium">+5% from yesterday</span>
          </div>
           <div className="flex flex-col gap-1 min-w-[100px]">
              <span className="text-2xl font-bold text-[#151D48]">5</span>
              <span className="text-xs text-[#737791]">Product Sold</span>
               <span className="text-[10px] text-[#FFA412] font-medium">+1.2% from yesterday</span>
          </div>
           <div className="flex flex-col gap-1 min-w-[100px]">
              <span className="text-2xl font-bold text-[#151D48]">8</span>
              <span className="text-xs text-[#737791]">New Customers</span>
              <span className="text-[10px] text-[#FFA412] font-medium">0.5% from yesterday</span>
          </div>
      </div>

      <div className="flex-1 min-h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke="#F2F4F7" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#7B91B0', fontSize: 12}} />
            <YAxis axisLine={false} tickLine={false} tick={{fill: '#7B91B0', fontSize: 12}} />
            <Tooltip 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
            />
            <Area type="monotone" dataKey="sales" stroke="#0095FF" strokeWidth={3} fillOpacity={1} fill="url(#colorSales)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
