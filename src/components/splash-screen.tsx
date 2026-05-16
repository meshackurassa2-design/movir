'use client';

import React, { useEffect, useState } from 'react';

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(onComplete, 800); // Wait for exit animation
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-6 transition-opacity duration-700 ${
        isExiting ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Animated Logo Text */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white text-center animate-premium-fade-in-up">
          SITE TO SITE
        </h1>

        {/* Glowing Accent Line */}
        <div className="h-[2px] bg-white mt-4 w-48 origin-center animate-premium-expand-line" />

        {/* Tagline */}
        <p className="text-[10px] uppercase tracking-[0.4em] text-white/40 text-center mt-6 font-bold animate-premium-fade-in">
          Protocol Active
        </p>
      </div>

      {/* Background Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent pointer-events-none animate-premium-pulse" />
    </div>
  );
}
