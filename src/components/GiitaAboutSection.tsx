'use client';
import { useEffect, useRef, useState } from 'react';

export default function GiitaAboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const offerings = [
    { label: 'Technical Training', icon: '⚙️' },
    { label: 'Functional Skills', icon: '📊' },
    { label: 'Behavioural Skills', icon: '🤝' },
    { label: 'Competency Mapping', icon: '🗺️' },
    { label: 'Skill Gap Analysis', icon: '🔍' },
    { label: 'Skill Bank', icon: '🏦' },
  ];

  return (
    <section
      id="about-us"
      ref={sectionRef}
      className="relative py-4 md:py-6 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#3A55A5]/5 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#F5872E]/5 blur-3xl" />
        <div className={`absolute top-1/4 left-0 w-1/3 h-1 bg-gradient-to-r from-transparent via-[#F5872E]/30 to-transparent -skew-y-12 transition-all duration-1000 ease-out ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`} />
        <div className={`absolute top-1/2 right-0 w-1/3 h-1 bg-gradient-to-l from-transparent via-[#3A55A5]/30 to-transparent skew-y-12 transition-all duration-1000 delay-300 ease-out ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`} />
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className={`flex flex-col items-center text-center mb-14 transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* <span className="inline-block text-xs font-bold tracking-widest text-[#F5872E] uppercase mn-1 bg-[#F5872E]/10 px-4 py-1.5 rounded-full">
            Who We Are
          </span> */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#08193C] mt-3 relative inline-block">
            <span className="relative">
              About GIITA
              <span className={`absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#F5872E] to-[#3A55A5] rounded-full transition-all duration-1000 delay-500 ease-out origin-left ${isVisible ? 'scale-x-100' : 'scale-x-0'}`} />
            </span>
          </h2>
          {/* <p className="mt-4 text-sm font-semibold text-[#3A55A5] tracking-wide">
            Gainwell Institute of Integrated Talent Advancement
          </p> */}
          <p className="mt-4 text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            GIITA is a centre of excellence for Learning & Capability Development, committed to building a future ready talent for Gainwell Group & the broader Business Eco-systems to thrive and excel in an ever evolving world.
          </p>
        </div>

        {/* Overview write-up */}
        <div className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transition-all duration-1000 delay-200 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3A55A5] to-[#F5872E] rounded-t-2xl" />
          <h3 className="text-xl font-bold text-[#08193C] mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-[#3A55A5]/10 flex items-center justify-center text-[#3A55A5] text-sm">📋</span>
            Overview
          </h3>
          <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
            {/* Always visible — first paragraph */}
            <p>
              At GIITA, we design and deliver impactful learning experiences that enhance technical, functional, leadership, and behavioural capabilities. Our programs combine industry expertise, practical application, and innovative learning methodologies to help individuals and organizations unlock their full potential.
            </p>
            <p>
              While rooted in the Gainwell Group&apos;s commitment to people excellence, GIITA aspires to be a trusted learning partner for organizations across sectors, enabling individuals, teams, and businesses to thrive in an ever-evolving world.
            </p>

            {/* Smooth expand/collapse — content always in DOM, clipped by max-height */}
            {/* <div
              style={{
                maxHeight: overviewExpanded ? '300px' : '0px',
                overflow: 'hidden',
                transition: 'max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              <div className="space-y-4 pt-0">
                <p>
                  While rooted in the Gainwell Group's commitment to people excellence, GIITA aspires to be a trusted learning partner for organizations across sectors, enabling individuals, teams, and businesses to thrive in an ever-evolving world.
                </p>
              </div>
            </div> */}
          </div>

          {/* Read More / Read Less toggle */}
          {/* <button
            onClick={() => setOverviewExpanded(!overviewExpanded)}
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#3A55A5] hover:text-[#F5872E] transition-colors duration-200"
          >
            {overviewExpanded ? 'Read Less' : 'Read More'}
            <svg
              className={`w-4 h-4 transition-transform duration-500 ${overviewExpanded ? 'rotate-180' : 'rotate-0'}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button> */}

          {/* Offerings chips */}
          <div className="mt-6 flex flex-wrap gap-2">
            {offerings.map((o) => (
              <span key={o.label} className="inline-flex items-center gap-1.5 text-xs font-semibold bg-[#3A55A5]/8 text-[#3A55A5] border border-[#3A55A5]/20 px-3 py-1.5 rounded-full">
                {o.icon} {o.label}
              </span>
            ))}
          </div>
        </div>

        {/* Vision & Mission */}
        {/* <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}> */}

          {/* Vision */}
          {/* <div className="relative bg-gradient-to-br from-[#3A55A5] to-[#08193C] rounded-2xl p-8 text-white shadow-xl overflow-hidden lg:col-span-1">
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/5 -mr-10 -mt-10" />
            <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white/5 -ml-8 -mb-8" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-blue-100">Our Vision</h3>
              </div>
              <p className="text-blue-100 leading-relaxed text-sm md:text-base text-justify">
                Build an Academy of Excellence with a vision to empower individuals through global standard of skilling and promote innovation-based capability development towards creating global talent, generate employability and wealth.
              </p>
              <div className="mt-4 text-xs text-blue-200 italic">
                * Proposed Vision — subject to Management approval
              </div>
            </div>
          </div> */}

          {/* Mission */}
          {/* <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 overflow-hidden lg:col-span-2">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F5872E] to-[#40A748]" />
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-[#F5872E]/10 flex items-center justify-center text-[#F5872E]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#08193C]">Our Mission</h3>
            </div>
            <ul className="space-y-3">
              {missionPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#F5872E]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#F5872E]" />
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed text-justify">{point}</p>
                </li>
              ))}
            </ul>
            <div className="mt-4 text-xs text-gray-400 italic">
              * Proposed Mission — subject to Management approval
            </div>
          </div> */}
        {/* </div> */}
      </div>
    </section>
  );
}
