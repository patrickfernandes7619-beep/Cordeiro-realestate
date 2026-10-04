import React from 'react';
import { Star, Quote, Sparkles, CheckCircle } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/siteData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="relative py-24 bg-slate-950 text-white overflow-hidden border-b border-slate-900"
    >
      {/* Background Image with Dark Contrast Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/90 to-slate-950" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-400/30 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Experiences</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 font-serif-luxury">
            Testimonials
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Real feedback from valued buyers, tenants, and property owners in Colaba and South Mumbai.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="bg-slate-900/80 backdrop-blur-md rounded-2xl p-8 border border-slate-800 shadow-xl flex flex-col justify-between relative hover:border-slate-700 transition-colors"
            >
              <Quote className="w-10 h-10 text-blue-500/30 absolute top-6 right-6 pointer-events-none" />
              <div>
                {/* 5 Star Rating */}
                <div className="flex items-center gap-1 text-amber-400 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Exact Quote */}
                <p className="text-slate-200 text-sm sm:text-base italic leading-relaxed mb-6 font-normal font-serif-luxury">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-700 to-amber-600 flex items-center justify-center font-bold text-white text-sm shadow-sm">
                  {t.clientName.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>{t.clientName}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-blue-400" />
                  </div>
                  <div className="text-xs text-slate-400">
                    {t.role} · {t.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Stat Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-amber-400 font-serif-luxury">
              21+
            </div>
            <div className="text-xs text-slate-400 mt-0.5">Years Active Experience</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-white font-serif-luxury">
              1,000+
            </div>
            <div className="text-xs text-slate-400 mt-0.5">Satisfied Clients</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-white font-serif-luxury">
              100%
            </div>
            <div className="text-xs text-slate-400 mt-0.5">Clear Title Diligence</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-blue-400 font-serif-luxury">
              2
            </div>
            <div className="text-xs text-slate-400 mt-0.5">Offices (Colaba & Parel)</div>
          </div>
        </div>
      </div>
    </section>
  );
};
