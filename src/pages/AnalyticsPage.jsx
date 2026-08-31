import React from 'react';
import { BarChart3 } from 'lucide-react';

const AnalyticsPage = () => {
  return (
    <div className="space-y-6">
      <div 
        style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-main)' }}
        className="border rounded-2xl p-6 shadow-md flex items-center justify-between transition-colors"
      >
        <div>
          <h2 style={{ color: 'var(--text-title)' }} className="text-xl font-bold flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-indigo-500" />
            Analytics
          </h2>
          <p style={{ color: 'var(--text-sub)' }} className="text-xs mt-1">Analytics and performance tracking</p>
        </div>
      </div>

      {/* Clean Empty Container */}
      <div 
        style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-main)' }}
        className="border border-dashed rounded-2xl p-12 text-center flex flex-col items-center justify-center min-h-[350px] shadow-sm transition-colors"
      >
        <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-500 flex items-center justify-center mb-3">
          <BarChart3 className="w-6 h-6" />
        </div>
        <h3 style={{ color: 'var(--text-title)' }} className="text-base font-semibold">Analytics Content Area</h3>
        <p style={{ color: 'var(--text-sub)' }} className="text-xs max-w-sm mt-1">
          This page is ready for your analytics charts and telemetry data.
        </p>
      </div>
    </div>
  );
};

export default AnalyticsPage;
