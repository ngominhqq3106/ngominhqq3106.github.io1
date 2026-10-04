import React, { useState, useEffect, useRef } from 'react';
import { Camera, Sparkles, HeartHandshake, Check } from 'lucide-react';
import authenticPortraitImg from '../assets/images/portrait_ngoc_minh_real_1791124782373.jpg';

interface CandidatePortraitProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const CandidatePortrait: React.FC<CandidatePortraitProps> = ({
  className = '',
  size = 'lg',
}) => {
  const [photoSrc, setPhotoSrc] = useState<string>(() => {
    return localStorage.getItem('minh_user_portrait') || authenticPortraitImg;
  });
  const [hasCustomPhoto, setHasCustomPhoto] = useState(() => {
    return !!localStorage.getItem('minh_user_portrait');
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem('minh_user_portrait');
    if (saved) {
      setPhotoSrc(saved);
      setHasCustomPhoto(true);
    }
  }, []);

  const handleImageError = () => {
    // Guaranteed fallback to candidate's authentic face photo
    setPhotoSrc(authenticPortraitImg);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const base64 = event.target?.result as string;
      if (base64) {
        setPhotoSrc(base64);
        setHasCustomPhoto(true);
        localStorage.setItem('minh_user_portrait', base64);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Antique Botanical Cameo Frame */}
      <div className="relative rounded-t-[3rem] rounded-b-2xl overflow-hidden border-2 border-amber-400/80 bg-[#0f241a] shadow-[0_12px_40px_rgba(0,0,0,0.8),inset_0_1px_2px_rgba(255,245,190,0.5),0_0_0_2px_rgba(16,185,129,0.3)] p-3 backdrop-blur-md group">
        
        {/* Ornate Corner Accents */}
        <span className="absolute top-3 left-4 text-amber-300/80 text-sm select-none pointer-events-none">❧</span>
        <span className="absolute top-3 right-4 text-amber-300/80 text-sm select-none pointer-events-none">☙</span>

        {/* Photo Container */}
        <div className="relative aspect-4/5 sm:aspect-square rounded-t-[2.5rem] rounded-b-xl overflow-hidden border border-amber-300/40 bg-black/40">
          <img
            src={photoSrc}
            onError={handleImageError}
            alt="Pham Ngoc Minh - Authentic Portrait"
            className="w-full h-full object-cover object-center filter contrast-[1.02] transition-transform duration-700 group-hover:scale-105"
          />

          {/* Morning Dew reflection vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1811] via-transparent to-transparent opacity-75 pointer-events-none" />

          {/* FTU Blood Club VP Badge on her Red Polo Shirt */}
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-rose-950/85 border border-rose-400/60 backdrop-blur-md text-[10px] text-rose-200 flex items-center gap-1.5 shadow-md">
            <HeartHandshake className="w-3.5 h-3.5 text-rose-300" />
            <span className="font-medium">FTU Blood Club VP</span>
          </div>

          {/* Academic Badge */}
          <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-emerald-950/85 border border-amber-400/60 backdrop-blur-md text-[10px] text-amber-200 flex items-center gap-1.5 shadow-md">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="font-mono">FTU 2024</span>
          </div>

          {/* Bottom Card Caption */}
          <div className="absolute bottom-3 left-3 right-3 text-left p-2.5 rounded-xl bg-emerald-950/85 border border-amber-500/40 backdrop-blur-md flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-white flex items-center gap-1 font-serif-garden">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                Pham Ngoc Minh
              </p>
              <p className="text-[10px] text-emerald-300/90 font-sans">
                Finance Intern · Foreign Trade University
              </p>
            </div>

            {/* Quick Upload / Refresh Trigger */}
            <button
              onClick={() => fileInputRef.current?.click()}
              className="p-1.5 rounded-lg bg-emerald-900/60 hover:bg-emerald-800 text-amber-300 hover:text-white border border-amber-400/40 transition-all text-[10px] flex items-center gap-1 cursor-pointer"
              title="Click to load/switch to your exact original photo (IMG_6589.jpg)"
            >
              <Camera className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{hasCustomPhoto ? 'Custom Photo' : 'Upload Photo'}</span>
            </button>
          </div>
        </div>

        {/* Hidden File Input for Exact Photo Upload / Selection */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />

        {/* Sub-card: 3 Quantitative Milestones */}
        <div className="grid grid-cols-3 gap-2 mt-3 pt-2.5 border-t border-emerald-800/50 text-center text-xs">
          <div className="p-2 rounded-xl bg-emerald-950/60 border border-amber-500/30">
            <div className="font-bold text-amber-300 font-serif-garden text-sm sm:text-base">
              5,000+
            </div>
            <div className="text-[10px] text-emerald-300/80">Properties</div>
          </div>
          <div className="p-2 rounded-xl bg-emerald-950/60 border border-amber-500/30">
            <div className="font-bold text-amber-300 font-serif-garden text-sm sm:text-base">
              9.2%/yr
            </div>
            <div className="text-[10px] text-emerald-300/80">Club Treasury</div>
          </div>
          <div className="p-2 rounded-xl bg-emerald-950/60 border border-amber-500/30">
            <div className="font-bold text-amber-300 font-serif-garden text-sm sm:text-base">
              200+
            </div>
            <div className="text-[10px] text-emerald-300/80">Enterprises</div>
          </div>
        </div>
      </div>
    </div>
  );
};
