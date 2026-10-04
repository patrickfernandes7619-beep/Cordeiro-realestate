import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp, Mail, Home, Briefcase } from 'lucide-react';
import { SITE_INFO } from '../data/siteData';

interface FloatingActionsProps {
  onOpenEnquire: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenEnquire }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Floating Right Widgets */}
      <div className="fixed right-5 bottom-6 z-40 hidden sm:flex flex-col items-end gap-3 pointer-events-none">
        {/* WhatsApp Chat Floating Button */}
        <a
          href={`https://wa.me/${SITE_INFO.whatsappNumber}?text=${encodeURIComponent(
            SITE_INFO.whatsappDefaultMsg
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto group flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
          aria-label="Chat with Cordeiro Real Estate on WhatsApp"
          id="floating-whatsapp-btn"
        >
          <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
          <span className="text-xs font-bold tracking-wide hidden group-hover:inline transition-all">
            WhatsApp Us
          </span>
        </a>

        {/* Quick Call Button */}
        <a
          href="tel:+919820925054"
          className="pointer-events-auto bg-blue-700 hover:bg-blue-800 text-white p-3.5 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
          aria-label="Call Anil: +91 9820925054"
          id="floating-call-btn"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="pointer-events-auto bg-slate-900/90 hover:bg-slate-950 text-white p-3 rounded-full shadow-lg transition-all transform hover:scale-105 backdrop-blur-xs cursor-pointer"
            aria-label="Scroll to top"
            id="floating-scroll-top-btn"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Floating Side "Enquire Now" Ribbon (desktop) */}
      <button
        onClick={onOpenEnquire}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex items-center gap-1.5 bg-blue-800 hover:bg-blue-900 text-white py-3 px-2 rounded-l-lg shadow-xl text-xs font-bold [writing-mode:vertical-rl] rotate-180 tracking-wider transition-all cursor-pointer"
        id="side-enquire-ribbon"
      >
        <Mail className="w-3.5 h-3.5 rotate-90" />
        <span>ENQUIRE NOW</span>
      </button>

      {/* Mobile Bottom Navigation Bar (responsive for small screens) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl py-2 px-3 sm:hidden flex items-center justify-around text-[10px] font-medium text-slate-700">
        <button
          onClick={() => scrollToSection('home')}
          className="flex flex-col items-center gap-0.5 hover:text-blue-800"
        >
          <Home className="w-4 h-4 text-slate-600" />
          <span>Home</span>
        </button>

        <button
          onClick={() => scrollToSection('services')}
          className="flex flex-col items-center gap-0.5 hover:text-blue-800"
        >
          <Briefcase className="w-4 h-4 text-slate-600" />
          <span>Services</span>
        </button>

        <a
          href="tel:+919820925054"
          className="flex flex-col items-center gap-0.5 text-blue-800 font-bold"
        >
          <div className="w-8 h-8 rounded-full bg-blue-800 text-white flex items-center justify-center -mt-4 shadow-lg border-2 border-white">
            <Phone className="w-4 h-4" />
          </div>
          <span>Call</span>
        </a>

        <a
          href={`https://wa.me/${SITE_INFO.whatsappNumber}?text=${encodeURIComponent(
            SITE_INFO.whatsappDefaultMsg
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-0.5 text-emerald-700 font-bold"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onOpenEnquire}
          className="flex flex-col items-center gap-0.5 text-amber-700 font-bold"
        >
          <Mail className="w-4 h-4" />
          <span>Enquire</span>
        </button>
      </div>
    </>
  );
};
