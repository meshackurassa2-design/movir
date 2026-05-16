'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ShieldCheck, Lock } from 'lucide-react';

export default function ChangePasswordPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => router.push('/settings'), 2000);
    }, 1500);
  };

  return (
    <div className="max-w-xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <button 
        onClick={() => router.back()}
        className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/40 hover:text-white transition-colors"
      >
        <ArrowLeft size={14} />
        Back to Settings
      </button>

      <div>
        <p className="text-[10px] text-white/40 tracking-[0.3em] uppercase mb-1">Security</p>
        <h1 className="text-4xl font-bold tracking-tighter">Update Password</h1>
      </div>

      <div className="card-premium">
        {success ? (
          <div className="py-12 flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/20">
              <ShieldCheck size={32} />
            </div>
            <div>
              <h2 className="text-xl font-bold">Password Updated</h2>
              <p className="text-zinc-500 text-sm mt-1">Your credentials have been successfully modified.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Current Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={16} />
                  <input 
                    type="password" 
                    required
                    placeholder="••••••••"
                    className="w-full bg-white/5 border border-white/10 rounded px-11 py-3 text-sm focus:outline-none focus:border-white/20 transition-all" 
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-white/30 font-bold">New Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={16} />
                  <input 
                    type="password" 
                    required
                    placeholder="••••••••"
                    className="w-full bg-white/5 border border-white/10 rounded px-11 py-3 text-sm focus:outline-none focus:border-white/20 transition-all" 
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Confirm New Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={16} />
                  <input 
                    type="password" 
                    required
                    placeholder="••••••••"
                    className="w-full bg-white/5 border border-white/10 rounded px-11 py-3 text-sm focus:outline-none focus:border-white/20 transition-all" 
                  />
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button 
                type="submit"
                disabled={loading}
                className="w-full btn-premium py-4"
              >
                {loading ? 'Processing...' : 'Update Credentials'}
              </button>
            </div>
            
            <p className="text-[10px] text-zinc-600 text-center uppercase tracking-widest">
              Secured by Site to Site Protocol
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
