import React, { useState, useEffect } from 'react';
import {
  Award,
  ShieldCheck,
  Users,
  Building,
  Scale,
  PhoneCall,
  Mail,
  MapPin,
  CheckCircle2,
  Briefcase,
  MessageCircle,
} from 'lucide-react';
import { SITE_INFO } from '../data/siteData';
import anilPhotoDefault from '../assets/images/anil_cordeiro_exact_match_1791120803389.jpg';
import deepakPhotoDefault from '../assets/images/deepak_cordeiro_portrait_1791101167296.jpg';

interface AboutSectionProps {
  onOpenEnquire: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenEnquire }) => {
  const [photoUrlAnil, setPhotoUrlAnil] = useState<string>(anilPhotoDefault);
  const [photoUrlDeepak, setPhotoUrlDeepak] = useState<string>(deepakPhotoDefault);

  useEffect(() => {
    // Check for user-selected custom original files
    try {
      const savedAnil = localStorage.getItem('cordeiro_custom_anil_portrait_v3');
      if (savedAnil && savedAnil.startsWith('data:image')) {
        setPhotoUrlAnil(savedAnil);
      }
      const savedDeepak = localStorage.getItem('cordeiro_custom_deepak_portrait_v3');
      if (savedDeepak && savedDeepak.startsWith('data:image')) {
        setPhotoUrlDeepak(savedDeepak);
      }
    } catch {
      // ignore
    }
  }, []);

  const pillars = [
    {
      title: 'Professionalism',
      description: 'Disciplined transaction tracking, objective valuation benchmarks, and prompt reporting.',
      icon: Award,
    },
    {
      title: 'Trust & Transparency',
      description: 'Zero hidden clauses, clear fee structures, and transparent communication at every milestone.',
      icon: ShieldCheck,
    },
    {
      title: 'Consumer Respect',
      description: "Every client's unique timeline, privacy, and budget are treated with paramount respect.",
      icon: Users,
    },
    {
      title: 'Legal Rigor',
      description: 'Thorough scrutiny of land titles, registration documents, and municipal clearances.',
      icon: Scale,
    },
  ];

  const credentialsAnil = [
    '21+ Years of Leadership in South Mumbai Real Estate',
    'Specialist in Colaba, Lower Parel, Cuffe Parade & MMR',
    'High-End Residential Acquisitions & Expat Relocations',
    'Commercial Office Leasing & Grade-A Business Suites',
    'Title Verification, Stamp Duty & Sub-Registrar Filing',
  ];

  const credentialsDeepak = [
    'Commercial Office Leasing & Corporate Portfolio Scouting',
    'Grade-A Commercial Towers & IT Parks Specialist',
    'Lower Parel, Nariman Point, BKC & MMR Commercial Corridors',
    'High-Net-Worth Portfolio Advisory & Resale Closures',
    'Stamp Duty Valuation, SRA / RERA Compliance & Legal Filing',
  ];

  return (
    <section id="about" className="py-20 bg-slate-50/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="max-w-4xl mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-800 bg-blue-100/70 px-3.5 py-1.5 rounded-full border border-blue-200 mb-3">
            <Building className="w-3.5 h-3.5" />
            <span>Colaba, Mumbai, Maharashtra</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6 font-serif-luxury">
            About Us
          </h2>
          {/* Exact Paragraph from Live Website */}
          <div className="bg-white border-l-4 border-blue-800 p-6 rounded-r-xl shadow-xs border border-slate-200/60">
            <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-normal">
              "{SITE_INFO.aboutText}"
            </p>
          </div>
        </div>

        {/* Agency Foundational Pillars & Consultation Actions */}
        <div className="mb-10 sm:mb-12 bg-white rounded-2xl p-6 sm:p-10 shadow-xl border border-slate-200/80 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif-luxury">
                Our Foundational Pillars
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                The core principles that drive every property consultation across Mumbai
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenEnquire}
                className="bg-blue-800 hover:bg-blue-900 text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-lg shadow-xs transition-all cursor-pointer"
              >
                Schedule a Consultation
              </button>
              <a
                href={`tel:${SITE_INFO.phonePrimary}`}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 hover:text-blue-800 bg-slate-100 hover:bg-slate-200 px-4 py-2.5 rounded-lg transition-colors border border-slate-300 shadow-xs"
              >
                <PhoneCall className="w-3.5 h-3.5 text-blue-700" />
                <span>Call {SITE_INFO.phonePrimary}</span>
              </a>
            </div>
          </div>

          {/* 4 Core Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pillars.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 hover:bg-white transition-all shadow-xs"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="p-1.5 rounded-md bg-blue-100 text-blue-900">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Executive Profiles Stack */}
        <div className="space-y-8 sm:space-y-10">
          {/* 1. Full Section Card: Anil S. Cordeiro */}
          <div className="w-full">
            <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-xl border border-slate-200/80 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-900 via-amber-500 to-blue-800" />
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* Left Column: Round Photo of Anil Cordeiro, Identity & Direct Contacts */}
                <div className="lg:col-span-5 xl:col-span-4 flex flex-col items-center text-center lg:border-r lg:border-slate-100 lg:pr-8">
                  <div className="relative pt-1">
                    <div className="w-52 h-64 sm:w-60 sm:h-72 rounded-2xl p-1.5 bg-gradient-to-tr from-amber-500 via-blue-900 to-amber-400 shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
                      <div className="w-full h-full rounded-xl overflow-hidden border-2 border-white bg-slate-100 relative shadow-inner">
                        <img
                          src={photoUrlAnil}
                          alt="Anil S. Cordeiro - Founder & Principal Property Consultant"
                          className="w-full h-full object-cover object-top"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    {/* Verified Seal Badge */}
                    <div
                      className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 bg-blue-900 text-amber-400 p-2 sm:p-2.5 rounded-xl border-2 border-white shadow-lg flex items-center justify-center"
                      title="Verified Founder & Principal Consultant"
                    >
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Name & Credentials */}
                  <div className="mt-4 text-center w-full">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif-luxury tracking-tight">
                      Anil S. Cordeiro
                    </h3>
                    <p className="text-sm font-semibold text-amber-600 tracking-wide mt-1">
                      Founder & Principal Property Consultant
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-2 mt-2">
                      <span className="inline-flex items-center gap-1.5 text-xs text-slate-600 font-medium bg-slate-100 px-3 py-1 rounded-full">
                        <Building className="w-3.5 h-3.5 text-blue-800" />
                        <span>Cordeiro Real Estate · Est. 2003</span>
                      </span>
                      <span className="text-xs font-semibold bg-amber-100 text-amber-900 px-2.5 py-1 rounded-full">
                        21+ Years Experience
                      </span>
                    </div>
                  </div>

                  {/* Direct Contact Cards */}
                  <div className="w-full space-y-2 mt-5 pt-4 border-t border-slate-100">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
                      <a
                        href="tel:+919820925054"
                        className="flex items-center gap-2 p-2.5 rounded-lg bg-blue-50/80 hover:bg-blue-100 text-blue-900 border border-blue-200/60 transition-colors"
                      >
                        <div className="p-1.5 rounded-md bg-blue-800 text-white">
                          <PhoneCall className="w-3.5 h-3.5" />
                        </div>
                        <div className="text-left overflow-hidden">
                          <div className="text-[10px] text-blue-700 font-semibold uppercase">Direct Call</div>
                          <div className="text-xs font-bold text-slate-900 truncate">+91 9820925054</div>
                        </div>
                      </a>
                      <a
                        href={`https://wa.me/919820925054?text=${encodeURIComponent(
                          'Hello Anil Cordeiro, I am contacting you regarding South Mumbai real estate consultation.'
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 p-2.5 rounded-lg bg-emerald-50/80 hover:bg-emerald-100 text-emerald-900 border border-emerald-200/60 transition-colors"
                      >
                        <div className="p-1.5 rounded-md bg-emerald-600 text-white">
                          <MessageCircle className="w-3.5 h-3.5" />
                        </div>
                        <div className="text-left overflow-hidden">
                          <div className="text-[10px] text-emerald-700 font-semibold uppercase">WhatsApp</div>
                          <div className="text-xs font-bold text-slate-900 truncate">Chat with Anil</div>
                        </div>
                      </a>
                    </div>
                    <a
                      href="mailto:anil@cordeirorealestate.co.in"
                      className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 transition-colors"
                    >
                      <div className="p-1.5 rounded-md bg-slate-700 text-white">
                        <Mail className="w-3.5 h-3.5" />
                      </div>
                      <div className="text-left overflow-hidden">
                        <div className="text-[10px] text-slate-500 font-semibold uppercase">Direct Email</div>
                        <div className="text-xs font-bold text-slate-900 truncate">anil@cordeirorealestate.co.in</div>
                      </div>
                    </a>
                  </div>

                  <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-blue-800" />
                    <span>Colaba · Lower Parel · MMR</span>
                  </div>
                </div>

                {/* Right Column: Bio Quote, Executive Story & Areas of Expertise */}
                <div className="lg:col-span-7 xl:col-span-8 space-y-6">
                  <div className="p-5 rounded-xl bg-blue-50/60 border-l-4 border-blue-800 shadow-xs">
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic font-serif-luxury">
                      "Over two decades dedicated to facilitating transparent, high-value real estate transactions across South Mumbai with integrity and uncompromising client respect."
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif-luxury tracking-tight">
                      Over Two Decades of South Mumbai Excellence
                    </h4>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      Under the veteran leadership of <strong>Anil S. Cordeiro</strong>, our agency has facilitated
                      over two decades of seamless acquisitions, high-yield leases, corporate expat transfers, and
                      resale closures. With dual operational offices in <strong>Colaba</strong> and <strong>Lower Parel</strong>,
                      we maintain immediate on-ground access to the most coveted luxury and commercial addresses.
                    </p>
                  </div>

                  <div className="pt-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
                      <Briefcase className="w-4 h-4 text-blue-800" />
                      <span>Areas of Expertise & Record</span>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {credentialsAnil.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-200/60">
                          <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Full Section Card: Deepak Cordeiro */}
          <div className="w-full">
            <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-xl border border-slate-200/80 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-900 via-amber-500 to-blue-800" />
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* Left Column: Round Photo of Deepak Cordeiro */}
                <div className="lg:col-span-5 xl:col-span-4 flex flex-col items-center text-center lg:border-r lg:border-slate-100 lg:pr-8">
                  <div className="relative pt-1">
                    <div className="w-52 h-64 sm:w-60 sm:h-72 rounded-2xl p-1.5 bg-gradient-to-tr from-amber-500 via-blue-900 to-amber-400 shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
                      <div className="w-full h-full rounded-xl overflow-hidden border-2 border-white bg-slate-100 relative shadow-inner">
                        <img
                          src={photoUrlDeepak}
                          alt="Deepak Cordeiro - Co-Founder & Director of Property Acquisitions"
                          className="w-full h-full object-cover object-top"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    {/* Verified Seal Badge */}
                    <div
                      className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 bg-blue-900 text-amber-400 p-2 sm:p-2.5 rounded-xl border-2 border-white shadow-lg flex items-center justify-center"
                      title="Verified Director & Property Consultant"
                    >
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Name & Credentials */}
                  <div className="mt-4 text-center w-full">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif-luxury tracking-tight">
                      Deepak Cordeiro
                    </h3>
                    <p className="text-sm font-semibold text-amber-600 tracking-wide mt-1">
                      Co-Founder & Director of Property Acquisitions
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-2 mt-2">
                      <span className="inline-flex items-center gap-1.5 text-xs text-slate-600 font-medium bg-slate-100 px-3 py-1 rounded-full">
                        <Building className="w-3.5 h-3.5 text-blue-800" />
                        <span>Cordeiro Real Estate · Est. 2003</span>
                      </span>
                      <span className="text-xs font-semibold bg-amber-100 text-amber-900 px-2.5 py-1 rounded-full">
                        20+ Years Experience
                      </span>
                    </div>
                  </div>

                  {/* Direct Contact Cards */}
                  <div className="w-full space-y-2 mt-5 pt-4 border-t border-slate-100">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
                      <a
                        href="tel:+919967240464"
                        className="flex items-center gap-2 p-2.5 rounded-lg bg-blue-50/80 hover:bg-blue-100 text-blue-900 border border-blue-200/60 transition-colors"
                      >
                        <div className="p-1.5 rounded-md bg-blue-800 text-white">
                          <PhoneCall className="w-3.5 h-3.5" />
                        </div>
                        <div className="text-left overflow-hidden">
                          <div className="text-[10px] text-blue-700 font-semibold uppercase">Direct Call</div>
                          <div className="text-xs font-bold text-slate-900 truncate">+91 9967240464</div>
                        </div>
                      </a>
                      <a
                        href={`https://wa.me/919967240464?text=${encodeURIComponent(
                          'Hello Deepak Cordeiro, I am contacting you regarding real estate consultation in Mumbai.'
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 p-2.5 rounded-lg bg-emerald-50/80 hover:bg-emerald-100 text-emerald-900 border border-emerald-200/60 transition-colors"
                      >
                        <div className="p-1.5 rounded-md bg-emerald-600 text-white">
                          <MessageCircle className="w-3.5 h-3.5" />
                        </div>
                        <div className="text-left overflow-hidden">
                          <div className="text-[10px] text-emerald-700 font-semibold uppercase">WhatsApp</div>
                          <div className="text-xs font-bold text-slate-900 truncate">Chat with Deepak</div>
                        </div>
                      </a>
                    </div>
                    <a
                      href="mailto:deepak@cordeirorealestate.co.in"
                      className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 transition-colors"
                    >
                      <div className="p-1.5 rounded-md bg-slate-700 text-white">
                        <Mail className="w-3.5 h-3.5" />
                      </div>
                      <div className="text-left overflow-hidden">
                        <div className="text-[10px] text-slate-500 font-semibold uppercase">Direct Email</div>
                        <div className="text-xs font-bold text-slate-900 truncate">deepak@cordeirorealestate.co.in</div>
                      </div>
                    </a>
                  </div>

                  <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-blue-800" />
                    <span>Lower Parel · Colaba · MMR</span>
                  </div>
                </div>

                {/* Right Column: Bio Quote, Executive Story & Areas of Expertise */}
                <div className="lg:col-span-7 xl:col-span-8 space-y-6">
                  <div className="p-5 rounded-xl bg-blue-50/60 border-l-4 border-blue-800 shadow-xs">
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic font-serif-luxury">
                      "Delivering strategic real estate solutions with transparency, speed, and analytical valuation accuracy across Mumbai's most competitive prime corridors."
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif-luxury tracking-tight">
                      Corporate Leasing & High-Net-Worth Advisory Leadership
                    </h4>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      Under Deepak Cordeiro's strategic guidance, our corporate leasing and commercial acquisitions
                      division assists multinational firms, BFSI institutions, and private investors. Coordinating
                      from our <strong>Florence Tower, Lower Parel</strong> headquarters and <strong>Colaba</strong> office,
                      Deepak provides clients with analytical pricing intelligence and seamless regulatory closures.
                    </p>
                  </div>

                  <div className="pt-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
                      <Briefcase className="w-4 h-4 text-blue-800" />
                      <span>Areas of Expertise & Record</span>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {credentialsDeepak.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-200/60">
                          <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
