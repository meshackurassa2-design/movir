'use client';

import React from 'react';

const clients = [
  { id: 1, name: 'Zenith Corp', industry: 'Technology', contact: 'Sarah Miller', lastVisit: '2h ago', status: 'Active' },
  { id: 2, name: 'Lumina Tech', industry: 'Logistics', contact: 'James Chen', lastVisit: '1d ago', status: 'Lead' },
  { id: 3, name: 'Stellar Logistics', industry: 'Retail', contact: 'Emma Wilson', lastVisit: '3d ago', status: 'Active' },
  { id: 4, name: 'Apex Solutions', industry: 'Manufacturing', contact: 'Robert Black', lastVisit: '1w ago', status: 'Inactive' },
  { id: 5, name: 'Global Ventures', industry: 'Finance', contact: 'Maria Garcia', lastVisit: '5h ago', status: 'Active' },
];

export default function ClientsPage() {
  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-700">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <p className="text-[10px] text-white/40 tracking-[0.3em] uppercase mb-1">Database</p>
          <h1 className="text-4xl font-bold tracking-tighter">Client Registry</h1>
        </div>
        <button className="btn-premium">New Client</button>
      </header>

      {/* Filters */}
      <div className="flex items-center gap-4 overflow-x-auto pb-4 no-scrollbar">
        <FilterButton label="All Clients" active />
        <FilterButton label="Active" />
        <FilterButton label="Leads" />
        <FilterButton label="Archived" />
      </div>

      {/* Client Table */}
      <div className="card-premium !p-0 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/5 bg-white/[0.02]">
              <th className="px-6 py-4 text-[10px] uppercase tracking-widest text-white/40 font-semibold">Client Name</th>
              <th className="px-6 py-4 text-[10px] uppercase tracking-widest text-white/40 font-semibold">Industry</th>
              <th className="px-6 py-4 text-[10px] uppercase tracking-widest text-white/40 font-semibold">Primary Contact</th>
              <th className="px-6 py-4 text-[10px] uppercase tracking-widest text-white/40 font-semibold">Last Interaction</th>
              <th className="px-6 py-4 text-[10px] uppercase tracking-widest text-white/40 font-semibold text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {clients.map((client) => (
              <tr key={client.id} className="hover:bg-white/[0.04] transition-colors group cursor-pointer">
                <td className="px-6 py-5">
                  <span className="text-sm font-bold text-white group-hover:text-white transition-colors">
                    {client.name}
                  </span>
                </td>
                <td className="px-6 py-5">
                  <span className="text-sm text-white/60">{client.industry}</span>
                </td>
                <td className="px-6 py-5">
                  <span className="text-sm text-white/60">{client.contact}</span>
                </td>
                <td className="px-6 py-5">
                  <span className="text-[10px] text-white/40 font-mono tracking-tighter">
                    {client.lastVisit}
                  </span>
                </td>
                <td className="px-6 py-5 text-right">
                  <span className={`px-2 py-0.5 rounded text-[9px] uppercase tracking-widest font-bold ${
                    client.status === 'Active' ? 'bg-white/10 text-white' : 'bg-white/5 text-white/30'
                  }`}>
                    {client.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function FilterButton({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <button className={`px-4 py-2 rounded-full border text-[10px] uppercase tracking-widest font-bold transition-all ${
      active 
        ? 'bg-white border-white text-black' 
        : 'bg-transparent border-white/10 text-white/40 hover:border-white/20 hover:text-white'
    }`}>
      {label}
    </button>
  );
}
