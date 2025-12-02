import React, { useState } from 'react';
import { Send, MessageCircle } from 'lucide-react';
import { Logo } from './Logo';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    situation: 'geen-website',
    goal: '',
    budget: '500-1000'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to send email would go here
    alert("Bedankt voor je aanvraag! Ik neem binnen 24 uur contact op.");
  };

  return (
    <section id="contact" className="py-24 bg-brand-black relative scroll-mt-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-3xl md:text-5xl font-headline font-bold text-brand-white mb-6">Start je project</h2>
            <p className="text-brand-silver mb-12 font-sans text-lg">
              Vul het formulier in en ontvang binnen 24 uur een vrijblijvend voorstel. 
              Liever direct contact?
            </p>

            <a 
              href="https://wa.me/31612345678" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center justify-center w-full md:w-auto px-8 py-4 bg-[#25D366] text-white font-headline font-bold rounded-sm hover:bg-[#20bd5a] transition-all transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(37,211,102,0.3)] mb-16"
            >
              <MessageCircle className="w-5 h-5 mr-3" />
              Direct appen via WhatsApp
            </a>

            <div className="border-t border-white/5 pt-12">
                <Logo className="items-start" />
                <p className="text-gray-600 mt-6 text-sm font-sans">
                    © {new Date().getFullYear()} Viamar. Alle rechten voorbehouden.
                </p>
                <div className="mt-4 flex space-x-6 text-sm text-gray-600 font-sans">
                    <a href="#" className="hover:text-brand-gold transition-colors">Privacybeleid</a>
                    <a href="#" className="hover:text-brand-gold transition-colors">Algemene Voorwaarden</a>
                </div>
            </div>
          </div>

          <div className="bg-brand-dark p-10 rounded-xl border border-white/5 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div>
                <label className="block text-sm font-bold font-headline text-brand-silver mb-2 uppercase tracking-wide">Naam</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-brand-black border border-brand-silver/20 rounded-sm px-4 py-4 text-brand-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors font-sans placeholder-gray-700"
                  placeholder="Jouw naam"
                />
              </div>

              <div>
                <label className="block text-sm font-bold font-headline text-brand-silver mb-2 uppercase tracking-wide">Bedrijfsnaam</label>
                <input 
                  type="text" 
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-brand-black border border-brand-silver/20 rounded-sm px-4 py-4 text-brand-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors font-sans placeholder-gray-700"
                  placeholder="Je bedrijfsnaam"
                />
              </div>

              <div>
                <label className="block text-sm font-bold font-headline text-brand-silver mb-2 uppercase tracking-wide">Huidige situatie</label>
                <select 
                  name="situation"
                  value={formData.situation}
                  onChange={handleChange}
                  className="w-full bg-brand-black border border-brand-silver/20 rounded-sm px-4 py-4 text-brand-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors appearance-none font-sans"
                >
                  <option value="geen-website">Ik heb nog geen website</option>
                  <option value="verouderd">Mijn website is verouderd</option>
                  <option value="nieuwe-business">Ik start een nieuwe business</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold font-headline text-brand-silver mb-2 uppercase tracking-wide">Waar heb je de website voor nodig?</label>
                <input 
                  type="text" 
                  name="goal"
                  required
                  value={formData.goal}
                  onChange={handleChange}
                  className="w-full bg-brand-black border border-brand-silver/20 rounded-sm px-4 py-4 text-brand-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors font-sans placeholder-gray-700"
                  placeholder="Bijv. meer afspraken, professioneler imago..."
                />
              </div>

              <div>
                <label className="block text-sm font-bold font-headline text-brand-silver mb-2 uppercase tracking-wide">Budget Indicatie</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { val: '<500', label: '< €500' },
                    { val: '500-1000', label: '€500 - €1000' },
                    { val: '1000+', label: '€1000+' }
                  ].map((opt) => (
                    <button
                      key={opt.val}
                      type="button"
                      onClick={() => setFormData({...formData, budget: opt.val})}
                      className={`px-2 py-3 rounded-sm text-sm font-bold font-headline border transition-all ${
                        formData.budget === opt.val
                        ? 'bg-brand-gold text-brand-black border-brand-gold'
                        : 'bg-brand-black text-brand-silver border-brand-silver/20 hover:border-brand-silver/50'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <button 
                type="submit"
                className="w-full flex items-center justify-center px-6 py-4 bg-brand-white text-brand-black font-headline font-bold rounded-sm hover:bg-brand-silver transition-all transform hover:scale-[1.01] shadow-lg mt-6 tracking-wide"
              >
                Ontvang voorstel binnen 24 uur
                <Send className="ml-2 w-5 h-5" />
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};