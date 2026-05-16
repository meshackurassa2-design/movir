'use client';

import React from 'react';

const tasks = [
  { id: 1, title: 'Morning Briefing', client: 'Internal', priority: 'High', status: 'Completed', deadline: '09:00 AM' },
  { id: 2, title: 'In-site Audit', client: 'Zenith Corp', priority: 'Critical', status: 'In Progress', deadline: '11:30 AM' },
  { id: 3, title: 'Inventory Check', client: 'Stellar Logistics', priority: 'Medium', status: 'Pending', deadline: '02:00 PM' },
  { id: 4, title: 'Follow-up Call', client: 'Lumina Tech', priority: 'Low', status: 'Pending', deadline: '04:30 PM' },
  { id: 5, title: 'Weekly Reporting', client: 'Internal', priority: 'High', status: 'Pending', deadline: '05:00 PM' },
];

export default function TasksPage() {
  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-700">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <p className="text-[10px] text-white/40 tracking-[0.3em] uppercase mb-1">Operations</p>
          <h1 className="text-4xl font-bold tracking-tighter">Daily Tasks</h1>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 rounded-md glass text-[10px] font-bold uppercase tracking-widest">Filter</button>
          <button className="btn-premium">New Task</button>
        </div>
      </header>

      {/* Task List - iPad Optimized Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tasks.map((task) => (
          <div key={task.id} className="card-premium group hover:bg-white/[0.04]">
            <div className="flex items-start justify-between mb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className={`w-1.5 h-1.5 rounded-full ${
                    task.priority === 'Critical' ? 'bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]' : 
                    task.priority === 'High' ? 'bg-white/60' : 'bg-white/20'
                  }`} />
                  <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-white/40">{task.priority} Priority</span>
                </div>
                <h3 className="text-lg font-bold group-hover:text-white transition-colors">{task.title}</h3>
                <p className="text-sm text-white/40">{task.client}</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-mono text-white/40 mb-1">{task.deadline}</p>
                <div className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded border ${
                  task.status === 'Completed' ? 'bg-white/10 border-white/20 text-white' : 
                  task.status === 'In Progress' ? 'bg-white border-white text-black' : 'bg-transparent border-white/5 text-white/30'
                }`}>
                  {task.status}
                </div>
              </div>
            </div>
            
            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <div className="flex -space-x-2">
                {[1, 2].map(i => (
                  <div key={i} className="w-6 h-6 rounded-full border border-black bg-white/10" title="Team Member" />
                ))}
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 rounded text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors">Edit</button>
                <button className="px-3 py-1.5 rounded bg-white/5 border border-white/5 text-[10px] font-bold uppercase tracking-widest text-white hover:bg-white/10 transition-all">Start Task</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
