import React, { useState } from 'react';
import { Phone, Mail, Building, ShieldCheck, ChevronRight, Clock } from 'lucide-react';
import { SITE_INFO, LOGO_URL, LOGO_BASE64 } from '../data/siteData';
import { LiveTimingBadge } from './LiveTimingBadge';

interface FooterProps {
  onOpenEnquire: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEnquire: _onOpenEnquire }) => {
  const [logoSrc, setLogoSrc] = useState(LOGO_URL);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT US', href: '#about' },
    { label: 'SERVICES', href: '#services' },
    { label: 'GALLERY', href: '#gallery' },
    { label: 'VIDEOS', href: '#videos' },
    { label: 'TESTIMONIALS', href: '#testimonials' },
    { label: 'CONTACT US', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800" id="colophon">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Overview */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-14 rounded-lg bg-white p-0.5 border border-slate-700 shrink-0 flex items-center justify-center overflow-hidden">
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
              <div>
                <h2 className="text-lg font-bold text-white tracking-tight leading-tight font-serif-luxury">
                  CORDEIRO REAL ESTATE
                </h2>
                <p className="text-xs text-amber-400 font-medium">
                  Real Estate Agency in Colaba Mumbai
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Specialized in South Mumbai residential and commercial property investments, verified leases,
              resales, and legal registration services for over 21 years.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="bg-slate-900 border border-slate-800 text-slate-300 px-3 py-1 rounded-full flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>21+ Years Experience</span>
              </span>
              <span className="bg-slate-900 border border-slate-800 text-slate-300 px-3 py-1 rounded-full flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-blue-400" />
                <span>Colaba & Lower Parel</span>
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {navLinks.map((item, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollTo(item.href)}
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-slate-400 hover:translate-x-1 duration-200 cursor-pointer"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Head Office Address */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Head Office Address
            </h3>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <div className="font-semibold text-white">CORDEIRO REAL ESTATE</div>
              <p className="leading-relaxed">
                Florence Tower, 1st Floor, Office No 8, S B Pawar Marg, Near Marathon Futurex, Lower Parel, Mumbai - 400013.
              </p>
              <div className="flex items-center gap-2 text-slate-300 pt-1">
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Tel: 022 31959968 / 31472460</span>
              </div>
            </div>
          </div>

          {/* Branch Office Address & Emails */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Branch Office Address
            </h3>
            <div className="space-y-2 text-xs sm:text-sm text-slate-400 mb-4">
              <div className="font-semibold text-white">CORDEIRO REAL ESTATE</div>
              <p className="leading-relaxed">
                A-12, Usha Sadan, Ground Floor, S B S Road, Colaba Post Office, Mumbai - 400005.
              </p>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Tel: 022 22154470 / 22154471</span>
              </div>
              <div className="text-slate-400 text-xs">
                Tele Fax: 022 22154472
              </div>
            </div>

            <div className="flex items-center justify-between mb-1.5 pt-2 border-t border-slate-900">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>Timings</span>
              </h4>
              <LiveTimingBadge variant="dark" showDetails={false} />
            </div>
            <div className="space-y-0.5 text-xs text-slate-300 mb-4">
              <div className="font-semibold text-white">{SITE_INFO.timings}</div>
              <div className="text-emerald-400 font-medium">{SITE_INFO.timingsDays}</div>
              <div className="text-slate-400 text-[11px]">{SITE_INFO.timingsSunday}</div>
            </div>

            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1.5">
              Call Us
            </h4>
            <div className="space-y-1 text-xs text-slate-300 mb-4">
              <a href="tel:+919820925054" className="hover:text-amber-400 block transition-colors">
                Anil: +91 9820925054
              </a>
              <a href="tel:+919967240464" className="hover:text-amber-400 block transition-colors">
                Deepak: +91 9967240464
              </a>
            </div>

            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1.5">
              Email Contacts
            </h4>
            <div className="space-y-1 text-xs text-slate-400">
              <a href="mailto:anil@cordeirorealestate.co.in" className="hover:text-amber-400 block transition-colors">
                anil@cordeirorealestate.co.in
              </a>
              <a href="mailto:deepak@cordeirorealestate.co.in" className="hover:text-amber-400 block transition-colors">
                deepak@cordeirorealestate.co.in
              </a>
              <a href={`mailto:${SITE_INFO.emailGeneral}`} className="hover:text-amber-400 block transition-colors">
                {SITE_INFO.emailGeneral}
              </a>
            </div>
          </div>
        </div>

        {/* Copyright line */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 text-center text-xs text-slate-400">
          <p>
            Copyright © Cordeiro Real Estate | Real Estate Agency in Colaba Mumbai
          </p>
        </div>
      </div>
    </footer>
  );
};
