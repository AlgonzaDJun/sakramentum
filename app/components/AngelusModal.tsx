'use client';

import React, { useState, useEffect } from 'react';

interface AngelusModalProps {
  currentTime: Date;
}

export default function AngelusModal({ currentTime }: AngelusModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [lastDismissedHour, setLastDismissedHour] = useState<string | null>(null);

  const hours = currentTime.getHours();
  const dateKey = `${currentTime.getFullYear()}-${currentTime.getMonth() + 1}-${currentTime.getDate()}_${hours}`;
  const isAngelusHour = hours === 6 || hours === 12 || hours === 18;

  // Trigger modal when entering Angelus hour, if not already dismissed for this specific hour
  useEffect(() => {
    if (isAngelusHour && lastDismissedHour !== dateKey) {
      const timer = setTimeout(() => setIsOpen(true), 0);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => setIsOpen(false), 0);
      return () => clearTimeout(timer);
    }
  }, [isAngelusHour, lastDismissedHour, dateKey]);

  const handleDismiss = () => {
    setLastDismissedHour(dateKey);
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-2xl max-h-[95vh] overflow-y-auto custom-scrollbar bg-[#faf8f5] text-stone-900 rounded-3xl border border-amber-800/15 p-6 sm:p-10 shadow-2xl shadow-amber-900/10 animate-in zoom-in-95 slide-in-from-bottom-8 duration-300 overflow-hidden">
        
        {/* Background Texture Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none select-none opacity-[0.35] z-0"
          style={{
            backgroundImage: 'url(/catholic_pattern.png)',
            backgroundRepeat: 'repeat',
            backgroundSize: '160px',
          }}
        />

        {/* Decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent rounded-full z-10" />
        
        <div className="flex flex-col items-center text-center mb-6 relative z-10">
          {/* Swinging Bell Micro-Animation */}
          <div className="w-20 h-20 bg-amber-500/10 rounded-full flex items-center justify-center mb-4 border border-amber-500/20">
            <svg 
              className="w-10 h-10 text-amber-600 origin-top animate-[wiggle_1.5s_ease-in-out_infinite]"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-widest text-stone-900">Doa Malaikat Tuhan</h2>
          <p className="text-xs sm:text-sm text-amber-850/80 mt-2 font-mono tracking-wider">ANGELUS • {hours === 6 ? 'PAGI (06.00)' : hours === 12 ? 'SIANG (12.00)' : 'SORE (18.00)'}</p>
        </div>

        {/* Prayer Text */}
        <div className="space-y-8 text-base sm:text-lg text-stone-850 leading-relaxed max-w-xl mx-auto border-y border-amber-900/10 py-8 my-6 relative z-10">
          <div>
            <p className="italic text-stone-600 mb-1.5">
              <span className="inline-block font-mono text-xs sm:text-sm font-bold text-amber-850 bg-amber-100 border border-amber-900/10 px-2 py-0.5 rounded mr-2 align-middle select-none">V.</span>
              Maria diberi kabar oleh malaikat Tuhan,
            </p>
            <p className="font-semibold text-stone-900">
              <span className="inline-block font-mono text-xs sm:text-sm font-bold text-stone-500 bg-stone-100 border border-stone-200 px-2 py-0.5 rounded mr-2 align-middle select-none">R.</span>
              Bahwa ia akan mengandung dari Roh Kudus.
            </p>
            <p className="text-sm sm:text-base text-stone-500 mt-1.5 italic pl-8 sm:pl-12">(Salam Maria …)</p>
          </div>

          <div>
            <p className="italic text-stone-600 mb-1.5">
              <span className="inline-block font-mono text-xs sm:text-sm font-bold text-amber-850 bg-amber-100 border border-amber-900/10 px-2 py-0.5 rounded mr-2 align-middle select-none">V.</span>
              &ldquo;Aku ini hamba Tuhan,&rdquo;
            </p>
            <p className="font-semibold text-stone-900">
              <span className="inline-block font-mono text-xs sm:text-sm font-bold text-stone-500 bg-stone-100 border border-stone-200 px-2 py-0.5 rounded mr-2 align-middle select-none">R.</span>
              &ldquo;Terjadilah padaku menurut perkataan-Mu.&rdquo;
            </p>
            <p className="text-sm sm:text-base text-stone-500 mt-1.5 italic pl-8 sm:pl-12">(Salam Maria …)</p>
          </div>

          <div>
            <p className="italic text-stone-600 mb-1.5">
              <span className="inline-block font-mono text-xs sm:text-sm font-bold text-amber-850 bg-amber-100 border border-amber-900/10 px-2 py-0.5 rounded mr-2 align-middle select-none">V.</span>
              Sabda sudah menjadi daging,
            </p>
            <p className="font-semibold text-stone-900">
              <span className="inline-block font-mono text-xs sm:text-sm font-bold text-stone-500 bg-stone-100 border border-stone-200 px-2 py-0.5 rounded mr-2 align-middle select-none">R.</span>
              Dan tinggal diantara kita.
            </p>
            <p className="text-sm sm:text-base text-stone-500 mt-1.5 italic pl-8 sm:pl-12">(Salam Maria …)</p>
          </div>

          <div>
            <p className="italic text-stone-600 mb-1.5">
              <span className="inline-block font-mono text-xs sm:text-sm font-bold text-amber-850 bg-amber-100 border border-amber-900/10 px-2 py-0.5 rounded mr-2 align-middle select-none">V.</span>
              Doakanlah kami, ya Santa Bunda Allah,
            </p>
            <p className="font-semibold text-stone-900">
              <span className="inline-block font-mono text-xs sm:text-sm font-bold text-stone-500 bg-stone-100 border border-stone-200 px-2 py-0.5 rounded mr-2 align-middle select-none">R.</span>
              Supaya kami dapat menikmati janji Kristus.
            </p>
          </div>

          <div className="pt-3 border-t border-amber-900/10">
            <p className="font-extrabold text-lg sm:text-xl text-amber-700 mb-2">Marilah berdoa <span className="font-normal italic text-stone-500 text-sm sm:text-base">(Hening)</span></p>
            <p className="pl-4 sm:pl-5 border-l-3 border-stone-300 text-stone-700 text-base sm:text-lg leading-relaxed">
              Ya Allah, karena kabar malaikat, kami mengetahui bahwa Yesus Kristus Putra-Mu menjadi manusia. Curahkanlah rahmat-Mu ke dalam hati kami, supaya karena sengsara dan salib-Nya, kami dibawa kepada kebangkitan yang mulia. Sebab Dialah Tuhan, pengantara kami.
            </p>
            <p className="font-bold text-base sm:text-lg mt-3">
              <span className="inline-block font-mono text-xs sm:text-sm font-bold text-stone-500 bg-stone-100 border border-stone-200 px-2 py-0.5 rounded mr-2 align-middle select-none">R.</span>
              Amin.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 pt-2 relative z-10">
          <button
            onClick={handleDismiss}
            className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-stone-100 text-stone-700 font-bold rounded-xl active:scale-95 transition-all text-xs sm:text-sm tracking-wider cursor-pointer border border-stone-300 shadow-sm"
          >
            SELESAI BERDOA
          </button>
          <button
            onClick={() => {
              handleDismiss();
              // Scroll to the readings card
              const el = document.getElementById('bacaan-hari-ini');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-bold rounded-xl shadow-lg hover:shadow-amber-500/10 active:scale-95 transition-all text-xs sm:text-sm tracking-wider cursor-pointer"
          >
            BACAAN HARI INI
          </button>
        </div>
      </div>
    </div>
  );
}
