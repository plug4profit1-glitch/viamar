import React from 'react';
import { ExternalLink } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../constants';

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-brand-black scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-brand-white mb-4">Mijn Werk</h2>
          <p className="text-brand-silver max-w-2xl mx-auto font-sans">
            Ik bouw conversiegerichte websites voor dienstverleners, salons en adviesbedrijven.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_ITEMS.map((item) => (
            <div key={item.id} className="group bg-brand-dark rounded-xl overflow-hidden border border-white/5 hover:border-brand-gold/50 transition-all duration-300 hover:shadow-glow flex flex-col">
              <div className="h-56 overflow-hidden relative">
                <img 
                    src={`https://picsum.photos/seed/${item.imageSeed}/800/600`} 
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent opacity-90"></div>
                <div className="absolute bottom-4 left-4">
                     <span className="inline-block px-3 py-1 bg-brand-gold text-brand-black text-xs font-headline font-bold uppercase tracking-wider rounded-sm">
                        {item.category}
                     </span>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-headline font-bold text-brand-white mb-2 group-hover:text-brand-gold transition-colors">
                    {item.title}
                </h3>
                <p className="text-brand-silver text-sm mb-8 flex-grow font-sans leading-relaxed">
                    {item.description}
                </p>
                <a 
                    href={item.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border border-brand-silver/30 rounded-sm text-sm font-headline font-bold text-brand-silver hover:text-brand-black hover:bg-brand-gold hover:border-brand-gold transition-all"
                >
                    Bekijk website <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};