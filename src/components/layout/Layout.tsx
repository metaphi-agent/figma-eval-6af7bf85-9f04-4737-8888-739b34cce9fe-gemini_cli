import React from 'react';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#FAFBFC]">
      <Sidebar />
      <main className="ml-[300px] flex-1 flex flex-col w-[calc(100%-300px)]">
        <TopBar />
        <div className="px-10 pb-10 flex-1">
          {children}
        </div>
      </main>
    </div>
  );
}
