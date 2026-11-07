import React from 'react';
import { SectionHeader } from './SectionHeader';
import { teamMembers } from '../data/team';
import { getAssetUrl } from '../utils/asset';

export const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 lg:py-28 bg-white border-b border-[#E3E4E4] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <SectionHeader
          title="Meet Our Dedicated Karachi Team"
          subtitle="A focused 4-person multidisciplinary team delivering UI/UX design, technical frontend engineering, and local search dominance."
          align="center"
        />

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => {
            const isLead = member.isLead;

            return (
              <div
                key={member.id}
                className={`rounded-3xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between ${
                  isLead
                    ? 'bg-[#254A34] text-white shadow-xl border-2 border-[#C6FF1A]'
                    : 'bg-white text-[#0F1A14] border border-[#E3E4E4] shadow-xs hover:shadow-md'
                }`}
              >
                <div>
                  {/* Photo area */}
                  <div className="relative rounded-2xl overflow-hidden mb-6 h-64 sm:h-72 bg-slate-100">
                    <img
                      src={getAssetUrl(member.image)}
                      alt={member.name}
                      width="350"
                      height="400"
                      className="w-full h-full object-cover photo-grayscale transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                    />

                    {/* Social icon column on the photo's right edge */}
                    <div className="absolute top-3 right-3 bg-[#C6FF1A] rounded-full py-2 px-1.5 flex flex-col items-center gap-2.5 shadow-md">
                      {/* Facebook */}
                      <a
                        href={member.socials?.facebook || 'https://www.facebook.com/profile.php?id=61595149822424'}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook Profile"
                        className="text-[#0F1A14] hover:opacity-75 transition-opacity"
                      >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                        </svg>
                      </a>

                      {/* Instagram */}
                      <a
                        href={member.socials?.instagram || 'https://www.instagram.com/clint_bridge_/'}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram Profile"
                        className="text-[#0F1A14] hover:opacity-75 transition-opacity"
                      >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  <h3
                    className={`font-serif italic text-xl font-bold leading-snug ${
                      isLead ? 'text-white' : 'text-[#0F1A14]'
                    }`}
                  >
                    {member.name}
                  </h3>

                  <p
                    className={`text-xs font-semibold uppercase tracking-wider mt-1 mb-3 ${
                      isLead ? 'text-[#C6FF1A]' : 'text-[#254A34]'
                    }`}
                  >
                    {member.role}
                  </p>

                  <p
                    className={`text-xs leading-relaxed ${
                      isLead ? 'text-slate-300' : 'text-[#5F6B64]'
                    }`}
                  >
                    {member.bio}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
