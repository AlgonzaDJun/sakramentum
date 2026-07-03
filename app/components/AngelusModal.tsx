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
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-zinc-900 text-zinc-100 rounded-3xl border border-amber-500/30 p-6 sm:p-8 shadow-2xl shadow-amber-500/5 animate-in zoom-in-95 slide-in-from-bottom-8 duration-300">
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent rounded-full" />
        
        <div className="flex flex-col items-center text-center mb-6">
          {/* Swinging Bell Micro-Animation */}
          <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mb-3 border border-amber-500/20">
            <svg 
              className="w-8 h-8 text-amber-500 origin-top animate-[wiggle_1.5s_ease-in-out_infinite]"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </div>
          
          <h2 className="text-xl font-bold uppercase tracking-widest text-amber-500">Doa Malaikat Tuhan</h2>
          <p className="text-xs text-zinc-400 mt-1 font-mono tracking-wider">ANGELUS • {hours === 6 ? 'PAGI (06.00)' : hours === 12 ? 'SIANG (12.00)' : 'SORE (18.00)'}</p>
        </div>

        {/* Prayer Text */}
        <div className="space-y-6 text-sm text-zinc-300 leading-relaxed max-w-lg mx-auto border-y border-zinc-800 py-6 my-4">
          <div>
            <p className="italic text-zinc-400 mb-1"><span className="font-bold text-amber-500 mr-2">V.</span>Maria diberi kabar oleh malaikat Tuhan,</p>
            <p className="font-medium"><span className="font-bold text-zinc-500 mr-2">R.</span>Bahwa ia akan mengandung dari Roh Kudus.</p>
            <p className="text-xs text-zinc-500 mt-1 italic pl-6">(Salam Maria …)</p>
          </div>

          <div>
            <p className="italic text-zinc-400 mb-1"><span className="font-bold text-amber-500 mr-2">V.</span>&ldquo;Aku ini hamba Tuhan,&rdquo;</p>
            <p className="font-medium"><span className="font-bold text-zinc-500 mr-2">R.</span>&ldquo;Terjadilah padaku menurut perkataan-Mu.&rdquo;</p>
            <p className="text-xs text-zinc-500 mt-1 italic pl-6">(Salam Maria …)</p>
          </div>

          <div>
            <p className="italic text-zinc-400 mb-1"><span className="font-bold text-amber-500 mr-2">V.</span>Sabda sudah menjadi daging,</p>
            <p className="font-medium"><span className="font-bold text-zinc-500 mr-2">R.</span>Dan tinggal diantara kita.</p>
            <p className="text-xs text-zinc-500 mt-1 italic pl-6">(Salam Maria …)</p>
          </div>

          <div>
            <p className="italic text-zinc-400 mb-1"><span className="font-bold text-amber-500 mr-2">V.</span>Doakanlah kami, ya Santa Bunda Allah,</p>
            <p className="font-medium"><span className="font-bold text-zinc-500 mr-2">R.</span>Supaya kami dapat menikmati janji Kristus.</p>
          </div>

          <div className="pt-2">
            <p className="font-bold text-amber-500/80 mb-1">Marilah berdoa <span className="font-normal italic text-zinc-500">(Hening)</span></p>
            <p className="pl-4 border-l-2 border-zinc-700 text-zinc-300">
              Ya Allah, karena kabar malaikat, kami mengetahui bahwa Yesus Kristus Putra-Mu menjadi manusia. Curahkanlah rahmat-Mu ke dalam hati kami, supaya karena sengsara dan salib-Nya, kami dibawa kepada kebangkitan yang mulia. Sebab Dialah Tuhan, pengantara kami.
            </p>
            <p className="font-bold mt-2"><span className="font-bold text-zinc-500 mr-2">R.</span>Amin.</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 pt-2">
          <button
            onClick={handleDismiss}
            className="w-full sm:w-auto px-5 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-bold rounded-xl active:scale-95 transition-all text-xs tracking-wider cursor-pointer border border-zinc-750"
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
            className="w-full sm:w-auto px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-zinc-950 font-bold rounded-xl shadow-lg hover:shadow-amber-500/20 active:scale-95 transition-all text-xs tracking-wider cursor-pointer"
          >
            BACAAN HARI INI
          </button>
        </div>
      </div>
    </div>
  );
}
