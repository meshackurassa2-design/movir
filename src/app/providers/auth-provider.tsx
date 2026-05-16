'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Role = 'Admin' | 'Supervisor' | 'Staff' | 'None';

interface AuthContextType {
  role: Role;
  setRole: (role: Role) => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [role, setRole] = useState<Role>('None');

  // For development: Default to Supervisor to see the main dashboard features
  useEffect(() => {
    const savedRole = localStorage.getItem('user_role') as Role;
    if (savedRole) {
      setRole(savedRole);
    }
  }, []);

  const handleSetRole = (newRole: Role) => {
    setRole(newRole);
    localStorage.setItem('user_role', newRole);
  };

  return (
    <AuthContext.Provider value={{ role, setRole: handleSetRole, isAuthenticated: role !== 'None' }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
