import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { VideosSection } from './components/VideosSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { EnquireModal } from './components/EnquireModal';
import { LightboxModal } from './components/LightboxModal';
import { FloatingActions } from './components/FloatingActions';
import { GALLERY_DATA } from './data/siteData';
import { GalleryItem } from './types';

export default function App() {
  const [enquireModalOpen, setEnquireModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string | undefined>(undefined);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleOpenEnquire = (serviceName?: string) => {
    setSelectedServiceForModal(serviceName);
    setEnquireModalOpen(true);
  };

  const handleSelectGalleryImage = (_item: GalleryItem, index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-amber-600 selection:text-white pb-14 sm:pb-0 font-sans">
      {/* Header with Topbar & Sticky Menu */}
      <Header onOpenEnquire={handleOpenEnquire} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenEnquire={handleOpenEnquire} />

        {/* 2. About Us Section */}
        <AboutSection onOpenEnquire={() => handleOpenEnquire()} />

        {/* 3. Services Section */}
        <ServicesSection onOpenEnquire={handleOpenEnquire} />

        {/* 4. Gallery Section */}
        <GallerySection
          onSelectImage={handleSelectGalleryImage}
          onOpenEnquire={handleOpenEnquire}
        />

        {/* 5. Videos Section */}
        <VideosSection />

        {/* 6. Testimonials Section */}
        <TestimonialsSection />

        {/* 7. Contact Us Section */}
        <ContactSection prefilledService={selectedServiceForModal} />
      </main>

      {/* Footer */}
      <Footer onOpenEnquire={() => handleOpenEnquire()} />

      {/* Floating Action Buttons */}
      <FloatingActions onOpenEnquire={() => handleOpenEnquire()} />

      {/* Enquire Modal Dialog */}
      <EnquireModal
        isOpen={enquireModalOpen}
        onClose={() => setEnquireModalOpen(false)}
        preselectedService={selectedServiceForModal}
      />

      {/* Gallery Lightbox Modal */}
      <LightboxModal
        items={GALLERY_DATA}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(idx) => setLightboxIndex(idx)}
        onEnquire={(title) => handleOpenEnquire(`Property: ${title}`)}
      />
    </div>
  );
}
