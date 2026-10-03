'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const videoSrc = 'https://pub-6e380ffc48a9477ea8031f2a34a815f6.r2.dev/GIITA-V3.mp4';

type Mode = 'ILT' | 'VILT' | 'TBD';

interface TrainingItem {
  topic: string;
  date: string;
  mode: Mode;
  venue: string;
  faculty: string;
  batchSize: number;
  remarks?: string;
  start: string;
  end: string;
}

interface MonthData {
  month: string;
  year: number;
  monthIndex: number;
  color: string;
  bgColor: string;
  items: TrainingItem[];
}

const trainingCalendar: MonthData[] = [
  {
    month: 'October 2026',
    year: 2026,
    monthIndex: 9,
    color: '#3A55A5',
    bgColor: 'bg-[#3A55A5]',
    items: [
      {
        topic: 'Prioritization for Operational Excellence',
        date: '06.10.26',
        mode: 'VILT',
        venue: 'NA',
        faculty: 'External',
        batchSize: 15,
        remarks: 'GEPL',
        start: '2026-10-06',
        end: '2026-10-06',
      },
      {
        topic: 'DEI & POSH Awareness',
        date: '06.10.26',
        mode: 'VILT',
        venue: 'NA',
        faculty: 'Vaishali Bairagi',
        batchSize: 15,
        remarks: 'GCPL (FOC)',
        start: '2026-10-06',
        end: '2026-10-06',
      },
      {
        topic: 'Finance for Non-Finance',
        date: '12.10.26–13.10.26',
        mode: 'VILT',
        venue: 'NA',
        faculty: 'External (iSkillBox)',
        batchSize: 15,
        remarks: 'Mr. Alok',
        start: '2026-10-12',
        end: '2026-10-13',
      },
      {
        topic: 'Navigating Change with Confidence',
        date: '14.10.26–15.10.26',
        mode: 'VILT',
        venue: 'NA',
        faculty: 'Vaishali Bairagi',
        batchSize: 15,
        remarks: 'Acceleron',
        start: '2026-10-14',
        end: '2026-10-15',
      },
      {
        topic: 'The Art of Connection: Effective Communication',
        date: '30.10.26–31.10.26',
        mode: 'ILT',
        venue: 'Kolkata',
        faculty: 'Kiran Agarwal',
        batchSize: 15,
        remarks: 'Acceleron',
        start: '2026-10-30',
        end: '2026-10-31',
      },
    ],
  },
  {
    month: 'November 2026',
    year: 2026,
    monthIndex: 10,
    color: '#F5872E',
    bgColor: 'bg-[#F5872E]',
    items: [
      {
        topic: 'Creativity & Design Thinking',
        date: '3.11.26–4.11.26',
        mode: 'ILT',
        venue: 'Kolkata',
        faculty: 'Kiran',
        batchSize: 15,
        remarks: 'GEPL',
        start: '2026-11-03',
        end: '2026-11-04',
      },
      {
        topic: 'First Time Managers: Emerging Leader',
        date: '05.11.26–06.11.26',
        mode: 'ILT',
        venue: 'Kolkata',
        faculty: 'Kiran',
        batchSize: 15,
        remarks: 'Acceleron+TIL',
        start: '2026-11-05',
        end: '2026-11-06',
      },
      {
        topic: '5S Workshop',
        date: '17.11.26',
        mode: 'ILT',
        venue: 'Greater Noida',
        faculty: 'External',
        batchSize: 15,
        remarks: 'GCPL',
        start: '2026-11-17',
        end: '2026-11-17',
      },
      {
        topic: 'Seven Habits of Highly Effective People',
        date: '17.11.26–18.11.26',
        mode: 'VILT',
        venue: 'NA',
        faculty: 'Vaishali Bairagi',
        batchSize: 15,
        remarks: 'Acceleron',
        start: '2026-11-17',
        end: '2026-11-18',
      },
      {
        topic: 'Advance Excel',
        date: '19.11.26–20.11.26',
        mode: 'VILT',
        venue: 'NA',
        faculty: 'External',
        batchSize: 15,
        remarks: 'All',
        start: '2026-11-19',
        end: '2026-11-20',
      },
      {
        topic: 'DEI & POSH Awareness',
        date: '25.11.26',
        mode: 'VILT',
        venue: 'NA',
        faculty: 'Vaishali Bairagi',
        batchSize: 15,
        remarks: 'GTPL',
        start: '2026-11-25',
        end: '2026-11-25',
      },
    ],
  },
  {
    month: 'December 2026',
    year: 2026,
    monthIndex: 11,
    color: '#40A748',
    bgColor: 'bg-[#40A748]',
    items: [
      {
        topic: 'Secret to Customer Delight',
        date: '08.12.26–09.12.26',
        mode: 'VILT',
        venue: 'NA',
        faculty: 'Samuel',
        batchSize: 15,
        remarks: 'Acceleron+TIL+GCPL',
        start: '2026-12-08',
        end: '2026-12-09',
      },
      {
        topic: 'DEI & POSH Awareness',
        date: '15.12.26',
        mode: 'VILT',
        venue: 'NA',
        faculty: 'Vaishali Bairagi',
        batchSize: 15,
        remarks: 'GEPL',
        start: '2026-12-15',
        end: '2026-12-15',
      },
      {
        topic: 'Resilience in High-Pressure Environments',
        date: '15.12.26',
        mode: 'TBD',
        venue: 'TBD',
        faculty: 'TBD',
        batchSize: 15,
        remarks: 'GEPL',
        start: '2026-12-15',
        end: '2026-12-15',
      },
      {
        topic: 'Mastering Negotiation',
        date: '17.12.26',
        mode: 'TBD',
        venue: 'TBD',
        faculty: 'External/Samuel',
        batchSize: 15,
        remarks: 'GCPL+Acceleron',
        start: '2026-12-17',
        end: '2026-12-17',
      },
      {
        topic: 'Effective PowerPoint Presentation',
        date: '18.12.26–19.12.26',
        mode: 'VILT',
        venue: 'NA',
        faculty: 'External',
        batchSize: 15,
        remarks: 'All',
        start: '2026-12-18',
        end: '2026-12-19',
      },
      {
        topic: 'Interviewing Skills Workshop',
        date: '22.12.26',
        mode: 'ILT',
        venue: 'NA',
        faculty: 'TBD',
        batchSize: 15,
        remarks: 'TIL',
        start: '2026-12-22',
        end: '2026-12-22',
      },
    ],
  },
];

