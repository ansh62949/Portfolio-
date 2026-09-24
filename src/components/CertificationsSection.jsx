import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, CheckCircle2, ShieldCheck } from 'lucide-react';
import { certifications, achievements } from '../data/portfolio';

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 px-6 bg-[#050507] relative">
      <div className="max-w-7xl mx-auto">
        {/* Certifications Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 glass rounded-full text-xs font-mono text-emerald-400 uppercase tracking-widest mb-4">
            <ShieldCheck size={14} /> Verified Credentials & Learning
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl border border-white/10 bg-white/[0.02] hover:border-emerald-500/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:bg-primary group-hover:text-black transition-colors">
                  <Award size={24} />
                </div>

                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                  {cert.credential}
                </span>

                <h3 className="text-xl font-display font-bold text-white mt-4 mb-1">
                  {cert.title}
                </h3>
                <p className="text-xs font-mono text-white/50 mb-4">{cert.issuer} • {cert.date}</p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cert.skills.map((s) => (
                    <span key={s} className="px-2 py-0.5 bg-white/5 rounded text-[11px] font-mono text-white/70">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 hover:text-white transition-colors pt-4 border-t border-white/10"
                >
                  Verify Certificate <ExternalLink size={14} />
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center lg:text-left"
        >
          <h3 className="text-2xl font-display font-bold text-white mb-6 border-b border-white/10 pb-4">
            Verified Milestones & Programs
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((item, idx) => (
              <div key={idx} className="glass p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono mb-2">
                  <CheckCircle2 size={16} /> {item.category}
                </div>
                <h4 className="font-display font-bold text-white text-base mb-2">{item.title}</h4>
                <p className="text-xs text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
