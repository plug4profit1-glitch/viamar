import React from 'react';
import { PROCESS_STEPS } from '../constants';

export const Process: React.FC = () => {
  return (
    <section id="werkwijze" className="py-24 bg-brand-black border-y border-white/5 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-brand-white mb-4">Werkwijze</h2>
          <p className="text-brand-silver font-sans">Van idee naar livegang in 3 simpele stappen.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {PROCESS_STEPS.map((step, index) => (
            <div key={index} className="relative p-8 rounded-xl bg-brand-dark border border-white/5 hover:border-brand-gold/30 transition-all group">
               {/* Connector Line for Desktop */}
               {index !== PROCESS_STEPS.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-[1px] bg-brand-silver/20 z-0"></div>
              )}
              
              <div className="relative z-10">
                <span className="text-6xl font-headline font-bold text-brand-silver/10 absolute -top-8 -left-2 select-none group-hover:text-brand-gold/10 transition-colors">
                    {step.number}
                </span>
                <h3 className="text-xl font-headline font-bold text-brand-white mt-8 mb-4 relative">
                    {step.title}
                </h3>
                <p className="text-brand-silver leading-relaxed font-sans text-sm">
                    {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};