import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Building,
  CheckCircle2,
  MessageCircle,
  ExternalLink,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { SITE_INFO, OFFICES_DATA } from '../data/siteData';
import { ContactFormData } from '../types';
import { LiveTimingBadge } from './LiveTimingBadge';
import { getBusinessHoursStatus, WEEKLY_HOURS } from '../utils/businessHours';

interface ContactSectionProps {
  prefilledService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledService }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    service: prefilledService || 'General Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showWeeklyHours, setShowWeeklyHours] = useState(false);
  const [activeOfficeTab, setActiveOfficeTab] = useState<'head' | 'branch'>('head');

  const businessStatus = getBusinessHoursStatus();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      alert('Please fill in your Name, Mobile Number, and Email.');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `Hello Cordeiro Real Estate!\nName: ${formData.name || 'Visitor'}\nPhone: ${
        formData.phone || 'N/A'
      }\nEmail: ${formData.email || 'N/A'}\nService: ${
        formData.service
      }\nMessage: ${formData.message || 'Looking for property consultation in South Mumbai.'}`
    );
    window.open(`https://wa.me/${SITE_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-slate-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-blue-800 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Connect With Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 font-serif-luxury">
            Contact Us
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Visit our offices in Colaba or Lower Parel, or send us your requirements. Our advisors
            will assist you promptly.
          </p>
        </div>

        {/* 2 Office Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {OFFICES_DATA.map((office, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-xs border border-slate-200 hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-blue-800" />
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-800 bg-blue-50 px-3 py-1 rounded-md border border-blue-200">
                    <Building className="w-3.5 h-3.5" />
                    <span>{office.type} Address</span>
                  </div>
                  <span className="text-xs text-slate-500 font-medium">South Mumbai</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 font-serif-luxury">
                  {office.name}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {office.address}, {office.cityPin}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-2 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-800 shrink-0" />
                  <span className="font-semibold">Tel No:</span>
                  <span>{office.tel.join(' / ')}</span>
                </div>
                {office.teleFax && (
                  <div className="flex items-center gap-2 text-slate-600">
                    <span className="w-4" />
                    <span className="font-medium">Tele Fax:</span>
                    <span>{office.teleFax}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Contacts Bar */}
        <div className="bg-white rounded-xl p-6 shadow-xs border border-slate-200 mb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-blue-50 text-blue-800 shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0.5">Call Us</div>
              <a href="tel:+919820925054" className="text-sm font-bold text-slate-900 hover:text-blue-800 block transition-colors">
                Anil +91 9820925054
              </a>
              <a href="tel:+919967240464" className="text-sm font-bold text-slate-900 hover:text-blue-800 block mt-0.5 transition-colors">
                Deepak +91 9967240464
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-amber-50 text-amber-700 shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">General Enquiries</div>
              <a href={`mailto:${SITE_INFO.emailGeneral}`} className="text-xs font-bold text-slate-900 hover:text-blue-800 block truncate">
                {SITE_INFO.emailGeneral}
              </a>
              <div className="text-[11px] text-slate-500 truncate">
                anil@cordeirorealestate.co.in
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-slate-50/80 rounded-xl border border-slate-200/80">
            <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-700 shrink-0 mt-0.5">
              <Clock className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center justify-between gap-1.5 mb-1">
                <span className="text-xs font-bold text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
                  <span>Our Timings</span>
                </span>
                <LiveTimingBadge variant="google" />
              </div>
              <div className="text-sm font-bold text-slate-900">{SITE_INFO.timings}</div>
              <div className="text-xs text-emerald-700 font-semibold mt-0.5 flex flex-wrap items-center gap-1.5">
                <span>{SITE_INFO.timingsDays}</span>
                <span className="text-slate-300">·</span>
                <span className="text-amber-800 font-medium">{SITE_INFO.timingsSunday}</span>
              </div>

              {/* Collapsible Google Listing Weekly Schedule */}
              <button
                type="button"
                onClick={() => setShowWeeklyHours(!showWeeklyHours)}
                className="mt-2 text-xs font-medium text-blue-700 hover:text-blue-900 flex items-center gap-1 transition-colors cursor-pointer"
                id="toggle-google-hours-btn"
              >
                <span>{showWeeklyHours ? 'Hide full schedule' : 'See all days & hours'}</span>
                {showWeeklyHours ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>

              {showWeeklyHours && (
                <div className="mt-2.5 pt-2.5 border-t border-slate-200 space-y-1 text-xs">
                  {WEEKLY_HOURS.map((item) => {
                    const isToday = item.dayIndex === businessStatus.currentDayIndex;
                    return (
                      <div
                        key={item.day}
                        className={`flex items-center justify-between py-1.5 px-2 rounded-md ${
                          isToday
                            ? 'bg-blue-50/90 text-blue-900 font-bold border border-blue-200/60'
                            : 'text-slate-600'
                        }`}
                      >
                        <span className="flex items-center gap-1.5">
                          <span>{item.day}</span>
                          {isToday && (
                            <span className="text-[10px] uppercase tracking-wide bg-blue-600 text-white px-1.5 py-0.2 rounded-full font-semibold">
                              Today
                            </span>
                          )}
                        </span>
                        <span
                          className={
                            item.isClosed
                              ? 'text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded text-[11px] font-medium'
                              : isToday
                              ? 'font-mono text-blue-900'
                              : 'font-mono text-slate-500'
                          }
                        >
                          {item.hours}
                        </span>
                      </div>
                    );
                  })}
                  <div className="pt-1.5 text-[11px] text-slate-500 flex items-center justify-between">
                    <span>Live Mumbai Time (IST):</span>
                    <span className="font-mono font-medium text-slate-700">{businessStatus.currentMumbaiTimeStr}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-purple-50 text-purple-700 shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">WhatsApp Support</div>
              <a
                href={`https://wa.me/${SITE_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-purple-900 hover:underline flex items-center gap-1"
              >
                <span>+91 9820925054</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <div className="text-xs text-slate-500">Instant Chat & Consultation</div>
            </div>
          </div>
        </div>

        {/* Contact Form & Google Map Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Inquiry Form */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-4 sm:p-8 shadow-xs border border-slate-200" id="inquiry-form-card">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 font-serif-luxury">
              Send Property Enquiry
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              Fill in your details below and our Colaba team will get in touch with matched listings.
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center animate-fade-in">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                <h4 className="text-lg font-bold text-emerald-900 mb-1">
                  Thank You, {formData.name}!
                </h4>
                <p className="text-sm text-emerald-800 mb-4">
                  Your enquiry for <strong>{formData.service}</strong> has been received. Our senior advisor will call you at {formData.phone} shortly.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        service: 'General Inquiry',
                        message: '',
                      });
                    }}
                    className="text-xs font-semibold px-4 py-2 rounded-md bg-white border border-emerald-300 text-emerald-800 hover:bg-emerald-100 transition-colors cursor-pointer"
                  >
                    Submit Another Enquiry
                  </button>
                  <button
                    onClick={handleWhatsAppSend}
                    className="text-xs font-semibold px-4 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Send via WhatsApp</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" id="wpforms-1195">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    id="wpforms-1195-field_0"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Enter Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 Mobile Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      id="wpforms-1195-field_3"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      id="wpforms-1195-field_1"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Interested Service
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white"
                  >
                    <option value="General Inquiry">General Property Inquiry</option>
                    <option value="Buy Property">Buy Property (South Mumbai)</option>
                    <option value="Rent Property">Rent Property (Residential / Commercial)</option>
                    <option value="Resale Property">Resale Property & Valuation</option>
                    <option value="Estate Agents For Residence">Estate Agents For Residence</option>
                    <option value="Estate Agents For Residential Rental">Estate Agents For Residential Rental</option>
                    <option value="Registration and stamps">Registration and stamps (Legal Compliance)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Enter Message
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us your requirements, preferred locality, budget range, or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
                    id="wpforms-1195-field_2"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-blue-800 hover:bg-blue-900 text-white font-semibold text-sm py-3 px-6 rounded-lg shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                    id="wpforms-submit-1195"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Submitting...' : 'Submit Enquiry'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsAppSend}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm py-3 px-5 rounded-lg shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Interactive Google Map of Head Office with Marker */}
          <div className="lg:col-span-6 bg-white rounded-2xl overflow-hidden shadow-xs border border-slate-200 flex flex-col" id="office-location-map">
            {/* Office Tabs Switcher */}
            <div className="p-3.5 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-2.5 border-b border-slate-800">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 animate-bounce" />
                <span>Office Location Map</span>
              </div>
              {/* Tab buttons */}
              <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-lg">
                <button
                  type="button"
                  onClick={() => setActiveOfficeTab('head')}
                  className={`px-3 py-1 text-xs font-semibold rounded-md transition-all flex items-center gap-1.5 cursor-pointer ${
                    activeOfficeTab === 'head'
                      ? 'bg-blue-600 text-white shadow-xs ring-1 ring-white/20'
                      : 'text-slate-300 hover:text-white'
                  }`}
                  id="tab-head-office-map"
                >
                  <span className="w-2 h-2 rounded-full bg-red-400"></span>
                  <span>Head Office (Lower Parel)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveOfficeTab('branch')}
                  className={`px-3 py-1 text-xs font-semibold rounded-md transition-all flex items-center gap-1.5 cursor-pointer ${
                    activeOfficeTab === 'branch'
                      ? 'bg-blue-600 text-white shadow-xs ring-1 ring-white/20'
                      : 'text-slate-300 hover:text-white'
                  }`}
                  id="tab-branch-office-map"
                >
                  <span>Colaba Branch</span>
                </button>
              </div>
            </div>

            {/* Address Banner Above Map */}
            <div className="px-4 py-3 bg-blue-50/90 border-b border-blue-100 flex items-start gap-3 text-xs">
              <div className="p-1.5 rounded-md bg-red-600 text-white shrink-0 mt-0.5 shadow-xs">
                <MapPin className="w-3.5 h-3.5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center justify-between gap-1 mb-0.5">
                  <span className="font-bold text-slate-900 text-sm">
                    {activeOfficeTab === 'head' ? 'Head Office' : 'Branch Office'}
                  </span>
                  <span className="text-[10px] bg-red-100 text-red-800 font-bold px-2 py-0.5 rounded-full border border-red-200 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                    <span>Marker Pinned on Map</span>
                  </span>
                </div>
                <p className="text-slate-800 font-medium leading-snug">
                  {activeOfficeTab === 'head'
                    ? OFFICES_DATA[0].address + ', ' + OFFICES_DATA[0].cityPin
                    : OFFICES_DATA[1].address + ', ' + OFFICES_DATA[1].cityPin}
                </p>
                <div className="text-slate-500 text-[11px] mt-1 flex flex-wrap items-center gap-x-3 gap-y-0.5">
                  <span>Landmark: <strong className="text-slate-700">{activeOfficeTab === 'head' ? OFFICES_DATA[0].landmark : OFFICES_DATA[1].landmark}</strong></span>
                  <span>Tel: <strong className="text-slate-700">{activeOfficeTab === 'head' ? OFFICES_DATA[0].tel.join(', ') : OFFICES_DATA[1].tel.join(', ')}</strong></span>
                </div>
              </div>
            </div>

            {/* Map iframe with marker */}
            <div className="h-[360px] w-full bg-slate-200 relative group overflow-hidden">
              <iframe
                title={activeOfficeTab === 'head' ? 'Cordeiro Real Estate Head Office Map' : 'Cordeiro Real Estate Colaba Branch Map'}
                src={activeOfficeTab === 'head' ? SITE_INFO.headOfficeMapEmbedUrl : SITE_INFO.branchOfficeMapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full h-full"
              />
            </div>

            {/* Map Footer info & directions button */}
            <div className="p-3 bg-slate-50 text-xs text-slate-600 flex flex-wrap items-center justify-between gap-2 border-t border-slate-200">
              <div className="flex flex-col">
                <span className="flex items-center gap-1.5 text-slate-700 font-medium">
                  <span className="w-2 h-2 rounded-full bg-red-600"></span>
                  <span>
                    {activeOfficeTab === 'head'
                      ? 'Marker pinned: Florence Tower, Lower Parel (Near Marathon Futurex)'
                      : 'Marker pinned: Usha Sadan, Colaba (Next to Colaba Post Office)'}
                  </span>
                </span>
                <span className="text-[10px] text-slate-400 mt-0.5">Google Maps</span>
              </div>
              <a
                href={
                  activeOfficeTab === 'head'
                    ? 'https://maps.google.com/maps?q=18.994717,72.830642+(Cordeiro+Real+Estate+Head+Office)'
                    : 'https://maps.google.com/maps?q=18.91112,72.82085+(Cordeiro+Real+Estate+Colaba+Branch)'
                }
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-800 font-semibold hover:underline flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-xs hover:bg-blue-50 transition-colors"
              >
                <span>View on Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
