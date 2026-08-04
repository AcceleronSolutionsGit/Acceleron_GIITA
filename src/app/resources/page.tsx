'use client';

import HeaderWrapper from '@/components/HeaderWrapper';
import GiitaFooter from '@/components/GiitaFooter';
import Image from 'next/image';
import { useState, useRef } from 'react';
import { resourcesData, Resource, CoverageSection } from './resourcesData';

export default function ResourcesPage() {
  return (
    <main className="bg-gray-50 text-gray-800 min-h-screen">
      <HeaderWrapper />

      {/* Hero Banner */}
      <section className="relative pt-[100px] xl:pt-[120px] h-[320px] sm:h-[360px] md:h-[420px] w-full bg-gradient-to-br from-[#08193C] via-[#3A55A5] to-[#08193C] overflow-hidden flex items-center justify-center text-center px-4">
        {/* Background visual graphics */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        </div>
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#F5872E]/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#40A748]/10 blur-3xl" />

        <div className="relative z-10 max-w-3xl">
          <span className="inline-block text-xs font-bold tracking-widest text-[#F5872E] uppercase mb-2 bg-[#F5872E]/10 border border-[#F5872E]/20 px-3.5 py-1 rounded-full">
            Knowledge Center
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">Resources Detail Hub</h1>
          <p className="mt-3 text-slate-300 text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Access in-depth program info, course coverage, objectives, and brochures for GIITA&apos;s key workshops.
          </p>
        </div>
      </section>

      {/* Main Interactive Category Viewer Section */}
      <section className="py-12 bg-slate-50 min-h-screen">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <ResourcesDashboard />
        </div>
      </section>

      <GiitaFooter />
    </main>
  );
}

// ==========================================
// Sub-components for Resources Dashboard Hub
// ==========================================

function ResourcesDashboard() {
  const contentRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState(resourcesData[0].id);
  const [fadeState, setFadeState] = useState('fade-in');

  const handleTabChange = (id: string) => {
    if (id === activeTab) return;
    setFadeState('fade-out');
    setTimeout(() => {
      setActiveTab(id);
      setFadeState('fade-in');

      if (contentRef.current) {
        const rect = contentRef.current.getBoundingClientRect();
        const header = document.getElementById('site-header');
        const headerHeight = header ? header.offsetHeight : 0;
        const targetScrollPosition = rect.top + window.scrollY - headerHeight;

        window.scrollTo({
          top: targetScrollPosition,
          behavior: 'smooth'
        });
      }
    }, 200);
  };

  const activeResource = resourcesData.find((r: Resource) => r.id === activeTab) || resourcesData[0];

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-start">
      {/* Left Side Category Navigation */}
      <nav
        className="w-full lg:w-1/4 lg:sticky lg:top-24 bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 pb-3 lg:pb-2 scrollbar-none"
        aria-label="Resources category selection"
      >
        <div className="hidden lg:block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-3">
          Training Workshops
        </div>
        {resourcesData.map((res: Resource) => {
          const isActive = res.id === activeTab;
          return (
            <button
              key={res.id}
              onClick={() => handleTabChange(res.id)}
              className={`flex-shrink-0 w-[240px] md:w-[280px] lg:w-full text-left px-4 py-3.5 rounded-xl text-sm font-bold transition-all duration-300 ${isActive
                ? 'bg-[#3A55A5] text-white shadow-md shadow-[#3A55A5]/20 lg:translate-x-1'
                : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-100'
                } focus:outline-none focus:ring-2 focus:ring-[#3A55A5]/40`}
            >
              {res.title}
            </button>
          );
        })}
      </nav>

      {/* Right Side Content Viewer */}
      <main ref={contentRef} className="w-full lg:w-3/4 bg-white rounded-3xl p-6 md:p-10 border border-slate-100 shadow-sm min-h-[600px]">
        <div className={`transition-opacity duration-200 ${fadeState === 'fade-out' ? 'opacity-0' : 'opacity-100'}`}>
          <ResourceViewer resource={activeResource} />
        </div>
      </main>
    </div>
  );
}

