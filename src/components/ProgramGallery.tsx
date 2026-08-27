'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { X, ChevronRight, ChevronLeft } from 'lucide-react';

interface EventGallery {
  id: string;
  title: string;
  date: string;
  mainImage: string;
  images: string[];
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const eventsData: EventGallery[] = [
  {
    id: 'event-1',
    title: 'From Campus to Corporate',
    date: '5-6 June, 2026',
    mainImage: `${basePath}/images/gallery/event1/main.jpg`,
    images: [
      `${basePath}/images/gallery/event1/main.jpg`,
      `${basePath}/images/gallery/event1/1.jpg`,
      `${basePath}/images/gallery/event1/2.jpg`,
      `${basePath}/images/gallery/event1/3.jpg`,
    ],
  },
  {
    id: 'event-2',
    title: 'Creating Synergy At Work',
    date: '12.06.2026',
    mainImage: `${basePath}/images/gallery/event2/1.jpg`,
    images: [
      `${basePath}/images/gallery/event2/1.jpg`,
      `${basePath}/images/gallery/event2/2.jpg`,
      `${basePath}/images/gallery/event2/3.jpg`,
      `${basePath}/images/gallery/event2/4.jpg`,
      `${basePath}/images/gallery/event2/5.jpg`,
      `${basePath}/images/gallery/event2/6.jpg`,
    ],
  },
  {
    id: 'event-3',
    title: 'First Time Leader',
    date: '24.06.2026 & 25.06.2026',
    mainImage: `${basePath}/images/gallery/event3/1.jpg`,
    images: [
      `${basePath}/images/gallery/event3/1.jpg`,
      `${basePath}/images/gallery/event3/2.jpg`,
      `${basePath}/images/gallery/event3/3.jpg`,
      `${basePath}/images/gallery/event3/4.jpg`,
      `${basePath}/images/gallery/event3/5.jpg`,
      `${basePath}/images/gallery/event3/6.jpg`
    ],
  },
  {
    id: 'event-4',
    title: '6 Sigma Green Belt Training',
    date: '20.07.2026 - 23.07.2026',
    mainImage: `${basePath}/images/gallery/event4/1.jpeg`,
    images: [
      `${basePath}/images/gallery/event4/1.jpg`,
      `${basePath}/images/gallery/event4/2.jpg`,
      `${basePath}/images/gallery/event4/3.jpg`,
      `${basePath}/images/gallery/event4/4.jpg`,
      `${basePath}/images/gallery/event4/5.jpeg`,
      `${basePath}/images/gallery/event4/6.jpeg`,
      `${basePath}/images/gallery/event4/7.jpeg`,
      `${basePath}/images/gallery/event4/8.jpeg`,
    ],
  }
];

export default function ProgramGallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<EventGallery | null>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedEvent) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedEvent]);

  return (
    <section
      id="program-gallery"
      ref={sectionRef}
      className="relative py-4 md:py-6 bg-gray-50 overflow-hidden"
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`flex flex-col items-center text-center mb-14 transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* <span className="inline-block text-xs font-bold tracking-widest text-[#3A55A5] uppercase mn-1 bg-[#3A55A5]/10 px-4 py-1.5 rounded-full">
            Gallery
          </span> */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#08193C] mt-3 relative inline-block">
            <span className="relative">
              Program Gallery
              <span className={`absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#F5872E] to-[#3A55A5] rounded-full transition-all duration-1000 delay-500 ease-out origin-left ${isVisible ? 'scale-x-100' : 'scale-x-0'}`} />
            </span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A glimpse into our vibrant training sessions and impactful learning experiences.
          </p>
        </div>

        {/* Gallery Carousel */}
        <div className={`transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} relative px-12 sm:px-16`}>
          {/* Custom Navigation Arrows */}
          <button className="gallery-prev absolute left-0 sm:left-2 top-[40%] -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md text-[#3A55A5] hover:text-[#F5872E] transition-all disabled:opacity-30 disabled:cursor-not-allowed border border-gray-100">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="gallery-next absolute right-0 sm:right-2 top-[40%] -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md text-[#3A55A5] hover:text-[#F5872E] transition-all disabled:opacity-30 disabled:cursor-not-allowed border border-gray-100">
            <ChevronRight className="w-6 h-6" />
          </button>

          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            centeredSlides={false}
            navigation={{
              prevEl: '.gallery-prev',
              nextEl: '.gallery-next',
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12 [&_.swiper-pagination-bullets]:bottom-4 [&_.swiper-pagination-bullet-active]:bg-[#F5872E]" // padding bottom for pagination
          >
            {eventsData.map((event) => (
              <SwiperSlide key={event.id} className="h-auto">
                <div
                  className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer h-full border border-gray-200 bg-white"
                  onClick={() => setSelectedEvent(event)}
                >
                  <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100 relative">
                    <Image
                      src={event.mainImage}
                      alt={event.title}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08193C]/80 via-[#08193C]/10 to-transparent opacity-80 group-hover:opacity-0 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <div className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-[#F5872E] text-sm font-semibold mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {event.date}
                    </p>
                    <h3 className="text-xl font-bold text-white leading-tight mb-2 drop-shadow-md">
                      {event.title}
                    </h3>
                    {/* <div className="flex items-center text-sm font-medium text-[#F5872E] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200 mt-2">
                      <span>View Event Gallery ({event.images.length})</span>
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </div> */}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Popup Modal */}
      {selectedEvent && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-2 sm:p-4 md:p-6"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-100">
              <h3 className="text-base sm:text-xl md:text-2xl font-bold text-[#08193C] pr-10 truncate">
                {selectedEvent.title}
              </h3>
              <button
                className="absolute top-3 sm:top-4 right-3 sm:right-4 text-gray-500 hover:text-black p-1.5 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-10"
                onClick={() => setSelectedEvent(null)}
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Main Image Slider — explicit height so total modal fits within viewport */}
            <div
              className="relative w-full bg-gray-900"
              style={{ height: 'clamp(180px, calc(90vh - 160px), 420px)' }}
            >
              {/* Nav arrows */}
              <button className="modal-prev absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/80 hover:bg-white text-gray-800 shadow-md transition-all">
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              <button className="modal-next absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/80 hover:bg-white text-gray-800 shadow-md transition-all">
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>

              <Swiper
                modules={[Navigation, Thumbs]}
                spaceBetween={0}
                slidesPerView={1}
                observer={true}
                observeParents={true}
                navigation={{
                  prevEl: '.modal-prev',
                  nextEl: '.modal-next',
                }}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                style={{ width: '100%', height: '100%' }}
              >
                {selectedEvent.images.map((imgSrc, idx) => (
                  <SwiperSlide key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                    <Image
                      src={imgSrc}
                      alt={`${selectedEvent.title} - Image ${idx + 1}`}
                      width={1200}
                      height={800}
                      style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', display: 'block' }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Thumbnail Slider */}
            <div className="bg-gray-100 px-3 sm:px-4 py-3">
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={8}
                slidesPerView="auto"
                watchSlidesProgress={true}
                modules={[Thumbs]}
                style={{ height: '56px' }}
              >
                {selectedEvent.images.map((imgSrc, idx) => (
                  <SwiperSlide
                    key={`thumb-${idx}`}
                    style={{ width: '72px', height: '56px', cursor: 'pointer', borderRadius: '8px', overflow: 'hidden', border: '2px solid transparent', opacity: 0.5, transition: 'all 0.2s' }}
                  >
                    <Image
                      src={imgSrc}
                      alt={`Thumbnail ${idx + 1}`}
                      width={120}
                      height={90}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <style dangerouslySetInnerHTML={{
              __html: `
              .modal-thumbs-slider .swiper-slide-thumb-active,
              .swiper-slide-thumb-active {
                opacity: 1 !important;
                border-color: #F5872E !important;
              }
            `}} />
          </div>
        </div>
      )}
    </section>
  );
}
