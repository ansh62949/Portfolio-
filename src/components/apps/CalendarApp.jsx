import React, { useState } from 'react';
import { calendarEvents } from '../../data/portfolio';
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Clock
} from 'lucide-react';

const categoryColorMap = {
  Learning: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  Hackathons: 'bg-[#E95420]/20 text-[#E95420] border-[#E95420]/30',
  Internships: 'bg-sky-500/20 text-sky-400 border-sky-500/30',
  Education: 'bg-purple-500/20 text-purple-400 border-purple-500/30'
};

export const CalendarApp = () => {
  // Default to October 2026 (current time around 2026)
  const [currentDate, setCurrentDate] = useState(new Date(2026, 9, 1)); // October 2026
  const [selectedEvent, setSelectedEvent] = useState(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  // Days in current month
  const firstDayOfWeek = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  return (
    <div className="h-full bg-[#12121c] text-white p-6 sm:p-8 overflow-y-auto custom-scrollbar select-none font-sans flex flex-col justify-between">
      <div className="space-y-6">
        {/* Month Navigation & Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E95420]/15 text-[#E95420] flex items-center justify-center">
              <CalendarIcon size={20} />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-display text-white">
                {monthNames[month]} {year}
              </h2>
              <p className="text-xs text-white/50 font-mono">
                Verified technical milestones and academic calendar.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prevMonth}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-colors"
              title="Previous Month"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => setCurrentDate(new Date(2026, 9, 1))}
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-mono text-white transition-colors"
            >
              Today
            </button>
            <button
              onClick={nextMonth}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-colors"
              title="Next Month"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Days of Week Header */}
        <div className="grid grid-cols-7 gap-1 text-center font-mono text-xs text-white/40 font-bold uppercase tracking-wider py-1">
          <span>Sun</span>
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-1.5 sm:gap-2">
          {/* Empty padding days */}
          {Array.from({ length: firstDayOfWeek }).map((_, i) => (
            <div key={`empty-${i}`} className="h-16 sm:h-20 rounded-xl bg-white/[0.01] border border-transparent" />
          ))}

          {/* Days */}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const dayNum = i + 1;
            const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(dayNum).padStart(2, '0')}`;
            const eventsForDay = calendarEvents.filter((ev) => ev.date === dateStr);

            return (
              <div
                key={`day-${dayNum}`}
                className={`h-16 sm:h-20 p-2 rounded-xl border flex flex-col justify-between transition-all ${
                  eventsForDay.length > 0
                    ? 'bg-white/[0.08] border-white/20 cursor-pointer hover:border-[#E95420]'
                    : 'bg-white/[0.02] border-white/5'
                }`}
                onClick={() => eventsForDay.length > 0 && setSelectedEvent(eventsForDay[0])}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-mono font-bold ${eventsForDay.length > 0 ? 'text-white' : 'text-white/40'}`}>
                    {dayNum}
                  </span>
                  {eventsForDay.length > 0 && (
                    <span className="w-2 h-2 rounded-full bg-[#E95420] animate-pulse" />
                  )}
                </div>

                <div className="space-y-0.5 overflow-hidden">
                  {eventsForDay.map((ev, idx) => (
                    <div
                      key={idx}
                      className="text-[9px] font-mono truncate px-1 py-0.5 rounded bg-black/40 text-emerald-300 font-semibold"
                      title={ev.title}
                    >
                      {ev.title}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Event Detail Modal / Drawer */}
        {selectedEvent && (
          <div className="p-4 rounded-2xl bg-[#181824] border border-white/15 space-y-2 select-text animate-fadeIn">
            <div className="flex items-center justify-between">
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${categoryColorMap[selectedEvent.category] || 'bg-white/10 text-white'}`}>
                {selectedEvent.category} • {selectedEvent.badge}
              </span>
              <button
                onClick={() => setSelectedEvent(null)}
                className="text-xs text-white/50 hover:text-white"
              >
                ✕ Dismiss
              </button>
            </div>
            <h4 className="font-bold text-sm text-white">{selectedEvent.title}</h4>
            <p className="text-xs text-white/70">{selectedEvent.description}</p>
            <p className="text-[11px] font-mono text-white/40 flex items-center gap-1">
              <Clock size={12} /> Date: {selectedEvent.date}
            </p>
          </div>
        )}
      </div>

      {/* Legend & Categories */}
      <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-white/60">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Learning</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#E95420]" />
            <span>Hackathons</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-sky-400" />
            <span>Internships</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-purple-400" />
            <span>Education</span>
          </div>
        </div>

        <span className="text-white/40 text-[11px]">
          Showing verified event history from repository.
        </span>
      </div>
    </div>
  );
};