function ResourceViewer({ resource }: { resource: Resource }) {
  return (
    <article className="max-w-[1100px] mx-auto">
      {/* Hero Banner Section */}
      <header className="mb-12">
        <div className="relative w-full h-[240px] sm:h-[320px] md:h-[420px] rounded-2xl overflow-hidden mb-8 shadow-md border border-slate-100 group">
          <Image
            src={resource.coverImage}
            alt={`${resource.title} Cover Banner`}
            fill
            sizes="(max-width: 768px) 100vw, 80vw"
            className={`w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out ${
              resource.id === '6-sigma-green-belt' ? 'object-cover md:object-fill' : 'object-fill'
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold text-[#08193C] mb-6 leading-tight tracking-tight">
          {resource.title}
        </h1>
      </header>

      {/* Section 1: Target Audience */}
      <section className="mb-12 border-b border-slate-100 pb-10" aria-labelledby="target-audience-title">
        <h2 id="target-audience-title" className="text-xl md:text-2xl font-bold text-[#08193C] mb-4 flex items-center gap-2.5">
          <span className="w-1.5 h-6 bg-[#F5872E] rounded-full" />
          Target Audience
        </h2>
        <div className="text-base md:text-lg text-slate-600 leading-relaxed font-normal bg-slate-50 border border-slate-100 rounded-2xl p-5 md:p-6 space-y-4">
          <p>{resource.targetAudience}</p>
          {resource.targetAudienceIntro && (
            <p>{resource.targetAudienceIntro}</p>
          )}
          {resource.competencies && resource.competencies.length > 0 && (
            <ul className="space-y-2 pt-1">
              {resource.competencies.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-3 text-slate-600 text-sm md:text-base leading-relaxed">
                  <span className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 text-xs font-bold border border-emerald-100 mt-0.5" aria-hidden="true">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Section 1b: Duration (optional) */}
      {resource.duration && (
        <section className="mb-12 border-b border-slate-100 pb-10" aria-labelledby="duration-title">
          <h2 id="duration-title" className="text-xl md:text-2xl font-bold text-[#08193C] mb-4 flex items-center gap-2.5">
            <span className="w-1.5 h-6 bg-[#3A55A5] rounded-full" />
            Duration
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed font-normal bg-slate-50 border border-slate-100 rounded-2xl p-5 md:p-6">
            {resource.duration}
          </p>
        </section>
      )}

      {/* Section 2: Program Objectives */}
      <section className={`mb-12 pb-10 ${resource.programOutline || (resource.coverageSections && resource.coverageSections.length > 0) ? 'border-b border-slate-100' : ''}`} aria-labelledby="program-objectives-title">
        <h2 id="program-objectives-title" className="text-xl md:text-2xl font-bold text-[#08193C] mb-6 flex items-center gap-2.5">
          <span className="w-1.5 h-6 bg-[#40A748] rounded-full" />
          Program Objectives
        </h2>
        {!resource.objectivesLabel && (
          <p className="text-base font-semibold text-slate-700 mb-5">
            By the end of this program, participants will be able to:
          </p>
        )}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {resource.objectives.map((obj: string, i: number) => (
            <li
              key={i}
              className="flex items-start gap-3.5 text-slate-600 text-sm md:text-base leading-relaxed bg-white hover:bg-slate-50/40 p-3 rounded-xl border border-transparent hover:border-slate-100 transition-colors"
            >
              <span className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 text-xs font-bold border border-emerald-100 mt-0.5" aria-hidden="true">
                ✓
              </span>
              <span>{obj}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Section 2b: Program Outline (optional) */}
      {resource.programOutline && (
        <section className={`mb-12 pb-10 ${resource.coverageSections && resource.coverageSections.length > 0 ? 'border-b border-slate-100' : ''}`} aria-labelledby="program-outline-title">
          <h2 id="program-outline-title" className="text-xl md:text-2xl font-bold text-[#08193C] mb-4 flex items-center gap-2.5">
            <span className="w-1.5 h-6 bg-[#F5872E] rounded-full" />
            Program Outline
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed font-normal bg-slate-50 border border-slate-100 rounded-2xl p-5 md:p-6">
            {resource.programOutline}
          </p>
        </section>
      )}

      {/* Section 3: Program Coverage (only when sections exist) */}
      {resource.coverageSections && resource.coverageSections.length > 0 && (
        <section aria-labelledby="program-coverage-title">
          <h2 id="program-coverage-title" className="text-xl md:text-2xl font-bold text-[#08193C] mb-8 flex items-center gap-2.5">
            <span className="w-1.5 h-6 bg-[#3A55A5] rounded-full" />
            Program Coverage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {resource.coverageSections?.map((sec: CoverageSection, i: number) => (
              <CoverageCard key={i} section={sec} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}

const colorMap = {
  orange: {
    header: 'bg-[#F5872E]'
  },
  blue: {
    header: 'bg-[#3A55A5]'
  },
  purple: {
    header: 'bg-[#8B5CF6]'
  },
  green: {
    header: 'bg-[#40A748]'
  },
  taupe: {
    header: 'bg-[#737373]'
  },
  red: {
    header: 'bg-[#EF4D2F]'
  },
  teal: {
    header: 'bg-[#0D9488]'
  },
  indigo: {
    header: 'bg-[#4F46E5]'
  }
};

function CoverageCard({ section }: { section: CoverageSection }) {
  const color = (section.color || 'blue') as keyof typeof colorMap;
  const theme = colorMap[color] || colorMap.blue;

  return (
    <article className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
      {/* Top Header */}
      <div className={`px-5 py-4 ${theme.header} text-white font-bold text-base shadow-sm`}>
        {section.title}
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 bg-white">
        <ul className="space-y-3.5">
          {section.bullets.map((bullet: string, idx: number) => (
            <li key={idx} className="flex items-start gap-2.5 text-slate-600 text-sm md:text-base leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0" aria-hidden="true" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

