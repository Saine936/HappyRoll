import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MobileActionBar from './MobileActionBar';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 pb-16 lg:pb-0">{children}</main>
      <Footer />
      <MobileActionBar />
    </div>
  );
}
