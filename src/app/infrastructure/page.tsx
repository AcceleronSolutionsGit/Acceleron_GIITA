'use client';

import HeaderWrapper from '@/components/HeaderWrapper';
import GiitaFooter from '@/components/GiitaFooter';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

interface GalleryItem {
  id: number;
  image: string;
}

const galleryItems: GalleryItem[] = [
  { id: 3, image: `${basePath}/images/infrastructure/if3.jpg` },
  { id: 1, image: `${basePath}/images/infrastructure/if1.jpg` },
  { id: 4, image: `${basePath}/images/infrastructure/if4.jpg` },
  { id: 5, image: `${basePath}/images/infrastructure/if5.jpg` },
  { id: 6, image: `${basePath}/images/infrastructure/if6.jpg` },
  { id: 2, image: `${basePath}/images/infrastructure/if2.jpg` },
//   { id: 7, image: `${basePath}/images/infrastructure/shared image (11).jpg` },
//   { id: 8, image: `${basePath}/images/infrastructure/shared image (8).jpg` },
];

export default function InfrastructurePage() {
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Swipe gesture detection states for mobile devices
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const openModal = (index: number) => {
    setModalIndex(index);
  };

  const closeModal = () => {
    setModalIndex(null);
  };

  const showNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (modalIndex !== null) {
      setModalIndex((modalIndex + 1) % galleryItems.length);
    }
  };

  const showPrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (modalIndex !== null) {
      setModalIndex((modalIndex - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') {
        setModalIndex(prev => prev !== null ? (prev + 1) % galleryItems.length : null);
      }
      if (e.key === 'ArrowLeft') {
        setModalIndex(prev => prev !== null ? (prev - 1 + galleryItems.length) % galleryItems.length : null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = modalIndex !== null ? 'hidden' : 'auto';
  }, [modalIndex]);

  // Touch handlers for mobile swipe navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      showNext();
    } else if (isRightSwipe) {
      showPrev();
    }
  };

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
            Modern Facilities
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">Our Infrastructure</h1>
          <p className="mt-3 text-slate-300 text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Take a visual tour of the state-of-the-art STPI training centre, custom-designed to build a future-ready industrial workforce.
          </p>
        </div>
      </section>

      {/* Introductory Section */}
      <section className="py-10 sm:py-12 bg-white border-b border-gray-100">
        <div className="container max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#08193C] mb-3 relative inline-block">
            Designed for Collaborative Learning
            <span className="absolute -bottom-1 left-1/4 right-1/4 h-[3px] bg-gradient-to-r from-[#F5872E] to-[#3A55A5] rounded-full" />
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base max-w-4xl mx-auto leading-relaxed mt-4">
            The new GIITA training facility located in STPI is structured specifically around modern pedagogy. Incorporating modular classrooms, mechanical labs, visual value galleries, and relaxed collaborative areas, our environment encourages peer-to-peer discussions, creative exploration, and high technical quality standard mapping.
          </p>
        </div>
      </section>

      {/* Main Gallery Section */}
      <section ref={sectionRef} className="py-12 sm:py-16 md:py-20 relative">
        <div className="container max-w-7xl mx-auto px-4">
          {/* Gallery Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {galleryItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => openModal(idx)}
                className={`group relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-lg border border-gray-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${100 + idx * 50}ms` }}
              >
                <Image 
                  src={item.image} 
                  alt={`Infrastructure image ${item.id}`} 
                  width={800}
                  height={800}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-xs font-bold bg-[#F5872E]/90 px-3.5 py-1.5 rounded-full shadow-md scale-90 group-hover:scale-100 transition-transform duration-300">
                    Zoom Image 🔍
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal (Centered with mobile gesture swipe and responsive arrows) */}
      {modalIndex !== null && (
        <div 
          onClick={closeModal}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 backdrop-blur-md p-4 transition-all duration-300"
        >
          {/* Close button - larger target size and responsive placement */}
          <button 
            onClick={closeModal} 
            className="absolute top-4 right-4 bg-black/40 hover:bg-black/60 text-white rounded-full p-2.5 sm:p-3 z-50 transition-colors shadow-lg backdrop-blur-sm"
            aria-label="Close lightbox"
          >
            <svg className="w-5.5 h-5.5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous image button - responsive size and responsive position */}
          <button
            onClick={showPrev}
            className="absolute left-2 sm:left-4 md:left-6 bg-black/40 hover:bg-black/60 text-white rounded-full p-2.5 sm:p-3.5 md:p-4 z-40 transition-colors shadow-lg backdrop-blur-sm"
            aria-label="Previous image"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next image button - responsive size and responsive position */}
          <button
            onClick={showNext}
            className="absolute right-2 sm:right-4 md:right-6 bg-black/40 hover:bg-black/60 text-white rounded-full p-2.5 sm:p-3.5 md:p-4 z-40 transition-colors shadow-lg backdrop-blur-sm"
            aria-label="Next image"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Lightbox Content Container */}
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="relative max-w-5xl max-h-[75vh] sm:max-h-[80vh] md:max-h-[85vh] w-full flex items-center justify-center p-2 animate-in fade-in zoom-in-95 duration-300"
          >
            <Image 
              src={galleryItems[modalIndex].image} 
              alt={`Infrastructure zoom ${modalIndex + 1}`} 
              width={1400}
              height={1000}
              className="max-w-full max-h-[70vh] sm:max-h-[75vh] md:max-h-[80vh] object-contain rounded-lg sm:rounded-xl shadow-2xl border border-white/10" 
            />
            {/* Image indicator at bottom */}
            <div className="absolute bottom-[-32px] sm:bottom-[-40px] text-white/70 text-xs sm:text-sm font-semibold select-none">
              Image {modalIndex + 1} of {galleryItems.length}
            </div>
          </div>
        </div>
      )}

      <GiitaFooter />
    </main>
  );
}
