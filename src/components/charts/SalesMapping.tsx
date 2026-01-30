import React from 'react';

export function SalesMapping() {
  return (
    <div className="bg-white p-6 rounded-[20px] shadow-sm h-full border border-gray-50 flex flex-col relative overflow-hidden">
      <h3 className="text-xl font-bold text-[#151D48] z-10">Sales Mapping by Country</h3>
      
      {/* Abstract Map Representation */}
      <div className="flex-1 flex items-center justify-center relative">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" 
            alt="World Map" 
            className="w-full h-full object-contain opacity-30 grayscale"
          />
          
           {/* Dots */}
          <div className="absolute top-[40%] left-[25%] w-3 h-3 bg-red-500 rounded-full animate-ping opacity-75"></div>
          <div className="absolute top-[40%] left-[25%] w-3 h-3 bg-red-500 rounded-full border-2 border-white shadow-md"></div>

          <div className="absolute top-[35%] right-[35%] w-4 h-4 bg-orange-400 rounded-full animate-pulse opacity-75"></div>
          <div className="absolute top-[35%] right-[35%] w-4 h-4 bg-orange-400 rounded-full border-2 border-white shadow-md"></div>

          <div className="absolute top-[65%] right-[25%] w-2 h-2 bg-blue-500 rounded-full border border-white"></div>
          <div className="absolute top-[25%] left-[15%] w-2 h-2 bg-green-500 rounded-full border border-white"></div>
      </div>
    </div>
  );
}
