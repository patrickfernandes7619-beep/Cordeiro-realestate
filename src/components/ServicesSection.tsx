import React, { useState } from 'react';
import { Mail, Check, Sparkles } from 'lucide-react';
import { SERVICES_DATA } from '../data/siteData';

interface ServicesSectionProps {
  onOpenEnquire: (serviceName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenEnquire }) => {
  const [filter, setFilter] = useState<'all' | 'buy-sell' | 'rent' | 'legal'>('all');

  const filteredServices =
    filter === 'all'
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.category === filter);

  return (
    <section id="services" className="py-20 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-blue-800 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tailored Real Estate Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 font-serif-luxury">
            Our Services
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            From premier luxury residential acquisitions to transparent rental management and complete
            legal documentation across South Mumbai.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-blue-800 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-300'
              }`}
            >
              All Services ({SERVICES_DATA.length})
            </button>
            <button
              onClick={() => setFilter('buy-sell')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filter === 'buy-sell'
                  ? 'bg-blue-800 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-300'
              }`}
            >
              Buy & Resale
            </button>
            <button
              onClick={() => setFilter('rent')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filter === 'rent'
                  ? 'bg-blue-800 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-300'
              }`}
            >
              Rentals & Leases
            </button>
            <button
              onClick={() => setFilter('legal')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filter === 'legal'
                  ? 'bg-blue-800 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-300'
              }`}
            >
              Registration & Stamps
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 border border-slate-200 flex flex-col group"
              id={`service-card-${service.id}`}
            >
              {/* Image Container with Zoom effect */}
              <div className="relative h-56 overflow-hidden bg-slate-200">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="bg-blue-900/90 backdrop-blur-sm text-white text-[11px] font-bold px-2.5 py-1 rounded-md tracking-wider uppercase border border-blue-400/30">
                    {service.categoryLabel}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="text-xl font-bold tracking-tight drop-shadow-xs font-serif-luxury">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6">
                    {service.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <Check className="w-3.5 h-3.5 text-blue-700 mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enquire Now Button */}
                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={() => onOpenEnquire(service.title)}
                    className="w-full bg-blue-800 hover:bg-blue-900 text-white font-semibold text-xs sm:text-sm py-2.5 px-4 rounded-lg shadow-xs transition-all flex items-center justify-center gap-2 group-hover:bg-blue-700 cursor-pointer"
                    id={`enquire-service-${service.id}`}
                  >
                    <Mail className="w-4 h-4" />
                    <span>Enquire Now</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
