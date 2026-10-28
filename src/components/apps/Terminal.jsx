import React, { useState, useRef, useEffect } from 'react';
import { useDesktopStore } from '../../store/desktopStore';
import { soundManager } from '../../utils/sound';
import { personalData, projects, techCategories, certifications, achievements } from '../../data/portfolio';

export const TerminalApp = () => {
  const [history, setHistory] = useState([
    {
      type: 'system',
      content: (
        <div className="space-y-1 mb-2">
          <p className="text-emerald-400 font-bold">Linux ansh-workstation 6.8.0-generic #42-Ubuntu SMP x86_64</p>
          <p className="text-white/60 text-xs">
            Welcome to Ansh's Portfolio OS Developer Shell. Type <span className="text-[#E95420] font-bold">help</span> or <span className="text-[#E95420] font-bold">neofetch</span> to get started.
          </p>
        </div>
      )
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);
  const openWindow = useDesktopStore((state) => state.openWindow);
  const soundEnabled = useDesktopStore((state) => state.soundEnabled);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (rawInput) => {
    const cmd = rawInput.trim();
    if (!cmd) return;

    if (soundEnabled) soundManager.playKeypress();

    // Add to up/down history
    setCommandHistory((prev) => [cmd, ...prev]);
    setHistoryIndex(-1);

    const lower = cmd.toLowerCase();

    // User prompt line in output
    const userLine = {
      type: 'user',
      content: (
        <div className="flex items-center gap-2">
          <span className="text-emerald-400 font-bold">ansh@ubuntu-desktop</span>
          <span className="text-white/40">:</span>
          <span className="text-sky-400 font-bold">~</span>
          <span className="text-white/50">$</span>
          <span className="text-white font-mono">{cmd}</span>
        </div>
      )
    };

    let resultOutput = null;

    if (lower === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    } else if (lower === 'help') {
      resultOutput = (
        <div className="space-y-1.5 py-1 text-xs">
          <p className="text-white/90 font-bold mb-1">Supported Commands:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 font-mono">
            <div><span className="text-emerald-400 font-bold">whoami</span> — Verified identity & bio</div>
            <div><span className="text-emerald-400 font-bold">show tech stack</span> — Categorized skills</div>
            <div><span className="text-emerald-400 font-bold">projects</span> — List flagship & systems projects</div>
            <div><span className="text-emerald-400 font-bold">certs</span> — Certifications & achievements</div>
            <div><span className="text-emerald-400 font-bold">contact</span> — Email, LinkedIn, GitHub links</div>
            <div><span className="text-emerald-400 font-bold">neofetch</span> — System info & ASCII logo</div>
            <div><span className="text-emerald-400 font-bold">sudo hire ansh</span> — Professional Easter egg</div>
            <div><span className="text-emerald-400 font-bold">clear</span> — Clear terminal output</div>
          </div>
        </div>
      );
    } else if (lower === 'whoami') {
      resultOutput = (
        <div className="space-y-2 py-1 text-xs">
          <p className="text-white font-bold text-sm">{personalData.name}</p>
          <p className="text-emerald-400 font-mono">{personalData.role}</p>
          <p className="text-white/80 max-w-xl">{personalData.summary}</p>
          <div className="pt-2 text-white/60 font-mono text-[11px] space-y-0.5">
            <p>🎓 Education: {personalData.education.institution} ({personalData.education.degree})</p>
            <p>📍 Location: {personalData.contact.location} | Graduation: {personalData.education.graduation}</p>
          </div>
        </div>
      );
    } else if (lower === 'show tech stack' || lower === 'skills' || lower === 'tech') {
      resultOutput = (
        <div className="space-y-3 py-1 text-xs">
          <p className="text-white/90 font-bold">Technical Matrix & Verified Capabilities:</p>
          <div className="space-y-2 font-mono">
            {techCategories.map((cat) => (
              <div key={cat.category} className="space-y-0.5">
                <span className="text-[#E95420] font-bold">[{cat.title}]</span>
                <div className="flex flex-wrap gap-2 pl-3">
                  {cat.items.map((item) => (
                    <span key={item.name} className="text-white/80">
                      ✓ {item.name} <span className="text-emerald-400 text-[10px]">({item.level})</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    } else if (lower === 'projects' || lower === 'ls projects') {
      const flagship = projects.filter((p) => p.flagship);
      const systems = projects.filter((p) => !p.flagship);

      resultOutput = (
        <div className="space-y-4 py-1 text-xs">
          <div>
            <p className="text-white/90 font-bold mb-2 flex items-center gap-1.5">
              <span className="text-[#E95420]">●</span> Flagship Engineering Projects (4)
            </p>
            <div className="space-y-2 font-mono">
              {flagship.map((p, idx) => (
                <div key={p.id} className="p-2.5 rounded-lg bg-white/5 border border-white/10 space-y-1">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <span className="text-emerald-400 font-bold">#{idx + 1} {p.title}</span>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => openWindow(`project-${p.id}`, { title: p.title, icon: 'Folder', customProps: { projectId: p.id } })}
                        className="px-2 py-0.5 rounded bg-[#E95420] text-white hover:bg-orange-600 text-[10px] font-sans font-semibold transition-colors"
                      >
                        Open Window
                      </button>
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noreferrer"
                          className="px-2 py-0.5 rounded bg-white/10 text-white hover:bg-white/20 text-[10px] font-sans transition-colors"
                        >
                          Source ↗
                        </a>
                      )}
                      {p.demo && (
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 text-[10px] font-sans transition-colors"
                        >
                          Demo ↗
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-white/70 text-[11px]">{p.positioning}</p>
                  <p className="text-sky-300 text-[10px]">Arch: {p.architectureBadge}</p>
                  <p className="text-emerald-400/80 text-[10px]">Metrics: {p.metrics.join(' • ')}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-white/90 font-bold mb-2 flex items-center gap-1.5">
              <span className="text-sky-400">●</span> Preserved Systems & Backend Architectures (6)
            </p>
            <div className="space-y-2 font-mono">
              {systems.map((p, idx) => (
                <div key={p.id} className="p-2.5 rounded-lg bg-white/5 border border-white/10 space-y-1">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <span className="text-sky-400 font-bold">#{idx + 1} {p.title}</span>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => openWindow(`project-${p.id}`, { title: p.title, icon: 'Folder', customProps: { projectId: p.id } })}
                        className="px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 hover:bg-sky-500/30 text-[10px] font-sans font-semibold transition-colors border border-sky-500/30"
                      >
                        Open Window
                      </button>
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noreferrer"
                          className="px-2 py-0.5 rounded bg-white/10 text-white hover:bg-white/20 text-[10px] font-sans transition-colors"
                        >
                          Source ↗
                        </a>
                      )}
                      {p.demo && (
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 text-[10px] font-sans transition-colors"
                        >
                          Demo ↗
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-white/70 text-[11px]">{p.positioning}</p>
                  <p className="text-amber-300 text-[10px]">Arch: {p.architectureBadge}</p>
                  <p className="text-emerald-400/80 text-[10px]">Metrics: {p.metrics.join(' • ')}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    } else if (lower === 'certs' || lower === 'achievements') {
      resultOutput = (
        <div className="space-y-2 py-1 text-xs font-mono">
          <p className="text-white/90 font-bold">Verified Certifications & Achievements:</p>
          {certifications.map((c, i) => (
            <div key={i} className="pl-2 border-l-2 border-emerald-500">
              <span className="text-emerald-400 font-bold">🏆 {c.title}</span>
              <span className="text-white/50 text-[10px] ml-2">({c.credential} • {c.date})</span>
            </div>
          ))}
          {achievements.map((a, i) => (
            <div key={i} className="pl-2 border-l-2 border-sky-500">
              <span className="text-sky-400 font-bold">⚡ {a.title}</span>
              <span className="text-white/50 text-[10px] ml-2">({a.desc})</span>
            </div>
          ))}
        </div>
      );
    } else if (lower === 'contact') {
      resultOutput = (
        <div className="space-y-1.5 py-1 text-xs font-mono">
          <p className="text-white/90 font-bold">Verified Contact Channels:</p>
          <p>📧 Email: <a href={`mailto:${personalData.contact.email}`} className="text-emerald-400 hover:underline">{personalData.contact.email}</a></p>
          <p>💼 LinkedIn: <a href={personalData.contact.linkedin} target="_blank" rel="noreferrer" className="text-sky-400 hover:underline">{personalData.contact.linkedin}</a></p>
          <p>🐙 GitHub: <a href={personalData.contact.github} target="_blank" rel="noreferrer" className="text-purple-400 hover:underline">{personalData.contact.github}</a></p>
          <p>📱 Phone: <span className="text-white/70">{personalData.contact.phone}</span></p>
        </div>
      );
    } else if (lower === 'neofetch') {
      resultOutput = (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 py-2 font-mono text-xs">
          <div className="md:col-span-4 text-[#E95420] whitespace-pre font-bold leading-tight select-none">
{`         _nnnn_
        dGGGGMMb
       @p~qp~~qMb
       M|@||@) M|
       @,----.JM|
      JS^\\__/  qKL
     dZP        qKRb
    dZP          qKKb
   fZP            SMMb
   HZM            MMMM
   FqM            MMMM
 __| ".        |\\dS"qML
 |    \`-.__..--'  \`-.  \\
 |         |         \\  \\
 |       ansh         \\  \\`}
          </div>
          <div className="md:col-span-8 space-y-1">
            <p className="text-emerald-400 font-bold text-sm">ansh@ubuntu-workstation</p>
            <p className="text-white/40">-------------------------</p>
            <p><span className="text-[#E95420] font-bold">OS:</span> Ubuntu 24.04 LTS (Ansh Portfolio OS)</p>
            <p><span className="text-[#E95420] font-bold">Host:</span> Software Engineer Workstation</p>
            <p><span className="text-[#E95420] font-bold">Kernel:</span> 6.8.0-42-generic</p>
            <p><span className="text-[#E95420] font-bold">Uptime:</span> 1337 days (Active Learner)</p>
            <p><span className="text-[#E95420] font-bold">Shell:</span> zsh 5.9 (x86_64-ubuntu-linux-gnu)</p>
            <p><span className="text-[#E95420] font-bold">Identity:</span> Backend & AI Systems Engineer</p>
            <p><span className="text-[#E95420] font-bold">Key Stack:</span> Java 21, Spring Boot 3.5, FastAPI, LangGraph, Kafka, Redis</p>
            <p><span className="text-[#E95420] font-bold">Infrastructure:</span> Docker, Kubernetes Self-Healing, GHCR CI/CD</p>
            <p><span className="text-[#E95420] font-bold">Flagships:</span> FlowInbox AI, PRSense AI, HerRide, AI Mock Interview Coach</p>
            <div className="flex gap-1.5 pt-2">
              <span className="w-4 h-4 bg-black rounded" />
              <span className="w-4 h-4 bg-[#E95420] rounded" />
              <span className="w-4 h-4 bg-emerald-500 rounded" />
              <span className="w-4 h-4 bg-sky-500 rounded" />
              <span className="w-4 h-4 bg-purple-500 rounded" />
              <span className="w-4 h-4 bg-amber-500 rounded" />
              <span className="w-4 h-4 bg-white rounded" />
            </div>
          </div>
        </div>
      );
    } else if (lower === 'sudo hire ansh') {
      if (soundEnabled) soundManager.playFanfare();
      resultOutput = (
        <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-white font-mono space-y-2 text-xs">
          <p className="text-emerald-400 font-bold text-sm">🎉 [PRIVILEGED COMMAND AUTHORIZED]</p>
          <p className="text-white/90">
            [sudo] password for recruiter: **********
          </p>
          <p className="text-emerald-300">
            [SUCCESS] Ansh Pathak has received your engineering contract proposal!
          </p>
          <p className="text-white/70">
            "Candidate verified: 300+ DSA problems solved, production-oriented multi-agent workflows, Kubernetes self-healing architecture, and low-latency distributed systems."
          </p>
          <div className="pt-2 flex flex-wrap gap-2">
            <a
              href={`mailto:${personalData.contact.email}?subject=Interview%20Invitation%20for%20Ansh%20Pathak&body=Hi%20Ansh,%20we%20reviewed%20your%20portfolio%20OS%20and%20would%20love%20to%20connect!`}
              className="px-3 py-1.5 rounded-lg bg-emerald-500 text-black font-bold font-sans hover:bg-emerald-400 transition-colors"
            >
              Confirm Interview / Offer Letter
            </a>
            <button
              onClick={() => openWindow('contacts')}
              className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-sans transition-colors"
            >
              Open Contact Window
            </button>
          </div>
        </div>
      );
    } else {
      resultOutput = (
        <p className="text-rose-400 font-mono text-xs">
          zsh: command not found: {cmd}. Type <span className="text-emerald-400 font-bold">help</span> to view available commands.
        </p>
      );
    }

    setHistory((prev) => [...prev, userLine, { type: 'result', content: resultOutput }]);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIdx = Math.min(historyIndex + 1, commandHistory.length - 1);
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[nextIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      // Tab completion
      const supported = ['help', 'whoami', 'show tech stack', 'projects', 'certs', 'contact', 'neofetch', 'clear', 'sudo hire ansh'];
      const match = supported.find((c) => c.startsWith(inputVal.toLowerCase()));
      if (match) setInputVal(match);
    }
  };

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      className="h-full bg-[#0d0d15] text-white p-4 font-mono text-xs overflow-y-auto flex flex-col justify-between"
    >
      <div className="space-y-2 mb-4">
        {history.map((item, idx) => (
          <div key={idx}>{item.content}</div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Input Prompt */}
      <div className="flex items-center gap-2 pt-2 border-t border-white/10 sticky bottom-0 bg-[#0d0d15]/95">
        <span className="text-emerald-400 font-bold">ansh@ubuntu-desktop</span>
        <span className="text-white/40">:</span>
        <span className="text-sky-400 font-bold">~</span>
        <span className="text-white/50">$</span>
        <input
          ref={inputRef}
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
          className="flex-1 bg-transparent text-white focus:outline-none font-mono text-xs caret-emerald-400"
          placeholder="type 'help' or 'sudo hire ansh'..."
        />
      </div>
    </div>
  );
};
