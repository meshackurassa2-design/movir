'use client';

import React from 'react';
import { useAuth } from '@/app/providers/auth-provider';

export default function DashboardPage() {
  const { role } = useAuth();

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <p className="text-[10px] text-white/40 tracking-[0.3em] uppercase mb-1">Overview</p>
          <h1 className="text-4xl font-bold tracking-tighter">Welcome back, {role}</h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="px-4 py-2 rounded-md glass text-xs font-semibold whitespace-nowrap">
            {new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
          </div>
          <button className="btn-premium !py-2 !px-4 text-xs">Quick Action</button>
        </div>
      </header>

      {/* Role-Specific Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard label="Active Clients" value="128" change="+12%" />
        <StatCard label="Tasks Completed" value="45" change="+5%" />
        <StatCard label="Pending Visits" value="12" change="-2" />
        <StatCard label="Daily Goal" value="85%" change="On Track" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Feed Section */}
        <section className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold tracking-tight">Recent Activity</h2>
            <button className="text-[10px] text-white/40 uppercase tracking-widest hover:text-white transition-colors">View All</button>
          </div>
          
          <div className="space-y-4">
            <ActivityItem 
              type="Client Visit" 
              title="Meeting with Zenith Corp" 
              time="2h ago" 
              status="Completed" 
              description="Discussed Q2 expansion plans and service level agreements."
            />
            <ActivityItem 
              type="Task" 
              title="Update Marketing Materials" 
              time="4h ago" 
              status="In Progress" 
              description="Reviewing the new B&W branding assets for the field team."
            />
            <ActivityItem 
              type="Appointment" 
              title="Technical Audit - Site B" 
              time="Yesterday" 
              status="Scheduled" 
              description="On-site inspection for compliance and performance tracking."
            />
          </div>
        </section>

        {/* Sidebar Widgets */}
        <aside className="space-y-8">
          <div className="card-premium">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-4">Quick Log</h3>
            <div className="grid grid-cols-2 gap-2">
              <LogButton icon="📞" label="Call" />
              <LogButton icon="💬" label="WhatsApp" />
              <LogButton icon="🏢" label="Visit" />
              <LogButton icon="🤝" label="Meeting" />
            </div>
          </div>

          <div className="card-premium">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-4">Notifications</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0" />
                <p className="text-xs text-white/60 leading-relaxed">
                  Monthly reporting is now due for all departments.
                </p>
              </div>
              <div className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-1.5 shrink-0" />
                <p className="text-xs text-white/40 leading-relaxed">
                  New client "Lumina Tech" assigned to your region.
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function StatCard({ label, value, change }: { label: string; value: string; change: string }) {
  return (
    <div className="card-premium">
      <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">{label}</p>
      <div className="flex items-end justify-between">
        <h3 className="text-2xl font-bold">{value}</h3>
        <p className="text-[10px] text-white/60 bg-white/5 px-2 py-0.5 rounded border border-white/5">
          {change}
        </p>
      </div>
    </div>
  );
}

function ActivityItem({ type, title, time, status, description }: any) {
  return (
    <div className="card-premium !p-5 group hover:bg-white/[0.07]">
      <div className="flex items-start justify-between mb-2">
        <div>
          <span className="text-[9px] text-white/40 uppercase tracking-[0.2em] font-medium">{type}</span>
          <h4 className="text-sm font-bold mt-0.5 group-hover:text-white transition-colors">{title}</h4>
        </div>
        <span className="text-[10px] text-white/30">{time}</span>
      </div>
      <p className="text-xs text-white/50 leading-relaxed line-clamp-2 mb-4">{description}</p>
      <div className="flex items-center justify-between">
        <div className="px-2 py-0.5 rounded border border-white/10 text-[9px] uppercase tracking-wider font-semibold">
          {status}
        </div>
        <button className="text-[10px] text-white/40 hover:text-white underline underline-offset-4 decoration-white/10">Details</button>
      </div>
    </div>
  );
}

function LogButton({ icon, label }: { icon: string; label: string }) {
  return (
    <button className="flex flex-col items-center justify-center p-3 rounded-md bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all active:scale-95">
      <span className="text-xl mb-1">{icon}</span>
      <span className="text-[10px] uppercase tracking-widest font-bold opacity-60">{label}</span>
    </button>
  );
}
