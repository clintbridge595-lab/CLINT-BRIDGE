import React from 'react';
import { ArrowUpRight, ExternalLink, Check } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { projects } from '../data/projects';
import { getAssetUrl } from '../utils/asset';

export const WorkShowcase: React.FC = () => {
  const topProjects = projects.slice(0, 4);
  const wideProject = projects[4]; // 5th project spans across the bottom row

  const handleViewAll = () => {
    window.open(
      'https://wa.me/923112713755?text=Hi%20CLINT%20BRIDGE,%20please%20share%20your%20full%20work%20portfolio%20and%20live%20client%20samples.',
      '_blank'
    );
  };

  return (
    <section id="work" className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#E3E4E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <SectionHeader
          title="Work That Drives Real Revenue"
          subtitle="Explore live production websites engineered and deployed by CLINT BRIDGE for ambitious local and growing enterprises."
          align="center"
        />

        {/* 2x2 Grid of In-Depth Project Case Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {topProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E3E4E4] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Area with Link */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-2xl overflow-hidden mb-5 h-60 sm:h-64 bg-slate-100 relative group/img focus:outline-none focus-visible:ring-2 focus-visible:ring-[#254A34]"
                  aria-label={`Visit live site for ${project.title}`}
                >
                  <img
                    src={getAssetUrl(project.image)}
                    alt={`${project.title} live interface preview`}
                    width="600"
                    height="400"
                    className="w-full h-full object-cover photo-grayscale transition-transform duration-500 group-hover/img:scale-105"
                    loading="lazy"
                  />
                  {/* Floating Visit Pill on hover */}
                  <div className="absolute top-3.5 right-3.5 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-bold text-[#0F1A14] flex items-center gap-1.5 shadow-sm opacity-90 group-hover/img:opacity-100 transition-opacity">
                    <span>Visit Live Site</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#254A34]" />
                  </div>
                </a>

                {/* Metadata Row: Category and Live Domain */}
                <div className="flex items-center gap-2 text-xs font-semibold text-[#5F6B64] mb-2 font-sans">
                  <span className="text-[#254A34] uppercase tracking-wider">{project.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono">{project.liveDomain}</span>
                </div>

                {/* Project Title */}
                <h3 className="font-serif italic font-bold text-xl sm:text-2xl text-[#0F1A14] leading-snug group-hover:text-[#254A34] transition-colors mb-2.5">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline focus:outline-none"
                  >
                    {project.title}
                  </a>
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#5F6B64] leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Key Features List */}
                <div className="space-y-1.5 mb-5 pb-5 border-b border-slate-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0F1A14] block mb-1">
                    Key Deliverables:
                  </span>
                  {project.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#0F1A14]/85">
                      <Check className="w-3.5 h-3.5 text-[#254A34] shrink-0 stroke-[2.5]" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Contribution & Live Link */}
              <div>
                <div className="mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#5F6B64] block">
                    Our Contribution:
                  </span>
                  <span className="text-xs font-medium text-[#254A34]">
                    {project.contribution}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#254A34] hover:text-[#1F3B2B] transition-colors"
                  >
                    <span>Visit Live Website</span>
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </a>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#C6FF1A] text-[#0F1A14] flex items-center justify-center shadow-xs transition-transform duration-300 group-hover:rotate-45"
                    aria-label={`Open ${project.title}`}
                  >
                    <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 5th Project: Wide Featured Case Study (Mr Beef Burgrz) */}
        {wideProject && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#E3E4E4] shadow-xs hover:shadow-lg transition-all duration-300 mb-12 group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Image Column */}
              <div className="lg:col-span-7">
                <a
                  href={wideProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-2xl overflow-hidden h-64 sm:h-80 bg-slate-100 relative group/img focus:outline-none focus-visible:ring-2 focus-visible:ring-[#254A34]"
                  aria-label={`Visit live site for ${wideProject.title}`}
                >
                  <img
                    src={getAssetUrl(wideProject.image)}
                    alt={`${wideProject.title} live portal`}
                    width="800"
                    height="450"
                    className="w-full h-full object-cover photo-grayscale transition-transform duration-500 group-hover/img:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-bold text-[#0F1A14] flex items-center gap-1.5 shadow-sm">
                    <span>Visit Live Portal</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#254A34]" />
                  </div>
                </a>
              </div>

              {/* Details Column */}
              <div className="lg:col-span-5 flex flex-col justify-between font-sans">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#5F6B64] mb-2">
                    <span className="text-[#254A34] uppercase tracking-wider">{wideProject.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono">{wideProject.liveDomain}</span>
                  </div>

                  <h3 className="font-serif italic font-bold text-2xl sm:text-3xl text-[#0F1A14] leading-snug group-hover:text-[#254A34] transition-colors mb-3">
                    <a
                      href={wideProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline focus:outline-none"
                    >
                      {wideProject.title}
                    </a>
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5F6B64] leading-relaxed mb-4">
                    {wideProject.description}
                  </p>

                  <div className="space-y-1.5 mb-5 pb-5 border-b border-slate-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0F1A14] block mb-1">
                      Key Deliverables:
                    </span>
                    {wideProject.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#0F1A14]/85">
                        <Check className="w-3.5 h-3.5 text-[#254A34] shrink-0 stroke-[2.5]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mb-6">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#5F6B64] block">
                      Our Contribution:
                    </span>
                    <span className="text-xs font-medium text-[#254A34]">
                      {wideProject.contribution}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <a
                    href={wideProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#254A34] hover:text-[#1F3B2B]"
                  >
                    <span>Visit Live Production Site</span>
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </a>

                  <a
                    href={wideProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-[#C6FF1A] text-[#0F1A14] flex items-center justify-center shadow-xs transition-transform duration-300 group-hover:rotate-45"
                    aria-label={`Open ${wideProject.title}`}
                  >
                    <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* View All Work Action */}
        <div className="text-center font-sans">
          <button
            onClick={handleViewAll}
            className="group inline-flex items-center gap-2.5 bg-[#254A34] hover:bg-[#1F3B2B] text-white text-sm font-semibold py-3.5 px-8 rounded-full shadow-md transition-all duration-200 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6FF1A]"
          >
            <span>Request Full Portfolio on WhatsApp</span>
            <span className="w-5 h-5 rounded-full bg-[#C6FF1A] text-[#0F1A14] flex items-center justify-center text-xs font-bold transition-transform duration-200 group-hover:translate-x-1">
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
