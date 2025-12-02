import React from 'react';
import { XCircle, CheckCircle } from 'lucide-react';

export const ProblemSolution: React.FC = () => {
  return (
    <section className="py-24 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* The Problem */}
          <div className="bg-brand-dark p-10 rounded-xl border border-white/5 relative overflow-hidden group hover:border-red-500/20 transition-colors">
            <h3 className="text-2xl font-headline font-bold text-brand-white mb-6 flex items-center">
                <XCircle className="text-red-500 mr-4 w-8 h-8" />
                Het Probleem
            </h3>
            <p className="text-brand-silver mb-8 leading-relaxed font-sans">
                De meeste ondernemers hebben óf geen website, óf een saaie die niks verkoopt. Ze weten dat ze "iets met een website" moeten, maar:
            </p>
            <ul className="space-y-4 text-brand-silver font-sans">
                <li className="flex items-start">
                    <span className="text-red-500 mr-3 text-lg">•</span>
                    Ze hebben geen tijd.
                </li>
                <li className="flex items-start">
                    <span className="text-red-500 mr-3 text-lg">•</span>
                    Ze weten niet wat erop moet staan.
                </li>
                <li className="flex items-start">
                    <span className="text-red-500 mr-3 text-lg">•</span>
                    Ze zijn vastgelopen in WordPress of Wix.
                </li>
            </ul>
          </div>

          {/* The Solution */}
          <div className="bg-gradient-to-br from-brand-dark to-[#1a1a1c] p-10 rounded-xl border border-brand-gold/20 relative overflow-hidden shadow-2xl hover:shadow-glow transition-all duration-500">
             <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 blur-[60px] rounded-full"></div>
             <h3 className="text-2xl font-headline font-bold text-brand-white mb-6 flex items-center relative z-10">
                <CheckCircle className="text-brand-gold mr-4 w-8 h-8" />
                De Oplossing
            </h3>
            <p className="text-brand-silver mb-8 leading-relaxed font-sans relative z-10">
                Ik help je van A tot Z. We maken in één keer een strakke, duidelijke site die vertrouwen wekt én klanten oplevert.
            </p>
            <div className="space-y-4 relative z-10">
                <div className="bg-brand-black/50 p-4 rounded border border-brand-gold/10 flex items-center">
                    <div className="w-2 h-2 bg-brand-gold rounded-full mr-3"></div>
                    <p className="text-brand-white font-medium font-headline">Professioneel design</p>
                </div>
                <div className="bg-brand-black/50 p-4 rounded border border-brand-gold/10 flex items-center">
                    <div className="w-2 h-2 bg-brand-gold rounded-full mr-3"></div>
                    <p className="text-brand-white font-medium font-headline">Snel online</p>
                </div>
                <div className="bg-brand-black/50 p-4 rounded border border-brand-gold/10 flex items-center">
                    <div className="w-2 h-2 bg-brand-gold rounded-full mr-3"></div>
                    <p className="text-brand-white font-medium font-headline">Focus op conversie</p>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};