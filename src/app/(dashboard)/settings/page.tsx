'use client';

import React from 'react';
import { useAuth } from '@/app/providers/auth-provider';

export default function SettingsPage() {
  const { role } = useAuth();

  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-700">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <p className="text-[10px] text-white/40 tracking-[0.3em] uppercase mb-1">Configuration</p>
          <h1 className="text-4xl font-bold tracking-tighter">System Settings</h1>
        </div>
      </header>

      <div className="max-w-2xl space-y-8">
        {/* Personal Section */}
        <section className="space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-widest text-white/60">Account Profile</h2>
          <div className="card-premium space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Full Name</label>
                <input type="text" defaultValue="Joshan Dapaz" className="w-full bg-white/5 border border-white/10 rounded px-4 py-2 text-sm focus:outline-none focus:border-white/20 transition-all" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Email Address</label>
                <input type="email" defaultValue="joshan@example.com" className="w-full bg-white/5 border border-white/10 rounded px-4 py-2 text-sm focus:outline-none focus:border-white/20 transition-all" />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Assigned Role</label>
              <div className="px-4 py-2 bg-white/10 border border-white/20 rounded text-sm text-white/60">
                {role}
              </div>
            </div>
            <div className="pt-2">
              <button 
                onClick={() => window.location.href = '/settings/change-password'}
                className="text-[10px] uppercase tracking-[0.2em] font-bold text-white hover:opacity-70 transition-all flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                Change Security Password
              </button>
            </div>
          </div>
        </section>

        {/* System Section */}
        <section className="space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-widest text-white/60">User Interface</h2>
          <div className="card-premium space-y-4">
            <div className="flex items-center justify-between py-2 border-b border-white/5">
              <div>
                <p className="text-sm font-medium">Dark Mode</p>
                <p className="text-[10px] text-white/40">Premium OLED theme enabled by default</p>
              </div>
              <div className="w-10 h-5 bg-white rounded-full relative">
                <div className="absolute right-1 top-1 w-3 h-3 bg-black rounded-full" />
              </div>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-white/5">
              <div>
                <p className="text-sm font-medium">Compact Dashboards</p>
                <p className="text-[10px] text-white/40">Optimize layout for smaller tablets</p>
              </div>
              <div className="w-10 h-5 bg-white/10 rounded-full relative">
                <div className="absolute left-1 top-1 w-3 h-3 bg-white/20 rounded-full" />
              </div>
            </div>
          </div>
        </section>

        <div className="flex justify-end gap-3 pt-4">
          <button className="px-6 py-2 rounded border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-all">Cancel</button>
          <button className="btn-premium !py-2 !px-6 text-[10px]">Save Changes</button>
        </div>
      </div>
    </div>
  );
}
