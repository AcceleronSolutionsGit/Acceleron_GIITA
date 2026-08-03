'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface FacultyMember {
  id: number;
  name: string;
  designation: string;
  initials: string;
  color: string;
  image?: string;
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const facultyData: FacultyMember[] = [
  {
    id: 1,
    name: 'Vaishali Bairagi',
    designation: 'Power Skills Trainer',
    initials: 'VB',
    image: `${basePath}/images/faculty/vaishali-bairagi.jpg`,
    color: 'from-[#3A55A5] to-[#2a3f80]',
  },
  {
    id: 2,
    name: 'Kiran Agarwal',
    designation: 'Power Skills Trainer',
    initials: 'KA',
    image: `${basePath}/images/faculty/kiran-agarwal.png`,
    color: 'from-[#F5872E] to-[#c96a15]',
  },
  {
    id: 3,
    name: 'Nilasish Dey',
    designation: 'Power Skills/Leadership Skills Trainer',
    initials: 'ND',
    image: `${basePath}/images/faculty/nilasish-dey.jpg`,
    color: 'from-[#40A748] to-[#2d7a35]',
  },
  {
    id: 4,
    name: 'Biswajit Mukherjee',
    designation: 'Head – Academy Operations and Faculty',
    initials: 'BM',
    image: `${basePath}/images/faculty/biswajit-mukherjee.jpg`,
    color: 'from-[#8B5CF6] to-[#6d3fcc]',
  },
  {
    id: 5,
    name: 'Anusuya Dasgupta',
    designation: 'Coordinator – Academy Operations',
    initials: 'AD',
    image: `${basePath}/images/faculty/anusuya-dasgupta.jpg`,
    color: 'from-[#EF4444] to-[#b91c1c]',
  },
  {
    id: 6,
    name: 'External Faculty',
    designation: 'Industry Expert & Specialist Trainer',
    initials: 'EF',
    color: 'from-[#0891B2] to-[#0c5e77]',
  },
];

