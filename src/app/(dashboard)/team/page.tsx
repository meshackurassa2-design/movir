'use client';

import React from 'react';

const teamMembers = [
  { id: 1, name: 'Joshan Dapaz', role: 'Admin', department: 'Digital Marketing', status: 'Active', performance: '98%' },
  { id: 2, name: 'Sarah Miller', role: 'Supervisor', department: 'Sales Strategy', status: 'Active', performance: '92%' },
  { id: 3, name: 'Robert Brown', role: 'Staff', department: 'Field Ops', status: 'Active', performance: '85%' },
  { id: 4, name: 'Emma Wilson', role: 'Staff', department: 'Customer Success', status: 'Away', performance: '90%' },
  { id: 5, name: 'James Carter', role: 'Staff', department: 'Technical Support', status: 'Active', performance: '95%' },
];

export default function TeamPage() {
  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-700">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <p className="text-[10px] text-white/40 tracking-[0.3em] uppercase mb-1">Human Resources</p>
          <h1 className="text-4xl font-bold tracking-tighter">Team Directory</h1>
        </div>
        <button className="btn-premium">Invite Member</button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <div key={member.id} className="card-premium group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center font-bold text-lg">
                {member.name[0]}
              </div>
              <div>
                <h3 className="text-lg font-bold group-hover:text-white transition-colors">{member.name}</h3>
                <p className="text-xs text-white/40 uppercase tracking-widest">{member.role} • {member.department}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest text-white/20 font-bold">Status</span>
                <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-widest ${
                  member.status === 'Active' ? 'bg-white/10 text-white' : 'bg-white/5 text-white/30'
                }`}>
                  {member.status}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest text-white/20 font-bold">Performance</span>
                <span className="text-sm font-bold text-white/80">{member.performance}</span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/5 flex gap-2">
              <button className="flex-1 py-2 rounded bg-white/5 border border-white/5 text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white hover:bg-white/10 transition-all">Profile</button>
              <button className="flex-1 py-2 rounded bg-white/5 border border-white/5 text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white hover:bg-white/10 transition-all">Activity</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
