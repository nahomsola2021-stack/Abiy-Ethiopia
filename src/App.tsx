import React, { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { PageView } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { PlanTripModal } from './components/PlanTripModal';

// Pages
import { Home } from './pages/Home';
import { Destinations } from './pages/Destinations';
import { DestinationDetail } from './pages/DestinationDetail';
import { Tours } from './pages/Tours';
import { TourDetail } from './pages/TourDetail';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

export default function App() {
  const [currentView, setCurrentView] = useState<PageView>('home');
  const [currentSlug, setCurrentSlug] = useState<string>('');
  const [isPlanModalOpen, setIsPlanModalOpen] = useState<boolean>(false);
  const [planModalPreset, setPlanModalPreset] = useState<string>('');

  // --- UNIVERSAL SCROLL HANDLER ---
  const scrollToTarget = (view: PageView, slug: string) => {
    setTimeout(() => {
      if (slug && (view === 'tours' || view === 'destinations')) {
        const targetId = view === 'tours' ? 'tour-filters-section' : 'explorer';
        const el = document.getElementById(targetId);
        if (el) {
          // Calculate exact position minus 110px to account for the sticky navbar height
          const y = el.getBoundingClientRect().top + window.scrollY - 110;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 150); // 150ms allows React time to mount the new page before calculating height
  };

  // --- NATIVE SWIPE-BACK LOGIC ---
  useEffect(() => {
    const handlePopState = () => {
      const rawHash = window.location.hash.replace('#', '');
      
      if (!rawHash) {
        setCurrentView('home');
        setCurrentSlug('');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      // decodeURIComponent fixes the %20 space issue from URLs
      const hash = decodeURIComponent(rawHash);
      const parts = hash.split('/');
      const view = parts[0] as PageView;
      const slug = parts.slice(1).join('/');

      setCurrentView(view);
      setCurrentSlug(slug);
      setIsPlanModalOpen(false);
      
      scrollToTarget(view, slug);
    };

    window.addEventListener('popstate', handlePopState);
    
    if (!window.location.hash) {
      window.history.replaceState(null, '', '#home');
    } else {
      handlePopState();
    }

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // --- INSTANT NAVIGATION ---
  const handleNavigate = (view: PageView, param?: string) => {
    const slug = param || '';
    
    // Update UI Immediately
    setCurrentView(view);
    setCurrentSlug(slug);
    setIsPlanModalOpen(false);
    
    // Silently update URL (encoding the spaces)
    const url = slug ? `#${view}/${encodeURIComponent(slug)}` : `#${view}`;
    if (window.location.hash !== url) {
      window.history.pushState(null, '', url);
    }
    
    // Scroll to the exact position
    scrollToTarget(view, slug);
  };

  const handleOpenPlanModal = (presetTourOrRegion?: string) => {
    setPlanModalPreset(presetTourOrRegion || '');
    setIsPlanModalOpen(true);
  };

  const handleClosePlanModal = () => {
    setIsPlanModalOpen(false);
    setPlanModalPreset('');
  };

  return (
    <HelmetProvider>
      <div className="min-h-screen flex flex-col bg-[#F7EBDD] text-[#241613] font-sans antialiased selection:bg-[#D9A441] selection:text-[#241613]">
        <Navbar currentView={currentView} onNavigate={handleNavigate} onOpenPlanModal={handleOpenPlanModal} />

        <main className="flex-1 w-full">
          {currentView === 'home' && <Home onNavigate={handleNavigate} onOpenPlanModal={handleOpenPlanModal} />}
          {currentView === 'destinations' && <Destinations onNavigate={handleNavigate} onOpenPlanModal={handleOpenPlanModal} initialCategory={currentSlug} />}
          {currentView === 'tours' && <Tours onNavigate={handleNavigate} onOpenPlanModal={handleOpenPlanModal} initialCategory={currentSlug} />}
          {currentView === 'destination-detail' && <DestinationDetail slug={currentSlug} onNavigate={handleNavigate} onOpenPlanModal={handleOpenPlanModal} />}
          {currentView === 'tour-detail' && <TourDetail slug={currentSlug} onNavigate={handleNavigate} onOpenPlanModal={handleOpenPlanModal} />}
          {currentView === 'about' && <About onNavigate={handleNavigate} onOpenPlanModal={handleOpenPlanModal} />}
          {currentView === 'contact' && <Contact onNavigate={handleNavigate} />}
        </main>

        <Footer onNavigate={handleNavigate} onOpenPlanModal={handleOpenPlanModal} />
        
        <PlanTripModal isOpen={isPlanModalOpen} onClose={handleClosePlanModal} presetTourOrRegion={planModalPreset} />
      </div>
    </HelmetProvider>
  );
}