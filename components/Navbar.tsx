import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Diensten', href: '#diensten' },
    { name: 'Werkwijze', href: '#werkwijze' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Prijzen', href: '#prijzen' },
    { name: 'Over Viamar', href: '#over' },
  ];

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (href === '#') return;

    const element = document.querySelector(href);
    if (element) {
      // Offset for fixed header (24 * 4 = 96px)
      const headerOffset = 96;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-black/90 backdrop-blur-md border-b border-brand-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex-shrink-0 cursor-pointer" onClick={handleScrollToTop}>
            <div className="scale-75 origin-left">
                <Logo />
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-brand-silver hover:text-brand-gold px-3 py-2 text-sm font-headline font-medium transition-colors tracking-wide cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="bg-brand-gold text-brand-black px-6 py-2.5 rounded-sm text-sm font-headline font-bold hover:bg-white transition-all transform hover:scale-105 shadow-glow cursor-pointer"
              >
                Gratis Advies
              </a>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-silver hover:text-white hover:bg-brand-dark focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-black border-b border-brand-dark">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-brand-silver hover:text-brand-gold block px-3 py-2 text-base font-headline font-medium cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="text-brand-gold font-headline font-bold block px-3 py-2 text-base cursor-pointer"
            >
              Gratis Advies aanvragen
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
