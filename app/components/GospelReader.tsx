'use client';

import React, { useState, useEffect } from 'react';

interface Verse {
  verse: string;
  text: string;
}

interface ScrapeResponse {
  query: string;
  url: string;
  verses: Verse[];
  error?: string;
}

interface GospelReaderProps {
  gospelCode: string;
}

export default function GospelReader({ gospelCode }: GospelReaderProps) {
  const [viewMode, setViewMode] = useState<'native' | 'iframe'>('native');
  const [loading, setLoading] = useState(false);
  const [verses, setVerses] = useState<Verse[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg' | 'xl'>('base');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!gospelCode) return;

    const fetchGospel = async () => {
      setLoading(true);
      setError(null);
      setVerses([]);
      
      try {
        const response = await fetch(`/api/liturgical/scrape?q=${encodeURIComponent(gospelCode)}`);
        if (!response.ok) {
          throw new Error('Gagal mengambil teks Kitab Suci.');
        }
        
        const data: ScrapeResponse = await response.json();
        if (data.error || !data.verses || data.verses.length === 0) {
          throw new Error(data.error || 'Teks Kitab Suci tidak ditemukan atau tidak dapat diproses.');
        }
        
        setVerses(data.verses);
      } catch (err: unknown) {
        console.error(err);
        const errMsg = err instanceof Error ? err.message : 'Gagal memproses data.';
        setError(errMsg);
        setViewMode('iframe'); // Automatically switch to iframe if scraping fails
      } finally {
        setLoading(false);
      }
    };

    fetchGospel();
  }, [gospelCode]);

  const handleCopy = () => {
    if (verses.length === 0) return;
    
    const plainText = verses.map(v => `[${v.verse}] ${v.text}`).join('\n');
    navigator.clipboard.writeText(`${gospelCode}\n\n${plainText}\n\nSumber: imankatolik.or.id`);
    
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getFontSizeClass = () => {
    switch (fontSize) {
      case 'sm': return 'text-sm leading-relaxed';
      case 'lg': return 'text-lg leading-relaxed';
      case 'xl': return 'text-xl leading-loose';
      case 'base':
      default:
        return 'text-base leading-relaxed';
    }
  };

  const getIframeUrl = () => {
    return `https://www.imankatolik.or.id/alkitabq.php?q=${encodeURIComponent(gospelCode)}`;
  };

  return (
    <div id="bacaan-hari-ini" className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-5 sm:p-6 backdrop-blur-md font-sans">
      
      {/* Header controls */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-4 border-b border-zinc-800/60 mb-5">
        <div>
          <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-wider">Bacaan Injil</h3>
          <h2 className="text-lg font-bold text-zinc-100 mt-0.5">{gospelCode}</h2>
        </div>
        
        <div className="flex items-center gap-2 self-end sm:self-center">
          {/* Mode Switcher */}
          <div className="flex bg-zinc-950 p-1 rounded-xl border border-zinc-850">
            <button
              onClick={() => setViewMode('native')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                viewMode === 'native'
                  ? 'bg-[var(--liturgy-primary)] text-white shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Teks Native
            </button>
            <button
              onClick={() => setViewMode('iframe')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                viewMode === 'iframe'
                  ? 'bg-[var(--liturgy-primary)] text-white shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Iframe
            </button>
          </div>
        </div>
      </div>

      {/* Content Container */}
      {viewMode === 'native' ? (
        <div className="relative">
          {loading ? (
            <div className="space-y-3 py-6">
              <div className="h-4 bg-zinc-800 rounded animate-pulse w-3/4" />
              <div className="h-4 bg-zinc-800 rounded animate-pulse w-5/6" />
              <div className="h-4 bg-zinc-800 rounded animate-pulse w-2/3" />
              <div className="h-4 bg-zinc-800 rounded animate-pulse w-4/5" />
            </div>
          ) : error ? (
            <div className="py-8 text-center">
              <p className="text-xs text-red-400 mb-2">Gagal membaca teks secara otomatis.</p>
              <button
                onClick={() => setViewMode('iframe')}
                className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-lg text-xs font-medium cursor-pointer"
              >
                Beralih ke Iframe Asli
              </button>
            </div>
          ) : (
            <div>
              {/* Toolbar */}
              <div className="flex items-center justify-between mb-4 bg-zinc-950/40 px-3 py-2 rounded-lg border border-zinc-850">
                {/* Font Resizer */}
                <div className="flex items-center gap-1">
                  <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider mr-2">Ukuran Huruf:</span>
                  {(['sm', 'base', 'lg', 'xl'] as const).map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setFontSize(sz)}
                      className={`w-7 h-7 rounded flex items-center justify-center text-xs font-bold uppercase transition-all cursor-pointer ${
                        fontSize === sz
                          ? 'bg-zinc-800 text-[var(--liturgy-primary)] font-extrabold border border-zinc-700'
                          : 'text-zinc-500 hover:text-zinc-300'
                      }`}
                    >
                      {sz === 'sm' ? 'A-' : sz === 'base' ? 'A' : sz === 'lg' ? 'A+' : 'A++'}
                    </button>
                  ))}
                </div>

                {/* Copy Button */}
                <button
                  onClick={handleCopy}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-bold transition-all border border-zinc-800/80 cursor-pointer ${
                    copied
                      ? 'bg-emerald-950/40 text-emerald-400 border-emerald-800/30'
                      : 'bg-zinc-900/60 text-zinc-300 hover:bg-zinc-800 hover:text-white'
                  }`}
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    {copied ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    )}
                  </svg>
                  {copied ? 'Tersalin!' : 'Salin Teks'}
                </button>
              </div>

              {/* Styled Scripture Text */}
              <div className={`text-zinc-300 space-y-4 max-h-[450px] overflow-y-auto pr-2 custom-scrollbar font-serif ${getFontSizeClass()}`}>
                {verses.map((verseItem) => {
                  
                  return (
                    <p key={verseItem.verse} className="text-justify leading-relaxed">
                      {/* Verse marker */}
                      <span className="inline-block font-mono text-[10px] font-bold text-zinc-500 bg-zinc-850 px-1.5 py-0.5 rounded mr-1.5 align-middle select-none">
                        {verseItem.verse.split(':').pop() || verseItem.verse}
                      </span>
                      {/* Verse text */}
                      {verseItem.text}
                    </p>
                  );
                })}
              </div>
              
              <div className="text-[10px] text-zinc-500 text-right mt-4 italic font-mono">
                Sumber teks: imankatolik.or.id
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="relative rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950">
          <div className="absolute top-0 left-0 right-0 bg-zinc-900 px-3 py-1.5 flex items-center justify-between border-b border-zinc-800">
            <span className="text-[10px] text-zinc-400 font-mono overflow-hidden text-ellipsis whitespace-nowrap max-w-[80%]">
              {getIframeUrl()}
            </span>
            <a
              href={getIframeUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] text-zinc-400 hover:text-white font-bold underline flex items-center gap-1 cursor-pointer"
            >
              Buka Baru
              <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
          <div className="pt-8">
            <iframe
              src={getIframeUrl()}
              title={`Injil: ${gospelCode}`}
              className="w-full h-[450px] border-0 bg-white"
            />
          </div>
        </div>
      )}
    </div>
  );
}
