import React, { useState } from 'react';
import { Check, HelpCircle } from 'lucide-react';
import { WEBSITE_PACKAGES, MONTHLY_PACKAGES } from '../constants';

export const Pricing: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'websites' | 'monthly'>('websites');

  const packages = activeTab === 'websites' ? WEBSITE_PACKAGES : MONTHLY_PACKAGES;

  return (
    <section id="prijzen" className="py-24 bg-brand-black scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-brand-white mb-6">Investering</h2>
          <p className="text-brand-silver mb-10 font-sans">Transparante prijzen voor websites en maandelijkse groei.</p>
          
          {/* Toggle Switch */}
          <div className="inline-flex bg-brand-dark p-1.5 rounded-lg border border-white/10">
            <button
              onClick={() => setActiveTab('websites')}
              className={`px-8 py-3 rounded text-sm font-headline font-bold transition-all ${
                activeTab === 'websites'
                  ? 'bg-brand-gold text-brand-black shadow-lg'
                  : 'text-brand-silver hover:text-white'
              }`}
            >
              Websites (Eenmalig)
            </button>
            <button
              onClick={() => setActiveTab('monthly')}
              className={`px-8 py-3 rounded text-sm font-headline font-bold transition-all ${
                activeTab === 'monthly'
                  ? 'bg-brand-gold text-brand-black shadow-lg'
                  : 'text-brand-silver hover:text-white'
              }`}
            >
              Marketing & Content (Maandelijks)
            </button>
          </div>
        </div>

        <div className={`grid gap-8 max-w-5xl mx-auto ${activeTab === 'monthly' ? 'md:grid-cols-3' : 'md:grid-cols-2 max-w-4xl'}`}>
          {packages.map((pkg) => (
            <div 
                key={pkg.name} 
                className={`rounded-xl p-8 border ${
                    pkg.isPopular || pkg.isNew
                    ? 'border-brand-gold bg-brand-dark shadow-glow' 
                    : 'border-white/5 bg-brand-dark hover:border-brand-silver/30'
                } flex flex-col transition-transform hover:-translate-y-1 relative`}
            >
              {pkg.isPopular && (
                <div className="absolute top-0 right-0 bg-brand-gold text-brand-black text-[10px] font-headline font-bold px-3 py-1 rounded-bl rounded-tr uppercase tracking-widest">
                    Meest gekozen
                </div>
              )}
              {pkg.isNew && (
                <div className="absolute top-0 right-0 bg-brand-blue text-brand-black text-[10px] font-headline font-bold px-3 py-1 rounded-bl rounded-tr uppercase tracking-widest">
                    Nieuw
                </div>
              )}
              
              <h3 className="text-2xl font-headline font-bold text-brand-white mb-3">{pkg.name}</h3>
              <p className="text-brand-silver text-sm mb-6 h-12 font-sans">{pkg.description}</p>
              
              <div className="mb-8 pb-8 border-b border-white/5">
                {activeTab === 'websites' && <span className="text-brand-silver text-lg font-headline">vanaf </span>}
                <span className="text-4xl font-headline font-bold text-brand-white">€ {pkg.price}</span>
                {pkg.period && <span className="text-brand-silver text-xs block mt-2 font-sans uppercase tracking-wide">{pkg.period}</span>}
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-brand-silver text-sm font-sans">
                        <Check className="w-5 h-5 text-brand-gold mr-3 shrink-0" />
                        {feature}
                    </li>
                ))}
              </ul>

              <a 
                href="#contact" 
                className={`w-full py-4 px-6 rounded-sm font-headline font-bold text-center tracking-wide transition-all ${
                    pkg.isPopular || pkg.isNew
                    ? 'bg-brand-gold text-brand-black hover:bg-white hover:text-black'
                    : 'bg-white text-brand-black hover:bg-brand-silver'
                }`}
              >
                Start met {pkg.name}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
             <a 
                href="https://wa.me/31612345678" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center px-6 py-3 border border-brand-silver/20 rounded-full text-brand-silver hover:text-white hover:border-brand-gold hover:bg-brand-dark transition-all font-sans text-sm"
            >
                <HelpCircle className="w-4 h-4 mr-2" />
                <span>Advies nodig over welk pakket past? App mij.</span>
             </a>
        </div>
      </div>
    </section>
  );
};