import React, { useState } from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    window.open(
      'https://wa.me/923112713755?text=Hi%20Client%20Bridge,%20I%20am%20interested%20in%20discussing%20a%20project.',
      '_blank'
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip on hover */}
      {showTooltip && (
        <div className="hidden sm:block bg-[#1F3B2B] text-white text-xs font-semibold py-1.5 px-3.5 rounded-full shadow-lg border border-[#254A34] animate-in fade-in slide-in-from-right-2 duration-150">
          Chat on WhatsApp <span className="text-[#C6FF1A]">0311-2713755</span>
        </div>
      )}

      {/* Floating Button with pulsing ring */}
      <button
        onClick={handleClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative w-14 h-14 rounded-full bg-[#1FA866] hover:bg-[#188c54] text-white shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#C6FF1A]/50 group"
        aria-label="Direct WhatsApp Chat with Client Bridge"
      >
        {/* Soft pulse glow ring */}
        <span className="absolute -inset-1 rounded-full bg-[#1FA866] opacity-35 animate-ping pointer-events-none" />

        {/* WhatsApp Icon */}
        <svg className="w-7 h-7 fill-current relative z-10" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>

        {/* Small badge */}
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#C6FF1A] border-2 border-[#1FA866]" />
      </button>
    </div>
  );
};
