import React from 'react';
import { projects } from '../../data/portfolio';
import {
  Code,
  ExternalLink,
  GitBranch,
  Layers,
  Cpu,
  CheckCircle2,
  Zap
} from 'lucide-react';

export const ProjectWindow = ({ projectId }) => {
  const project = projects.find((p) => p.id === projectId) || projects[0];

  return (
    <div className="h-full bg-[#12121c] text-white p-6 sm:p-8 overflow-y-auto custom-scrollbar select-text space-y-8 font-sans">
      {/* Top Banner / Badges */}
      <div>
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold uppercase border ${
            project.flagship
              ? 'bg-[#E95420]/15 text-[#E95420] border-[#E95420]/30'
              : 'bg-sky-500/15 text-sky-400 border-sky-500/30'
          }`}>
            {project.flagship ? 'FLAGSHIP ARCHITECTURE' : 'ARCHIVED / SYSTEMS ARCHITECTURE'}
          </span>
          <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono font-bold">
            {project.architectureBadge}
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white mb-2">
          {project.title}
        </h2>
        <p className="text-emerald-400 font-mono text-sm sm:text-base font-medium">
          {project.positioning}
        </p>
        <p className="text-white/70 text-sm sm:text-base leading-relaxed mt-4 max-w-3xl">
          {project.shortDesc}
        </p>
      </div>

      {/* Verified Metrics Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {project.metrics.map((metric, idx) => (
          <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-2 text-emerald-400 mb-1">
              <Zap size={16} />
              <span className="font-bold font-mono text-sm">{metric}</span>
            </div>
            <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider">
              Verified Engineering Metric
            </span>
          </div>
        ))}
      </div>

      {/* Technology Badges */}
      <div>
        <h4 className="text-xs font-mono uppercase tracking-wider text-white/40 mb-3">
          Technology Stack & Frameworks
        </h4>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-white/80"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Visual Pipeline / Architecture Flow Diagram */}
      <div className="p-6 rounded-2xl bg-black/40 border border-white/10 space-y-4">
        <div className="flex items-center gap-2 text-white font-semibold text-sm">
          <GitBranch size={18} className="text-[#E95420]" />
          <span>System Pipeline & Architectural Flow</span>
        </div>

        <div className="p-3.5 rounded-xl bg-[#181824] border border-white/10 font-mono text-xs text-emerald-300 leading-relaxed overflow-x-auto">
          {project.architecture}
        </div>

        {/* Pipeline Step Blocks */}
        {project.pipeline && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
            {project.pipeline.map((step, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-start gap-2.5">
                <span className="w-6 h-6 rounded-lg bg-[#E95420]/20 text-[#E95420] text-xs font-mono font-bold flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <div>
                  <p className="text-xs font-bold text-white font-mono">{step.step}</p>
                  <p className="text-[11px] text-white/60 leading-tight mt-0.5">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Engineering Challenge & Solution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <h4 className="font-bold text-white text-sm mb-2 flex items-center gap-2">
            <Layers size={16} className="text-rose-400" /> Engineering Challenge
          </h4>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
            {project.problem}
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <h4 className="font-bold text-white text-sm mb-2 flex items-center gap-2">
            <CheckCircle2 size={16} className="text-emerald-400" /> Architecture Solution
          </h4>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
            {project.solution}
          </p>
        </div>
      </div>

      {/* Case Study Deep Dive (FlowInbox) */}
      {project.caseStudy && (
        <div className="p-6 rounded-2xl bg-emerald-950/20 border border-emerald-500/20 space-y-4">
          <h4 className="font-bold text-white text-sm flex items-center gap-2 border-b border-emerald-500/20 pb-3">
            <Cpu size={18} className="text-emerald-400" /> Production Architecture Case Study
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div>
              <p className="font-mono text-emerald-400 font-bold mb-1">Dual-Engine RAG Retrieval</p>
              <p className="text-white/70 leading-relaxed">{project.caseStudy.retrievalArchitecture}</p>
            </div>
            <div>
              <p className="font-mono text-sky-400 font-bold mb-1">Safety & Human-In-The-Loop</p>
              <p className="text-white/70 leading-relaxed">{project.caseStudy.safetyDesign}</p>
            </div>
            <div>
              <p className="font-mono text-emerald-400 font-bold mb-1">Kubernetes Self-Healing</p>
              <p className="text-white/70 leading-relaxed">{project.caseStudy.infrastructure}</p>
            </div>
            <div>
              <p className="font-mono text-sky-400 font-bold mb-1">Automated CI/CD & GHCR</p>
              <p className="text-white/70 leading-relaxed">{project.caseStudy.cicd}</p>
            </div>
          </div>
        </div>
      )}

      {/* Verified Features */}
      <div>
        <h4 className="text-xs font-mono uppercase tracking-wider text-white/40 mb-3">
          Verified Implementation Features
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          {project.features.map((feat, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-white/75">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E95420] mt-1.5 shrink-0" />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Actions (GitHub Repository & Live Demo) */}
      <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-xl bg-white text-black font-semibold text-xs flex items-center gap-2 hover:bg-emerald-400 transition-colors shadow-lg"
          >
            <Code size={16} /> View GitHub Repository
          </a>
        )}

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-xl bg-[#E95420] text-white font-semibold text-xs flex items-center gap-2 hover:bg-orange-600 transition-colors shadow-lg"
          >
            <ExternalLink size={16} /> Launch Live Production Demo
          </a>
        )}
      </div>
    </div>
  );
};
