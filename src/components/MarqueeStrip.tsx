import React from 'react';

interface MarqueeStripProps {
  items?: string[];
  className?: string;
  speed?: 'normal' | 'fast';
}

const defaultMarqueeItems = [
  'Website Design & Development',
  'Search Engine Optimization',
  'Brand Identity & Logo Design',
  'Google Business Profile',
  'WhatsApp Funnels & Automation',
  'High-Performance Web Platforms',
  'E-commerce Solutions',
  'High-Speed Cloud Hosting',
];

export const MarqueeStrip: React.FC<MarqueeStripProps> = ({
  items = defaultMarqueeItems,
  className = '',
}) => {
  const displayItems = [...items, ...items, ...items];

  return (
    <div
      className={`w-full bg-[#1F3B2B] text-white overflow-hidden border-y border-[#254A34] select-none py-3 font-sans ${className}`}
      aria-label="Agency capabilities ticker"
    >
      <div className="flex w-max animate-marquee items-center gap-10">
        {displayItems.map((item, index) => (
          <div key={index} className="flex items-center gap-6 whitespace-nowrap">
            <span className="text-xs md:text-sm font-semibold tracking-widest uppercase text-white/90">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6FF1A]" />
          </div>
        ))}
      </div>
    </div>
  );
};
