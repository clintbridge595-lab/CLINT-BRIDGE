import React from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { projects } from '../data/projects';

export const WorkShowcase: React.FC = () => {
  const topProjects = projects.slice(0, 4);
  const wideProject = projects[4]; // 5th project spans row below

  const handleViewAll = () => {
    window.open(
      'https://wa.me/923112713755?text=Hi%20Client%20Bridge,%20please%20share%20your%20full%20work%20portfolio%20and%20live%20client%20samples.',
      '_blank'
    );
  };

  return (
    <section
      id="work"
      className="py-20 lg:py-28 bg-white border-b border-[#E3E4E4]"
      style={{
        fontFamily: 'Georgia',
        fontStyle: 'italic',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <SectionHeader
          title="Work That Drives Results"
          subtitle="Explore live production websites engineered and deployed by Client Bridge for local and growing enterprises."
          align="center"
          titleStyle={{
            fontFamily: 'Georgia',
            fontSize: '37px',
          }}
          subtitleStyle={{
            fontFamily: 'Times New Roman',
            fontSize: '15px',
          }}
        />

        {/* 2x2 Grid of White Rounded Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {topProjects.map((project) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-3xl p-5 sm:p-6 border border-[#E3E4E4] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Area with Zoom effect */}
              <div className="rounded-2xl overflow-hidden mb-6 h-64 sm:h-72 bg-slate-100 relative">
                <img
                  src={project.image}
                  alt={`${project.title} live preview`}
                  width="600"
                  height="400"
                  className="w-full h-full object-cover photo-grayscale transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Live external indicator */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full text-[11px] font-bold text-[#0F1A14] flex items-center gap-1 shadow-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Visit Site</span>
                  <ExternalLink className="w-3 h-3 text-[#254A34]" />
                </div>
              </div>

              {/* Details & Round Lime Arrow */}
              <div className="flex items-center justify-between gap-4 pt-2">
                <div>
                  {/* Dark green tag pill */}
                  <div className="inline-block bg-[#254A34] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2">
                    {project.category}
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0F1A14] leading-snug group-hover:text-[#254A34] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5F6B64] mt-1 line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Round Lime Arrow button that rotates 45 degrees on hover */}
                <div className="w-12 h-12 rounded-full bg-[#C6FF1A] text-[#0F1A14] shrink-0 flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="w-6 h-6 stroke-[2.5]" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* 5th Project: Spans row below */}
        {wideProject && (
          <a
            href={wideProject.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-white rounded-3xl p-6 sm:p-8 border border-[#E3E4E4] shadow-xs hover:shadow-lg transition-all duration-300 mb-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 rounded-2xl overflow-hidden h-64 sm:h-80 bg-slate-100 relative">
                <img
                  src={wideProject.image}
                  alt={`${wideProject.title} live portal`}
                  width="800"
                  height="450"
                  className="w-full h-full object-cover photo-grayscale transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full text-[11px] font-bold text-[#0F1A14] flex items-center gap-1 shadow-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Visit Site</span>
                  <ExternalLink className="w-3 h-3 text-[#254A34]" />
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <div className="inline-block bg-[#254A34] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                    {wideProject.category}
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#0F1A14] leading-snug group-hover:text-[#254A34] transition-colors mb-3">
                    {wideProject.title}
                  </h3>
                  <p className="text-sm text-[#5F6B64] leading-relaxed mb-6">
                    {wideProject.description}
                  </p>
                  <div className="text-xs font-semibold text-[#254A34] flex items-center gap-2 mb-6">
                    <span className="w-2 h-2 rounded-full bg-[#1FA866]" />
                    <span>Live in Production</span>
                    <span>·</span>
                    <span className="font-mono text-slate-500">mrbeefburgrz.com</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[#E3E4E4]">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#254A34]">
                    Explore Live Platform
                  </span>
                  <div className="w-12 h-12 rounded-full bg-[#C6FF1A] text-[#0F1A14] flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight className="w-6 h-6 stroke-[2.5]" />
                  </div>
                </div>
              </div>
            </div>
          </a>
        )}

        {/* Below Grid: Dark Pill "View All Work" */}
        <div className="text-center">
          <button
            onClick={handleViewAll}
            className="group inline-flex items-center gap-2.5 bg-[#254A34] hover:bg-[#1F3B2B] text-white text-sm font-semibold py-3.5 px-8 rounded-full shadow-md transition-all duration-200 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6FF1A]"
          >
            <span>View All Live Work</span>
            <span className="w-5 h-5 rounded-full bg-[#C6FF1A] text-[#0F1A14] flex items-center justify-center text-xs font-bold transition-transform duration-200 group-hover:translate-x-1">
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
