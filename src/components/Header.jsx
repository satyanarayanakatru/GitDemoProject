import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  Search, 
  Bell, 
  Menu, 
  User, 
  LogOut, 
  Settings, 
  ChevronDown,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Sun,
  Moon
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

const Header = ({ setMobileOpen }) => {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  // Dynamic breadcrumb title
  const getPageTitle = () => {
    switch (location.pathname) {
      case '/dashboard': return 'Executive Overview';
      case '/analytics': return 'Performance & Analytics';
      case '/users': return 'Team Directory';
      case '/projects': return 'Projects & Sprint Tracker';
      case '/settings': return 'Account & Platform Settings';
      default: return 'Dashboard';
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/signout');
  };

  return (
    <header 
      style={{ backgroundColor: 'var(--bg-header)', borderColor: 'var(--border-main)' }}
      className="sticky top-0 z-30 h-16 backdrop-blur-md border-b px-4 lg:px-8 flex items-center justify-between transition-colors"
    >
      {/* Left section: Mobile toggle & Page Title */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => setMobileOpen(true)}
          style={{ color: 'var(--text-sub)' }}
          className="lg:hidden p-2 rounded-lg hover:text-indigo-500 transition-colors"
          aria-label="Open sidebar"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div>
          <h1 style={{ color: 'var(--text-title)' }} className="text-lg font-semibold tracking-tight flex items-center gap-2">
            {getPageTitle()}
          </h1>
          <p style={{ color: 'var(--text-sub)' }} className="text-xs hidden sm:block">Welcome back, {user?.name}</p>
        </div>
      </div>

      {/* Right section: Theme toggle, Search bar & User controls */}
      <div className="flex items-center gap-3">
        {/* Search input */}
        <div className="relative hidden md:block w-60">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search pages, options..."
            style={{ backgroundColor: 'var(--input-bg)', borderColor: 'var(--border-main)', color: 'var(--text-title)' }}
            className="w-full border rounded-xl pl-9 pr-4 py-1.5 text-xs placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition-all"
          />
        </div>

        {/* Sun / Moon Light & Dark Mode Toggle Button */}
        <button
          onClick={toggleTheme}
          style={{ backgroundColor: 'var(--bg-hover)', borderColor: 'var(--border-main)', color: 'var(--text-title)' }}
          className="p-2 rounded-xl border flex items-center justify-center transition-all hover:border-indigo-500"
          title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {theme === 'dark' ? (
            <Sun className="w-5 h-5 text-amber-400" />
          ) : (
            <Moon className="w-5 h-5 text-indigo-600" />
          )}
        </button>

        {/* Notifications Dropdown */}
        <div className="relative">
          <button
            onClick={() => {
              setNotificationsOpen(!notificationsOpen);
              setUserMenuOpen(false);
            }}
            style={{ backgroundColor: 'var(--bg-hover)', borderColor: 'var(--border-main)', color: 'var(--text-sub)' }}
            className="relative p-2 rounded-xl border hover:text-indigo-500 transition-colors"
            title="Notifications"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-indigo-500 ring-4 ring-slate-900 animate-pulse" />
          </button>

          {notificationsOpen && (
            <div 
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-main)' }}
              className="absolute right-0 mt-2 w-80 border rounded-2xl shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
            >
              <div 
                style={{ borderColor: 'var(--border-main)' }}
                className="px-4 py-2 border-b flex items-center justify-between"
              >
                <span style={{ color: 'var(--text-title)' }} className="text-xs font-semibold">Notifications</span>
                <span className="text-[10px] bg-indigo-500/20 text-indigo-500 px-2 py-0.5 rounded-full font-medium">3 New</span>
              </div>
              <div className="divide-y divide-slate-800/60 max-h-72 overflow-y-auto">
                <div className="px-4 py-3 hover:bg-indigo-500/5 transition-colors flex gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <div>
                    <p style={{ color: 'var(--text-title)' }} className="text-xs font-medium">System Ready</p>
                    <p style={{ color: 'var(--text-sub)' }} className="text-[11px]">Light/Dark theme switcher fully active.</p>
                    <span className="text-[10px] text-slate-500 mt-1 block">Just now</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div style={{ backgroundColor: 'var(--border-main)' }} className="h-5 w-px" />

        {/* User Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => {
              setUserMenuOpen(!userMenuOpen);
              setNotificationsOpen(false);
            }}
            className="flex items-center gap-2 p-1.5 rounded-xl transition-colors border border-transparent hover:border-slate-700"
          >
            <img
              src={user?.avatar}
              alt={user?.name}
              className="w-8 h-8 rounded-full object-cover ring-2 ring-indigo-500/40"
            />
            <span style={{ color: 'var(--text-title)' }} className="text-xs font-medium hidden sm:block truncate max-w-[120px]">{user?.name}</span>
            <ChevronDown style={{ color: 'var(--text-sub)' }} className="w-3.5 h-3.5" />
          </button>

          {userMenuOpen && (
            <div 
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-main)' }}
              className="absolute right-0 mt-2 w-56 border rounded-2xl shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
            >
              <div 
                style={{ borderColor: 'var(--border-main)' }}
                className="px-4 py-2.5 border-b"
              >
                <p style={{ color: 'var(--text-title)' }} className="text-xs font-semibold">{user?.name}</p>
                <p style={{ color: 'var(--text-sub)' }} className="text-[11px] truncate">{user?.email}</p>
              </div>

              <div className="py-1">
                <button
                  onClick={() => {
                    setUserMenuOpen(false);
                    navigate('/settings');
                  }}
                  style={{ color: 'var(--text-title)' }}
                  className="w-full px-4 py-2 text-xs hover:bg-indigo-500/10 flex items-center gap-2.5 transition-colors"
                >
                  <User className="w-4 h-4 text-slate-400" />
                  My Profile & Settings
                </button>
              </div>

              <div style={{ borderColor: 'var(--border-main)' }} className="pt-1 border-t">
                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-2 text-xs text-rose-500 hover:bg-rose-500/10 flex items-center gap-2.5 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
