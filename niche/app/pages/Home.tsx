import React from 'react';
import { Hero } from '../../components/Hero';
import { Logos } from '../../components/Logos';
import { Features } from '../../components/Features';
import { HowItWorks } from '../../components/HowItWorks';

export function Home() {
  return (
    <>
      <Hero />
      <Logos />
      <Features />
      <HowItWorks />
    </>
  );
}
