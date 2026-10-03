'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const PuzzleImageGallery: React.FC = () => {
  const images = [
    `${basePath}/images/gallery/event1/main.jpg`,
    `${basePath}/images/gallery/event2/1.jpg`,
    `${basePath}/images/gallery/event3/1.jpg`,
    `${basePath}/images/gallery/event4/1.jpg`,
    `${basePath}/images/gallery/event1/1.jpg`,
    `${basePath}/images/gallery/event2/2.jpg`,
    `${basePath}/images/gallery/event3/2.jpg`,
    `${basePath}/images/gallery/event4/2.jpg`,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isFlipped, setIsFlipped] = useState(false);
  const [useTransition, setUseTransition] = useState(true);
  const [animationConfig, setAnimationConfig] = useState({
    axis: 'Y',
    direction: 1,
    stagger: 'normal' // normal, reverse, horizontal, vertical, random
  });

  const rows = 3;
  const cols = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      // Pick a random animation configuration for the upcoming transition
      const axes = ['X', 'Y'];
      const directions = [1, -1];
      const staggers = ['normal', 'reverse', 'horizontal', 'vertical', 'random'];

      const nextAxis = axes[Math.floor(Math.random() * axes.length)];
      const nextDir = directions[Math.floor(Math.random() * directions.length)];
      const nextStagger = staggers[Math.floor(Math.random() * staggers.length)];

      setAnimationConfig({
        axis: nextAxis,
        direction: nextDir,
        stagger: nextStagger
      });

      // Start the transition
      setIsFlipped(true);

      // After transition completes, swap front and back images and reset flip state instantly
      setTimeout(() => {
        setUseTransition(false);
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setIsFlipped(false);

        // After state reset is committed to the DOM, re-enable transitions
        setTimeout(() => {
          setUseTransition(true);
          setNextIndex((prev) => (prev + 1) % images.length);
        }, 50);
      }, 1500); // Allow enough time for flip transition and staggered delays

    }, 5000); // Transition every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-[240px] xs:h-[300px] sm:h-[360px] md:h-[420px] lg:h-[480px] aspect-[4/3] rounded-2xl p-2 bg-gradient-to-tr from-[#3A55A5]/30 to-[#F5872E]/30 backdrop-blur-md border border-white/10 shadow-2xl overflow-hidden group">
      {/* Glossy overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-10 rounded-2xl" />
      
      <div className="w-full h-full grid grid-cols-3 grid-rows-3 gap-0 rounded-xl overflow-hidden bg-slate-950/40">
        {Array.from({ length: rows * cols }).map((_, idx) => {
          const row = Math.floor(idx / cols);
          const col = idx % cols;
          
          // Calculate background percentages for the grid pieces
          const colPercent = cols > 1 ? (col / (cols - 1)) * 100 : 0;
          const rowPercent = rows > 1 ? (row / (rows - 1)) * 100 : 0;
          
          // Determine stagger delays dynamically based on configuration
          let delay = 0;
          if (animationConfig.stagger === 'normal') {
            delay = (row + col) * 100;
          } else if (animationConfig.stagger === 'reverse') {
            delay = ((rows - 1 - row) + (cols - 1 - col)) * 100;
          } else if (animationConfig.stagger === 'horizontal') {
            delay = row * 150;
          } else if (animationConfig.stagger === 'vertical') {
            delay = col * 150;
          } else {
            // 'random'
            delay = ((idx * 7) % 5) * 100;
          }

          // Calculate current rotation angles
          const angle = isFlipped ? animationConfig.direction * 180 : 0;
          const transformValue = animationConfig.axis === 'X'
            ? `rotateX(${angle}deg)`
            : `rotateY(${angle}deg)`;

          // Backface transform rotation matches the axis
          const backFaceTransform = animationConfig.axis === 'X'
            ? 'rotateX(180deg)'
            : 'rotateY(180deg)';

          return (
            <div 
              key={idx} 
              className="relative w-full h-full select-none pointer-events-none" 
              style={{ perspective: '1000px' }}
            >
              <div
                className="w-full h-full relative"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: transformValue,
                  transition: useTransition ? 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
                  transitionDelay: useTransition ? `${delay}ms` : '0ms',
                }}
              >
                {/* Front side (current image) */}
                <div
                  className="absolute inset-0 w-full h-full rounded-sm"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    backgroundImage: `url(${images[currentIndex]})`,
                    backgroundSize: `${cols * 100}% ${rows * 100}%`,
                    backgroundPosition: `${colPercent}% ${rowPercent}%`,
                    backgroundRepeat: 'no-repeat',
                  }}
                />
                
                {/* Back side (next image) */}
                <div
                  className="absolute inset-0 w-full h-full rounded-sm"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: backFaceTransform,
                    backgroundImage: `url(${images[nextIndex]})`,
                    backgroundSize: `${cols * 100}% ${rows * 100}%`,
                    backgroundPosition: `${colPercent}% ${rowPercent}%`,
                    backgroundRepeat: 'no-repeat',
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Hero: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="home" className="relative min-h-screen lg:h-screen overflow-hidden bg-[#08193C] flex flex-col justify-center pt-[140px] pb-12 lg:pt-[120px] lg:pb-0">
      {/* 🔮 Deep Navy Grid Background */}
      <div
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 0)`,
          backgroundSize: '28px 28px'
        }}
      />

      {/* 🌊 Dynamic Glowing Orbs (Abstract Animated Visual) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Orb 1: Gainwell Blue */}
        <motion.div
          className="absolute top-1/10 right-1/10 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-[#3A55A5]/20 blur-[80px] sm:blur-[120px]"
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -60, 30, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Orb 2: Gainwell Orange */}
        <motion.div
          className="absolute bottom-1/10 left-1/10 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] rounded-full bg-[#F5872E]/10 blur-[90px] sm:blur-[140px]"
          animate={{
            x: [0, -50, 30, 0],
            y: [0, 70, -40, 0],
            scale: [1, 0.95, 1.05, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Orb 3: Gainwell Green */}
        <motion.div
          className="absolute top-1/2 left-1/3 w-[250px] sm:w-[450px] h-[250px] sm:h-[450px] rounded-full bg-[#40A748]/10 blur-[80px] sm:blur-[100px]"
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -30, 30, 0],
            scale: [1, 1.05, 0.9, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Subtle vignette overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08193C] via-transparent to-[#08193C]/30" />
      </div>

      {/* Hero Content Area */}
      <div className="relative z-10 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Two-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column: Content */}
          <div className="w-full">
            <motion.div
              className={`space-y-6 ${isMobile ? 'w-full text-center flex flex-col items-center px-2' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              {/* Main Headline — Tagline */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {/* Branding Pill */}
                <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 text-white text-xs sm:text-sm font-semibold tracking-wider uppercase backdrop-blur-sm border border-white/10 shadow-sm ${isMobile ? 'justify-center mx-auto' : ''}`}>
                  <span className="w-2 h-2 rounded-full bg-[#F5872E] animate-pulse flex-shrink-0" />
                  <span>Gainwell Institute of Integrated Talent Advancement</span>
                  <span className="w-2 h-2 rounded-full bg-[#40a748] animate-pulse flex-shrink-0" />
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-wide text-white pt-2">
                  Learning Today,<br />
                  <span className="text-[#F5872E] bg-clip-text bg-gradient-to-r from-[#F5872E] to-[#FAAD54]">Leading Tomorrow</span>
                </h2>

                <p className="text-base md:text-lg lg:text-xl text-slate-300 font-light leading-relaxed max-w-2xl mt-4">
                  GIITA is dedicated to building a future-ready workforce for the industrial sector, offering specialized training in technical skills, leadership capability, and behavioural excellence.
                </p>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className={`flex gap-4 pt-4 ${isMobile ? 'flex-col w-full max-w-xs' : 'flex-row'}`}
              >
                {/* Know Us More -> About Us */}
                <motion.button
                  onClick={() => {
                    const aboutSection = document.getElementById('about-us');
                    if (aboutSection) {
                      aboutSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary group inline-flex items-center justify-center px-7 py-3.5 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer text-sm md:text-base bg-[#F5872E] hover:bg-[#3A55A5]"
                >
                  <span>Know Us More</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                {/* Our Programs -> Programs */}
                <motion.button
                  onClick={() => {
                    const programsSection = document.getElementById('programs');
                    if (programsSection) {
                      programsSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-secondary group inline-flex items-center justify-center px-7 py-3.5 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer text-sm md:text-base bg-[#40A748] hover:bg-[#08193C] border border-white/10"
                >
                  <BookOpen className="mr-2 w-4 h-4" />
                  <span>Our Programs</span>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: Puzzle Image Gallery */}
          <div className="w-full flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
              className="w-full flex justify-center"
            >
              <PuzzleImageGallery />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;