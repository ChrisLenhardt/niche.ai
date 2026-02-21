import React from 'react';
import { Navigation } from '../../components/Navigation';
import { Hero } from '../../components/Hero';
import { Features } from '../../components/Features';
import { HowItWorks } from '../../components/HowItWorks';
import { Footer } from '../../components/Footer';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500 selection:text-white">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}
