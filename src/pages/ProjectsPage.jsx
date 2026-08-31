import React from 'react';
import { FolderKanban } from 'lucide-react';

const ProjectsPage = () => {
  return (
    <div className="space-y-6">
      <div 
        style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-main)' }}
        className="border rounded-2xl p-6 shadow-md flex items-center justify-between transition-colors"
      >
        <div>
          <h2 style={{ color: 'var(--text-title)' }} className="text-xl font-bold flex items-center gap-2">
            <FolderKanban className="w-5 h-5 text-indigo-500" />
            Projects & Tasks
          </h2>
          <p style={{ color: 'var(--text-sub)' }} className="text-xs mt-1">Project tracking and sprint board</p>
        </div>
      </div>

      {/* Clean Empty Container */}
      <div 
        style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-main)' }}
        className="border border-dashed rounded-2xl p-12 text-center flex flex-col items-center justify-center min-h-[350px] shadow-sm transition-colors"
      >
        <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-3">
          <FolderKanban className="w-6 h-6" />
        </div>
        <h3 style={{ color: 'var(--text-title)' }} className="text-base font-semibold">Projects Content Area</h3>
        <p style={{ color: 'var(--text-sub)' }} className="text-xs max-w-sm mt-1">
          This page is ready for your project task boards and sprint tracking.
        </p>
      </div>
    </div>
  );
};

export default ProjectsPage;
