import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Music, Disc3, Sparkles, ChevronDown, ExternalLink, Leaf } from 'lucide-react';

interface GardenMusicPlayerProps {
  videoId?: string;
}

export const GardenMusicPlayer: React.FC<GardenMusicPlayerProps> = ({
  videoId = 'pHehPg_Y9MM',
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isExpanded, setIsExpanded] = useState(true);
  const [ambientNatureSound, setAmbientNatureSound] = useState(true);

  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorIntervalRef = useRef<number | null>(null);

  // Auto-resume audio upon user's first interaction anywhere on page (satisfies browser autoplay policy)
  useEffect(() => {
    const handleFirstGesture = () => {
      setIsPlaying(true);
      setAmbientNatureSound(true);
      if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
        audioContextRef.current.resume();
      }
    };

    window.addEventListener('click', handleFirstGesture, { once: true });
    window.addEventListener('scroll', handleFirstGesture, { once: true });
    window.addEventListener('touchstart', handleFirstGesture, { once: true });
    window.addEventListener('keydown', handleFirstGesture, { once: true });

    return () => {
      window.removeEventListener('click', handleFirstGesture);
      window.removeEventListener('scroll', handleFirstGesture);
      window.removeEventListener('touchstart', handleFirstGesture);
      window.removeEventListener('keydown', handleFirstGesture);
    };
  }, []);

  // Gentle procedural morning dew / forest sound using Web Audio API
  useEffect(() => {
    if (!ambientNatureSound) {
      if (oscillatorIntervalRef.current) {
        window.clearInterval(oscillatorIntervalRef.current);
        oscillatorIntervalRef.current = null;
      }
      return;
    }

    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = audioContextRef.current || new AudioCtx();
      audioContextRef.current = ctx;

      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // Generate random delicate morning dew drops & gentle chimes
      oscillatorIntervalRef.current = window.setInterval(() => {
        if (!ambientNatureSound || ctx.state !== 'running') return;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        // Pentatonic botanical morning tones
        const freqs = [523.25, 659.25, 783.99, 1046.5, 1318.5, 1567.98];
        const randomFreq = freqs[Math.floor(Math.random() * freqs.length)];

        osc.type = 'sine';
        osc.frequency.setValueAtTime(randomFreq, ctx.currentTime);

        // Water droplet pitch bend
        osc.frequency.exponentialRampToValueAtTime(randomFreq * 1.25, ctx.currentTime + 0.08);

        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.035, ctx.currentTime + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.35);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 0.4);
      }, 1600);
    } catch {
      // AudioContext not allowed or unsupported
    }

    return () => {
      if (oscillatorIntervalRef.current) {
        window.clearInterval(oscillatorIntervalRef.current);
      }
    };
  }, [ambientNatureSound]);

  const handleStartMusic = () => {
    setIsPlaying(true);
    setAmbientNatureSound(true);
  };

  return (
    <aside
      aria-label="Garden Ambient Music Player"
      className="fixed bottom-5 right-5 z-40 max-w-sm w-full transition-all duration-300"
    >
      <AnimatePresence mode="wait">
        {!isExpanded ? (
          /* Minimized Floating Button */
          <motion.button
            key="minimized"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={() => setIsExpanded(true)}
            className="ml-auto flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-emerald-950/85 hover:bg-emerald-900 text-emerald-200 border border-emerald-600/40 shadow-xl backdrop-blur-md transition-all hover:scale-105 active:scale-95 group cursor-pointer"
            title="Open Morning Garden Music Player"
          >
            <div className="relative">
              <Disc3
                className={`w-5 h-5 text-emerald-300 transition-transform ${
                  isPlaying ? 'animate-spin' : ''
                }`}
                style={{ animationDuration: '6s' }}
              />
              {isPlaying && (
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              )}
            </div>
            <span className="text-xs font-medium tracking-wide">Garden Melodies</span>
            <div className="flex items-end gap-0.5 h-3">
              <span className={`w-0.5 bg-emerald-400 rounded-full transition-all ${isPlaying ? 'h-3 animate-pulse' : 'h-1'}`} />
              <span className={`w-0.5 bg-emerald-400 rounded-full transition-all ${isPlaying ? 'h-2 animate-pulse delay-75' : 'h-1'}`} />
              <span className={`w-0.5 bg-emerald-400 rounded-full transition-all ${isPlaying ? 'h-3.5 animate-pulse delay-150' : 'h-1'}`} />
            </div>
          </motion.button>
        ) : (
          /* Expanded Floating Card */
          <motion.div
            key="expanded"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-[#0b1c14]/90 border border-emerald-500/30 rounded-2xl p-4 shadow-2xl backdrop-blur-xl text-emerald-50 relative overflow-hidden"
          >
            {/* Subtle morning glow behind */}
            <div className="absolute -top-10 -right-10 w-28 h-28 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

            {/* Header Row */}
            <div className="flex items-center justify-between gap-2 mb-3 pb-2.5 border-b border-emerald-800/40">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-emerald-900/60 text-emerald-300 border border-emerald-700/40">
                  <Music className="w-4 h-4" />
                </span>
                <div>
                  <h3 className="text-xs font-semibold tracking-wide text-emerald-100 flex items-center gap-1.5">
                    Morning Garden Harmonies
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  </h3>
                  <p className="text-[10px] text-emerald-400/80">Serene Acoustic Companion</p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <a
                  href={`https://youtu.be/${videoId}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 text-emerald-400 hover:text-emerald-200 hover:bg-emerald-900/40 rounded-lg transition-colors"
                  title="Open original YouTube link"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="p-1.5 text-emerald-400 hover:text-emerald-200 hover:bg-emerald-900/40 rounded-lg transition-colors cursor-pointer"
                  title="Minimize Player"
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* YouTube Player Embed */}
            <div className="relative rounded-xl overflow-hidden bg-black/60 aspect-video mb-3 border border-emerald-900/60 shadow-inner group">
              {isPlaying ? (
                <iframe
                  title="YouTube Garden Music Player"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&enablejsapi=1&playsinline=1&rel=0&modestbranding=1`}
                  className="w-full h-full object-cover"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div
                  onClick={handleStartMusic}
                  className="w-full h-full flex flex-col items-center justify-center cursor-pointer p-4 text-center bg-gradient-to-br from-emerald-950/80 to-[#07130c]/90 hover:from-emerald-900/80 transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center mb-2 shadow-lg group-hover:scale-110 transition-transform">
                    <Disc3 className="w-6 h-6 text-emerald-300" />
                  </div>
                  <p className="text-xs font-medium text-emerald-200 mb-1">
                    Click to Play Soundtrack
                  </p>
                  <p className="text-[10px] text-emerald-400/70">
                    Acoustic music accompanied by morning dew
                  </p>
                </div>
              )}
            </div>

            {/* Ambient Dew Sounds & Interactive controls */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <button
                  onClick={() => setAmbientNatureSound(!ambientNatureSound)}
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border transition-all text-[11px] cursor-pointer ${
                    ambientNatureSound
                      ? 'bg-emerald-800/50 border-emerald-500/60 text-emerald-200 shadow-sm'
                      : 'bg-emerald-950/40 border-emerald-800/40 text-emerald-400/80 hover:text-emerald-200'
                  }`}
                >
                  <Sparkles className="w-3 h-3 text-amber-300" />
                  <span>Morning Dew Drops: {ambientNatureSound ? 'ON' : 'OFF'}</span>
                </button>

                <span className="text-[10px] text-emerald-400/70 flex items-center gap-1">
                  <Leaf className="w-2.5 h-2.5 text-emerald-400" />
                  Quiet Haven
                </span>
              </div>

              {!isPlaying && (
                <div className="text-[10px] text-emerald-400/80 bg-emerald-950/40 p-2 rounded-lg border border-emerald-900/40 leading-relaxed">
                  💡 Best experienced with sound active while discovering the secret chapters.
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  );
};
