import React from 'react';
import { Link } from 'react-router-dom';
import { LogOut, ArrowRight, Shield, CheckCircle2 } from 'lucide-react';

const SignOutPage = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-md text-center relative z-10">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-slate-900 border border-slate-800 text-indigo-400 shadow-xl mb-6">
          <LogOut className="w-8 h-8" />
        </div>

        <h2 className="text-2xl font-bold text-white tracking-tight">You Have Been Signed Out</h2>
        <p className="text-sm text-slate-400 mt-2 max-w-xs mx-auto">
          Your active session has been safely closed and local security tokens cleared.
        </p>

        <div className="mt-8 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl backdrop-blur-xl text-left space-y-3">
          <div className="flex items-center gap-3 text-xs text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Session cookies & Auth tokens cleared</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>User state reset across active tabs</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-slate-300">
            <Shield className="w-4 h-4 text-indigo-400 shrink-0" />
            <span>Secure SSL connection terminated</span>
          </div>
        </div>

        <div className="mt-8">
          <Link
            to="/signin"
            className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-medium py-3 px-6 rounded-xl shadow-lg shadow-indigo-600/20 transition-all transform active:scale-95"
          >
            <span>Sign In Again</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignOutPage;
