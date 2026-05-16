'use client';

import React from 'react';

const appointments = [
  { id: 1, title: 'Project Kickoff', client: 'Zenith Corp', time: '10:30 AM', date: 'Today', type: 'In-person' },
  { id: 2, title: 'Contract Review', client: 'Lumina Tech', time: '02:00 PM', date: 'Today', type: 'Virtual' },
  { id: 3, title: 'Field Audit', client: 'Stellar Logistics', time: '09:00 AM', date: 'Tomorrow', type: 'Site Visit' },
  { id: 4, title: 'Strategy Session', client: 'Apex Solutions', time: '11:45 AM', date: 'Mar 18', type: 'In-person' },
];

export default function AppointmentsPage() {
  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-700">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <p className="text-[10px] text-white/40 tracking-[0.3em] uppercase mb-1">Calendar</p>
          <h1 className="text-4xl font-bold tracking-tighter">Appointments</h1>
        </div>
        <button className="btn-premium">Schedule Meeting</button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Calendar View Placeholder */}
        <div className="lg:col-span-1">
          <div className="card-premium">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-6">March 2026</h3>
            <div className="grid grid-cols-7 gap-2 mb-2">
              {['S','M','T','W','T','F','S'].map(d => (
                <div key={d} className="text-center text-[10px] font-bold text-white/20">{d}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: 31 }).map((_, i) => (
                <div key={i} className={`aspect-square flex items-center justify-center rounded-md text-xs transition-colors ${
                  i + 1 === 15 ? 'bg-white text-black font-bold' : 'hover:bg-white/5 text-white/40 cursor-pointer'
                }`}>
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming List */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-2">Upcoming</h3>
          {appointments.map((appt) => (
            <div key={appt.id} className="card-premium flex items-center justify-between group hover:bg-white/[0.04]">
              <div className="flex items-center gap-6">
                <div className="text-center w-12 shrink-0">
                  <p className="text-[10px] uppercase font-bold text-white/40">{appt.date}</p>
                  <p className="text-sm font-bold">{appt.time.split(' ')[0]}</p>
                </div>
                <div className="h-8 w-px bg-white/10" />
                <div>
                  <h4 className="text-md font-bold group-hover:text-white transition-colors">{appt.title}</h4>
                  <p className="text-xs text-white/40">{appt.client} • {appt.type}</p>
                </div>
              </div>
              <button className="text-[10px] text-white/40 hover:text-white uppercase tracking-widest font-bold">Reschedule</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
