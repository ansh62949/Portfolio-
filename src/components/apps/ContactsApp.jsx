import React, { useState } from 'react';
import { personalData } from '../../data/portfolio';
import {
  Mail,
  Send,
  CheckCircle2,
  Phone,
  MessageSquare
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

export const ContactsApp = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Preserved functioning mailto dispatch from existing portfolio
    const mailtoSubject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalData.contact.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
  };

  return (
    <div className="h-full bg-[#12121c] text-white p-6 sm:p-8 overflow-y-auto custom-scrollbar select-text font-sans space-y-8">
      {/* Profile Header Block */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 rounded-3xl bg-white/5 border border-white/10">
        <div className="relative shrink-0">
          <img
            src="/profile.jpg"
            alt={personalData.name}
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-2 border-[#E95420]/40 shadow-xl"
          />
          <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-[#12121c]" title="Available for opportunities" />
        </div>

        <div className="text-center sm:text-left space-y-1.5 flex-1">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open to Backend & AI Engineering Roles</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
            {personalData.name}
          </h2>

          <p className="text-xs sm:text-sm text-emerald-400 font-mono">
            {personalData.role}
          </p>

          <p className="text-xs text-white/60 leading-relaxed font-sans pt-1">
            {personalData.education.institution} • {personalData.education.degree}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Direct Channel Cards (Left Column) */}
        <div className="lg:col-span-5 space-y-4">
          <h3 className="text-xs font-mono uppercase tracking-wider text-white/40">
            Direct Verified Channels
          </h3>

          {/* Email Card */}
          <a
            href={`mailto:${personalData.contact.email}`}
            className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/50 hover:bg-white/[0.08] transition-all flex items-center gap-4 group"
          >
            <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
              <Mail size={20} />
            </div>
            <div className="overflow-hidden">
              <p className="text-[10px] font-mono text-white/40 uppercase">Email Address</p>
              <p className="text-sm font-semibold text-white truncate">{personalData.contact.email}</p>
            </div>
          </a>

          {/* LinkedIn Card */}
          <a
            href={personalData.contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-sky-500/50 hover:bg-white/[0.08] transition-all flex items-center gap-4 group"
          >
            <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center shrink-0 group-hover:bg-sky-500 group-hover:text-black transition-colors">
              <LinkedinIcon size={20} />
            </div>
            <div className="overflow-hidden">
              <p className="text-[10px] font-mono text-white/40 uppercase">LinkedIn Profile</p>
              <p className="text-sm font-semibold text-white truncate">linkedin.com/in/anshpathak</p>
            </div>
          </a>

          {/* GitHub Card */}
          <a
            href={personalData.contact.github}
            target="_blank"
            rel="noreferrer"
            className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/[0.08] transition-all flex items-center gap-4 group"
          >
            <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 group-hover:bg-purple-500 group-hover:text-white transition-colors">
              <GithubIcon size={20} />
            </div>
            <div className="overflow-hidden">
              <p className="text-[10px] font-mono text-white/40 uppercase">GitHub Profile</p>
              <p className="text-sm font-semibold text-white truncate">github.com/ansh62949</p>
            </div>
          </a>

          {/* Phone Card */}
          {personalData.contact.phone && (
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 text-white/70 flex items-center justify-center shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-[10px] font-mono text-white/40 uppercase">Direct Phone</p>
                <p className="text-sm font-semibold text-white">{personalData.contact.phone}</p>
              </div>
            </div>
          )}
        </div>

        {/* Interactive Direct Message Form (Right Column) */}
        <div className="lg:col-span-7 p-6 rounded-3xl bg-white/[0.03] border border-white/10">
          {submitted ? (
            <div className="text-center py-10 space-y-3">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                <CheckCircle2 size={30} />
              </div>
              <h4 className="text-lg font-bold text-white">Opening Email Client...</h4>
              <p className="text-xs text-white/60 max-w-sm mx-auto">
                Your email draft has been generated. If your client did not launch automatically, feel free to send a message directly to <strong className="text-emerald-400">{personalData.contact.email}</strong>.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-mono text-white"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare size={16} className="text-[#E95420]" />
                <h4 className="font-bold text-sm text-white">Send Direct Communication</h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-white/50 uppercase">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#E95420]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-white/50 uppercase">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#E95420]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono text-white/50 uppercase">Message</label>
                <textarea
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Discuss an opportunity, project collaboration, or technical inquiry..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#E95420]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#E95420] text-white font-semibold text-xs flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors shadow-lg shadow-[#E95420]/20"
              >
                Launch Direct Email Inquiry <Send size={14} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
