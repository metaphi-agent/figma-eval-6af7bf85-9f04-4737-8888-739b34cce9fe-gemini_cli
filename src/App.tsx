import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';

const Dashboard = React.lazy(() => import('./pages/Dashboard'));

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<div className="flex items-center justify-center h-full text-[#151D48] font-medium">Loading Dashboard...</div>}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="*" element={<div className="flex items-center justify-center h-full text-[#737791] text-lg">Page under construction</div>} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;