import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { FileText, Code, Mail, ExternalLink, ChevronDown, Terminal } from 'lucide-react';
import { personalData } from '../data/portfolio';

const GithubIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Hero = () => {
  const [resumeMenuOpen, setResumeMenuOpen] = useState(false);

  return (
    <section className="min-h-screen flex flex-col justify-between pt-28 pb-12 px-6 relative overflow-hidden bg-[#050507]">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 -left-20 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto">
        {/* Left Column: Technical Narrative & Positioning */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-7 text-center lg:text-left"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full text-emerald-400 text-xs font-mono font-semibold mb-6 tracking-wide border border-emerald-500/20 bg-emerald-500/5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            AVAILABLE FOR SOFTWARE / BACKEND / AI ROLES
          </div>
          
          {/* Name & Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold leading-[1.08] mb-4 tracking-tight">
            {personalData.name} <br />
            <span className="gradient-text font-black">Backend & AI Engineer</span>
          </h1>
          
          {/* Typewriter Specializations */}
          <div className="text-xl sm:text-2xl font-mono text-white/80 mb-6 flex items-center justify-center lg:justify-start gap-2 h-10">
            <Terminal size={22} className="text-primary shrink-0" />
            <Typewriter
              options={{
                strings: [
                  "Distributed Backend Systems",
                  "LangGraph Multi-Agent RAG",
                  "FastAPI & Spring Boot Architectures",
                  "Kubernetes & Cloud Infrastructure"
                ],
                autoStart: true,
                loop: true,
                wrapperClassName: "text-white font-mono",
                cursorClassName: "text-primary"
              }}
            />
          </div>
          
          {/* Value Proposition */}
          <p className="text-base sm:text-lg text-white/65 max-w-2xl mb-8 leading-relaxed font-sans">
            {personalData.summary}
          </p>
          
          {/* CTAs */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start items-center relative z-20">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3.5 bg-primary text-black font-semibold rounded-xl flex items-center gap-2 hover:bg-emerald-400 transition-colors shadow-lg shadow-primary/20"
            >
              <Code size={18} />
              View Flagship Projects
            </motion.a>

            <motion.a
              href={personalData.contact.github}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3.5 glass text-white font-semibold rounded-xl flex items-center gap-2 hover:border-white/30 transition-colors"
            >
              <GithubIcon size={18} />
              GitHub
            </motion.a>

            {/* Resume Dropdown Menu */}
            <div className="relative">
              <motion.button
                onClick={() => setResumeMenuOpen(!resumeMenuOpen)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3.5 glass text-white font-semibold rounded-xl flex items-center gap-2 hover:border-primary/40 transition-colors"
              >
                <FileText size={18} className="text-primary" />
                Resume
                <ChevronDown size={16} className={`transition-transform ${resumeMenuOpen ? 'rotate-180' : ''}`} />
              </motion.button>

              <AnimatePresence>
                {resumeMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute left-0 lg:left-0 mt-2 w-56 glass bg-[#0f0f15]/95 rounded-xl p-2 border border-white/10 shadow-2xl z-50 backdrop-blur-xl"
                  >
                    <p className="text-[10px] uppercase font-mono tracking-wider text-white/40 px-3 py-1.5">Select Resume Version</p>
                    {personalData.resumes.map((res, idx) => (
                      <a
                        key={idx}
                        href={res.url}
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => setResumeMenuOpen(false)}
                        className="flex items-center justify-between px-3 py-2 text-sm text-white/80 hover:text-primary hover:bg-white/5 rounded-lg transition-colors"
                      >
                        {res.name}
                        <ExternalLink size={14} className="text-white/40" />
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Social Quick Links */}
          <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-white/50">
            <a href={personalData.contact.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-2 text-sm font-medium">
              <LinkedinIcon size={18} /> LinkedIn
            </a>
            <span className="text-white/20">•</span>
            <a href={`mailto:${personalData.contact.email}`} className="hover:text-primary transition-colors flex items-center gap-2 text-sm font-medium">
              <Mail size={18} /> Email
            </a>
          </div>
        </motion.div>

        {/* Right Column: Clean Profile Image Frame */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
            {/* Subtle glow border frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-3xl blur-2xl opacity-60 animate-pulse-slow" />
            
            <div className="relative w-full h-full glass rounded-3xl p-3 border border-white/10 group bg-[#0d0d12]">
              <div className="w-full h-full rounded-2xl overflow-hidden relative">
                <img 
                  src="/profile.jpg" 
                  alt="Ansh Pathak - Backend & AI Engineer" 
                  className="w-full h-full object-cover object-center filter brightness-95 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
                
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-white font-display font-bold text-xl">{personalData.name}</p>
                  <p className="text-emerald-400 font-mono text-xs tracking-wider uppercase">B.Tech CSE (AI) • 2027</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Engineering Highlights Strip (MANDATORY DIRECTLY UNDER HERO) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="max-w-7xl mx-auto w-full mt-12 pt-6 border-t border-white/10"
      >
        <div className="glass px-6 py-4 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-wrap justify-around items-center gap-4 sm:gap-6 text-center text-xs sm:text-sm font-mono text-white/80">
          {personalData.highlights.map((highlight, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>{highlight}</span>
              {index < personalData.highlights.length - 1 && (
                <span className="hidden md:inline text-white/20 ml-4">•</span>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
