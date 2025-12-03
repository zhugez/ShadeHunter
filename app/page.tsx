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
}
