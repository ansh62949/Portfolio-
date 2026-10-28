import React from 'react';
import { personalData } from '../../data/portfolio';
import { useDesktopStore } from '../../store/desktopStore';
import {
  Briefcase,
  Building,
  Calendar,
  MapPin,
  CheckCircle2,
  FileText,
  Folder,
  ArrowRight,
  Layers,
  Sparkles
} from 'lucide-react';

export const ExperienceApp = () => {
  const openWindow = useDesktopStore((state) => state.openWindow);

  const experiences = personalData.experience || [];

  return (
    <div className="h-full bg-[#12121c] text-white p-6 sm:p-8 overflow-y-auto custom-scrollbar select-text font-sans space-y-6">
      {/* Header Banner */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-emerald-500/10 via-white/5 to-white/5 border border-emerald-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-mono font-semibold mb-2">
            <Briefcase size={13} /> Verified Work Experience
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
            Professional & Industry Engagements
          </h2>
          <p className="text-xs text-white/60 font-mono mt-1">
            Production software engineering, enterprise microservices, and applied distributed systems.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => openWindow('resume')}
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-mono font-medium flex items-center gap-2 border border-white/10 transition-colors"
          >
            <FileText size={14} className="text-emerald-400" /> View Resume PDF
          </button>
        </div>
      </div>

      {/* Experience Cards */}
      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-all space-y-5"
          >
            {/* Role & Company Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-white/10 pb-5">
              <div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#E95420]/20 border border-[#E95420]/30 flex items-center justify-center text-[#E95420]">
                    <Building size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      {exp.company}
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-[10px] font-mono">
                        Verified
                      </span>
                    </h3>
                    <div className="text-sm font-mono text-[#E95420] font-semibold">
                      {exp.role}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-white/60">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/40 border border-white/10">
                  <Calendar size={13} className="text-sky-400" /> {exp.period}
                </span>
                {exp.location && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/40 border border-white/10">
                    <MapPin size={13} className="text-amber-400" /> {exp.location}
                  </span>
                )}
              </div>
            </div>

            {/* Key Impact Metrics Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 rounded-xl bg-black/30 border border-white/5 text-center">
                <div className="text-lg font-bold text-emerald-400 font-mono">&lt;200ms</div>
                <div className="text-[10px] text-white/50 uppercase font-mono">p99 API Latency</div>
              </div>
              <div className="p-3 rounded-xl bg-black/30 border border-white/5 text-center">
                <div className="text-lg font-bold text-sky-400 font-mono">35%</div>
                <div className="text-[10px] text-white/50 uppercase font-mono">DB Load Reduction</div>
              </div>
              <div className="p-3 rounded-xl bg-black/30 border border-white/5 text-center">
                <div className="text-lg font-bold text-amber-400 font-mono">12+</div>
                <div className="text-[10px] text-white/50 uppercase font-mono">Secured Endpoints</div>
              </div>
              <div className="p-3 rounded-xl bg-black/30 border border-white/5 text-center">
                <div className="text-lg font-bold text-purple-400 font-mono">CI/CD</div>
                <div className="text-[10px] text-white/50 uppercase font-mono">Automated Pipeline</div>
              </div>
            </div>

            {/* Detailed Responsibilities & Architecture Deliverables */}
            <div className="space-y-3">
              <div className="text-xs font-mono text-white/40 uppercase tracking-wider flex items-center gap-1.5">
                <Layers size={13} className="text-[#E95420]" /> Applied Technical Contributions & Impact
              </div>
              <ul className="space-y-2.5">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-3 text-sm text-white/80 leading-relaxed">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stack Tags */}
            <div className="pt-3 border-t border-white/10 flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-white/40 uppercase tracking-wider mr-2">
                Technologies:
              </span>
              {['Java 21', 'Spring Boot 3.x', 'PostgreSQL', 'Apache Kafka', 'Redis GEO', 'Docker', 'GitHub Actions', 'Spring Security', 'REST APIs', 'JWT'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-white/70"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Quick Navigation Footer */}
      <div className="p-6 rounded-3xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
            <Sparkles size={14} className="text-amber-400" /> Explore Corresponding Applied Projects
          </h4>
          <p className="text-xs text-white/50 font-mono mt-0.5">
            See the architecture implementations inspired by this enterprise experience.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => openWindow('files')}
            className="px-4 py-2 rounded-xl bg-[#E95420] text-white text-xs font-semibold flex items-center gap-2 hover:bg-[#ff6832] transition-colors shadow-lg shadow-[#E95420]/30"
          >
            <Folder size={14} /> Open Project Explorer <ArrowRight size={13} />
          </button>
        </div>
      </div>
    </div>
  );
};
