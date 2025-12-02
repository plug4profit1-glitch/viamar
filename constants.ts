import { PackageItem, PortfolioItem, ProcessStep } from './types';

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: '1',
    title: 'Plug4Profit',
    category: 'SaaS / Startup',
    url: 'https://plug4profit1.online',
    description: 'Startup landingspagina voor een EV-platform.',
    imageSeed: 101
  },
  {
    id: '2',
    title: 'Trimsalon Maud',
    category: 'Lokale Dienstverlener',
    url: 'https://trimsalonmaud.nl',
    description: 'Conversiegerichte website voor een lokale trimsalon.',
    imageSeed: 102
  },
  {
    id: '3',
    title: 'Gaslichtadvies',
    category: 'Leadgeneratie',
    url: 'https://gaslichtadvies.com',
    description: 'Advies website gefocust op het genereren van leads.',
    imageSeed: 103
  }
];

export const WEBSITE_PACKAGES: PackageItem[] = [
  {
    name: 'Starter Site',
    price: 495,
    period: 'eenmalig',
    description: 'Perfect voor zzp\'ers die snel online willen zijn.',
    features: [
      'One-pager (homepagina met alle info)',
      'Tot 5 secties (diensten, over, contact)',
      'Mobielvriendelijk design',
      'Contactformulier + WhatsApp-link',
      'Basis-SEO (titels, snelheid)'
    ]
  },
  {
    name: 'Groei Site',
    price: 995,
    period: 'eenmalig',
    description: 'Voor bedrijven die willen groeien en vindbaar willen zijn.',
    isPopular: true,
    features: [
      'Meerdere pagina\'s (home, diensten, blog)',
      'Strategische structuur voor vindbaarheid',
      'Blog / nieuwssectie',
      'Integratie social media / agenda',
      'Basis advies over marketing funnel'
    ]
  }
];

export const MONTHLY_PACKAGES: PackageItem[] = [
  {
    name: 'Viamar Social Start',
    price: 199,
    period: 'per maand',
    description: 'Zichtbaarheid zonder dat het je tijd kost.',
    features: [
      'Wekelijkse posts',
      'Contentkalender',
      'Social media setup & branding',
      'Maandelijkse rapportage'
    ]
  },
  {
    name: 'Viamar Growth',
    price: 499,
    period: 'per maand',
    description: 'Serieuze groei met professionele content.',
    isPopular: true,
    features: [
      'Dagelijkse/Wekelijkse content mix',
      'Reels & Short-form video',
      'Community management',
      'Groei strategie & analyse',
      'Tekst & Visuele creatie'
    ]
  },
  {
    name: 'Viamar Full Service',
    price: 899,
    period: 'per maand',
    description: 'Het complete pakket: Website + Socials + Content.',
    isNew: true,
    features: [
      'Website onderhoud & optimalisatie',
      'Volledig social media beheer',
      'Cinematische video’s & Ads',
      'Branding visuals & Copywriting',
      'Strategisch partnerschap'
    ]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Korte Intake (30 min)',
    description: 'We bespreken je bedrijf, doel en gewenste klanten via een call.'
  },
  {
    number: '02',
    title: 'Ontwerp + Tekst',
    description: 'Ik schrijf de teksten, maak de structuur en het ontwerp. Jij geeft feedback.'
  },
  {
    number: '03',
    title: 'Livegang + Optimalisatie',
    description: 'We zetten de site live op jouw domein en ik zorg dat alles technisch werkt.'
  }
];