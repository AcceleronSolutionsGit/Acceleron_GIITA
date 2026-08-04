'use client';
import { useEffect, useRef, useState } from 'react';

interface Program {
  id: number;
  category: string;
  topics: string[];
  icon: React.ReactNode;
  gradient: string;
  accentColor: string;
}

const programs: Program[] = [
  {
    id: 1,
    category: 'Soft Skills Development',
    topics: [
      'Creating Synergy at Work',
      'Personal Effectiveness',
      'The Winning Edge',
      'Art of Effective Change Management',
      'Email - Etiquettes',
      'Time – Management',
      'Stress Management',
      'Campus to Corporate',
      'Business Etiquettes',
      'Effective Communication Skills',
      'Listening Skills',
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    gradient: 'from-[#40A748] to-[#2d7a35]',
    accentColor: '#40A748',
  },
  {
    id: 2,
    category: 'Functional Skill Development',
    topics: [
      'Effective PowerPoint Presentation',
      'Advance Excel',
      'Basic Excel',
      'Finance for Non-Finance',
      'Interviewing Skills Workshop',
      'Value Selling & Sales Effectiveness',
      'Secret to Customer Delight',
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    gradient: 'from-[#F5872E] to-[#c96a15]',
    accentColor: '#F5872E',
  },
  {
    id: 3,
    category: 'Leadership Development',
    topics: [
      'First Time Leaders',
      'Gainwell Organizational Leadership Development Program (GOLD)',
      'Becoming (S)Hero at Work',
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    gradient: 'from-[#3A55A5] to-[#2a3f80]',
    accentColor: '#3A55A5',
  },
  {
    id: 4,
    category: 'Technical Capability Development',
    topics: [
      'Equipment Operation & Maintenance',
      'Hydraulics & Pneumatics',
      'Electrical Systems & Automation',
      'Role-Based Technical Competency Mapping',
      'Skill Gap Analysis & Training Need Identification',
      'Maintenance of Skill Bank',
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    gradient: 'from-[#8B5CF6] to-[#6d3fcc]',
    accentColor: '#8B5CF6',
  },
  {
    id: 5,
    category: 'Digital Skill Advancement',
    topics: [
      '6 SIGMA Green Belt Training',
      'SOS & Contamination Control',
      'Quality Management Systems (QMS) & ISO',
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    gradient: 'from-[#0891B2] to-[#0c5e77]',
    accentColor: '#0891B2',
  },
];

export default function ProgramsSection() {
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

  return (
    <section
      id="programs"
      ref={sectionRef}
      className="relative py-8 md:py-12 overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #ffffff, rgba(249, 250, 251, 0.3))' }}
    >
      {/* Background radial pattern */}
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.05 }}>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at center, transparent 20%, rgba(0, 0, 0, 0.1) 100%)' }} />
      </div>

      {/* Decorative blobs */}
      <div className="absolute rounded-full pointer-events-none" style={{ bottom: '-80px', left: '-80px', width: '240px', height: '240px', background: '#F5872E', opacity: 0.10, filter: 'blur(60px)' }} />
      <div className="absolute rounded-full pointer-events-none" style={{ top: '-80px', right: '-80px', width: '240px', height: '240px', background: '#3A55A5', opacity: 0.10, filter: 'blur(60px)' }} />
      <div className="absolute rounded-full pointer-events-none" style={{ top: '50%', left: '-40px', width: '160px', height: '160px', background: '#40A748', opacity: 0.05, filter: 'blur(48px)' }} />
      <div className="absolute rounded-full pointer-events-none" style={{ bottom: '40px', right: '-40px', width: '160px', height: '160px', background: '#8B5CF6', opacity: 0.05, filter: 'blur(48px)' }} />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`flex flex-col items-center text-center mb-14 transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <span className="inline-block text-sm sm:text-base font-bold tracking-widest text-[#F5872E] uppercase mn-1 bg-[#F5872E]/10 px-4 py-1.5 rounded-full">
            What We Offer
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#08193C] mt-3 relative inline-block">
            <span className="relative">
              Our Programs
              <span className={`absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#F5872E] to-[#3A55A5] rounded-full transition-all duration-1000 delay-500 ease-out origin-left ${isVisible ? 'scale-x-100' : 'scale-x-0'}`} />
            </span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            GIITA is built on five pillars of capability development — designed to develop every dimension of an employee&apos;s professional potential.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 items-stretch transition-all duration-700 delay-200 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {programs.map((program) => (
            <div
              key={program.id}
              className={`relative rounded-3xl p-8 flex flex-col items-center text-center text-white border-4 border-white/90 shadow-lg hover:shadow-2xl hover:scale-110 bg-gradient-to-br ${program.gradient} group`}
              style={{ transition: 'all 600ms cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              {/* Icon Zone */}
              <div className="w-16 h-16 rounded-full bg-white/20 border-2 border-[#fecb00] flex items-center justify-center text-white shadow-md mb-6 [&>svg]:w-8 [&>svg]:h-8 transition-transform duration-500 group-hover:scale-115">
                {program.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold leading-snug drop-shadow-md text-white">
                {program.category}
              </h3>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-14 transition-all duration-1000 delay-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="text-gray-500 md:text-lg mb-4">Looking for a customised training solution for your organisation?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#3A55A5] to-[#F5872E] text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Contact Us for Custom Programs
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
