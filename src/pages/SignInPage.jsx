import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Sparkles, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle,
  AlertCircle,
  Sun,
  Moon
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  
  const { login, isLoading } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in both email and password.');
      return;
    }

    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'Invalid credentials. Please try again.');
    }
  };

  const handleDemoLogin = async () => {
    setEmail('alex.morgan@enterprise.io');
    setPassword('password123');
    setError('');
    try {
      await login('alex.morgan@enterprise.io', 'password123');
      navigate('/dashboard');
    } catch (err) {
      setError('Failed to login with demo credentials.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden transition-colors">
      {/* Top right Theme toggle */}
      <button
        onClick={toggleTheme}
        style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-main)', color: 'var(--text-title)' }}
        className="absolute top-6 right-6 p-2.5 rounded-xl border shadow-md hover:border-indigo-500 transition-all z-20"
        title="Toggle Theme"
      >
        {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-indigo-600" />}
      </button>

      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-md relative z-10">
        {/* Brand Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-500 text-white shadow-xl shadow-indigo-500/25 mb-4">
            <Sparkles className="w-7 h-7" />
          </div>
          <h2 style={{ color: 'var(--text-title)' }} className="text-2xl font-bold tracking-tight">Sign In to ApexCore</h2>
          <p style={{ color: 'var(--text-sub)' }} className="text-sm mt-1">Access your enterprise dashboard & control center</p>
        </div>

        {/* Login Box */}
        <div 
          style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-main)' }}
          className="border rounded-3xl p-8 shadow-2xl backdrop-blur-xl transition-colors"
        >
          {error && (
            <div className="mb-6 p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center gap-3 text-rose-500 text-xs">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-500" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div>
              <label style={{ color: 'var(--text-title)' }} className="block text-xs font-semibold mb-2">Work Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex.morgan@enterprise.io"
                  style={{ backgroundColor: 'var(--input-bg)', borderColor: 'var(--border-main)', color: 'var(--text-title)' }}
                  className="w-full border rounded-xl pl-10 pr-4 py-2.5 text-sm placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-all"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label style={{ color: 'var(--text-title)' }} className="block text-xs font-semibold mb-2">Password</label>
              <div className="relative">
                <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  style={{ backgroundColor: 'var(--input-bg)', borderColor: 'var(--border-main)', color: 'var(--text-title)' }}
                  className="w-full border rounded-xl pl-10 pr-10 py-2.5 text-sm placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-indigo-500"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-slate-700 bg-slate-950 text-indigo-600 focus:ring-indigo-500"
                />
                <span style={{ color: 'var(--text-sub)' }} className="text-xs">Remember this device</span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-3 px-4 rounded-xl shadow-lg shadow-indigo-600/25 flex items-center justify-center gap-2 transition-all transform active:scale-95 disabled:opacity-50"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <span>Sign In</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Quick Demo Action Box */}
          <div style={{ borderColor: 'var(--border-main)' }} className="mt-6 pt-6 border-t">
            <button
              type="button"
              onClick={handleDemoLogin}
              style={{ backgroundColor: 'var(--bg-hover)', borderColor: 'var(--border-main)' }}
              className="w-full text-indigo-500 border py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all hover:border-indigo-500 group"
            >
              <CheckCircle className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform" />
              <span>Click for Instant Demo Login</span>
            </button>
          </div>
        </div>

        {/* Security badge */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-500">
          <ShieldCheck className="w-4 h-4 text-emerald-500" />
          <span>256-Bit SSL Encrypted Enterprise Auth</span>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
