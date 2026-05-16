'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/app/providers/auth-provider';
import { 
  Home, 
  Users, 
  CheckSquare, 
  Settings as SettingsIcon,
  BarChart3,
  Calendar,
  LogOut
} from 'lucide-react';

import { useRouter } from 'next/navigation';

const navItems = [
  { name: 'Home', href: '/dashboard', roles: ['Admin', 'Supervisor', 'Staff'], Icon: Home },
  { name: 'Clients', href: '/clients', roles: ['Admin', 'Supervisor', 'Staff'], Icon: Users },
  { name: 'Tasks', href: '/tasks', roles: ['Admin', 'Supervisor', 'Staff'], Icon: CheckSquare },
  { name: 'Reports', href: '/reports', roles: ['Admin', 'Supervisor'], Icon: BarChart3 },
  { name: 'Team', href: '/team', roles: ['Admin', 'Supervisor'], Icon: Users },
];

export function BottomNav() {
  const pathname = usePathname();
  const router = useRouter();
  const { role, setRole } = useAuth();

  const filteredNav = navItems.filter(item => item.roles.includes(role)).slice(0, 4); 

  const handleLogout = () => {
    setRole('None');
    router.push('/');
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-20 bg-black/80 backdrop-blur-xl border-t border-white/5 z-50 flex items-center justify-around px-6 md:hidden pb-safe">
      {filteredNav.map((item) => {
        const isActive = pathname.startsWith(item.href);
        const Icon = item.Icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center gap-1 transition-all duration-300 ${
              isActive ? 'text-white' : 'text-zinc-500'
            }`}
          >
            <div className={`p-2 rounded-xl transition-all ${isActive ? 'bg-white/10' : ''}`}>
              <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
            </div>
            <span className="text-[8px] uppercase tracking-widest font-bold">
              {item.name}
            </span>
          </Link>
        );
      })}
      
      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="flex flex-col items-center gap-1 text-zinc-500 hover:text-white transition-all duration-300"
      >
        <div className="p-2 rounded-xl">
          <LogOut size={20} />
        </div>
        <span className="text-[8px] uppercase tracking-widest font-bold">
          Logout
        </span>
      </button>
    </nav>
  );
}
