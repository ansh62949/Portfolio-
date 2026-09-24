import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Code, ExternalLink, Layers, Cpu, CheckCircle2 } from 'lucide-react';
import { projects } from '../data/portfolio';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#050507] text-white flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-display font-bold mb-4">Project Not Found</h1>
        <p className="text-white/60 mb-8 font-mono text-sm">The requested project identifier "{id}" does not exist in the portfolio registry.</p>
        <Link to="/" className="px-6 py-3 bg-primary text-black font-semibold rounded-xl flex items-center gap-2">
          <ArrowLeft size={18} /> Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050507] text-white pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Back Link */}
        <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-emerald-400 font-mono text-xs transition-colors mb-10">
          <ArrowLeft size={16} /> Back to Portfolio
        </Link>

        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass p-8 sm:p-12 rounded-3xl border border-white/15 bg-white/[0.02] mb-12"
        >
          <div className="flex flex-wrap gap-2 items-center mb-4">
            <span className="px-3.5 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono font-bold rounded-full uppercase">
              {project.architectureBadge || (project.flagship ? "FLAGSHIP PROJECT" : "SYSTEMS PROJECT")}
            </span>
            <span className="text-xs font-mono text-white/40 uppercase tracking-widest">• Engineering Case Study</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white mb-2 tracking-tight">
            {project.title}
          </h1>
          <p className="text-emerald-400 font-mono text-sm sm:text-base mb-6">{project.positioning}</p>

          <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-3xl mb-8 font-sans">
            {project.shortDesc}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((t) => (
              <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-mono text-white/80">
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-6 border-t border-white/10">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 bg-white text-black font-semibold rounded-xl flex items-center gap-2 hover:bg-emerald-400 transition-colors text-sm"
              >
                <Code size={18} /> View GitHub Source
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 bg-primary text-black font-semibold rounded-xl flex items-center gap-2 hover:bg-white transition-colors text-sm"
              >
                <ExternalLink size={18} /> Live Demo
              </a>
            )}
          </div>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="glass p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
              <p className="text-emerald-400 font-display font-bold text-xl">{m}</p>
              <p className="text-xs font-mono text-white/40 uppercase tracking-wider mt-1">Verified Metric</p>
            </div>
          ))}
        </div>

        {/* Architecture & Challenge */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="glass p-8 rounded-3xl border border-white/10 bg-white/[0.02]">
            <h3 className="text-xl font-display font-bold text-white mb-4 flex items-center gap-2">
              <Layers className="text-secondary" size={22} /> Engineering Challenge
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">{project.problem || project.description}</p>
          </div>

          <div className="glass p-8 rounded-3xl border border-white/10 bg-white/[0.02]">
            <h3 className="text-xl font-display font-bold text-white mb-4 flex items-center gap-2">
              <CheckCircle2 className="text-primary" size={22} /> Solution & System Design
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">{project.solution || project.architecture}</p>
          </div>
        </div>

        {/* Deep Case Study section if available */}
        {project.caseStudy && (
          <div className="glass p-8 sm:p-10 rounded-3xl border border-white/15 bg-white/[0.02] mb-12 space-y-6">
            <h3 className="text-2xl font-display font-bold text-white border-b border-white/10 pb-4 flex items-center gap-2">
              <Cpu className="text-emerald-400" size={24} /> Architecture & Deep-Dive Notes
            </h3>

            <div className="space-y-6 text-sm text-white/80 leading-relaxed font-sans">
              <div>
                <h4 className="font-mono font-bold text-emerald-400 text-xs uppercase tracking-wider mb-2">Retrieval Architecture</h4>
                <p className="text-white/70">{project.caseStudy.retrievalArchitecture}</p>
              </div>

              <div>
                <h4 className="font-mono font-bold text-sky-400 text-xs uppercase tracking-wider mb-2">Safety & Approvals</h4>
                <p className="text-white/70">{project.caseStudy.safetyDesign}</p>
              </div>

              <div>
                <h4 className="font-mono font-bold text-emerald-400 text-xs uppercase tracking-wider mb-2">Infrastructure & Self-Healing</h4>
                <p className="text-white/70">{project.caseStudy.infrastructure}</p>
              </div>

              <div>
                <h4 className="font-mono font-bold text-sky-400 text-xs uppercase tracking-wider mb-2">CI/CD & Publishing</h4>
                <p className="text-white/70">{project.caseStudy.cicd}</p>
              </div>
            </div>
          </div>
        )}

        {/* Features List */}
        <div className="glass p-8 rounded-3xl border border-white/10 bg-white/[0.02]">
          <h3 className="text-xl font-display font-bold text-white mb-6">Key Implementation Details</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.features.map((feat, i) => (
              <li key={i} className="text-sm text-white/70 flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
