import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BarChart3, 
  Users, 
  FolderKanban, 
  Settings, 
  LogOut, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles,
  ShieldCheck,
  X,
  Sun,
  Moon
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

const Sidebar = ({ isCollapsed, setIsCollapsed, mobileOpen, setMobileOpen }) => {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Analytics', path: '/analytics', icon: BarChart3 },
    { name: 'User Directory', path: '/users', icon: Users },
    { name: 'Projects & Tasks', path: '/projects', icon: FolderKanban },
    { name: 'Settings', path: '/settings', icon: Settings },
  ];

  const handleSignOut = () => {
    logout();
    navigate('/signout');
  };

  return (
    <>
      {/* Mobile backdrop */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside 
        style={{ backgroundColor: 'var(--bg-sidebar)', borderColor: 'var(--border-main)' }}
        className={`fixed top-0 bottom-0 left-0 z-50 border-r flex flex-col transition-all duration-300 ease-in-out
          ${isCollapsed ? 'w-20' : 'w-64'} 
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Brand Header */}
        <div 
          style={{ borderColor: 'var(--border-main)' }}
          className="h-16 flex items-center justify-between px-4 border-b"
        >
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20 shrink-0">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            {!isCollapsed && (
              <div className="flex flex-col">
                <span style={{ color: 'var(--text-title)' }} className="font-bold text-lg tracking-wide leading-tight">ApexCore</span>
                <span className="text-[10px] uppercase font-semibold text-indigo-500 tracking-wider">Enterprise OS</span>
              </div>
            )}
          </div>

          {/* Desktop collapse toggle */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            style={{ backgroundColor: 'var(--bg-hover)', color: 'var(--text-sub)' }}
            className="hidden lg:flex w-7 h-7 rounded-lg items-center justify-center transition-colors hover:text-indigo-500"
            title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>

          {/* Mobile close button */}
          <button
            onClick={() => setMobileOpen(false)}
            style={{ color: 'var(--text-sub)' }}
            className="lg:hidden p-1.5 rounded-lg hover:text-indigo-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Section */}
        <div className="flex-1 py-6 px-3 space-y-1.5 overflow-y-auto">
          {!isCollapsed && (
            <div style={{ color: 'var(--text-sub)' }} className="px-3 mb-2 text-[11px] font-bold uppercase tracking-wider opacity-80">
              Main Menu
            </div>
          )}
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) => `
                  group relative flex items-center gap-3.5 px-3 py-2.5 rounded-xl font-medium text-sm transition-all duration-200
                  ${isActive 
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25 font-semibold' 
                    : ''
                  }
                  ${isCollapsed ? 'justify-center' : ''}
                `}
                style={({ isActive }) => (!isActive ? { color: 'var(--text-sub)' } : {})}
                title={isCollapsed ? item.name : undefined}
              >
                {({ isActive }) => (
                  <>
                    <Icon className={`w-5 h-5 shrink-0 transition-transform group-hover:scale-110 ${isActive ? 'text-white' : 'text-indigo-500/80 group-hover:text-indigo-500'}`} />
                    
                    {!isCollapsed && (
                      <span className="truncate flex-1">{item.name}</span>
                    )}

                    {/* Tooltip for collapsed mode */}
                    {isCollapsed && (
                      <div 
                        style={{ backgroundColor: 'var(--bg-card)', color: 'var(--text-title)', borderColor: 'var(--border-main)' }}
                        className="absolute left-full ml-3 px-3 py-1.5 border text-xs rounded-md shadow-xl whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50"
                      >
                        {item.name}
                      </div>
                    )}
                  </>
                )}
              </NavLink>
            );
          })}
        </div>

        {/* Quick Theme Toggle & User Card */}
        <div 
          style={{ borderColor: 'var(--border-main)', backgroundColor: 'var(--bg-card)' }}
          className="p-3 border-t space-y-2"
        >
          {/* Theme Switcher Button inside Sidebar */}
          <button
            onClick={toggleTheme}
            style={{ backgroundColor: 'var(--bg-hover)', color: 'var(--text-title)', borderColor: 'var(--border-main)' }}
            className={`w-full flex items-center gap-3 p-2 rounded-xl border text-xs font-semibold transition-all hover:border-indigo-500 ${
              isCollapsed ? 'justify-center' : 'justify-between'
            }`}
            title="Switch Theme"
          >
            <div className="flex items-center gap-2">
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600" />
              )}
              {!isCollapsed && (
                <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
              )}
            </div>
            {!isCollapsed && (
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-500 uppercase font-bold">
                {theme}
              </span>
            )}
          </button>

          {!isCollapsed ? (
            <div 
              style={{ backgroundColor: 'var(--bg-hover)', borderColor: 'var(--border-main)' }}
              className="flex items-center justify-between p-2 rounded-xl border"
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <img 
                  src={user?.avatar} 
                  alt={user?.name} 
                  className="w-9 h-9 rounded-full object-cover ring-2 ring-indigo-500/30"
                />
                <div className="flex flex-col truncate">
                  <span style={{ color: 'var(--text-title)' }} className="text-xs font-semibold truncate">{user?.name}</span>
                  <span style={{ color: 'var(--text-sub)' }} className="text-[11px] truncate flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-500 inline shrink-0" />
                    {user?.role}
                  </span>
                </div>
              </div>

              <button
                onClick={handleSignOut}
                className="p-2 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-rose-500/10 transition-colors"
                title="Sign Out"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={handleSignOut}
              className="w-full flex items-center justify-center p-3 rounded-xl text-slate-400 hover:text-rose-500 hover:bg-rose-500/10 transition-colors group relative"
              title="Sign Out"
            >
              <LogOut className="w-5 h-5" />
              <div className="absolute left-full ml-3 px-3 py-1.5 bg-rose-950 text-rose-200 text-xs rounded-md shadow-xl whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50">
                Sign Out
              </div>
            </button>
          )}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
