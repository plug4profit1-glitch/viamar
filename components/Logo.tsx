import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      {/* Icon */}
      <svg 
        width="48" 
        height="32" 
        viewBox="0 0 100 60" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="mb-1 drop-shadow-md"
      >
        <defs>
          <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5C944" />
            <stop offset="40%" stopColor="#FFFACD" />
            <stop offset="100%" stopColor="#B8860B" />
          </linearGradient>
          <filter id="glow-filter" x="-20%" y="-20%" width="140%" height="140%">
             <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#F5C944" floodOpacity="0.3"/>
          </filter>
        </defs>
        
        {/* Stylized W/V Shape */}
        <path 
            d="M20 10 C 20 10, 35 60, 40 60 C 45 60, 55 25, 55 25" 
            stroke="url(#gold-gradient)" 
            strokeWidth="5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            fill="none"
            filter="url(#glow-filter)"
        />
        <path 
            d="M45 25 C 45 25, 65 60, 70 60 C 75 60, 90 10, 90 10" 
            stroke="url(#gold-gradient)" 
            strokeWidth="5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            fill="none"
            filter="url(#glow-filter)"
        />
      </svg>
      
      {/* Text Wordmark */}
      <span className="font-logo font-bold text-2xl md:text-3xl tracking-[0.2em] bg-gradient-to-b from-[#F5C944] via-[#FFFACD] to-[#B8860B] bg-clip-text text-transparent drop-shadow-sm select-none">
        VIAMAR
      </span>
    </div>
  );
};