export default function FacultySection() {
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

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    target.style.animationPlayState = 'paused';
    const timeoutId = setTimeout(() => {
      // Keep paused on hold
    }, 200);
    target.setAttribute('data-hold-timeout', String(timeoutId));
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const timeoutId = target.getAttribute('data-hold-timeout');
    if (timeoutId) {
      clearTimeout(Number(timeoutId));
      target.removeAttribute('data-hold-timeout');
    }
    target.style.animationPlayState = 'running';
    target.style.animationDuration = '180s'; // extremely slow scroll on touch move
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const timeoutId = target.getAttribute('data-hold-timeout');
    if (timeoutId) {
      clearTimeout(Number(timeoutId));
      target.removeAttribute('data-hold-timeout');
    }
    target.style.animationPlayState = 'running';
    target.style.animationDuration = '20s'; // restore normal scrolling speed
  };

  return (
    <section
      id="faculty"
      ref={sectionRef}
      className="relative py-4 md:py-6 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#F5872E]/5 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#3A55A5]/5 blur-3xl" />
        <div className={`absolute top-1/4 left-0 w-1/3 h-1 bg-gradient-to-r from-transparent via-[#F5872E]/20 to-transparent -skew-y-12 transition-all duration-1000 ease-out ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`} />
      </div>

      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`flex flex-col items-center text-center mb-14 transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <span className="inline-block text-xs font-bold tracking-widest text-[#F5872E] uppercase mn-1 bg-[#F5872E]/10 px-4 py-1.5 rounded-full">
            Meet Our Experts
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#08193C] mt-3 relative inline-block">
            <span className="relative">
              Our Team
              <span className={`absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#F5872E] to-[#3A55A5] rounded-full transition-all duration-1000 delay-500 ease-out origin-left ${isVisible ? 'scale-x-100' : 'scale-x-0'}`} />
            </span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our trainers are seasoned professionals bringing deep domain expertise across technical, leadership, behavioural and digital skills — ensuring every session is practical, engaging, and impactful.
          </p>
        </div>

        {/* Faculty Grid — Desktop only */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {facultyData.map((member, index) => (
            <motion.div
              key={member.id}
              className="group relative bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden w-full aspect-square"
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                scale: { duration: 0.25, ease: 'easeOut' },
                boxShadow: { duration: 0.25, ease: 'easeOut' },
                opacity: { duration: 0.8, delay: index * 0.1, ease: 'easeOut' },
                y: { duration: 0.8, delay: index * 0.1, ease: 'easeOut' }
              }}
              whileHover={{ 
                scale: 1.08, 
                boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.25)',
                transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
              }}
            >
              {/* Bottom accent bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${member.color} absolute bottom-0 left-0 z-20`} />

              {/* Full height image or initials */}
              {member.image ? (
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                />
              ) : (
                <div className={`w-full h-full bg-gradient-to-br ${member.color} flex items-center justify-center text-white text-5xl font-black`}>
                  {member.initials}
                </div>
              )}

              {/* Bottom text overlay */}
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-[#08193C] to-transparent text-white pt-24 z-10 flex flex-col justify-end">
                <h3 className="text-xl font-bold leading-tight text-white">{member.name}</h3>
                <p className="text-sm text-slate-300 mt-1">{member.designation}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View: Continuous Infinite Horizontal Scroll */}
        <div className="md:hidden space-y-6 overflow-hidden">
          <style dangerouslySetInnerHTML={{ __html: `
            .marquee-container {
              display: flex;
              width: max-content;
              gap: 16px;
            }
            .marquee-rtl {
              animation: scroll-rtl 25s linear infinite;
            }
            .marquee-ltr {
              animation: scroll-ltr 25s linear infinite;
            }
            .marquee-container:hover,
            .marquee-container:active {
              animation-play-state: paused;
            }
            @keyframes scroll-rtl {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            @keyframes scroll-ltr {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0); }
            }
          `}} />

          {/* Row 1: Right to Left */}
          <div className="w-full overflow-hidden">
            <div 
              className="marquee-container marquee-rtl"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {[...facultyData, ...facultyData].map((member, i) => (
                <div key={`r1-${member.id}-${i}`} className="w-[140px] flex flex-shrink-0 flex-col">
                  <div className="relative bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden w-full aspect-square">
                    {member.image ? (
                      <Image src={member.image} alt={member.name} fill sizes="140px" className="object-cover" />
                    ) : (
                      <div className={`w-full h-full bg-gradient-to-br ${member.color} flex items-center justify-center text-white text-xl font-black`}>
                        {member.initials}
                      </div>
                    )}
                  </div>
                  <div className="mt-2 px-1 text-center">
                    <h3 className="text-xs font-bold text-[#08193C] leading-snug">{member.name}</h3>
                    <p className="text-[10px] text-gray-500 mt-0.5 leading-tight">{member.designation}</p>
                    <div className={`h-1 w-8 bg-gradient-to-r ${member.color} mx-auto mt-1.5 rounded-full`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Left to Right */}
          {/* <div className="w-full overflow-hidden">
            <div 
              className="marquee-container marquee-ltr"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {[...facultyData, ...facultyData].map((member, i) => (
                <div key={`r2-${member.id}-${i}`} className="w-[140px] flex flex-shrink-0 flex-col">
                  <div className="relative bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden w-full aspect-square">
                    {member.image ? (
                      <Image src={member.image} alt={member.name} fill sizes="140px" className="object-cover" />
                    ) : (
                      <div className={`w-full h-full bg-gradient-to-br ${member.color} flex items-center justify-center text-white text-xl font-black`}>
                        {member.initials}
                      </div>
                    )}
                  </div>
                  <div className="mt-2 px-1 text-center">
                    <h3 className="text-xs font-bold text-[#08193C] leading-snug">{member.name}</h3>
                    <p className="text-[10px] text-gray-500 mt-0.5 leading-tight">{member.designation}</p>
                    <div className={`h-1 w-8 bg-gradient-to-r ${member.color} mx-auto mt-1.5 rounded-full`} />
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
