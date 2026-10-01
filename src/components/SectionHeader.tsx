import React from 'react';

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  isDark?: boolean;
  className?: string;
  titleStyle?: React.CSSProperties;
  subtitleStyle?: React.CSSProperties;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  title,
  subtitle,
  align = 'center',
  isDark = false,
  className = '',
  titleStyle,
  subtitleStyle,
}) => {
  const isCentered = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCentered ? 'text-center max-w-2xl mx-auto' : 'max-w-xl'} ${className}`}>
      {/* Signature tiny lime+dark double-circle badge - rendered only when label is present */}
      {label && (
        <div className={`inline-flex items-center gap-2 mb-3.5 ${isCentered ? 'justify-center' : 'justify-start'}`}>
          <span className="relative flex h-3.5 w-3.5 items-center justify-center">
            <span className="absolute h-3.5 w-3.5 rounded-full bg-[#C6FF1A] opacity-80" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-[#254A34]" />
          </span>
          <span
            className={`text-xs md:text-sm font-semibold tracking-wider uppercase ${
              isDark ? 'text-[#C6FF1A]' : 'text-[#254A34]'
            }`}
          >
            {label}
          </span>
        </div>
      )}

      {/* Main Heading */}
      <h2
        className={`font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] ${
          isDark ? 'text-white' : 'text-[#0F1A14]'
        }`}
        style={titleStyle}
      >
        {title}
      </h2>

      {/* Subtitle prose */}
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            isDark ? 'text-slate-300' : 'text-[#5F6B64]'
          }`}
          style={subtitleStyle}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
