import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="over" className="py-24 bg-brand-black border-t border-white/5 scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-headline font-bold text-brand-white">Over Viamar</h2>
        </div>
        
        <div className="bg-brand-dark p-10 md:p-14 rounded-xl border border-white/5 relative overflow-hidden flex flex-col md:flex-row gap-12 items-start">
            {/* Visual element */}
            <div className="shrink-0 mx-auto md:mx-0">
                <div className="w-40 h-40 rounded-full bg-brand-black flex items-center justify-center border border-brand-gold/20 shadow-glow relative">
                    <span className="text-6xl font-headline text-brand-gold font-bold relative z-10">V</span>
                    <div className="absolute inset-0 border border-brand-gold/10 rounded-full scale-110"></div>
                </div>
            </div>

            <div className="text-left space-y-6">
                <p className="text-xl text-brand-white font-headline font-medium leading-relaxed">
                    "Viamar is gebouwd op één simpel idee: een website moet geen digitale visitekaart zijn, maar een motor die klanten aantrekt."
                </p>
                <div className="w-12 h-0.5 bg-brand-gold/50"></div>
                <p className="text-brand-silver font-sans leading-relaxed">
                    We combineren ondernemerschap, marketing en slim design om websites te maken die meteen duidelijk zijn, snel laden en vooral omzet opleveren. Geen gedoe, geen jargon, geen dure agency-drama’s – gewoon resultaat.
                </p>
                <p className="text-brand-silver font-sans leading-relaxed">
                    Viamar denkt verder dan pixels. We kijken naar jouw verdienmodel, doelgroep en marktpositie, zodat je website niet alleen mooi oogt, maar ook strategisch werkt.
                </p>
                <p className="text-brand-silver font-sans leading-relaxed">
                    Onze klanten zijn ondernemers die vooruit willen. Mensen die geen 50 vergaderingen willen voordat er iets gebeurt, maar een partner die meedenkt, doorpakt en levert.
                </p>
                <p className="font-headline font-bold text-brand-gold pt-4 text-lg">
                    Viamar: websites die werken, zonder omwegen.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};