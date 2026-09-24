import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Code, ExternalLink, Layers, Cpu, CheckCircle2, GitBranch } from 'lucide-react';

const CaseStudyModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl glass bg-[#0c0c12] rounded-3xl border border-white/15 p-6 sm:p-10 shadow-2xl z-10 my-8 max-h-[90vh] overflow-y-auto custom-scrollbar"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-colors"
          >
            <X size={20} />
          </button>

          {/* Header */}
          <div className="mb-8 pr-12">
            <div className="flex flex-wrap gap-2 items-center mb-3">
              <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono font-bold uppercase rounded-full">
                {project.architectureBadge || "Flagship Architecture"}
              </span>
              <span className="text-xs font-mono text-white/40 uppercase tracking-widest">• Engineering Case Study</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white mb-2 tracking-tight">
              {project.title}
            </h2>
            <p className="text-emerald-400 font-mono text-sm sm:text-base">{project.positioning}</p>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-8 pb-6 border-b border-white/10">
            {project.tech.map((t) => (
              <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-mono text-white/80">
                {t}
              </span>
            ))}
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="glass p-4 rounded-2xl border border-white/10 bg-white/[0.02]">
                <p className="text-emerald-400 font-display font-bold text-lg">{m}</p>
                <p className="text-[10px] font-mono text-white/40 uppercase tracking-wider">Metric Highlight</p>
              </div>
            ))}
          </div>

          {/* Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="glass p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
              <h3 className="text-white font-display font-bold text-lg mb-3 flex items-center gap-2">
                <Layers className="text-secondary" size={20} /> Engineering Challenge
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">{project.problem || project.description}</p>
            </div>

            <div className="glass p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
              <h3 className="text-white font-display font-bold text-lg mb-3 flex items-center gap-2">
                <CheckCircle2 className="text-primary" size={20} /> Architecture Solution
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">{project.solution || project.architecture}</p>
            </div>
          </div>

          {/* Deep FlowInbox Case Study Details */}
          {project.caseStudy && (
            <div className="space-y-6 mb-8 p-6 rounded-2xl bg-white/[0.02] border border-white/10">
              <h3 className="text-xl font-display font-bold text-white border-b border-white/10 pb-3 flex items-center gap-2">
                <Cpu size={20} className="text-primary" /> Technical Deep-Dive & Architecture Decisions
              </h3>

              <div className="space-y-4 text-sm leading-relaxed text-white/80">
                <div>
                  <h4 className="font-mono font-bold text-emerald-400 text-xs uppercase tracking-wider mb-1">Dual-Engine Hybrid Retrieval (RAG)</h4>
                  <p className="text-white/70">{project.caseStudy.retrievalArchitecture}</p>
                </div>

                <div>
                  <h4 className="font-mono font-bold text-sky-400 text-xs uppercase tracking-wider mb-1">Safety & Human-In-The-Loop Approval</h4>
                  <p className="text-white/70">{project.caseStudy.safetyDesign}</p>
                </div>

                <div>
                  <h4 className="font-mono font-bold text-emerald-400 text-xs uppercase tracking-wider mb-1">Kubernetes Infrastructure & Self-Healing</h4>
                  <p className="text-white/70">{project.caseStudy.infrastructure}</p>
                </div>

                <div>
                  <h4 className="font-mono font-bold text-sky-400 text-xs uppercase tracking-wider mb-1">CI/CD Pipeline & Image Publishing</h4>
                  <p className="text-white/70">{project.caseStudy.cicd}</p>
                </div>
              </div>
            </div>
          )}

          {/* Architecture Flow */}
          <div className="glass p-6 rounded-2xl border border-white/10 bg-white/[0.02] mb-8">
            <h3 className="text-white font-display font-bold text-base mb-3 flex items-center gap-2">
              <GitBranch className="text-primary" size={18} /> System Flow & Data Pipeline
            </h3>
            <p className="text-xs font-mono text-emerald-400 bg-emerald-950/40 p-4 rounded-xl border border-emerald-500/20 leading-relaxed">
              {project.architecture}
            </p>
          </div>

          {/* Key Features List */}
          <div className="mb-8">
            <h3 className="text-white font-display font-bold text-lg mb-4">Key Implementation Highlights</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.features.map((feat, i) => (
                <li key={i} className="text-xs sm:text-sm text-white/70 flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap gap-4 pt-6 border-t border-white/10">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 bg-white text-black font-semibold rounded-xl flex items-center gap-2 hover:bg-emerald-400 transition-colors text-sm"
              >
                <Code size={18} /> View GitHub Code
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

            <button
              onClick={onClose}
              className="px-6 py-3 glass text-white font-semibold rounded-xl hover:border-white/30 transition-colors text-sm ml-auto"
            >
              Close Window
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CaseStudyModal;
