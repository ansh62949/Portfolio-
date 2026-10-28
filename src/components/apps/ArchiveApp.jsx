import React from 'react';
import { useDesktopStore } from '../../store/desktopStore';
import { projects } from '../../data/portfolio';
import { Server, Code, ExternalLink, ArrowRight } from 'lucide-react';

export const ArchiveApp = () => {
  const systemsProjects = projects.filter((p) => !p.flagship);
  const openWindow = useDesktopStore((state) => state.openWindow);

  return (
    <div className="h-full bg-[#12121c] text-white p-6 sm:p-8 overflow-y-auto custom-scrollbar select-text font-sans space-y-6">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <Server size={22} className="text-[#E95420]" />
            <h2 className="text-2xl font-bold font-display text-white">More Systems & Applied Engineering Projects</h2>
          </div>
          <p className="text-xs text-white/50 font-mono mt-0.5">
            Distributed execution platforms, high-concurrency event microservices, AI geospatial intelligence, acoustic models, and network socket programming.
          </p>
        </div>

        <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
          {systemsProjects.length} Verified Systems
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {systemsProjects.map((proj) => (
          <div
            key={proj.id}
            className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between space-y-4"
          >
            <div>
              <div className="flex items-start justify-between">
                <h3 className="font-bold text-base text-white">{proj.title}</h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-500/15 text-sky-300 border border-sky-500/30">
                  Systems
                </span>
              </div>
              <p className="text-xs text-[#E95420] font-mono mt-0.5">{proj.positioning}</p>
              <p className="text-xs text-white/70 mt-2 leading-relaxed">{proj.shortDesc}</p>

              <div className="flex flex-wrap gap-1.5 mt-3">
                {proj.tech.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-white/70">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs">
              <span className="font-mono text-emerald-400 text-[11px] font-semibold">{proj.metrics[0]}</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => openWindow(`project-${proj.id}`, { title: proj.title, icon: 'Folder', customProps: { projectId: proj.id } })}
                  className="px-3 py-1 rounded bg-[#E95420]/20 text-[#E95420] hover:bg-[#E95420] hover:text-white border border-[#E95420]/30 font-mono font-semibold flex items-center gap-1 transition-colors text-xs"
                >
                  Details <ArrowRight size={12} />
                </button>
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-white font-mono flex items-center gap-1 transition-colors"
                  >
                    <Code size={12} /> Source
                  </a>
                )}
                {proj.demo && (
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 font-mono flex items-center gap-1 transition-colors"
                  >
                    <ExternalLink size={12} /> Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
