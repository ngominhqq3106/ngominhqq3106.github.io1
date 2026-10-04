import React, { useState, useEffect } from 'react';
import { Flower2 } from 'lucide-react';

interface AurevonHeroProps {
  onExplorePortfolio?: () => void;
}

const ENTRANCE_EASING = 'cubic-bezier(0.16, 1, 0.3, 1)';
const OVERLAY_EASING = 'cubic-bezier(0.76, 0, 0.24, 1)';
const VIDEO_SRC =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260819_212700_3bb9329b-5c50-4257-a09b-ca85cf3654a3.mp4';

const NAV_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'Story', href: '#identity' },
  { label: 'Collection', href: '#explore' },
  { label: 'Inquire', href: '#contact' },
];

export const AurevonHero: React.FC<AurevonHeroProps> = ({ onExplorePortfolio }) => {
  const [navMounted, setNavMounted] = useState(false);
  const [heroMounted, setHeroMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Navbar entrance after 100ms
    const navTimer = setTimeout(() => {
      setNavMounted(true);
    }, 100);

    // Hero elements entrance after 300ms
    const heroTimer = setTimeout(() => {
      setHeroMounted(true);
    }, 300);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      setIsPastHero(window.scrollY > window.innerHeight * 0.75);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(navTimer);
      clearTimeout(heroTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // When overlay is open, lock body scroll; restore on close
  useEffect(() => {
    if (isOverlayOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOverlayOpen]);

  const toggleOverlay = () => {
    setIsOverlayOpen((prev) => !prev);
  };

  const closeOverlay = () => {
    setIsOverlayOpen(false);
  };

  const triggerTransition = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      onExplorePortfolio?.();
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }, 350);
  };

  const handleHeroSectionClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('nav') || target.closest('.z-40') || target.closest('button')) {
      return;
    }
    triggerTransition();
  };

  const handleLinkClick = (href: string) => {
    closeOverlay();
    if (href === '#explore' || href === '#identity' || href === '#contact') {
      onExplorePortfolio?.();
      setTimeout(() => {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleCtaClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    triggerTransition();
  };

  return (
    <div className="relative w-full bg-black">
      {/* NAVBAR (fixed) */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isPastHero ? 'opacity-0 -translate-y-full pointer-events-none' : 'opacity-100 translate-y-0'
        } ${isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'}`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
          {/* Left — logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              closeOverlay();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`text-white text-xl md:text-2xl font-semibold tracking-tight z-50 transition-all duration-700 ${
              navMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
            style={{
              transitionTimingFunction: ENTRANCE_EASING,
              transitionDelay: navMounted ? '0ms' : '0ms',
            }}
          >
            Aurevon
          </a>

          {/* Center — desktop only (hidden md:flex) */}
          <button
            onClick={toggleOverlay}
            className={`hidden md:flex px-5 py-2 rounded-full border border-white/20 text-white/90 text-sm hover:bg-white/10 items-center gap-2 cursor-pointer z-50 transition-all duration-700 ${
              navMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
            style={{
              transitionTimingFunction: ENTRANCE_EASING,
              transitionDelay: navMounted ? '200ms' : '0ms',
            }}
          >
            <span>{isOverlayOpen ? 'Close' : 'Navigate'}</span>
          </button>

          {/* Right — desktop only (hidden md:flex) */}
          <div
            className={`hidden md:flex transition-all duration-700 ${
              navMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
            style={{
              transitionTimingFunction: ENTRANCE_EASING,
              transitionDelay: navMounted ? '400ms' : '0ms',
            }}
          >
            <Flower2 className="w-7 h-7 text-white/90" />
          </div>

          {/* Right — mobile (md:hidden) */}
          <button
            onClick={toggleOverlay}
            className={`md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5 z-50 cursor-pointer transition-all duration-700 ${
              navMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
            style={{
              transitionTimingFunction: ENTRANCE_EASING,
              transitionDelay: navMounted ? '200ms' : '0ms',
            }}
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-[2px] bg-white transition-all duration-500 ${
                isOverlayOpen ? 'rotate-45 translate-y-[4px]' : ''
              }`}
              style={{ transitionTimingFunction: OVERLAY_EASING }}
            />
            <span
              className={`w-6 h-[2px] bg-white transition-all duration-500 ${
                isOverlayOpen ? '-rotate-45 -translate-y-[4px]' : ''
              }`}
              style={{ transitionTimingFunction: OVERLAY_EASING }}
            />
          </button>
        </div>
      </nav>

      {/* FULL-SCREEN OVERLAY MENU */}
      <div
        className={`fixed inset-0 z-40 bg-black flex flex-col items-center justify-center transition-all duration-700 ${
          isOverlayOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'
        }`}
        style={{ transitionTimingFunction: OVERLAY_EASING }}
      >
        <div className="flex flex-col items-center justify-center gap-8">
          {NAV_LINKS.map((link, index) => {
            const staggerDelay = isOverlayOpen ? 150 + index * 80 : 0;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`text-white font-instrument text-4xl md:text-6xl hover:opacity-60 transition-all duration-600 ${
                  isOverlayOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{
                  transitionTimingFunction: OVERLAY_EASING,
                  transitionDelay: `${staggerDelay}ms`,
                }}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </div>

      {/* HERO (full viewport) */}
      <section
        onClick={handleHeroSectionClick}
        className="relative w-full h-screen overflow-hidden flex items-end justify-center cursor-pointer select-none group"
        title="Nhấn vào video để mở cổng & khám phá"
      >
        {/* Background video */}
        <div
          className={`absolute inset-0 transition-all duration-[1400ms] ${
            heroMounted
              ? isTransitioning
                ? 'scale-110 opacity-75'
                : 'scale-100 opacity-100'
              : 'scale-105 opacity-0'
          }`}
          style={{ transitionTimingFunction: ENTRANCE_EASING }}
        >
          <video
            src={VIDEO_SRC}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        {/* Transition Ripple Bloom Flash */}
        <div
          className={`absolute inset-0 z-15 pointer-events-none transition-all duration-700 ${
            isTransitioning
              ? 'opacity-100 bg-radial from-amber-300/30 via-emerald-600/30 to-black/80 scale-125'
              : 'opacity-0 scale-100'
          }`}
        />

        {/* Subtle hover prompt */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none opacity-0 group-hover:opacity-90 transition-opacity duration-500">
          <div className="px-5 py-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white/90 text-xs font-sans flex items-center gap-2 shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <span>Nhấn bất kỳ đâu trên video để mở cổng & khám phá</span>
          </div>
        </div>

        {/* Foreground (bottom-centered): Only the button to transition to opening gate and exploring */}
        <div className="relative z-20 text-center px-6 pb-16 md:pb-24 max-w-4xl mx-auto flex flex-col items-center justify-center">
          <button
            onClick={handleCtaClick}
            className={`inline-flex items-center gap-3 px-8 md:px-10 py-4 bg-white text-black text-sm md:text-base font-medium rounded-full hover:bg-white/90 hover:scale-105 active:scale-95 transition-all duration-900 shadow-[0_4px_30px_rgba(255,255,255,0.25)] cursor-pointer group/btn ${
              heroMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              transitionTimingFunction: ENTRANCE_EASING,
              transitionDelay: heroMounted ? '400ms' : '0ms',
            }}
          >
            <span>Mở Cổng Vườn & Khám Phá</span>
            <Flower2 className="w-4 h-4 text-emerald-800 group-hover/btn:rotate-45 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};
