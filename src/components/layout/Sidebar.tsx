import React from 'react';
import { LayoutDashboard, BarChart2, ShoppingCart, ShoppingBag, PieChart, MessageSquare, Settings, LogOut } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: BarChart2, label: 'Leaderboard', path: '/leaderboard' },
  { icon: ShoppingCart, label: 'Order', path: '/order' },
  { icon: ShoppingBag, label: 'Products', path: '/products' },
  { icon: PieChart, label: 'Sales Report', path: '/sales' },
  { icon: MessageSquare, label: 'Messages', path: '/messages' },
  { icon: Settings, label: 'Settings', path: '/settings' },
  { icon: LogOut, label: 'Sign Out', path: '/logout', className: 'mt-auto text-red-500' },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <div className="w-[300px] bg-white h-screen fixed left-0 top-0 border-r border-gray-100 flex flex-col p-8 z-10 overflow-y-auto">
      <div className="flex items-center gap-4 mb-12 px-2">
        <div className="text-3xl font-semibold text-[#151D48] flex items-center gap-3">
            <div className="w-10 h-10 bg-[#5B93FF] rounded-lg flex items-center justify-center text-white text-xl font-bold">D</div>
            Dabang
        </div>
      </div>

      <nav className="flex flex-col gap-4 flex-1">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.label}
              to={item.path}
              className={`flex items-center gap-6 px-6 py-4 rounded-xl transition-all ${
                isActive
                  ? 'bg-[#5B93FF] text-white shadow-lg shadow-blue-200'
                  : 'text-[#737791] hover:bg-gray-50'
              } ${item.className || ''}`}
            >
              <item.icon size={22} className={isActive ? 'text-white' : 'text-[#737791]'} strokeWidth={isActive ? 2.5 : 2} />
              <span className={`text-base ${isActive ? 'font-semibold' : 'font-medium'}`}>{item.label}</span>
            </Link>
          );
        })}
      </nav>
      
      <div className="mt-8 bg-[#5B93FF] rounded-2xl p-6 text-white text-center mx-2 mb-4">
        <div className="font-semibold text-xl mb-2">Dabang Pro</div>
        <div className="text-xs opacity-80 mb-4 px-4">Get access to all features on tetumbas</div>
        <button className="bg-white text-[#5B93FF] py-3 px-6 rounded-xl font-bold text-sm w-full hover:bg-gray-50 transition-colors">
            Get Pro
        </button>
      </div>
    </div>
  );
}
