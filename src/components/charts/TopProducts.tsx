import React from 'react';

const products = [
  { id: 1, name: 'Home Decor Range', popularity: 45, sales: '45%', color: '#0095FF' },
  { id: 2, name: 'Disney Princess Pink Bag 18\'', popularity: 29, sales: '29%', color: '#00E096' },
  { id: 3, name: 'Bathroom Essentials', popularity: 18, sales: '18%', color: '#884DFF' },
  { id: 4, name: 'Apple Smartwatches', popularity: 25, sales: '25%', color: '#FF8F0D' },
];

export function TopProducts() {
  return (
    <div className="bg-white p-6 rounded-[20px] shadow-sm h-full border border-gray-50 flex flex-col">
      <h3 className="text-xl font-bold text-[#151D48] mb-6">Top Products</h3>
      <div className="flex flex-col gap-6 overflow-y-auto flex-1">
        <div className="flex justify-between text-sm text-[#A0A3BD] mb-2 px-2">
            <span>#</span>
            <span className="flex-1 ml-4">Name</span>
            <span>Popularity</span>
            <span className="w-16 text-right">Sales</span>
        </div>
        {products.map((product, index) => (
          <div key={product.id} className="flex items-center text-sm px-2 pb-4 border-b border-gray-50 last:border-0 last:pb-0">
             <span className="text-[#151D48] font-semibold w-6">{String(index + 1).padStart(2, '0')}</span>
             <span className="flex-1 ml-4 font-medium text-[#151D48] truncate pr-4">{product.name}</span>
             <div className="w-32 h-1 bg-[#F0F9FF] rounded-full mx-4 relative overflow-hidden shrink-0">
                 <div 
                    className="absolute top-0 left-0 h-full rounded-full" 
                    style={{ width: `${product.popularity}%`, backgroundColor: product.color }}
                 ></div>
             </div>
             <div 
                className="w-16 text-right font-medium py-1 px-2 rounded-lg border text-xs"
                style={{ 
                    color: product.color, 
                    borderColor: product.color,
                    backgroundColor: `${product.color}10` 
                }}
             >
                 {product.sales}
             </div>
          </div>
        ))}
      </div>
    </div>
  );
}
