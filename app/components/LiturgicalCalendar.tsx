'use client';

import React, { useState, useEffect } from 'react';
import CalendarGrid from './CalendarGrid';
import GospelReader from './GospelReader';
import AngelusModal from './AngelusModal';
import TimeSimulator from './TimeSimulator';
import { LiturgicalDay, LITURGICAL_CALENDAR_JULY_2026 } from '../data/liturgical-calendar';

export default function LiturgicalCalendar() {
  const [selectedDay, setSelectedDay] = useState<LiturgicalDay>(LITURGICAL_CALENDAR_JULY_2026[2]); // Default to July 3, 2026 (St. Thomas)
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const [isMocked, setIsMocked] = useState(false);
  const [mockTime, setMockTime] = useState<Date | null>(null);
  const [isAngelusWidgetOpen, setIsAngelusWidgetOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  // Default to today's date in July 2026 on load if possible
  useEffect(() => {
    const todayStr = new Date().toISOString().split('T')[0];
    const todayData = LITURGICAL_CALENDAR_JULY_2026.find(d => d.date === todayStr);
    if (todayData) {
      // Defer state update to avoid warnings in react-hooks/set-state-in-effect
      setTimeout(() => setSelectedDay(todayData), 0);
    }
  }, []);

  // Update current time every second
  useEffect(() => {
    if (isMocked && mockTime) {
      // If mocked, we simulate time moving from that point
      const interval = setInterval(() => {
        setMockTime(prev => {
          if (!prev) return null;
          return new Date(prev.getTime() + 1000);
        });
      }, 1000);
      return () => clearInterval(interval);
    } else {
      const interval = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isMocked, mockTime]);

  // Keep track of which time to pass to widgets
  const activeTime = isMocked && mockTime ? mockTime : currentTime;

  const handleTimeChange = (newMockTime: Date | null) => {
    if (newMockTime === null) {
      setIsMocked(false);
      setMockTime(null);
      setCurrentTime(new Date());
    } else {
      setIsMocked(true);
      setMockTime(newMockTime);
    }
  };

  // Generate dynamic CSS theme variables
  const getThemeStyles = (color: string) => {
    switch (color) {
      case 'Merah':
        return {
          '--liturgy-primary': '#e11d48',       // rose-600
          '--liturgy-primary-hover': '#be123c', // rose-700
          '--liturgy-bg-light': '#fff1f2',      // rose-50
          '--liturgy-bg-dark': '#4c0519',       // rose-950
          '--liturgy-border': '#fecdd3',         // rose-200
          '--liturgy-text': '#9f1239',           // rose-800
          '--liturgy-text-light': '#fda4af',     // rose-300
          '--liturgy-glow': 'rgba(225, 29, 72, 0.15)',
        };
      case 'Putih':
        return {
          '--liturgy-primary': '#d97706',       // amber-600
          '--liturgy-primary-hover': '#b45309', // amber-700
          '--liturgy-bg-light': '#fffbeb',      // amber-50
          '--liturgy-bg-dark': '#451a03',       // amber-950
          '--liturgy-border': '#fde68a',         // amber-200
          '--liturgy-text': '#92400e',           // amber-800
          '--liturgy-text-light': '#fcd34d',     // amber-300
          '--liturgy-glow': 'rgba(217, 119, 6, 0.15)',
        };
      case 'Hijau':
      default:
        return {
          '--liturgy-primary': '#059669',       // emerald-600
          '--liturgy-primary-hover': '#047857', // emerald-700
          '--liturgy-bg-light': '#ecfdf5',      // emerald-50
          '--liturgy-bg-dark': '#022c22',       // emerald-950
          '--liturgy-border': '#a7f3d0',         // emerald-200
          '--liturgy-text': '#065f46',           // emerald-800
          '--liturgy-text-light': '#6ee7b7',     // emerald-300
          '--liturgy-glow': 'rgba(5, 150, 105, 0.15)',
        };
    }
  };

  const themeStyles = getThemeStyles(selectedDay.color);

  // Helper to parse readings list
  const parseReadingsList = (readingsStr: string) => {
    const parts = readingsStr.split(';').map(p => p.trim());
    const list: { label: string; text: string }[] = [];
    let nonPsalmOrGospelCount = 0;
    
    parts.forEach((part) => {
      const cleanPart = part.replace(/^(BcE|BcO)\s+/i, '');
      if (cleanPart.toLowerCase().startsWith('mzm')) {
        list.push({ label: 'Mazmur Tanggapan', text: cleanPart });
      } else if (/^(mat|yoh|luk|mrk)/i.test(cleanPart.replace(/\./g, ''))) {
        list.push({ label: 'Bacaan Injil', text: cleanPart });
      } else {
        nonPsalmOrGospelCount++;
        if (nonPsalmOrGospelCount === 1) {
          list.push({ label: 'Bacaan I', text: cleanPart });
        } else {
          list.push({ label: 'Bacaan II', text: cleanPart });
        }
      }
    });
    
    return list;
  };

  const readingsList = parseReadingsList(selectedDay.readings);

  const formatDateLabel = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  };

  return (
    <div 
      style={themeStyles as React.CSSProperties}
      className="min-h-screen bg-[#0b1426] text-zinc-100 flex flex-col relative overflow-x-hidden selection:bg-[var(--liturgy-primary)] selection:text-white"
    >
      
      {/* Dynamic Background Blur Glow (Liturgical Aurora) */}
      <div className="absolute top-[-100px] left-1/4 w-[500px] h-[500px] rounded-full bg-[var(--liturgy-glow)] blur-[100px] pointer-events-none opacity-70 mix-blend-screen transition-all duration-1000" />
      <div className="absolute bottom-[-100px] right-1/4 w-[400px] h-[400px] rounded-full bg-[var(--liturgy-glow)] blur-[120px] pointer-events-none opacity-50 mix-blend-screen transition-all duration-1000" />

      {/* Top Navbar */}
      <header className="border-b border-[#1e2e4a]/40 bg-[#0b1426]/85 backdrop-blur-md sticky top-0 z-30 px-6 py-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[var(--liturgy-primary)] to-[#0f1b30] flex items-center justify-center border border-[#1e2e4a]/60">
              <span className="text-white font-serif font-black text-lg">Ω</span>
            </div>
            <div>
              <h1 className="text-lg font-black tracking-widest font-serif text-white">SAKRAMENTUM</h1>
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-0.5">Kalender Liturgi Digital</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 self-end sm:self-center">
            {/* Fullscreen Button */}
            <button
              onClick={toggleFullscreen}
              className="px-3.5 py-1.5 bg-[#0f1b30]/50 hover:bg-[#15233a] border border-[#1e2e4a] rounded-xl flex items-center gap-2 backdrop-blur text-xs font-semibold text-zinc-300 hover:text-white transition-all cursor-pointer"
              title="Toggle Layar Penuh (Fullscreen) untuk Share Screen"
            >
              {isFullscreen ? (
                <>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 14h6v6m10-6h-6v6M4 10h6V4m10 6h-6V4" />
                  </svg>
                  <span>Layar Biasa</span>
                </>
              ) : (
                <>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4h4m12 4V4h-4M4 16v4h4m12-4v4h-4" />
                  </svg>
                  <span>Layar Penuh</span>
                </>
              )}
            </button>

            {/* Clock Widget */}
            <div className="px-3.5 py-1.5 bg-[#0f1b30]/50 border border-[#1e2e4a] rounded-xl flex items-center gap-2.5 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isMocked ? 'bg-amber-400' : 'bg-emerald-400'}`}></span>
                <span className={`relative inline-flex rounded-full h-2 w-2 ${isMocked ? 'bg-amber-500' : 'bg-emerald-500'}`}></span>
              </span>
              <span className="text-xs font-mono font-medium tracking-wide text-zinc-300">
                {activeTime.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
              </span>
            </div>
          </div>
        </div>
      </header>
      
      {/* Main Layout */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-4 sm:p-6 space-y-6 relative z-10">
        
        {/* Row 1: Liturgical Details Card (Full Width & Minimal Height) */}
        <section id="bacaan-card" className="bg-[#0f1b30]/60 border border-[#1e2e4a]/60 rounded-2xl p-4 backdrop-blur-md relative overflow-hidden flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Corner liturgy color accent line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-[var(--liturgy-primary)]" />
          
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-bold text-[var(--liturgy-primary)] tracking-wider uppercase">
                {selectedDay.status}
              </span>
              <span className="text-zinc-700 font-bold text-[10px]">•</span>
              <span className="text-[10px] font-mono text-zinc-500 font-bold uppercase tracking-wider">
                {formatDateLabel(selectedDay.date)}
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold font-serif text-white tracking-tight mt-0.5">
              {selectedDay.name}
            </h2>
          </div>

          {/* Liturgical Color Badge & Compact Readings Grid */}
          <div className="flex flex-wrap md:flex-nowrap items-center gap-3">
            {/* Liturgical Color Badge */}
            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#08101d] rounded-full border border-[#1e2e4a]">
              <span className={`w-2 h-2 rounded-full ${
                selectedDay.color === 'Merah' ? 'bg-red-500' :
                selectedDay.color === 'Putih' ? 'bg-amber-400' :
                'bg-emerald-500'
              }`} />
              <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-wide">
                {selectedDay.color}
              </span>
            </div>

            {/* Readings references (Compact Badges) */}
            <div className="flex flex-wrap gap-1.5">
              {readingsList.map((reading) => (
                <div 
                  key={reading.label}
                  className="px-2.5 py-1 bg-[#08101d]/60 rounded-lg border border-[#1e2e4a]/60 text-[10px] font-mono flex gap-1 hover:border-[#1e2e4a] transition-colors"
                  title={reading.label}
                >
                  <span className="text-zinc-500 font-bold">{reading.label === 'Mazmur Tanggapan' ? 'Mzm' : reading.label === 'Bacaan Injil' ? 'Injil' : reading.label}:</span>
                  <span className="text-zinc-200 font-bold">{reading.text}</span>
                </div>
              ))}
              {selectedDay.bco && (
                <div 
                  className="px-2.5 py-1 bg-[#08101d]/60 rounded-lg border border-[#1e2e4a]/60 text-[10px] font-mono flex gap-1 hover:border-[#1e2e4a] transition-colors"
                  title="Bacaan Harian (BcO)"
                >
                  <span className="text-zinc-500 font-bold">BcO:</span>
                  <span className="text-zinc-200 font-bold">{selectedDay.bco}</span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Row 2: Gospel Reader (Prominent & Full Width) */}
        {selectedDay.gospelCode && (
          <GospelReader gospelCode={selectedDay.gospelCode} />
        )}

        {/* Row 3: Split Grid Layout for Calendar Grid & Angelus Widget */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <CalendarGrid selectedDay={selectedDay} onSelectDay={setSelectedDay} />
          </div>
          
          {/* Collapsible Angelus Widget */}
          <section className="bg-[#0f1b30]/60 border border-[#1e2e4a]/60 rounded-2xl overflow-hidden backdrop-blur-md self-start">
            <button 
              onClick={() => setIsAngelusWidgetOpen(!isAngelusWidgetOpen)}
              className="w-full p-4 flex items-center justify-between text-left cursor-pointer hover:bg-[#15233a]/30 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center border border-amber-500/25">
                  <svg className="w-4.5 h-4.5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-zinc-200">Doa Malaikat Tuhan</h3>
                  <p className="text-[10px] text-zinc-500 uppercase mt-0.5 tracking-wider font-mono">Setiap Jam 06.00 • 12.00 • 18.00</p>
                </div>
              </div>
              <svg 
                className={`w-4 h-4 text-zinc-500 transition-transform duration-300 ${isAngelusWidgetOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isAngelusWidgetOpen && (
              <div className="px-5 pb-5 pt-2 border-t border-[#1e2e4a]/60 animate-in fade-in duration-300 text-xs text-zinc-300 space-y-4 max-h-[350px] overflow-y-auto custom-scrollbar leading-relaxed">
                <div>
                  <p className="italic text-zinc-400 mb-0.5"><span className="font-bold text-amber-500 mr-1.5">V.</span>Maria diberi kabar oleh malaikat Tuhan,</p>
                  <p className="font-medium"><span className="font-bold text-zinc-500 mr-1.5">R.</span>Bahwa ia akan mengandung dari Roh Kudus.</p>
                  <p className="text-[10px] text-zinc-500 italic mt-0.5 pl-4">(Salam Maria …)</p>
                </div>

                <div>
                  <p className="italic text-zinc-400 mb-0.5"><span className="font-bold text-amber-500 mr-1.5">V.</span>&ldquo;Aku ini hamba Tuhan,&rdquo;</p>
                  <p className="font-medium"><span className="font-bold text-zinc-500 mr-1.5">R.</span>&ldquo;Terjadilah padaku menurut perkataan-Mu.&rdquo;</p>
                  <p className="text-[10px] text-zinc-500 italic mt-0.5 pl-4">(Salam Maria …)</p>
                </div>

                <div>
                  <p className="italic text-zinc-400 mb-0.5"><span className="font-bold text-amber-500 mr-1.5">V.</span>Sabda sudah menjadi daging,</p>
                  <p className="font-medium"><span className="font-bold text-zinc-500 mr-1.5">R.</span>Dan tinggal diantara kita.</p>
                  <p className="text-[10px] text-zinc-500 italic mt-0.5 pl-4">(Salam Maria …)</p>
                </div>

                <div>
                  <p className="italic text-zinc-400 mb-0.5"><span className="font-bold text-amber-500 mr-1.5">V.</span>Doakanlah kami, ya Santa Bunda Allah,</p>
                  <p className="font-medium"><span className="font-bold text-zinc-500 mr-1.5">R.</span>Supaya kami dapat menikmati janji Kristus.</p>
                </div>

                <div className="pt-2 border-t border-[#1e2e4a]/60">
                  <p className="font-bold text-amber-500/80 mb-0.5">Marilah berdoa <span className="font-normal italic text-zinc-500">(Hening)</span></p>
                  <p className="pl-3 border-l-2 border-[#1e2e4a]/60 text-zinc-400 text-[11px] leading-relaxed">
                    Ya Allah, karena kabar malaikat, kami mengetahui bahwa Yesus Kristus Putra-Mu menjadi manusia. Curahkanlah rahmat-Mu ke dalam hati kami, supaya karena sengsara dan salib-Nya, kami dibawa kepada kebangkitan yang mulia. Sebab Dialah Tuhan, pengantara kami.
                  </p>
                  <p className="font-bold mt-1.5"><span className="font-bold text-zinc-500 mr-1.5">R.</span>Amin.</p>
                </div>
              </div>
            )}
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#1e2e4a]/40 bg-[#08101d] py-8 px-6 text-center text-xs text-zinc-500 relative z-10">
        <p>© 2026 Sakramentum Kalender Liturgi. Semua hak cipta dilindungi.</p>
        <p className="mt-1.5 text-zinc-600 font-mono">Dibuat menggunakan Next.js & Tailwind CSS. Referensi scripture dari imankatolik.or.id</p>
      </footer>

      {/* Background/Dev Utility Widgets */}
      <AngelusModal currentTime={activeTime} />
      <TimeSimulator onTimeChange={handleTimeChange} currentSimulatedTime={activeTime} isMocked={isMocked} />

    </div>
  );
}