const modeConfig: Record<Mode, { label: string; bg: string; text: string }> = {
  ILT: { label: 'ILT', bg: 'bg-blue-100', text: 'text-blue-700' },
  VILT: { label: 'VILT', bg: 'bg-green-100', text: 'text-green-700' },
  TBD: { label: 'TBD', bg: 'bg-amber-100', text: 'text-amber-800' },
};

const parseLocalDate = (dateStr: string) => {
  const [y, m, d] = dateStr.split('-').map(Number);
  return new Date(y, m - 1, d);
};

export default function UpcomingProgramsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeMonth, setActiveMonth] = useState(0);
  const [viewMode, setViewMode] = useState<'calendar' | 'list'>('calendar');
  const [selectedDateStr, setSelectedDateStr] = useState<string>('');
  const [hoveredCellIdx, setHoveredCellIdx] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.1 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  // Pre-select the first event in the month when month tab changes
  useEffect(() => {
    const data = trainingCalendar[activeMonth];
    if (data && data.items.length > 0) {
      setSelectedDateStr(data.items[0].start);
    }
  }, [activeMonth]);

  const current = trainingCalendar[activeMonth];

  // Calendar generation logic
  const year = current ? current.year : 2026;
  const monthIndex = current ? current.monthIndex : 9;

  const firstDayOfMonth = new Date(year, monthIndex, 1).getDay();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

  const prevMonthIndex = monthIndex - 1;
  const daysInPrevMonth = new Date(year, prevMonthIndex + 1, 0).getDate();

  const prevDays = [];
  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    prevDays.push({
      day: daysInPrevMonth - i,
      month: prevMonthIndex,
      isCurrentMonth: false,
    });
  }

  const currentDays = [];
  for (let i = 1; i <= daysInMonth; i++) {
    currentDays.push({
      day: i,
      month: monthIndex,
      isCurrentMonth: true,
    });
  }

  const totalCells = 42;
  const nextDaysCount = totalCells - (prevDays.length + currentDays.length);
  const nextDays = [];
  for (let i = 1; i <= nextDaysCount; i++) {
    nextDays.push({
      day: i,
      month: monthIndex + 1,
      isCurrentMonth: false,
    });
  }

  const allDays = [...prevDays, ...currentDays, ...nextDays];

  // Filter events that fall on a specific date
  const getEventsForDay = (dayNum: number, monthNum: number, yearNum: number) => {
    const d = new Date(yearNum, monthNum, dayNum);
    d.setHours(0, 0, 0, 0);

    const events: TrainingItem[] = [];
    trainingCalendar.forEach(m => {
      m.items.forEach(item => {
        const start = parseLocalDate(item.start);
        const end = parseLocalDate(item.end);
        start.setHours(0, 0, 0, 0);
        end.setHours(0, 0, 0, 0);
        if (d >= start && d <= end) {
          events.push(item);
        }
      });
    });
    return events;
  };

  const formatDate = (dateStr: string) => {
    if (!dateStr) return '';
    const [y, m, d] = dateStr.split('-');
    const dateObj = new Date(parseInt(y), parseInt(m) - 1, parseInt(d));
    return dateObj.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  // Split selectedDateStr to compute events
  const selectedEvents = selectedDateStr
    ? getEventsForDay(
      parseInt(selectedDateStr.split('-')[2]),
      parseInt(selectedDateStr.split('-')[1]) - 1,
      parseInt(selectedDateStr.split('-')[0])
    )
    : [];

  return (
    <section
      id="upcoming-programs"
      ref={sectionRef}
      className="relative py-4 md:py-6 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-[#3A55A5]/5 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-[#F5872E]/5 blur-3xl" />
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`flex flex-col items-center text-center mb-6 transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <span className="inline-block text-xs font-bold tracking-widest text-[#F5872E] uppercase mn-1 bg-[#F5872E]/10 px-4 py-1.5 rounded-full">
            Training Calendar
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#08193C] mt-3 relative inline-block">
            <span className="relative">
              Upcoming Programs
              <span className={`absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#F5872E] to-[#3A55A5] rounded-full transition-all duration-1000 delay-500 ease-out origin-left ${isVisible ? 'scale-x-100' : 'scale-x-0'}`} />
            </span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            GIITA Training Calendar — October to December 2026. Secure your spot in an upcoming batch or workshop.
          </p>
        </div>

        {/* View Switcher and Legend */}
        <div className={`flex flex-col md:flex-row items-center justify-between gap-4 mb-8 transition-all duration-700 delay-100 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {/* Mode Legend */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs text-gray-500 order-2 md:order-1">
            <span className="flex items-center gap-1.5">
              <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-700 font-semibold">ILT</span> Instructor Led Training
            </span>
            <span className="flex items-center gap-1.5">
              <span className="px-2 py-0.5 rounded bg-green-100 text-green-700 font-semibold">VILT</span> Virtual Instructor Led Training
            </span>
            <span className="flex items-center gap-1.5">
              <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-semibold">TBD</span> To Be Decided
            </span>
          </div>

          {/* Toggle View */}
          <div className="inline-flex rounded-lg bg-gray-100 p-1 order-1 md:order-2">
            <button
              onClick={() => setViewMode('calendar')}
              className={`px-4 py-1.5 rounded-md text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${viewMode === 'calendar'
                ? 'bg-white text-[#08193C] shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
                }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Calendar View
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-1.5 rounded-md text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${viewMode === 'list'
                ? 'bg-white text-[#08193C] shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
                }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              List View
            </button>
          </div>
        </div>

        {/* Month Tabs */}
        <div className={`flex flex-wrap justify-center gap-3 mb-8 transition-all duration-700 delay-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {trainingCalendar.map((m, i) => (
            <button
              key={m.month}
              onClick={() => setActiveMonth(i)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${activeMonth === i
                ? 'text-white shadow-lg scale-105'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-400'
                }`}
              style={activeMonth === i ? { backgroundColor: m.color } : {}}
            >
              {m.month}
            </button>
          ))}
        </div>

        {/* Training View Container */}
        <div className={`transition-all duration-700 delay-200 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {/* Header */}
          <div
            className="rounded-t-2xl px-6 py-4 text-white font-bold text-base flex items-center gap-2"
            style={{ backgroundColor: current.color }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {current.month} — {current.items.length} Programs Scheduled
          </div>

          {viewMode === 'list' ? (
            <>
              {/* Desktop Table */}
              <div className="hidden md:block bg-white rounded-b-2xl shadow-lg border border-gray-100 overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="text-left px-5 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider w-[30%]">Training Topic</th>
                      <th className="text-left px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="text-left px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Mode</th>
                      <th className="text-left px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Venue</th>
                      <th className="text-left px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Faculty</th>
                      <th className="text-center px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Seats</th>
                      <th className="text-left px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {current.items.map((item, i) => {
                      const modeCfg = modeConfig[item.mode];
                      return (
                        <tr
                          key={i}
                          className={`border-b border-gray-100 hover:bg-gray-50 transition-colors duration-150 ${i % 2 === 0 ? '' : 'bg-gray-50/50'}`}
                        >
                          <td className="px-5 py-3.5">
                            <span className="font-semibold text-[#08193C]">{item.topic}</span>
                          </td>
                          <td className="px-4 py-3.5 text-gray-600 whitespace-nowrap">{item.date}</td>
                          <td className="px-4 py-3.5">
                            <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${modeCfg.bg} ${modeCfg.text}`}>
                              {item.mode}
                            </span>
                          </td>
                          <td className="px-4 py-3.5 text-gray-600">{item.venue === 'NA' ? <span className="text-gray-400 italic">Virtual</span> : item.venue}</td>
                          <td className="px-4 py-3.5 text-gray-700 font-medium">{item.faculty}</td>
                          <td className="px-4 py-3.5 text-center">
                            <span
                              className="inline-flex items-center justify-center w-8 h-8 rounded-full text-white text-xs font-bold"
                              style={{ backgroundColor: current.color }}
                            >
                              {item.batchSize}
                            </span>
                          </td>
                          <td className="px-4 py-3.5 text-xs text-gray-500 italic">{item.remarks || '—'}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="md:hidden bg-white rounded-b-2xl shadow-lg border border-gray-100 divide-y divide-gray-100">
                {current.items.map((item, i) => {
                  const modeCfg = modeConfig[item.mode];
                  return (
                    <div key={i} className="p-4">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h4 className="font-semibold text-sm text-[#08193C] leading-tight">{item.topic}</h4>
                        <span className={`flex-shrink-0 px-2 py-0.5 rounded text-xs font-bold ${modeCfg.bg} ${modeCfg.text}`}>{item.mode}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-gray-500">
                        <span>📅 {item.date}</span>
                        <span>📍 {item.venue === 'NA' ? 'Virtual' : item.venue}</span>
                        <span>👤 {item.faculty}</span>
                        <span>🪑 {item.batchSize} seats</span>
                      </div>
                      {item.remarks && (
                        <p className="mt-1.5 text-xs text-[#F5872E] font-medium italic">{item.remarks}</p>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Register CTA */}
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white rounded-2xl p-5 shadow border border-gray-100">
                <div>
                  <p className="text-sm font-semibold text-[#08193C]">Interested in a program?</p>
                  <p className="text-xs text-gray-500 mt-0.5">Reach out to register or enquire about batch availability.</p>
                </div>
                <a
                  href="#contact"
                  className="flex-shrink-0 inline-flex items-center gap-2 text-sm font-bold text-white px-6 py-2.5 rounded-xl shadow hover:shadow-md hover:scale-105 transition-all duration-300"
                  style={{ backgroundColor: current.color }}
                >
                  Register / Enquire
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </>
          ) : (
            /* Calendar View */
            <div className="bg-white rounded-b-2xl shadow-lg border border-gray-100 overflow-hidden p-4 sm:p-6">
              {/* Weekdays Header */}
              <div className="grid grid-cols-7 gap-1 text-center font-bold text-gray-600 text-xs sm:text-sm uppercase tracking-wider mb-2 border-b border-gray-100 pb-2">
                <div>Sun</div>
                <div>Mon</div>
                <div>Tue</div>
                <div>Wed</div>
                <div>Thu</div>
                <div>Fri</div>
                <div>Sat</div>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1 bg-gray-100 rounded-lg overflow-hidden border border-gray-100">
                {allDays.map((cell, idx) => {
                  const cellDateStr = `${year}-${String(cell.month + 1).padStart(2, '0')}-${String(cell.day).padStart(2, '0')}`;
                  const dayEvents = getEventsForDay(cell.day, cell.month, year);
                  const isSelected = cellDateStr === selectedDateStr;

                  return (
                    <div
                      key={idx}
                      onClick={() => {
                        setSelectedDateStr(cellDateStr);
                        if (dayEvents.length > 0) {
                          setIsModalOpen(true);
                        }
                      }}
                      onMouseEnter={() => setHoveredCellIdx(idx)}
                      onMouseLeave={() => setHoveredCellIdx(null)}
                      className={`relative flex flex-col justify-between p-1.5 sm:p-2.5 min-h-[60px] md:min-h-[105px] transition-all duration-200 cursor-pointer border ${cell.isCurrentMonth
                        ? dayEvents.length > 0
                          ? 'border-slate-200/60'
                          : 'bg-white hover:bg-slate-50 border-gray-100'
                        : 'bg-gray-50/50 text-gray-300 pointer-events-none border-gray-50'
                        } ${isSelected
                          ? 'z-10 shadow-sm'
                          : ''
                        }`}
                      style={{
                        ...(isSelected ? { borderColor: current.color, boxShadow: `0 0 0 2px ${current.color}`, backgroundColor: `${current.color}1d` } : {}),
                        ...(cell.isCurrentMonth && dayEvents.length > 0 && !isSelected
                          ? { backgroundColor: hoveredCellIdx === idx ? `${current.color}26` : `${current.color}14` }
                          : {})
                      }}
                    >
                      {/* Day number & indicators */}
                      <div className="flex items-center justify-between w-full">
                        <span
                          className={`text-xs sm:text-sm font-bold flex items-center justify-center rounded-full w-6 h-6 sm:w-7 sm:h-7 transition-all duration-200 ${isSelected
                            ? 'text-white font-extrabold shadow-sm'
                            : cell.isCurrentMonth
                              ? 'text-[#08193C]'
                              : 'text-gray-300'
                            }`}
                          style={isSelected ? { backgroundColor: current.color } : {}}
                        >
                          {cell.day}
                        </span>

                        {/* Event dots for mobile / tablets */}
                        {dayEvents.length > 0 && (
                          <div className="flex gap-0.5 md:hidden">
                            {dayEvents.map((evt, i) => (
                              <span
                                key={i}
                                className={`w-1.5 h-1.5 rounded-full ${evt.mode === 'ILT'
                                  ? 'bg-[#3A55A5]'
                                  : evt.mode === 'VILT'
                                    ? 'bg-[#40A748]'
                                    : 'bg-[#F5872E]'
                                  }`}
                              />
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Desktop Event List */}
                      <div className="hidden md:block mt-2 space-y-1.5 overflow-hidden">
                        {dayEvents.slice(0, 2).map((evt, i) => (
                          <div
                            key={i}
                            title={evt.topic}
                            className={`text-[10px] px-2 py-0.5 rounded border font-semibold truncate leading-tight transition-transform duration-200 hover:scale-[1.02] ${evt.mode === 'ILT'
                              ? 'bg-blue-50 text-blue-700 border-blue-200'
                              : evt.mode === 'VILT'
                                ? 'bg-green-50 text-green-700 border-green-200'
                                : 'bg-amber-50 text-amber-800 border-amber-200'
                              }`}
                          >
                            {evt.topic}
                          </div>
                        ))}
                        {dayEvents.length > 2 && (
                          <div className="text-[9px] font-bold text-gray-400 pl-1">
                            +{dayEvents.length - 2} more
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          )}
        </div>

        {/* Summary stats */}
        <div
          ref={statsRef}
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 transition-all duration-1000 delay-500 ease-out ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          {[
            { label: 'Total Programs', target: trainingCalendar.reduce((s, m) => s + m.items.length, 0), color: '#3A55A5' },
            { label: 'ILT Sessions', target: trainingCalendar.flatMap(m => m.items).filter(i => i.mode === 'ILT').length, color: '#F5872E' },
            { label: 'VILT Sessions', target: trainingCalendar.flatMap(m => m.items).filter(i => i.mode === 'VILT').length, color: '#40A748' },
            { label: 'Expert Trainers', target: 6, color: '#8B5CF6' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl p-5 shadow border border-gray-100 text-center">
              <div className="text-3xl font-bold mb-1" style={{ color: stat.color }}>
                <AnimatedCounter target={stat.target} isVisible={statsVisible} />+
              </div>
              <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Participants speak */}
        <div className="mt-16 text-center space-y-6">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#08193C] mt-3 relative inline-block">
            <span className="relative">
              Participants Speak
              <span className={`absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#F5872E] to-[#3A55A5] rounded-full transition-all duration-1000 delay-500 ease-out origin-left ${isVisible ? 'scale-x-100' : 'scale-x-0'}`} />
            </span>
          </h2>
            <p className="mt-6 text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Hear from our trainees about their learning journey and capability advancement at GIITA.
          </p>
          </div>
          <div className="max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-black aspect-video relative">
            <video
              className="w-full h-full object-cover"
              controls
              playsInline
              preload="metadata"
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      {/* Day Event Details Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 z-10 mx-auto"
            >
              {/* Header with Month Color */}
              <div
                className="px-6 py-4 text-white font-bold flex items-center justify-between"
                style={{ backgroundColor: current.color }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">📅</span>
                  <h3 className="text-lg font-bold text-white">
                    Programs on {formatDate(selectedDateStr)}
                  </h3>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-white/80 hover:text-white hover:scale-110 transition-all text-2xl font-bold bg-white/10 hover:bg-white/20 rounded-full w-8 h-8 flex items-center justify-center focus:outline-none"
                >
                  &times;
                </button>
              </div>

              {/* Content area */}
              <div className="p-6 max-h-[70vh] overflow-y-auto space-y-6">
                {selectedEvents.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <svg className="w-12 h-12 text-gray-300 mx-auto mn-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="font-semibold text-sm">No programs scheduled on this date.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {selectedEvents.map((item, idx) => {
                      const modeCfg = modeConfig[item.mode];
                      return (
                        <div key={idx} className="bg-slate-50 rounded-2xl p-5 border border-slate-100 relative overflow-hidden group">
                          <div className={`absolute top-0 left-0 w-1.5 h-full ${item.mode === 'ILT' ? 'bg-[#3A55A5]' : item.mode === 'VILT' ? 'bg-[#40A748]' : 'bg-[#F5872E]'}`} />

                          <div className="flex justify-between items-start gap-2 mn-1">
                            <span className={`px-2.5 py-0.5 rounded text-xs font-bold ${modeCfg.bg} ${modeCfg.text}`}>
                              {item.mode}
                            </span>
                            <span className="text-xs text-gray-500 font-semibold flex items-center gap-1">
                              🪑 {item.batchSize} seats
                            </span>
                          </div>

                          <h4 className="font-bold text-[#08193C] text-lg leading-snug mn-1 group-hover:text-[#3A55A5] transition-colors duration-200">
                            {item.topic}
                          </h4>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-600 mb-4 bg-white p-3 rounded-xl border border-slate-100">
                            <div className="flex items-center gap-1.5">
                              <span className="text-gray-400 w-4 text-center">📅</span>
                              <span><strong className="text-gray-800">Date:</strong> {item.date}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <span className="text-gray-400 w-4 text-center">📍</span>
                              <span><strong className="text-gray-800">Venue:</strong> {item.venue === 'NA' ? 'Virtual' : item.venue}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <span className="text-gray-400 w-4 text-center">👤</span>
                              <span><strong className="text-gray-800">Faculty:</strong> {item.faculty}</span>
                            </div>
                          </div>

                          {item.remarks && (
                            <div className="mb-4 bg-orange-50/70 text-orange-800 text-[11px] p-2.5 rounded-xl border border-orange-100/50 italic">
                              <strong>Note:</strong> {item.remarks}
                            </div>
                          )}

                          <div className="flex justify-end">
                            <a
                              href="#contact"
                              onClick={() => setIsModalOpen(false)}
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-white px-5 py-2.5 rounded-xl shadow hover:shadow-md hover:scale-105 transition-all duration-300"
                              style={{ backgroundColor: current.color }}
                            >
                              Register / Enquire
                              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

interface AnimatedCounterProps {
  target: number;
  duration?: number;
  isVisible: boolean;
}

function AnimatedCounter({ target, duration = 1200, isVisible }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = target;
    if (start === end) {
      setCount(end);
      return;
    }

    const incrementTime = Math.max(Math.floor(duration / end), 15);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isVisible, target, duration]);

  return <>{count}</>;
}
