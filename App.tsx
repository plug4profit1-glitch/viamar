import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Process } from './components/Process';
import { Pricing } from './components/Pricing';
import { About } from './components/About';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-brand-black text-brand-white font-sans selection:bg-brand-gold selection:text-brand-black">
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <Services />
        <Portfolio />
        <Process />
        <Pricing />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;