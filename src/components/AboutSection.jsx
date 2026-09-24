import React from 'react';
import { motion } from 'framer-motion';
import { Server, Cpu, ShieldCheck, Terminal, CheckCircle2, GraduationCap } from 'lucide-react';
import { personalData, whatIBuildPillars } from '../data/portfolio';

const iconMap = {
  Server: Server,
  Cpu: Cpu,
  ShieldCheck: ShieldCheck
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 bg-[#08080c] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 glass rounded-full text-xs font-mono text-primary uppercase tracking-widest mb-4">
            <Terminal size={14} /> Technical Story & Focus
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight text-white">
            Engineering Identity & <span className="gradient-text">Core Pillars</span>
          </h2>
        </motion.div>

        {/* Technical Narrative Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 space-y-6 text-white/75 text-base sm:text-lg leading-relaxed font-sans glass p-8 sm:p-10 rounded-3xl border border-white/10 bg-white/[0.02]"
          >
            <p>
              I am a <strong className="text-white font-semibold">Computer Science & Engineering (AI)</strong> student at <strong className="text-white font-semibold">{personalData.education.institution}</strong> (Graduation: {personalData.education.graduation}). Rather than focusing solely on generic web development or standalone machine learning models, I build <strong className="text-emerald-400 font-semibold">production-oriented backend systems, distributed architectures, and autonomous AI agent workflows</strong>.
            </p>
            <p>
              My primary technical foundation centers on <strong className="text-white font-semibold">Java 21 & Spring Boot 3.5</strong> for enterprise REST services and microservices, alongside <strong className="text-white font-semibold">Python & FastAPI</strong> for asynchronous AI pipelines. I leverage <strong className="text-sky-400 font-semibold">Apache Kafka</strong> for event streaming decoupling, <strong className="text-sky-400 font-semibold">Redis & Redis GEO</strong> for sub-second spatial querying, and <strong className="text-emerald-400 font-semibold">LangGraph StateGraph</strong> for multi-agent workflows.
            </p>
            <p>
              I prioritize engineering rigour: containerizing services with <strong className="text-white font-semibold">Docker</strong>, orchestrating deployments with <strong className="text-white font-semibold">Kubernetes</strong> (featuring liveness/readiness probes and self-healing pod replacement), enforcing <strong className="text-white font-semibold">automated Pytest & JUnit suites</strong>, and publishing builds via <strong className="text-white font-semibold">GitHub Actions CI/CD to GHCR</strong>.
            </p>
          </motion.div>

          {/* Quick Stats & Education Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-6"
          >
            <div className="glass p-6 sm:p-8 rounded-3xl border border-white/10 bg-white/[0.02]">
              <div className="flex items-center gap-3 text-secondary mb-4">
                <GraduationCap size={28} />
                <h3 className="font-display font-bold text-xl text-white">Education</h3>
              </div>
              <p className="font-bold text-white text-base">{personalData.education.institution}</p>
              <p className="text-sm text-secondary font-medium mt-1">{personalData.education.degree}</p>
              <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/10 text-xs font-mono text-white/60">
                <span>Graduation: {personalData.education.graduation}</span>
                <span className="px-2.5 py-1 bg-white/10 rounded-full font-bold text-white">GPA: {personalData.education.gpa}</span>
              </div>
            </div>

            <div className="glass p-6 sm:p-8 rounded-3xl border border-white/10 bg-white/[0.02]">
              <h4 className="font-mono text-xs uppercase text-white/40 tracking-wider mb-4">Engineering Focus</h4>
              <ul className="space-y-3 text-sm text-white/80">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  Backend & Distributed Microservices
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  LangGraph Stateful Multi-Agent AI Workflows
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  Dense Vector + PostgreSQL Hybrid RAG Search
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  Kubernetes Self-Healing Infra & GHCR CI/CD
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* "WHAT I BUILD" 3-Pillar Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-white/40 mb-8 text-center sm:text-left">
            Core Architecture Pillars
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whatIBuildPillars.map((pillar) => {
              const IconComponent = iconMap[pillar.icon] || Server;
              return (
                <div
                  key={pillar.id}
                  className="glass p-8 rounded-3xl border border-white/10 bg-white/[0.02] hover:border-primary/40 hover:bg-white/[0.04] transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-black transition-colors">
                      <IconComponent size={28} />
                    </div>

                    <h4 className="text-xl font-display font-bold text-white mb-3 tracking-tight">
                      {pillar.title}
                    </h4>

                    <p className="text-white/60 text-sm leading-relaxed mb-6 font-sans">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                    {pillar.skills.map((s) => (
                      <span key={s} className="text-[11px] font-mono px-2.5 py-1 bg-white/5 rounded-md text-white/70 border border-white/10">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
