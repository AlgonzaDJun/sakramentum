'use client';

import React from 'react';
import { LiturgicalDay, LITURGICAL_CALENDAR_JULY_2026 } from '../data/liturgical-calendar';

interface CalendarGridProps {
  selectedDay: LiturgicalDay;
  onSelectDay: (day: LiturgicalDay) => void;
}

export default function CalendarGrid({ selectedDay, onSelectDay }: CalendarGridProps) {
  const DAYS_OF_WEEK = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
  
  // July 1, 2026 starts on Wednesday (index 3, where Sunday is 0)
  const emptyPrecedingCells = Array(3).fill(null);
  
  // We can match calendar days with our database
  const daysInMonth = Array.from({ length: 31 }, (_, i) => {
    const dayNum = i + 1;
    const dateStr = `2026-07-${String(dayNum).padStart(2, '0')}`;
    return LITURGICAL_CALENDAR_JULY_2026.find(d => d.date === dateStr) || {
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
  return (
    <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-4 backdrop-blur-md font-sans">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Juli 2026</h3>
        <span className="text-[9px] font-mono text-zinc-500 bg-zinc-950/50 px-2 py-0.5 rounded-full border border-zinc-900">
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
          const isSelected = selectedDay.day === dayItem.day;
          const isSunday = (dayItem.day + 2) % 7 === 0;
          
          return (
            <button
              key={dayItem.day}
              onClick={() => onSelectDay(dayItem)}
              className={`relative aspect-square flex flex-col items-center justify-center rounded-lg border text-[11px] transition-all select-none group cursor-pointer ${
                isSelected
                  ? 'bg-zinc-800 border-zinc-600 text-white font-bold scale-105 shadow-md z-10'
                  : 'bg-zinc-950/20 hover:bg-zinc-850 hover:border-zinc-700 text-zinc-400 border-zinc-900/30'
              }`}
            >
              {/* Liturgical color border glow for selected day */}
              {isSelected && (
                <div className={`absolute inset-0 rounded-lg border-2 ${
                  dayItem.color === 'Merah' ? 'border-red-500/50 animate-pulse' :
                  dayItem.color === 'Putih' ? 'border-amber-500/50 animate-pulse' :
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
                'bg-emerald-500'
              }`} />
              
              {/* Tooltip on hover */}
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-32 hidden group-hover:block bg-zinc-950 text-[10px] p-2 rounded shadow-xl border border-zinc-800 z-30 pointer-events-none text-center leading-tight">
                <span className="font-bold block mb-0.5 text-zinc-350">{dayItem.status}</span>
                <span className="text-zinc-400">{dayItem.name}</span>
              </span>
            </button>
          );
        })}
      </div>
      
      {/* Legend */}
      <div className="mt-3 pt-2 border-t border-zinc-800/40 text-center text-[9px] text-zinc-500">
        Warna: <span className="text-emerald-500 font-medium">Hijau (Biasa)</span> &bull; <span className="text-red-400 font-medium">Merah (Pesta)</span> &bull; <span className="text-amber-400 font-medium">Putih (Wajib)</span>
      </div>
    </div>
  );
}
