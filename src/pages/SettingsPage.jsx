import React from 'react';
import { Settings, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const SettingsPage = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="space-y-6">
      <div 
        style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-main)' }}
        className="border rounded-2xl p-6 shadow-md flex items-center justify-between transition-colors"
      >
        <div>
          <h2 style={{ color: 'var(--text-title)' }} className="text-xl font-bold flex items-center gap-2">
            <Settings className="w-5 h-5 text-indigo-500" />
            Settings & Appearance
          </h2>
          <p style={{ color: 'var(--text-sub)' }} className="text-xs mt-1">Platform and account preferences</p>
        </div>
      </div>

      {/* Interactive Theme Mode Selection Box */}
      <div 
        style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-main)' }}
        className="border rounded-2xl p-8 shadow-sm space-y-6 transition-colors"
      >
        <div>
          <h3 style={{ color: 'var(--text-title)' }} className="text-base font-bold">Appearance Theme</h3>
          <p style={{ color: 'var(--text-sub)' }} className="text-xs mt-1">
            Choose your preferred color theme. Changes are saved automatically across sessions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg">
          {/* Dark Mode Option */}
          <button
            type="button"
            onClick={() => setTheme('dark')}
            style={{ 
              backgroundColor: theme === 'dark' ? 'var(--bg-hover)' : 'var(--input-bg)',
              borderColor: theme === 'dark' ? '#6366f1' : 'var(--border-main)'
            }}
            className="p-5 rounded-2xl border text-left transition-all flex items-center gap-4 hover:border-indigo-500"
          >
            <div className="p-3 rounded-xl bg-slate-800 text-amber-400">
              <Moon className="w-5 h-5" />
            </div>
            <div>
              <p style={{ color: 'var(--text-title)' }} className="font-semibold text-sm">Dark Mode</p>
              <p style={{ color: 'var(--text-sub)' }} className="text-xs">Sleek dark theme</p>
            </div>
          </button>

          {/* Light Mode Option */}
          <button
            type="button"
            onClick={() => setTheme('light')}
            style={{ 
              backgroundColor: theme === 'light' ? 'var(--bg-hover)' : 'var(--input-bg)',
              borderColor: theme === 'light' ? '#6366f1' : 'var(--border-main)'
            }}
            className="p-5 rounded-2xl border text-left transition-all flex items-center gap-4 hover:border-indigo-500"
          >
            <div className="p-3 rounded-xl bg-amber-500/10 text-amber-500">
              <Sun className="w-5 h-5" />
            </div>
            <div>
              <p style={{ color: 'var(--text-title)' }} className="font-semibold text-sm">Light Mode</p>
              <p style={{ color: 'var(--text-sub)' }} className="text-xs">Clean light theme</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
