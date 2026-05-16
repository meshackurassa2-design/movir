'use client';

import React from 'react';
import { useAuth } from './providers/auth-provider';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { role, setRole, isAuthenticated } = useAuth();
  const router = useRouter();

  // Redirect if already authenticated
  React.useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard');
    }
  }, [isAuthenticated, router]);

  const roles: Array<'Admin' | 'Supervisor' | 'Staff'> = ['Admin', 'Supervisor', 'Staff'];

  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center p-6 md:p-12">
      <div className="w-full max-w-sm space-y-12">
        {/* Branding Area */}
        <div className="text-center space-y-4 animate-in fade-in slide-in-from-top-6 duration-1000">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] text-white/40 tracking-[0.2em] uppercase font-medium mb-4">
            Secured Access
          </div>
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter text-white">SITE TO SITE</h1>
            <p className="text-zinc-500 text-sm uppercase tracking-[0.2em]">Employee Client Tracking System</p>
          </div>
        </div>

        <div className="card-premium space-y-6">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-white">Select Your Interface</h2>
            <p className="text-sm text-white/40">Choose your role to enter the workspace.</p>
          </div>

          <div className="grid gap-3">
            {roles.map((r) => (
              <button
                key={r}
                onClick={() => setRole(r)}
                className="w-full flex items-center justify-between px-5 py-4 rounded-md border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <div className="text-left">
                  <p className="text-sm font-semibold text-white">{r}</p>
                  <p className="text-[10px] text-white/30 uppercase tracking-wider mt-0.5">
                    {r === 'Admin' ? 'Full Access' : r === 'Supervisor' ? 'Team Management' : 'Field Operations'}
                  </p>
                </div>
                <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/40 transition-colors">
                  <svg className="w-3 h-3 text-white/40 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </div>

        <p className="text-center text-[10px] text-white/20 uppercase tracking-[0.3em]">
          Powered by InsForge & Next.js
        </p>
      </div>
    </main>
  );
}
