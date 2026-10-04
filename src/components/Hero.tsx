import React from 'react';
import { ArrowRight, CheckCircle2, Building, ShieldCheck, Sparkles } from 'lucide-react';
import { SITE_INFO } from '../data/siteData';

interface HeroProps {
  onOpenEnquire: (serviceName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquire }) => {
  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative w-full min-h-[580px] lg:min-h-[640px] flex items-center bg-slate-950 overflow-hidden">
      {/* Background Image with Depth Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1920&q=85')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/85 to-slate-900/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/40" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#3857F1_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-white z-10 w-full">
        <div className="max-w-3xl">
          {/* Tagline Pill */}
          <div className="inline-flex items-center gap-2 bg-blue-900/60 border border-blue-500/40 rounded-full px-3.5 py-1.5 text-xs sm:text-sm text-blue-200 font-medium mb-6 backdrop-blur-sm shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>South Mumbai's Trusted Real Estate Advisors</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span className="text-amber-300 font-semibold">Since 2003</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.15] font-serif-luxury">
            Where Dreams{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-amber-200">
              Come Home
            </span>
          </h1>

          {/* Authentic Description & Mission Copy from Live Website */}
          <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed mb-8 font-normal max-w-2xl">
            {SITE_INFO.heroMission}
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <button
              onClick={() => onOpenEnquire()}
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm sm:text-base px-7 py-3.5 rounded-md shadow-lg shadow-blue-900/40 transition-all transform hover:-translate-y-0.5 flex items-center gap-2 animate-pulse-subtle cursor-pointer"
              id="hero-enquire-btn"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={scrollToServices}
              className="bg-white/10 hover:bg-white/20 text-white font-medium text-sm sm:text-base px-6 py-3.5 rounded-md border border-white/20 backdrop-blur-sm transition-all cursor-pointer"
              id="hero-services-btn"
            >
              Explore Services
            </button>
          </div>

          {/* Trust Value Props */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 pt-6 border-t border-slate-800/80">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-md bg-blue-900/50 border border-blue-600/30 text-blue-400">
                <Building className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-white">South Mumbai</div>
                <div className="text-[11px] text-slate-400">Colaba & Lower Parel</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-md bg-amber-900/40 border border-amber-600/30 text-amber-400">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-white">21+ Years Trust</div>
                <div className="text-[11px] text-slate-400">Led by Anil S. Cordeiro</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
              <div className="p-2 rounded-md bg-emerald-900/40 border border-emerald-600/30 text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-white">Legal Verification</div>
                <div className="text-[11px] text-slate-400">Stamps & Registrations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
