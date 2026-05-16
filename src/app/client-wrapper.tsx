'use client';

import React, { useState } from 'react';
import { AuthProvider } from './providers/auth-provider';
import { SplashScreen } from '@/components/splash-screen';

export function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <AuthProvider>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      <div className={`${showSplash ? 'hidden' : 'block'}`}>
        {children}
      </div>
    </AuthProvider>
  );
}
