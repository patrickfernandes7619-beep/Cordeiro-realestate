import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, MessageCircle } from 'lucide-react';
import { SITE_INFO, LOGO_URL, LOGO_BASE64 } from '../data/siteData';

interface EnquireModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const EnquireModal: React.FC<EnquireModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: preselectedService || 'General Inquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      alert('Please fill in required fields.');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Cordeiro Real Estate!\nName: ${formData.name || 'Client'}\nPhone: ${
        formData.phone || 'N/A'
      }\nEmail: ${formData.email || 'N/A'}\nService: ${
        formData.service
      }\nMessage: ${formData.message || 'Looking for property consulting in South Mumbai.'}`
    );
    window.open(`https://wa.me/${SITE_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-xs animate-fade-in overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl sm:rounded-2xl max-w-lg w-full max-h-[92vh] flex flex-col overflow-hidden shadow-2xl border border-slate-200 relative my-auto"
        onClick={(e) => e.stopPropagation()}
        id="enquire-modal-container"
      >
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-5 sm:p-6 relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-6 h-7 rounded bg-white p-0.5 shrink-0 overflow-hidden flex items-center justify-center">
              <img
                src={LOGO_URL}
                alt="Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = LOGO_BASE64;
                }}
              />
            </div>
            <span className="text-[11px] sm:text-xs text-amber-400 uppercase font-bold tracking-wider">
              Cordeiro Real Estate
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-serif-luxury pr-8 leading-snug">
            Enquire Now
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 line-clamp-2">
            Tell us your requirement and our Colaba specialist will assist you promptly.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 overscroll-contain">
          {submitted ? (
            <div className="text-center py-4 sm:py-6">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-2.5" />
              <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-1 font-serif-luxury">
                Thank You, {formData.name}!
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mb-5">
                Your enquiry regarding <strong>{formData.service}</strong> has been logged. Our senior advisor will get back to you at {formData.phone}.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-2.5">
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 bg-blue-800 text-white rounded-lg text-xs sm:text-sm font-semibold hover:bg-blue-900 transition-colors cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={handleWhatsApp}
                  className="px-5 py-2.5 bg-emerald-600 text-white rounded-lg text-xs sm:text-sm font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 sm:py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-700"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 Mobile"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 sm:py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-700"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 sm:py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-700"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Selected Service
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3 py-2 sm:py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-700 bg-white"
                >
                  <option value="General Inquiry">General Property Inquiry</option>
                  <option value="Estate Agents">Estate Agents</option>
                  <option value="Estate Agents For Residence">Estate Agents For Residence</option>
                  <option value="Estate Agents For Residential Rental">Estate Agents For Residential Rental</option>
                  <option value="Buy Property">Buy Property</option>
                  <option value="Rent Property">Rent Property</option>
                  <option value="Resale Property">Resale Property</option>
                  <option value="Registration and stamps">Registration and stamps</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Message / Requirements
                </label>
                <textarea
                  rows={2}
                  placeholder="Location (e.g. Colaba, Lower Parel), budget, 2BHK/3BHK/Commercial..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 sm:py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-700 resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:flex-1 bg-blue-800 hover:bg-blue-900 text-white font-semibold text-xs sm:text-sm py-2.5 sm:py-3 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending...' : 'Submit Enquiry'}</span>
                </button>
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-1.5 shadow-xs cursor-pointer active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
