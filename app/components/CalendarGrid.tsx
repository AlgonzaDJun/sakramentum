'use client';

import React from 'react';
import { LiturgicalDay, LITURGICAL_CALENDAR } from '../data/liturgical-calendar';

interface CalendarGridProps {
  selectedDay: LiturgicalDay;
  onSelectDay: (day: LiturgicalDay) => void;
}

export default function CalendarGrid({ selectedDay, onSelectDay }: CalendarGridProps) {
  const DAYS_OF_WEEK = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
  
  // Extract year and month from selectedDay.date (YYYY-MM-DD)
  const [yearStr, monthStr] = selectedDay.date.split('-');
  const year = parseInt(yearStr, 10);
  const month = parseInt(monthStr, 10);
  
  const firstDayOfMonth = new Date(year, month - 1, 1);
  const firstDayOfWeek = firstDayOfMonth.getDay(); // 0 is Sunday, 1 is Monday, etc.
  const emptyPrecedingCells = Array(firstDayOfWeek).fill(null);
  
  const totalDays = new Date(year, month, 0).getDate();
  
  // Match calendar days with our database
  const daysInMonth = Array.from({ length: totalDays }, (_, i) => {
    const dayNum = i + 1;
    const dateStr = `${year}-${String(month).padStart(2, '0')}-${String(dayNum).padStart(2, '0')}`;
    return LITURGICAL_CALENDAR.find(d => d.date === dateStr) || {
      date: dateStr,
      day: dayNum,
      status: 'Unknown',
      name: 'Hari Biasa',
      readings: '',
      gospelCode: '',
      bco: '',
      color: 'Hijau' as const
    };
  });

  const monthName = firstDayOfMonth.toLocaleDateString('id-ID', { month: 'long', year: 'numeric' });

  const handlePrevMonth = () => {
    let newMonth = month - 1;
    let newYear = year;
    if (newMonth === 0) {
      newMonth = 12;
      newYear -= 1;
    }
    const prevMonthDateStr = `${newYear}-${String(newMonth).padStart(2, '0')}-01`;
    const targetDay = LITURGICAL_CALENDAR.find(d => d.date === prevMonthDateStr);
    if (targetDay) {
      onSelectDay(targetDay);
    }
  };

  const handleNextMonth = () => {
    let newMonth = month + 1;
    let newYear = year;
    if (newMonth === 13) {
      newMonth = 1;
      newYear += 1;
    }
    const nextMonthDateStr = `${newYear}-${String(newMonth).padStart(2, '0')}-01`;
    const targetDay = LITURGICAL_CALENDAR.find(d => d.date === nextMonthDateStr);
    if (targetDay) {
      onSelectDay(targetDay);
    }
  };

  return (
    <div className="bg-[#0f1b30]/60 border border-[#1e2e4a]/60 rounded-2xl p-4 backdrop-blur-md font-sans">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <button 
            onClick={handlePrevMonth}
            className="p-1 hover:bg-[#1a2b47] rounded-lg text-zinc-400 hover:text-white transition-colors cursor-pointer"
            title="Bulan Sebelumnya"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h3 className="text-xs font-bold text-zinc-300 uppercase tracking-wider min-w-[100px] text-center">
            {monthName}
          </h3>
          <button 
            onClick={handleNextMonth}
            className="p-1 hover:bg-[#1a2b47] rounded-lg text-zinc-400 hover:text-white transition-colors cursor-pointer"
            title="Bulan Berikutnya"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <span className="text-[9px] font-mono text-zinc-500 bg-[#08101d]/60 px-2 py-0.5 rounded-full border border-[#1e2e4a]/60">
          Kalender Liturgi
        </span>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-[10px]">
        {/* Days of the week header */}
        {DAYS_OF_WEEK.map((day, idx) => (
          <div 
            key={day} 
            className={`font-bold py-1 select-none text-[9px] uppercase tracking-wider ${
              idx === 0 ? 'text-rose-500/80' : 'text-zinc-500'
            }`}
          >
            {day}
          </div>
        ))}

        {/* Padding cells */}
        {emptyPrecedingCells.map((_, idx) => (
          <div key={`empty-${idx}`} className="aspect-square" />
        ))}

        {/* Days of the month */}
        {daysInMonth.map((dayItem) => {
          const isSelected = selectedDay.day === dayItem.day && parseInt(selectedDay.date.split('-')[1], 10) === month;
          const isSunday = new Date(year, month - 1, dayItem.day).getDay() === 0;
          
          return (
            <button
              key={dayItem.day}
              onClick={() => onSelectDay(dayItem)}
              className={`relative aspect-square flex flex-col items-center justify-center rounded-lg border text-[11px] transition-all select-none group cursor-pointer ${
                isSelected
                  ? 'bg-[#1a2b47] border-[#2c3d59] text-white font-bold scale-105 shadow-md z-10'
                  : 'bg-[#08101d]/50 hover:bg-[#15233a] hover:border-[#213554] text-zinc-400 border-[#0d1627]/40'
              }`}
            >
              {/* Liturgical color border glow for selected day */}
              {isSelected && (
                <div className={`absolute inset-0 rounded-lg border-2 ${
                  dayItem.color === 'Merah' ? 'border-red-500/50 animate-pulse' :
                  dayItem.color === 'Putih' ? 'border-amber-500/50 animate-pulse' :
                  dayItem.color === 'Ungu' || dayItem.color === 'Ungu/Hitam' ? 'border-violet-500/50 animate-pulse' :
                  'border-emerald-500/50 animate-pulse'
                }`} />
              )}

              {/* Day Number */}
              <span className={`${isSunday && !isSelected ? 'text-rose-500/70 font-semibold' : ''}`}>
                {dayItem.day}
              </span>

              {/* Liturgical color dot */}
              <span className={`absolute bottom-1 w-1 h-1 rounded-full ${
                dayItem.color === 'Merah' ? 'bg-red-500' :
                dayItem.color === 'Putih' ? 'bg-amber-400' :
                dayItem.color === 'Ungu' || dayItem.color === 'Ungu/Hitam' ? 'bg-violet-500' :
                'bg-emerald-500'
              }`} />
              
              {/* Tooltip on hover */}
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-32 hidden group-hover:block bg-[#08101d] text-[10px] p-2 rounded shadow-xl border border-[#1e2e4a] z-30 pointer-events-none text-center leading-tight">
                <span className="font-bold block mb-0.5 text-zinc-350">{dayItem.status}</span>
                <span className="text-zinc-400">{dayItem.name}</span>
              </span>
            </button>
          );
        })}
      </div>
      
      {/* Legend */}
      <div className="mt-3 pt-2 border-t border-[#1e2e4a]/40 text-center text-[9px] text-zinc-500">
        Warna: <span className="text-emerald-500 font-medium">Hijau (Biasa)</span> &bull; <span className="text-red-400 font-medium">Merah (Pesta)</span> &bull; <span className="text-amber-400 font-medium">Putih (Wajib)</span> &bull; <span className="text-violet-400 font-medium">Ungu (Adven/Arwah)</span>
      </div>
    </div>
  );
}
