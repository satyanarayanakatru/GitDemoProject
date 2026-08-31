import React from 'react';
import { Users } from 'lucide-react';

const UsersPage = () => {
  return (
    <div className="space-y-6">
      <div 
        style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-main)' }}
        className="border rounded-2xl p-6 shadow-md flex items-center justify-between transition-colors"
      >
        <div>
          <h2 style={{ color: 'var(--text-title)' }} className="text-xl font-bold flex items-center gap-2">
            <Users className="w-5 h-5 text-indigo-500" />
            User Directory
          </h2>
          <p style={{ color: 'var(--text-sub)' }} className="text-xs mt-1">User management and team permissions</p>
        </div>
      </div>

      {/* Clean Empty Container */}
      <div 
        style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-main)' }}
        className="border border-dashed rounded-2xl p-12 text-center flex flex-col items-center justify-center min-h-[350px] shadow-sm transition-colors"
      >
        <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center mb-3">
          <Users className="w-6 h-6" />
        </div>
        <h3 style={{ color: 'var(--text-title)' }} className="text-base font-semibold">Users Content Area</h3>
        <p style={{ color: 'var(--text-sub)' }} className="text-xs max-w-sm mt-1">
          This page is ready for your user management table and API endpoints.
        </p>
      </div>
    </div>
  );
};

export default UsersPage;
