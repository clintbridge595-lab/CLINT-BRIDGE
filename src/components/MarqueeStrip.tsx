import React from 'react';

interface MarqueeStripProps {
  items?: string[];
  className?: string;
  speed?: 'normal' | 'fast';
}

const defaultMarqueeItems = [
  'Content Marketing',
  'Social Media Marketing',
  'Search Engine Optimization',
  'Website Design & 3D Web',
  'Brand Identity',
  'Google Business Profile',
  'WhatsApp Marketing',
  'E-commerce Development',
];

export const MarqueeStrip: React.FC<MarqueeStripProps> = ({
  items = defaultMarqueeItems,
  className = '',
}) => {
  // Duplicate array 3 times for a seamless infinite loop
  const displayItems = [...items, ...items, ...items];

  return (
    <div
      className={`w-full text-white overflow-hidden border-y border-[#1F3B2B] select-none flex items-center ${className}`}
      style={{
        height: '47.3333px',
        fontFamily: 'Georgia',
        fontStyle: 'italic',
        backgroundColor: '#264b23',
        color: '#ffffff',
      }}
      aria-label="Agency capabilities ticker"
    >
      <div className="flex w-max animate-marquee items-center gap-10">
        {displayItems.map((item, index) => (
          <div key={index} className="flex items-center whitespace-nowrap">
            <span className="text-sm md:text-base font-bold tracking-wider uppercase text-white/95">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
