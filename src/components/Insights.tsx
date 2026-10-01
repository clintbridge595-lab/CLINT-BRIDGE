import React, { useState } from 'react';
import { ArrowUpRight, X, BookOpen } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { insights, InsightItem } from '../data/insights';
import { getAssetUrl } from '../utils/asset';

export const Insights: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<InsightItem | null>(null);

  return (
    <section
      className="bg-[#254A34] text-white py-20 lg:py-28 border-b border-[#1F3B2B]"
      style={{
        fontFamily: 'Georgia',
        fontStyle: 'italic',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <SectionHeader
          title="Our Latest News & Insights"
          subtitle="Tactical blueprints on conversion design, local map rankings, and direct sales channels in Pakistan."
          align="center"
          isDark={true}
          titleStyle={{
            fontFamily: 'Georgia',
            fontWeight: 'normal',
            fontSize: '37px',
          }}
          subtitleStyle={{
            fontFamily: 'Times New Roman',
            fontSize: '16px',
            color: '#ffffff',
          }}
        />

        {/* 3 Insights Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedArticle(item)}
              className="group bg-[#31503D] rounded-3xl p-6 border border-[#3F634E] hover:border-[#C6FF1A]/50 transition-all duration-300 flex flex-col justify-between cursor-pointer shadow-sm hover:shadow-lg hover:-translate-y-1"
            >
              <div>
                {/* Grayscale Image */}
                <div className="rounded-2xl overflow-hidden mb-5 h-48 bg-slate-900/40">
                  <img
                    src={item.image}
                    alt={item.title}
                    width="400"
                    height="240"
                    className="w-full h-full object-cover photo-grayscale group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Lime Category Tag */}
                <span className="text-xs uppercase font-extrabold tracking-wider text-[#C6FF1A]">
                  {item.category}
                </span>

                <h3 className="font-display text-xl font-bold text-white mt-2 mb-3 leading-snug group-hover:text-[#C6FF1A] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-2 mb-6">
                  {item.excerpt}
                </p>
              </div>

              {/* Lime "Read More ->" link */}
              <div className="pt-2 border-t border-[#3F634E] flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#C6FF1A] group-hover:underline flex items-center gap-1">
                  Read More <span>→</span>
                </span>
                <span className="text-[11px] font-mono text-slate-400">{item.readTime}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-white text-[#0F1A14] w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-black transition-colors"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold uppercase tracking-wider text-[#254A34]">
              {selectedArticle.category}
            </span>

            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0F1A14] mt-2 mb-4 leading-snug">
              {selectedArticle.title}
            </h3>

            <div className="rounded-2xl overflow-hidden mb-6 h-56 bg-slate-100">
              <img
                src={getAssetUrl(selectedArticle.image)}
                alt={selectedArticle.title}
                width="600"
                height="300"
                className="w-full h-full object-cover photo-grayscale"
              />
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#5F6B64] leading-relaxed">
              {selectedArticle.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#E3E4E4] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-xs text-slate-500">
                Want to implement this strategy for your business?
              </span>
              <a
                href={`https://wa.me/923112713755?text=${encodeURIComponent(
                  `Hi Client Bridge, I read your article "${selectedArticle.title}" and would like to discuss this for my business.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#254A34] text-white text-xs font-bold py-2.5 px-5 rounded-full hover:bg-[#1F3B2B] transition-colors"
              >
                <span>Discuss on WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C6FF1A]" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
