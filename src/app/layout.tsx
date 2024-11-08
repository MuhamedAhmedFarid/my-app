import React from 'react';
import './globals.css'; // Import the global CSS file

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className='bg-blue-200 h-screen'>{children}</body>
    </html>
  );
}