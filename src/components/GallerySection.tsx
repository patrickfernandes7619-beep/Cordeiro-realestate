import React, { useState } from 'react';
import { Maximize2, MapPin, Sparkles } from 'lucide-react';
import { GALLERY_DATA } from '../data/siteData';
import { GalleryItem } from '../types';

interface GallerySectionProps {
  onSelectImage: (item: GalleryItem, index: number) => void;
  onOpenEnquire: (propertyName?: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onSelectImage, onOpenEnquire }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'residential' | 'heritage' | 'commercial'>('all');

  const getFilteredItems = () => {
    if (activeTab === 'all') return GALLERY_DATA;
    if (activeTab === 'residential')
      return GALLERY_DATA.filter((i) => i.id === 'gal-1' || i.id === 'gal-3' || i.id === 'gal-5');
    if (activeTab === 'heritage')
      return GALLERY_DATA.filter((i) => i.id === 'gal-2' || i.id === 'gal-4');
    if (activeTab === 'commercial')
      return GALLERY_DATA.filter((i) => i.id === 'gal-6' || i.id === 'gal-7' || i.id === 'gal-8');
    return GALLERY_DATA;
  };

  const filteredItems = getFilteredItems();

  return (
    <section id="gallery" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-blue-800 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Exclusive Property Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 font-serif-luxury">
            Gallery
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            A curated glimpse into South Mumbai & Lower Parel luxury towers, historic sea-facing residences,
            and prime corporate office developments.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-blue-800 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-300'
              }`}
            >
              All Properties ({GALLERY_DATA.length})
            </button>
            <button
              onClick={() => setActiveTab('residential')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'residential'
                  ? 'bg-blue-800 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-300'
              }`}
            >
              Luxury High-Rise
            </button>
            <button
              onClick={() => setActiveTab('heritage')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'heritage'
                  ? 'bg-blue-800 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-300'
              }`}
            >
              Heritage & Colaba
            </button>
            <button
              onClick={() => setActiveTab('commercial')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'commercial'
                  ? 'bg-blue-800 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-300'
              }`}
            >
              Commercial & Plans
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => onSelectImage(item, index)}
              className="group relative bg-white rounded-xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 border border-slate-200 cursor-pointer flex flex-col"
              id={`gallery-item-${item.id}`}
            >
              {/* Image Box */}
              <div className="relative h-64 overflow-hidden bg-slate-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/60 transition-colors duration-300" />
                {/* Hover overlay icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-md p-3 rounded-full text-blue-900 shadow-lg transform group-hover:scale-100 scale-75 transition-transform duration-300">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
                {/* Badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-slate-900/80 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded tracking-wide uppercase border border-slate-700">
                    {item.type}
                  </span>
                </div>
              </div>

              {/* Caption */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm group-hover:text-blue-800 transition-colors line-clamp-1 mb-1 font-serif-luxury">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2">
                    <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span className="line-clamp-1">{item.location}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-blue-700 font-semibold group-hover:underline">
                    View Full Image
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenEnquire(item.title);
                    }}
                    className="text-[11px] font-medium bg-slate-100 hover:bg-blue-100 text-slate-700 hover:text-blue-800 px-2.5 py-1 rounded transition-colors cursor-pointer"
                  >
                    Enquire
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
