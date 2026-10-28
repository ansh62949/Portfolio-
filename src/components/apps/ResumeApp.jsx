import React, { useState } from 'react';
import { personalData } from '../../data/portfolio';
import { FileText, Download, ExternalLink } from 'lucide-react';

export const ResumeApp = () => {
  const [selectedResumeIdx, setSelectedResumeIdx] = useState(0);
  const currentResume = personalData.resumes[selectedResumeIdx] || personalData.resumes[0];

  const embedUrl = currentResume.url.startsWith('/') || currentResume.url.endsWith('.pdf')
    ? currentResume.url
    : currentResume.url.replace('/view?usp=drive_link', '/preview');

  return (
    <div className="h-full bg-[#12121c] text-white flex flex-col font-sans select-text">
      {/* Top Controls Toolbar */}
      <div className="bg-[#181824] border-b border-white/10 p-3.5 flex flex-wrap items-center justify-between gap-3 shrink-0">
        <div className="flex items-center gap-2">
          <FileText size={18} className="text-emerald-400" />
          <span className="font-bold text-xs sm:text-sm text-white">Ansh Pathak — Resume</span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300">
            Verified PDF
          </span>
        </div>

        {/* Resume Version Selector */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex bg-black/40 p-1 rounded-xl border border-white/10">
            {personalData.resumes.map((res, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedResumeIdx(idx)}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors ${
                  selectedResumeIdx === idx
                    ? 'bg-[#E95420] text-white font-bold'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {res.name}
              </button>
            ))}
          </div>

          {/* Download Action */}
          <a
            href={currentResume.url}
            download={currentResume.name.replace(/\s+/g, '_') + '.pdf'}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-1.5 rounded-xl bg-white text-black font-semibold text-xs flex items-center gap-1.5 hover:bg-emerald-400 transition-colors shadow"
          >
            <Download size={13} /> Download PDF <ExternalLink size={12} />
          </a>
        </div>
      </div>

      {/* Main Container: Native PDF Viewer */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-3 sm:p-5 flex flex-col items-center">
        {/* PDF Object / Iframe */}
        <div className="w-full max-w-5xl h-[700px] rounded-2xl overflow-hidden border border-white/15 bg-white shadow-2xl relative mb-5">
          <object
            data={embedUrl}
            type="application/pdf"
            className="w-full h-full"
          >
            <iframe
              src={embedUrl}
              title={currentResume.name}
              className="w-full h-full border-0"
            >
              <div className="p-8 text-center text-black font-mono text-xs">
                Your browser does not support inline PDF viewing.
                <a href={currentResume.url} className="text-[#E95420] underline ml-1" download>
                  Download the PDF here
                </a>.
              </div>
            </iframe>
          </object>
        </div>

        {/* Work Experience Section from Resume */}
        {personalData.experience && personalData.experience.length > 0 && (
          <div className="w-full max-w-5xl p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4 mb-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="font-bold text-sm text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E95420]" /> Work Experience & Internships
              </h3>
              <span className="text-[11px] font-mono text-emerald-400">Verified Professional Experience</span>
            </div>

            {personalData.experience.map((exp, idx) => (
              <div key={idx} className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h4 className="font-bold text-sm text-white">{exp.company}</h4>
                    <p className="text-xs text-emerald-400 font-mono">{exp.role}</p>
                  </div>
                  <span className="text-xs font-mono text-white/50">{exp.period}</span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {exp.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-white/70">
                      {t}
                    </span>
                  ))}
                </div>

                <ul className="space-y-1.5 text-xs text-white/80 list-disc pl-4 leading-relaxed">
                  {exp.bullets.map((b, bIdx) => (
                    <li key={bIdx}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
