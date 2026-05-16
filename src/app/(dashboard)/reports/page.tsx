'use client';

import React from 'react';

const logs = [
  { id: 1, client: 'Zenith Corp', type: 'Visit', employee: 'Joshan D.', date: 'Today, 10:30 AM', outcome: 'Demo successful. Client requested proposal for Phase 2.', sentiment: 'Positive' },
  { id: 2, client: 'Lumina Tech', type: 'Call', employee: 'Sarah M.', date: 'Today, 09:15 AM', outcome: 'Rescheduled site audit to next Tuesday.', sentiment: 'Neutral' },
  { id: 3, client: 'Stellar Logistics', type: 'WhatsApp', employee: 'Joshan D.', date: 'Yesterday, 04:45 PM', outcome: 'Confirmed delivery receipt for the technical documentation.', sentiment: 'Positive' },
  { id: 4, client: 'Apex Solutions', type: 'Meeting', employee: 'Robert B.', date: 'Mar 12, 02:00 PM', outcome: 'Initial discovery call. Identified key pain points in inventory tracking.', sentiment: 'Positive' },
  { id: 5, client: 'Global Ventures', type: 'Email', employee: 'Sarah M.', date: 'Mar 11, 11:20 AM', outcome: 'Sent contract renewal draft. Awaiting legal review.', sentiment: 'Neutral' },
];

export default function LogsPage() {
  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-700">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <p className="text-[10px] text-white/40 tracking-[0.3em] uppercase mb-1">Timeline</p>
          <h1 className="text-4xl font-bold tracking-tighter">Interaction Logs</h1>
        </div>
        <button className="btn-premium">Add Interaction</button>
      </header>

      <div className="space-y-6">
        {logs.map((log) => (
          <div key={log.id} className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-white/10">
            <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-white shadow-[0_0_8px_white]" />
            
            <div className="card-premium group hover:bg-white/[0.04]">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-4">
                  <div className="px-2 py-1 rounded bg-white/5 border border-white/5 text-[9px] uppercase tracking-widest font-bold">
                    {log.type}
                  </div>
                  <h3 className="text-lg font-bold">{log.client}</h3>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-[10px] text-white/40 uppercase tracking-widest">Logged By</p>
                    <p className="text-sm font-medium">{log.employee}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-white/40 uppercase tracking-widest">Date</p>
                    <p className="text-sm font-medium">{log.date}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/[0.02] rounded-md p-4 border border-white/5">
                <p className="text-sm text-white/60 leading-relaxed italic">"{log.outcome}"</p>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-white/20">Sentiment</span>
                  <span className={`text-[10px] font-bold ${log.sentiment === 'Positive' ? 'text-white' : 'text-white/40'}`}>
                    {log.sentiment}
                  </span>
                </div>
                <button className="text-[10px] text-white/40 hover:text-white transition-colors underline underline-offset-4 decoration-white/10 uppercase tracking-widest font-bold">View Full Report</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
