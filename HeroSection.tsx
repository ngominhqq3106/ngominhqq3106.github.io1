import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowDown, Mail, Phone, MapPin, Calendar, Award, ExternalLink, Leaf } from 'lucide-react';
import { CANDIDATE_INFO } from '../data/cvData';
import { CandidatePortrait } from './CandidatePortrait';

interface HeroSectionProps {
  onDiscoverSecret: (secretId: string) => void;
  discovered: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onDiscoverSecret,
  discovered,
}) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden"
    >
      {/* Background Dawn Garden Artwork with Morning Mist Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1.05, opacity: 1 }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
          src="/src/assets/images/secret_garden_dawn_1791122928506.jpg"
          alt="Morning Conservatory Garden at Dawn"
          className="w-full h-full object-cover object-center filter brightness-[0.42] contrast-[1.1]"
        />
        {/* Morning Mist Gradient Layers */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1510] via-[#0b1510]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1510] via-transparent to-[#0b1510]/90" />
        
        {/* Animated Morning Fog Effect */}
        <div className="absolute inset-0 opacity-25 pointer-events-none animate-mist bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-400/20 via-transparent to-transparent" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 w-full py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Story, Title & Quantitative Credo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Morning Greeting & Quiet Tag */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm text-emerald-300 font-medium font-serif mb-2">
              <span className="flex items-center gap-2 text-amber-300">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping inline-block" />
                <span>❧ The Awakening Gateway · Morning Dew ☙</span>
              </span>
              <span aria-hidden="true" className="text-emerald-700">/</span>
              <span>Foreign Trade University (FTU)</span>
              <span aria-hidden="true" className="text-emerald-700">/</span>
              <span>International Finance</span>
            </div>

            {/* Candidate Name in Lush Botanical Typography */}
            <div className="space-y-3">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3 }}
                className="text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-white font-serif-garden leading-[1.1] drop-shadow-sm"
              >
                {CANDIDATE_INFO.fullName}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.45 }}
                className="text-xl sm:text-2xl font-light text-emerald-200/90 font-serif-garden italic pt-1"
              >
                {CANDIDATE_INFO.role} · {CANDIDATE_INFO.subRole}
              </motion.p>
            </div>

            {/* Poetic & Strategic Bio */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.6 }}
              className="text-base sm:text-lg text-emerald-100/90 leading-relaxed max-w-2xl font-normal pt-2"
            >
              {CANDIDATE_INFO.bio}
            </motion.p>

            {/* Zero-Pill Clean Metadata Row with Typographic Separators */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap items-center gap-y-3 gap-x-4 text-xs sm:text-sm text-emerald-300/80 border-t border-b border-emerald-800/40 py-4 my-4"
            >
              <span className="flex items-center gap-2 text-emerald-200">
                <MapPin className="w-4 h-4 text-emerald-400" />
                {CANDIDATE_INFO.location}
              </span>
              <span aria-hidden="true" className="text-emerald-700">·</span>
              <a
                href={`tel:${CANDIDATE_INFO.phone}`}
                className="flex items-center gap-2 hover:text-emerald-100 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                {CANDIDATE_INFO.phone}
              </a>
              <span aria-hidden="true" className="text-emerald-700">·</span>
              <a
                href={`mailto:${CANDIDATE_INFO.email}`}
                className="flex items-center gap-2 hover:text-emerald-100 transition-colors"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                {CANDIDATE_INFO.email}
              </a>
              <span aria-hidden="true" className="text-emerald-700">·</span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-emerald-400" />
                Born: {CANDIDATE_INFO.birthDate}
              </span>
              <span aria-hidden="true" className="text-emerald-700">·</span>
              <span className="flex items-center gap-2 text-amber-300 font-medium">
                <Award className="w-4 h-4" />
                {CANDIDATE_INFO.ielts}
              </span>
            </motion.div>

            {/* Classical Vintage Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#identity"
                className="btn-vintage-botanical px-6 py-3 rounded-xl text-amber-100 hover:text-white font-medium text-sm flex items-center gap-2 group cursor-pointer"
              >
                <span>Wander the Secret Garden</span>
                <ArrowDown className="w-4 h-4 text-amber-300 group-hover:translate-y-1 transition-transform" />
              </a>

              <a
                href={CANDIDATE_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-vintage-botanical px-5 py-3 rounded-xl text-emerald-200 hover:text-white text-sm font-medium flex items-center gap-2 cursor-pointer"
              >
                <span>LinkedIn Profile</span>
                <ExternalLink className="w-4 h-4 text-amber-300" />
              </a>

              {/* Interactive Secret 1: Glowing Morning Clover */}
              <button
                onClick={() => onDiscoverSecret('clover-1')}
                className={`btn-vintage-botanical px-4 py-2.5 rounded-xl text-xs transition-all flex items-center gap-2 cursor-pointer ${
                  discovered
                    ? 'border-amber-400 text-amber-200'
                    : 'border-emerald-500/50 text-emerald-300'
                }`}
                title="Tap the morning dew clover to unlock secret 1"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>
                  {discovered ? '🌿 Secret 1: Sprout Awakened' : '🌱 Tap Dewdrop to Awaken'}
                </span>
              </button>
            </motion.div>

            {discovered && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="p-3.5 rounded-xl bg-emerald-900/40 border border-amber-500/40 text-xs text-emerald-200 space-y-1 vintage-frame"
              >
                <span className="font-semibold text-amber-300 flex items-center gap-1.5 font-serif">
                  <Leaf className="w-3.5 h-3.5 text-amber-400" />
                  Morning Dewdrop Secret #01:
                </span>
                <p className="italic text-emerald-100/90">
                  "In finance, patience is like the morning dew nurturing a fragile shoot. Every verified data point is a deeper root anchored into reality."
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Right Column: Authentic Candidate Portrait with Ornate Conservatory Border */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, delay: 0.35, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative max-w-sm sm:max-w-md w-full">
              {/* Outer Decorative Botanical Rings */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-amber-400/20 via-emerald-500/20 to-teal-300/10 blur-xl opacity-70 animate-pulse" />
              
              {/* Authentic Photo Component with User's Uploaded Face (IMG_6589.jpg) */}
              <CandidatePortrait />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
