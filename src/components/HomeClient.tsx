// src/components/HomeClient.tsx
'use client';

import HeaderWrapper from '@/components/HeaderWrapper';
import Hero from '@/components/Hero';
import GiitaAboutSection from '@/components/GiitaAboutSection';
import ProgramsSection from '@/components/ProgramsSection';
// import OurFacilitiesSection from '@/components/OurFacilities';
import FacultySection from '@/components/FacultySection';
import ProgramGallery from '@/components/ProgramGallery';
import UpcomingProgramsSection from '@/components/UpcomingProgramsSection';
import GiitaFooter from '@/components/GiitaFooter';

export default function HomeClient() {
  return (
    <main className="bg-gray-50 text-gray-800">
      <HeaderWrapper />
      <Hero />
      <GiitaAboutSection />
      <ProgramsSection />
      {/* <OurFacilitiesSection /> */}
      <FacultySection />
      <ProgramGallery />
      <UpcomingProgramsSection />
      <GiitaFooter />
    </main>
  );
}
