import type { Metadata } from 'next';
import React from 'react';
import "./globals.css";
import "./design-tokens.css";
import { ClientWrapper } from './client-wrapper';

export const metadata: Metadata = {
  title: "MOVIEBOX",
  description: "Premium Movie Streaming",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
