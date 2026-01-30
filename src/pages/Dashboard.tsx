import React from 'react';
import { TodaySales } from '../components/charts/TodaySales';
import { VisitorInsights } from '../components/charts/VisitorInsights';
import { TotalRevenue } from '../components/charts/TotalRevenue';
import { CustomerSatisfaction } from '../components/charts/CustomerSatisfaction';
import { TargetVsReality } from '../components/charts/TargetVsReality';
import { TopProducts } from '../components/charts/TopProducts';
import { SalesMapping } from '../components/charts/SalesMapping';
import { VolumeService } from '../components/charts/VolumeService';

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-8 pb-8">
      {/* Row 1 */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:h-[350px]">
        <div className="xl:col-span-7 h-[350px] xl:h-full">
          <TodaySales />
        </div>
        <div className="xl:col-span-5 h-[350px] xl:h-full">
          <VisitorInsights />
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:h-[350px]">
        <div className="xl:col-span-5 h-[350px] xl:h-full">
          <TotalRevenue />
        </div>
        <div className="xl:col-span-4 h-[350px] xl:h-full">
          <CustomerSatisfaction />
        </div>
        <div className="xl:col-span-3 h-[350px] xl:h-full">
          <TargetVsReality />
        </div>
      </div>

       {/* Row 3 */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:h-[350px]">
        <div className="xl:col-span-5 h-[350px] xl:h-full">
          <TopProducts />
        </div>
        <div className="xl:col-span-4 h-[350px] xl:h-full">
          <SalesMapping />
        </div>
        <div className="xl:col-span-3 h-[350px] xl:h-full">
          <VolumeService />
        </div>
      </div>
    </div>
  );
}
