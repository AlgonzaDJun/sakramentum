'use client';

import React, { useState } from 'react';

interface TimeSimulatorProps {
  onTimeChange: (mockTime: Date | null) => void;
  currentSimulatedTime: Date;
  isMocked: boolean;
}

export default function TimeSimulator({ onTimeChange, currentSimulatedTime, isMocked }: TimeSimulatorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [customTime, setCustomTime] = useState('12:00');

  const formatTimeStr = (date: Date) => {
    return date.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };

  const handlePreset = (hour: number) => {
    const d = new Date();
    // Use July 3, 2026 for testing consistency if we want, or just current date
    d.setHours(hour, 0, 0, 0);
    onTimeChange(d);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const [hours, minutes] = customTime.split(':').map(Number);
    const d = new Date();
    d.setHours(hours, minutes, 0, 0);
    onTimeChange(d);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 bg-zinc-900/90 dark:bg-zinc-100/95 text-white dark:text-zinc-950 rounded-full shadow-lg backdrop-blur border border-zinc-700/30 dark:border-zinc-300/30 hover:scale-105 transition-all text-xs font-semibold cursor-pointer"
        >
          <span className="relative flex h-2 w-2">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isMocked ? 'bg-amber-400' : 'bg-emerald-400'}`}></span>
            <span className={`relative inline-flex rounded-full h-2 w-2 ${isMocked ? 'bg-amber-500' : 'bg-emerald-500'}`}></span>
          </span>
          {isMocked ? `Mocked: ${formatTimeStr(currentSimulatedTime)}` : 'Time Controls'}
        </button>
      ) : (
        <div className="w-80 p-5 bg-zinc-900/95 dark:bg-zinc-950/98 text-zinc-100 rounded-2xl shadow-2xl border border-zinc-800/80 backdrop-blur-md animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-bold tracking-wide uppercase text-zinc-400">Dev Time Simulator</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-zinc-500 hover:text-zinc-300 transition-colors text-xs font-bold cursor-pointer"
            >
              ✕ Close
            </button>
          </div>

          <div className="mb-4 p-3 bg-zinc-800/40 rounded-lg border border-zinc-800 text-center">
            <div className="text-xs text-zinc-500 mb-1">Current Simulated Time</div>
            <div className="text-xl font-mono font-bold tracking-wider text-white">
              {formatTimeStr(currentSimulatedTime)}
            </div>
            <div className="text-[10px] mt-1">
              Status:{' '}
              <span className={isMocked ? 'text-amber-400 font-semibold' : 'text-emerald-400 font-semibold'}>
                {isMocked ? 'MOCKED TIME' : 'REAL TIME (DEVICE CLOCK)'}
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider block mb-1.5">Presets (Angelus Hours)</span>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => handlePreset(6)}
                  className="px-2 py-1.5 bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-600 text-zinc-200 rounded text-xs transition-colors cursor-pointer"
                >
                  06:00 (Pagi)
                </button>
                <button
                  onClick={() => handlePreset(12)}
                  className="px-2 py-1.5 bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-600 text-zinc-200 rounded text-xs transition-colors cursor-pointer"
                >
                  12:00 (Siang)
                </button>
                <button
                  onClick={() => handlePreset(18)}
                  className="px-2 py-1.5 bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-600 text-zinc-200 rounded text-xs transition-colors cursor-pointer"
                >
                  18:00 (Sore)
                </button>
              </div>
            </div>

            <div>
              <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider block mb-1.5">Custom Hour</span>
              <form onSubmit={handleCustomSubmit} className="flex gap-2">
                <input
                  type="time"
                  value={customTime}
                  onChange={(e) => setCustomTime(e.target.value)}
                  className="flex-1 px-3 py-1.5 bg-zinc-800 border border-zinc-700 rounded text-xs text-white focus:outline-none focus:border-zinc-500 font-mono"
                />
                <button
                  type="submit"
                  className="px-3 py-1.5 bg-zinc-700 hover:bg-zinc-600 text-white rounded text-xs transition-colors font-medium cursor-pointer"
                >
                  Apply
                </button>
              </form>
            </div>

            {isMocked && (
              <button
                onClick={() => onTimeChange(null)}
                className="w-full mt-2 py-2 bg-red-950/40 hover:bg-red-900/40 border border-red-800/40 text-red-300 rounded text-xs transition-all font-semibold tracking-wide cursor-pointer"
              >
                Reset to Device Clock
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
