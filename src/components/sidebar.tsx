'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/app/providers/auth-provider';
import { LogOut as LogOutIcon } from 'lucide-react';

const navItems = [
  { name: 'Dashboard', href: '/dashboard', roles: ['Admin', 'Supervisor', 'Staff'] },
  { name: 'Clients', href: '/clients', roles: ['Admin', 'Supervisor', 'Staff'] },
  { name: 'Tasks', href: '/tasks', roles: ['Admin', 'Supervisor', 'Staff'] },
  { name: 'Reports', href: '/reports', roles: ['Admin', 'Supervisor'] },
  { name: 'Team', href: '/team', roles: ['Admin', 'Supervisor'] },
  { name: 'Settings', href: '/settings', roles: ['Admin'] },
];

export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { role, setRole } = useAuth();

  const filteredNav = navItems.filter(item => item.roles.includes(role));

  const logout = () => {
    setRole('None');
    router.push('/');
  };


  return (
    <aside className="w-64 h-screen glass border-r border-white/10 flex flex-col p-6 fixed left-0 top-0">
      {/* Logo/Brand */}
      <div className="p-8">
        <h1 className="text-2xl font-bold tracking-tighter text-white">
          SITE TO SITE
        </h1>
        <p className="text-[10px] text-zinc-500 mt-1 uppercase tracking-widest">
          Employee Client Tracking
        </p>
      </div>

      <nav className="flex-1 space-y-2">
        {filteredNav.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center px-4 py-3 rounded-md transition-all duration-300 ${
                isActive 
                  ? 'bg-white text-black font-semibold' 
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* User Info, Logout & Copyright */}
      <div className="mt-auto pt-6 border-t border-white/10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-bold text-sm">
            {role[0]}
          </div>
          <div>
            <p className="text-sm font-medium text-white">{role}</p>
            <p className="text-xs text-white/40">Active Session</p>
          </div>
        </div>
        
        {/* Logout & Copyright */}
        <div className="p-4 border-t border-white/5 space-y-4">
          <button
            onClick={logout}
            className="flex items-center gap-4 px-4 py-3 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-md transition-all w-full"
          >
            <LogOutIcon size={20} />
            <span>Logout</span>
          </button>
          
          <div className="px-4 pb-2">
            <p className="text-[10px] text-zinc-600 uppercase tracking-widest">
              © 2026 dapazcm
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
