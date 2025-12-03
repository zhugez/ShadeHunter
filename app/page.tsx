<<<<<<< HEAD
import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { Technology } from '@/components/sections/Technology';
import { DemoConsole } from '@/components/sections/DemoConsole';
import { Pricing } from '@/components/sections/Pricing';
import { AIAnalysis } from '@/components/sections/AIAnalysis';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="bg-deep-bg min-h-screen text-white selection:bg-neon-cyan/30 selection:text-neon-cyan">
      <Header />
      <Hero />
      <Features />
      <Technology />
      <DemoConsole />
      <Pricing />
      <AIAnalysis />
      <Footer />
    </main>
  );
=======
'use client';

import { Header } from '../src/components/sections/Header';
import { Hero } from '../src/components/sections/Hero';
import { Features } from '../src/components/sections/Features';
import { Technology } from '../src/components/sections/Technology';
import { DemoConsole } from '../src/components/sections/DemoConsole';
import { Pricing } from '../src/components/sections/Pricing';
import { AIAnalysis } from '../src/components/sections/AIAnalysis';
import { Footer } from '../src/components/sections/Footer';

export default function Home() {
    return (
        <main className="min-h-screen">
            <Header />
            <Hero />
            <Features />
            <Technology />
            <DemoConsole />
            <Pricing />
            <AIAnalysis />
            <Footer />
        </main>
    );
>>>>>>> 275f30c916b53c65ad06e561f948e73d373e6e29
}
