import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-black">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-brand-gold/30 rounded-full mix-blend-screen filter blur-[120px]"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-brand-blue/20 rounded-full mix-blend-screen filter blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 text-brand-gold text-sm font-headline font-medium mb-8">
            <span className="flex h-2 w-2 rounded-full bg-brand-gold mr-2 animate-pulse"></span>
            Nu beschikbaar voor nieuwe projecten
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold text-brand-white tracking-tight mb-6 leading-tight">
          Websites die wél <br/>
          <span className="text-brand-gold drop-shadow-lg">
            klanten opleveren
          </span>
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-xl text-brand-silver font-sans leading-relaxed mb-10">
          Ik bouw complete websites voor zzp’ers en kleine bedrijven – inclusief teksten, design en basis-SEO. 
          Binnen een paar dagen online en klaar om leads te genereren.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-headline font-bold rounded-sm text-brand-black bg-brand-gold hover:bg-white transition-all shadow-glow transform hover:-translate-y-1"
            >
                Plan een gratis adviescall
                <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
                href="#prijzen" 
                className="inline-flex items-center justify-center px-8 py-4 border border-brand-silver/30 text-lg font-headline font-medium rounded-sm text-brand-white hover:bg-brand-white/10 transition-all hover:border-brand-gold/50"
            >
                Bekijk pakketten
            </a>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-sm text-brand-silver font-sans">
            <div className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-brand-gold mr-2" />
                <span>Compleet: ontwerp, tekst & techniek</span>
            </div>
            <div className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-brand-gold mr-2" />
                <span>Gericht op afspraken en omzet</span>
            </div>
            <div className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-brand-gold mr-2" />
                <span>Geen gedoe met systemen</span>
            </div>
        </div>
      </div>
    </section>
  );
};