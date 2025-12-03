import React from 'react';
import { Header } from './components/sections/Header';
import { Hero } from './components/sections/Hero';
import { Features } from './components/sections/Features';
import { Technology } from './components/sections/Technology';
import { DemoConsole } from './components/sections/DemoConsole';
import { Pricing } from './components/sections/Pricing';
import { AIAnalysis } from './components/sections/AIAnalysis';
import { Footer } from './components/sections/Footer';

function App() {
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
}

export default App;
