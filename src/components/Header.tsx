import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { SITE_INFO, LOGO_URL, LOGO_BASE64 } from '../data/siteData';
import { LiveTimingBadge } from './LiveTimingBadge';

interface HeaderProps {
  onOpenEnquire: (serviceName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEnquire }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [logoSrc, setLogoSrc] = useState(LOGO_URL);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'about', 'services', 'gallery', 'videos', 'testimonials', 'contact'];
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(s);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home', id: 'home' },
    { label: 'ABOUT US', href: '#about', id: 'about' },
    { label: 'SERVICES', href: '#services', id: 'services' },
    { label: 'GALLERY', href: '#gallery', id: 'gallery' },
    { label: 'VIDEOS', href: '#videos', id: 'videos' },
    { label: 'TESTIMONIALS', href: '#testimonials', id: 'testimonials' },
    { label: 'CONTACT US', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full z-40 relative">
      {/* Top Notification / Information Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 sm:py-2 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-1.5 sm:gap-3">
          {/* Contact Details (Call & Anil Cordeiro's Email) - Fully visible on Mobile, Tablet & Desktop */}
          <div className="w-full sm:w-auto flex flex-wrap items-center justify-between sm:justify-start gap-x-3 sm:gap-x-5 gap-y-1">
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <a
                href="tel:+919820925054"
                className="flex items-center gap-1 hover:text-amber-400 transition-colors"
                id="top-bar-phone-anil"
                title="Call Anil S. Cordeiro"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Anil: +91 9820925054</span>
              </a>
              <a
                href="tel:+919967240464"
                className="hidden lg:flex items-center gap-1 hover:text-amber-400 transition-colors"
                id="top-bar-phone-deepak"
                title="Call Deepak S. Cordeiro"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Deepak: +91 9967240464</span>
              </a>
            </div>

            {/* Anil Cordeiro Email - explicitly shown on mobile, tablet & desktop */}
            <a
              href={`mailto:${SITE_INFO.emailAnil}`}
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors shrink-0 text-slate-200"
              id="top-bar-email-anil"
              title="Email Anil S. Cordeiro"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="font-medium text-[11px] sm:text-xs tracking-tight">{SITE_INFO.emailAnil}</span>
            </a>

            <span className="hidden xl:flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Colaba, South Mumbai</span>
            </span>
          </div>

          {/* Right Trust & Timing Badges */}
          <div className="hidden md:flex items-center gap-3 sm:gap-4 text-slate-400 shrink-0">
            <div className="hidden lg:flex items-center gap-2 text-xs">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>{SITE_INFO.timings}</span>
              </span>
              <LiveTimingBadge variant="dark" />
            </div>

            <span className="inline-flex items-center gap-1 text-emerald-400 font-medium text-[11px] sm:text-xs">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>21+ Yrs Trust</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Sticky */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'fixed top-0 left-0 bg-white/95 backdrop-blur-md shadow-md py-2.5 z-50'
            : 'bg-white py-3.5 shadow-xs'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand */}
          <a
            href="#home"
            className="flex items-center gap-3 group"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            id="brand-logo-link"
          >
            <div className="w-12 h-14 sm:w-14 sm:h-16 rounded-lg overflow-hidden shadow-xs border border-slate-200 flex-shrink-0 bg-white p-0.5 flex items-center justify-center">
              <img
                src={logoSrc}
                alt="Cordeiro Real Estate Logo"
                className="w-full h-full object-contain"
                onError={() => {
                  if (logoSrc !== LOGO_BASE64) {
                    setLogoSrc(LOGO_BASE64);
                  }
                }}
              />
            </div>
            <div className="flex flex-col">
              <div className="text-base sm:text-lg lg:text-xl font-bold tracking-tight text-slate-900 group-hover:text-blue-900 transition-colors leading-tight font-serif-luxury">
                CORDEIRO REAL ESTATE
              </div>
              <div className="text-[10px] sm:text-xs text-amber-600 font-semibold uppercase tracking-wider">
                Real Estate Agency in Colaba Mumbai
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`text-xs xl:text-sm font-semibold tracking-wide transition-colors py-1 relative ${
                  activeSection === link.id
                    ? 'text-blue-800 font-bold'
                    : 'text-slate-700 hover:text-blue-800'
                }`}
                id={`nav-${link.id}`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-700 rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={() => onOpenEnquire()}
              className="bg-blue-800 hover:bg-blue-900 text-white text-xs xl:text-sm font-semibold px-4 py-2 rounded-md shadow-xs transition-all hover:shadow-sm flex items-center gap-1.5 cursor-pointer"
              id="header-enquire-btn"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => onOpenEnquire()}
              className="bg-blue-800 text-white text-xs font-semibold px-3 py-1.5 rounded shadow-xs"
            >
              Enquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-hidden"
              aria-label="Toggle navigation menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[96px] bg-slate-950/70 z-50 lg:hidden animate-fade-in">
          <div className="bg-white w-full max-h-[calc(100vh-96px)] overflow-y-auto shadow-2xl p-6 border-b border-slate-200 space-y-4">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`text-sm font-semibold py-2.5 px-3 rounded-md transition-colors ${
                    activeSection === link.id
                      ? 'bg-blue-50 text-blue-900 border-l-4 border-blue-700'
                      : 'text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-4 border-t border-slate-200 space-y-3">
              {/* Direct Contact in Mobile Drawer */}
              <div className="p-3 bg-blue-50/70 border border-blue-200/80 rounded-lg space-y-2">
                <div className="text-[11px] font-bold text-blue-900 uppercase tracking-wider">Direct Contact</div>
                <div className="space-y-1.5 text-xs">
                  <a
                    href="tel:+919820925054"
                    className="flex items-center gap-2 text-slate-800 hover:text-blue-800 font-semibold"
                  >
                    <Phone className="w-3.5 h-3.5 text-blue-700" />
                    <span>Anil: +91 9820925054</span>
                  </a>
                  <a
                    href={`mailto:${SITE_INFO.emailAnil}`}
                    className="flex items-center gap-2 text-slate-800 hover:text-blue-800 font-medium break-all"
                  >
                    <Mail className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                    <span>{SITE_INFO.emailAnil}</span>
                  </a>
                </div>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-blue-700" />
                    <span>Business Hours</span>
                  </span>
                  <LiveTimingBadge variant="light" showDetails={false} />
                </div>
                <div className="text-xs font-semibold text-slate-900">{SITE_INFO.timings}</div>
                <div className="text-[11px] text-emerald-700 font-medium">{SITE_INFO.timingsDays}</div>
                <div className="text-[10px] text-amber-800 font-medium">Sunday: Closed (Prior call appointment only)</div>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquire();
                }}
                className="w-full py-2.5 px-4 bg-blue-800 text-white rounded-md font-semibold text-sm shadow-xs hover:bg-blue-900 transition-colors"
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
