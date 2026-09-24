import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, Terminal, CheckCircle2 } from 'lucide-react';
import { personalData } from '../data/portfolio';

const GithubIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Construct mailto link as reliable fallback for developer portfolio
    const mailtoSubject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${personalData.contact.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#08080c] relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 glass rounded-full text-xs font-mono text-emerald-400 uppercase tracking-widest mb-4">
            <Terminal size={14} /> Get In Touch
          </div>
          <h2 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight">
            LET'S BUILD <span className="gradient-text">SOMETHING SERIOUS</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Direct Channels */}
          <div className="lg:col-span-5 space-y-8">
            <p className="text-white/70 text-base leading-relaxed font-sans">
              I am actively seeking software engineering roles focused on backend development, AI applications, LangGraph agents, and distributed systems. Feel free to reach out via email or connect on LinkedIn.
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${personalData.contact.email}`}
                className="glass p-5 rounded-2xl border border-white/10 flex items-center gap-4 hover:border-emerald-500/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-primary group-hover:text-black transition-colors">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-white/40 uppercase tracking-wider">Email Address</p>
                  <p className="text-white font-semibold text-base">{personalData.contact.email}</p>
                </div>
              </a>

              {personalData.contact.phone && (
                <a
                  href={`tel:${personalData.contact.phone}`}
                  className="glass p-5 rounded-2xl border border-white/10 flex items-center gap-4 hover:border-sky-500/40 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:bg-secondary group-hover:text-black transition-colors">
                    <Phone size={22} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-white/40 uppercase tracking-wider">Phone / WhatsApp</p>
                    <p className="text-white font-semibold text-base">{personalData.contact.phone}</p>
                  </div>
                </a>
              )}
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href={personalData.contact.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-4 glass rounded-2xl border border-white/10 flex items-center justify-center gap-2 text-white font-semibold hover:border-white/40 transition-all"
              >
                <GithubIcon size={20} /> GitHub
              </a>

              <a
                href={personalData.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-4 glass rounded-2xl border border-white/10 flex items-center justify-center gap-2 text-white font-semibold hover:border-sky-500/40 transition-all"
              >
                <LinkedinIcon size={20} className="text-sky-400" /> LinkedIn
              </a>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="lg:col-span-7 glass p-8 sm:p-10 rounded-3xl border border-white/15 bg-white/[0.02]">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-display font-bold text-white">Opening Email Client...</h3>
                <p className="text-white/60 text-sm max-w-md mx-auto">
                  Your message draft has been prepared. If your email client did not launch automatically, send a direct email to <strong className="text-emerald-400">{personalData.contact.email}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 glass rounded-xl text-xs font-mono text-white/80 hover:text-white"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-display font-bold text-white mb-2">Direct Message</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase text-white/50">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-emerald-500 transition-colors text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase text-white/50">Your Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-emerald-500 transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase text-white/50">Message</label>
                  <textarea
                    rows="5"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Discuss an opportunity or technical project..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-emerald-500 transition-colors text-sm"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-black font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-emerald-400 transition-colors shadow-lg shadow-primary/20 text-sm"
                >
                  Launch Email Inquiry <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
