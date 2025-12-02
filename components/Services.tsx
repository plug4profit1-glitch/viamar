import React from 'react';
import { Smartphone, PenTool, Layers } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="diensten" className="py-24 bg-brand-black scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-brand-white mb-4">Onze Diensten</h2>
          <p className="text-brand-silver max-w-2xl mx-auto font-sans">
            Viamar is meer dan een webbouwer. Wij zijn jouw complete partner voor online groei.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Service 1: Social Media */}
          <div className="bg-brand-dark rounded-xl p-8 border border-white/5 hover:border-brand-gold/30 transition-all group hover:-translate-y-1">
            <div className="w-14 h-14 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-8 group-hover:bg-brand-gold/20 transition-colors">
              <Smartphone className="w-7 h-7 text-brand-gold" />
            </div>
            <h3 className="text-xl font-headline font-bold text-brand-white mb-4">Social Media Beheer</h3>
            <p className="text-brand-silver mb-6 leading-relaxed font-sans text-sm">
              Social media kost ondernemers bergen tijd. Viamar neemt het volledig van je over. We maken je kanalen consistent, professioneel en actief zichtbaar.
            </p>
            <ul className="space-y-3 text-sm text-brand-silver font-sans">
              <li className="flex items-center"><span className="w-1 h-1 bg-brand-gold rounded-full mr-3"></span>Contentkalender & Planning</li>
              <li className="flex items-center"><span className="w-1 h-1 bg-brand-gold rounded-full mr-3"></span>Reels & Short-form video's</li>
              <li className="flex items-center"><span className="w-1 h-1 bg-brand-gold rounded-full mr-3"></span>Community Management</li>
            </ul>
          </div>

          {/* Service 2: Content Creatie */}
          <div className="bg-brand-dark rounded-xl p-8 border border-white/5 hover:border-brand-gold/30 transition-all group hover:-translate-y-1">
            <div className="w-14 h-14 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-8 group-hover:bg-brand-gold/20 transition-colors">
              <PenTool className="w-7 h-7 text-brand-gold" />
            </div>
            <h3 className="text-xl font-headline font-bold text-brand-white mb-4">Content Creatie</h3>
            <p className="text-brand-silver mb-6 leading-relaxed font-sans text-sm">
              Sterke content is brandstof voor elk bedrijf. Wij leveren complete contentcreatie, van professionele teksten tot cinematische video's.
            </p>
            <ul className="space-y-3 text-sm text-brand-silver font-sans">
              <li className="flex items-center"><span className="w-1 h-1 bg-brand-gold rounded-full mr-3"></span>Copywriting & Blogs</li>
              <li className="flex items-center"><span className="w-1 h-1 bg-brand-gold rounded-full mr-3"></span>Branding Visuals</li>
              <li className="flex items-center"><span className="w-1 h-1 bg-brand-gold rounded-full mr-3"></span>AI-geoptimaliseerde graphics</li>
            </ul>
          </div>

          {/* Service 3: Combipakket */}
          <div className="bg-gradient-to-br from-brand-dark to-[#1a1a1c] rounded-xl p-8 border border-brand-blue/30 shadow-lg shadow-brand-blue/5 hover:shadow-brand-blue/10 transition-all relative overflow-hidden group hover:-translate-y-1">
            <div className="absolute top-0 right-0 bg-brand-blue text-brand-black text-xs font-headline font-bold px-3 py-1 rounded-bl-lg tracking-wider">
                ALL-IN-ONE
            </div>
            <div className="w-14 h-14 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-8">
              <Layers className="w-7 h-7 text-brand-blue" />
            </div>
            <h3 className="text-xl font-headline font-bold text-brand-white mb-4">Het Combinatiepakket</h3>
            <p className="text-brand-silver mb-6 leading-relaxed font-sans text-sm">
              Dit is je ultieme pakket. Jij focust op je bedrijf, wij zorgen voor je website, doorlopend social media beheer én wekelijkse content creatie.
            </p>
            <ul className="space-y-3 text-sm text-brand-silver font-sans">
              <li className="flex items-center"><span className="w-1 h-1 bg-brand-blue rounded-full mr-3"></span>Alles vanuit één partner</li>
              <li className="flex items-center"><span className="w-1 h-1 bg-brand-blue rounded-full mr-3"></span>Elke maand groei</li>
              <li className="flex items-center"><span className="w-1 h-1 bg-brand-blue rounded-full mr-3"></span>Geen losse freelancers meer</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};