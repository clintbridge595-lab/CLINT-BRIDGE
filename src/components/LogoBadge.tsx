import React from 'react';
import logoImage from '../assets/images/regenerated_image_1790813709995.jpg';

interface LogoBadgeProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const LogoBadge: React.FC<LogoBadgeProps> = ({
  className = '',
  size = 'md',
  showText = true,
}) => {
  const sizeMap = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Clean white rounded badge/container for Clint Bridge logo */}
      <div className={`bg-white rounded-2xl p-1 shadow-sm border border-[#E3E4E4] flex items-center justify-center shrink-0 ${sizeMap[size]}`}>
        <img
          src={logoImage}
          alt="Clint Bridge Agency Logo"
          className="w-full h-full object-contain rounded-xl drop-shadow-xs"
          width="48"
          height="48"
        />
      </div>
      {showText && (
        <div className="flex flex-col justify-center">
          <span
            className="font-display font-extrabold tracking-tight leading-tight"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '17px',
              color: '#1b2a1c',
            }}
          >
            CLINT <span className="text-[#254A34]">BRIDGE</span>
          </span>
          <span
            className="uppercase font-semibold tracking-[0.2em] text-[#5F6B64]"
            style={{
              fontSize: '9px',
            }}
          >
            Digital Agency
          </span>
        </div>
      )}
    </div>
  );
};
