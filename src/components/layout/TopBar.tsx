import React from 'react';
import { Search, Bell, ChevronDown } from 'lucide-react';

export function TopBar() {
  return (
    <header className="h-[120px] bg-transparent flex items-center justify-between px-10 py-8">
      <h1 className="text-[36px] font-semibold text-[#151D48]">Dashboard</h1>
      
      <div className="flex items-center gap-10">
        <div className="bg-white rounded-2xl px-6 py-3.5 flex items-center gap-4 w-[350px] shadow-sm">
          <Search className="text-[#5B93FF]" size={22} />
          <input 
            type="text" 
            placeholder="Search here..." 
            className="flex-1 bg-transparent outline-none text-[#151D48] text-base placeholder:text-[#737791]"
          />
        </div>

        <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 cursor-pointer">
                <img src="https://flagcdn.com/w40/us.png" alt="US" className="w-7 h-7 rounded-full object-cover border border-gray-100" />
                <span className="font-semibold text-[#151D48] text-lg">Eng (US)</span>
                <ChevronDown size={20} className="text-[#A0A3BD]" />
            </div>

            <div className="flex items-center gap-6">
                 <button className="bg-[#FFFAF1] p-3.5 rounded-xl relative hover:bg-[#FFF5E0] transition-colors">
                    <Bell className="text-[#FFA412]" size={24} />
                    <div className="absolute top-3 right-3.5 w-2 h-2 bg-[#EB5757] rounded-full ring-2 ring-white"></div>
                </button>
                
                <div className="flex items-center gap-4 cursor-pointer">
                     <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User" className="w-14 h-14 rounded-2xl object-cover" />
                     <div className="flex flex-col">
                         <span className="font-bold text-[#151D48] text-base">Musk</span>
                         <span className="text-sm text-[#737791]">Admin</span>
                     </div>
                     <ChevronDown size={20} className="text-[#151D48] ml-2" />
                </div>
            </div>
        </div>
      </div>
    </header>
  );
}
