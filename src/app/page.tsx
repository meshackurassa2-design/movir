'use client';

import React from 'react';
import { motion } from 'framer-motion';

const CATEGORIES = [
  { id: 'tech', label: 'TECH' },
  { id: 'travel', label: 'TRAVEL' },
  { id: 'finance', label: 'FINANCE' },
  { id: 'wellness', label: 'WELLNESS' },
  { id: 'pets', label: 'PETS' },
  { id: 'ai', label: 'AI' }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a4a5e] via-[#052b36] to-[#02151a] text-white p-6 md:p-12 flex flex-col justify-between">
      {/* Top Section */}
      <section className="mt-12 space-y-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-1"
        >
          <h1 className="text-5xl font-black tracking-tighter leading-none">
            EXPLORE<br />
            WHAT'S<br />
            <span className="text-yellow-400">HAPPENING</span><br />
            IN THE WORLD
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="space-y-1 text-lg font-medium opacity-90"
        >
          <p>New ideas. Top trends.</p>
          <p>Fresh perspectives.</p>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-yellow-400 text-black font-black py-4 px-8 rounded-full text-lg shadow-lg shadow-yellow-400/20"
        >
          EXPLORE MORE
        </motion.button>
      </section>

      {/* Grid Section */}
      <section className="mb-12">
        <div className="grid grid-cols-3 gap-3">
          {CATEGORIES.map((cat, idx) => (
            <motion.button
              key={cat.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + idx * 0.1 }}
              className="aspect-square bg-[#0a2e38] border border-blue-400/30 rounded-xl flex items-center justify-center text-[10px] md:text-xs font-bold tracking-widest hover:bg-[#0f414f] hover:border-blue-400 transition-all active:scale-90 shadow-xl"
            >
              {cat.label}
            </motion.button>
          ))}
        </div>
      </section>

      {/* Decorative Circle */}
      <div className="fixed -right-20 top-1/2 -translate-y-1/2 w-64 h-64 border border-blue-400/20 rounded-full flex items-center justify-center opacity-30 pointer-events-none">
        <div className="w-48 h-48 border border-blue-400/20 rounded-full flex items-center justify-center">
          <div className="w-32 h-32 border border-blue-400/20 rounded-full" />
        </div>
      </div>
    </main>
  );
}

