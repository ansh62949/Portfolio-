import React from 'react';
import { personalData, whatIBuildPillars } from '../../data/portfolio';
import {
  GraduationCap,
  Server,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  Terminal
} from 'lucide-react';

const iconMap = {
  Server,
  Cpu,
  ShieldCheck
};

export const AboutApp = () => {
  return (
    <div className="h-full bg-[#12121c] text-white p-6 sm:p-8 overflow-y-auto custom-scrollbar select-text font-sans space-y-8">
      {/* Intro Hero Block */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10">
        <img
          src="/profile.jpg"
          alt={personalData.name}
          className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl object-cover border-2 border-white/20 shadow-2xl shrink-0"
        />

        <div className="space-y-2 text-center md:text-left flex-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E95420]/15 text-[#E95420] text-xs font-mono font-semibold">
            <Terminal size={13} /> Engineering Identity
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-white">
            {personalData.name}
          </h2>
          <p className="text-emerald-400 font-mono text-sm sm:text-base font-medium">
            {personalData.role}
          </p>
          <p className="text-xs sm:text-sm text-white/75 leading-relaxed pt-1">
            "{personalData.summary}"
          </p>
        </div>
      </div>

      {/* Narrative & Education */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Technical Narrative (Left) */}
        <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 space-y-4 text-xs sm:text-sm text-white/80 leading-relaxed">
          <h3 className="text-base font-bold text-white font-display flex items-center gap-2">
            <Cpu size={18} className="text-[#E95420]" /> Technical Focus & Philosophy
          </h3>
          <p>
            I am a <strong className="text-white">Computer Science & Engineering (AI)</strong> student at <strong className="text-white">{personalData.education.institution}</strong>. Rather than focusing solely on generic web development or standalone machine learning models, I build <strong className="text-emerald-400">production-oriented backend systems, distributed architectures, and autonomous AI agent workflows</strong>.
          </p>
          <p>
            My primary foundation centers on <strong className="text-white">Java 21 & Spring Boot 3.5</strong> for enterprise REST services and microservices, alongside <strong className="text-white">Python & FastAPI</strong> for asynchronous AI pipelines. I leverage <strong className="text-sky-400">Apache Kafka</strong> for event streaming decoupling, <strong className="text-sky-400">Redis & Redis GEO</strong> for sub-second spatial querying, and <strong className="text-emerald-400">LangGraph StateGraph</strong> for multi-agent workflows.
          </p>
          <p>
            I prioritize engineering rigour: containerizing services with <strong className="text-white">Docker</strong>, orchestrating deployments with <strong className="text-white">Kubernetes</strong> (featuring liveness/readiness probes and self-healing pod replacement), enforcing <strong className="text-white">automated Pytest test suites</strong>, and publishing builds via <strong className="text-white">GitHub Actions CI/CD to GHCR</strong>.
          </p>
        </div>

        {/* Education & Key Stats (Right) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-3">
            <div className="flex items-center gap-2 text-sky-400">
              <GraduationCap size={22} />
              <h4 className="font-bold text-sm text-white">Academic Foundation</h4>
            </div>
            <p className="font-bold text-sm text-white leading-tight">{personalData.education.institution}</p>
            <p className="text-xs text-sky-300 font-medium">{personalData.education.degree}</p>

            <div className="pt-3 border-t border-white/10 text-xs font-mono text-white/60 flex justify-between">
              <span>Graduation: {personalData.education.graduation}</span>
              <span className="font-bold text-emerald-400">GPA: {personalData.education.gpa}</span>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-2">
            <h4 className="text-[11px] font-mono uppercase tracking-wider text-white/40">Verified Signals</h4>
            <div className="space-y-1.5 text-xs text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                <span>300+ DSA Problems Solved</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                <span>6-Agent LangGraph StateGraph</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                <span>Dual-Engine Hybrid RAG</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                <span>Kubernetes Demonstrated Self-Healing</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Work Experience Section */}
      {personalData.experience && personalData.experience.length > 0 && (
        <div className="p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <h3 className="text-base font-bold text-white font-display flex items-center gap-2">
              <Server size={18} className="text-[#E95420]" /> Professional Work Experience
            </h3>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              Internship
            </span>
          </div>

          {personalData.experience.map((exp, idx) => (
            <div key={idx} className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <h4 className="font-bold text-base text-white">{exp.company}</h4>
                  <p className="text-xs text-emerald-400 font-mono">{exp.role}</p>
                </div>
                <span className="text-xs font-mono text-white/50">{exp.period}</span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {exp.tech.map((t) => (
                  <span key={t} className="px-2.5 py-0.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-white/70">
                    {t}
                  </span>
                ))}
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-white/80 list-disc pl-5 leading-relaxed pt-1">
                {exp.bullets.map((b, bIdx) => (
                  <li key={bIdx}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Core Architecture Pillars */}
      <div className="space-y-4">
        <h3 className="text-xs font-mono uppercase tracking-wider text-white/40">
          Core Engineering Pillars
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {whatIBuildPillars.map((p) => {
            const Icon = iconMap[p.icon] || Server;
            return (
              <div key={p.id} className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#E95420]/15 text-[#E95420] flex items-center justify-center">
                  <Icon size={20} />
                </div>
                <h4 className="font-bold text-sm text-white">{p.title}</h4>
                <p className="text-xs text-white/60 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-1 pt-2 border-t border-white/10">
                  {p.skills.map((s) => (
                    <span key={s} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-white/70">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
