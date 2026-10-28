import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { personalData } from '../../data/portfolio';
import { useDesktopStore } from '../../store/desktopStore';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { Terminal, Code, FileText, ArrowRight, Sparkles, Briefcase } from 'lucide-react';

export const DesktopHero = () => {
  const headlineRef = useRef(null);
  const containerRef = useRef(null);
  const openWindow = useDesktopStore((state) => state.openWindow);
  const reducedMotion = useReducedMotion();

  // Letter-by-letter GSAP entrance animation
  useEffect(() => {
    if (reducedMotion || !headlineRef.current) return;

    const chars = headlineRef.current.querySelectorAll('.hero-char');
    const ctx = gsap.context(() => {
      gsap.fromTo(
        chars,
        { opacity: 0, y: 30, rotateX: -60 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          stagger: 0.035,
          duration: 0.7,
          ease: 'power3.out'
        }
      );

      gsap.fromTo(
        '.hero-fade',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.4, stagger: 0.1, ease: 'power2.out' }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  const nameLetters = personalData.name.split('');

  return (
    <div
      ref={containerRef}
      className="relative z-10 max-w-4xl mx-auto px-6 pt-16 pb-12 sm:pt-24 sm:pb-20 text-center select-none"
    >
      {/* Intro Tag */}
      <div className="hero-fade inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#E95420] text-xs font-mono font-semibold mb-5 backdrop-blur-md">
        <Sparkles size={13} className="text-[#E95420] animate-pulse" />
        <span>{personalData.intro}</span>
      </div>

      {/* Very Large Headline with Letter-by-Letter Entrance */}
      <h1
        ref={headlineRef}
        className="text-5xl sm:text-7xl md:text-8xl font-black font-display tracking-tight text-white mb-4 leading-none"
        style={{ perspective: 1000 }}
      >
        {nameLetters.map((char, i) => (
          <span
            key={i}
            className="hero-char inline-block"
            style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
          >
            {char}
          </span>
        ))}
      </h1>

      {/* Role / Subtitle */}
      <div className="hero-fade text-lg sm:text-2xl font-mono text-emerald-400 font-semibold mb-4 tracking-wide">
        Software Engineer, backend and AI engineering.
      </div>

      {/* Exact Tagline */}
      <p className="hero-fade text-sm sm:text-lg text-white/75 max-w-2xl mx-auto leading-relaxed font-sans mb-8">
        "{personalData.tagline}"
      </p>

      {/* Action Triggers */}
      <div className="hero-fade flex flex-wrap justify-center items-center gap-3">
        <button
          onClick={() => openWindow('terminal')}
          className="px-5 py-2.5 rounded-xl bg-[#E95420] text-white font-semibold text-xs sm:text-sm flex items-center gap-2 hover:bg-[#ff6832] transition-colors shadow-lg shadow-[#E95420]/30 active:scale-95"
        >
          <Terminal size={16} /> Open Terminal <ArrowRight size={14} />
        </button>

        <button
          onClick={() => openWindow('experience')}
          className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 border border-emerald-500/30 transition-colors backdrop-blur-md active:scale-95 shadow-lg shadow-emerald-500/10"
        >
          <Briefcase size={16} className="text-emerald-400" /> Work Experience
        </button>

        <button
          onClick={() => openWindow('files')}
          className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 border border-white/15 transition-colors backdrop-blur-md active:scale-95"
        >
          <Code size={16} className="text-sky-400" /> Explore Flagship Projects
        </button>

        <button
          onClick={() => openWindow('resume')}
          className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/15 text-white/80 hover:text-white font-medium text-xs sm:text-sm flex items-center gap-1.5 border border-white/10 transition-colors backdrop-blur-md"
        >
          <FileText size={15} className="text-emerald-400" /> Resume PDF
        </button>
      </div>

      {/* Verified Metrics Badge Strip */}
      <div className="hero-fade mt-10 inline-flex flex-wrap justify-center items-center gap-3 px-5 py-2.5 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 text-xs font-mono text-white/80">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>300+ DSA Problems</span>
        </div>
        <span className="text-white/20">•</span>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
          <span>6-Agent AI Workflows</span>
        </div>
        <span className="text-white/20">•</span>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
          <span>RAG + Vector Search</span>
        </div>
        <span className="text-white/20">•</span>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          <span>Kafka + Redis GEO</span>
        </div>
        <span className="text-white/20">•</span>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
          <span>Kubernetes Self-Healing</span>
        </div>
      </div>
    </div>
  );
};
