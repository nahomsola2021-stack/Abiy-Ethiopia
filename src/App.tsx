import React, { useState, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
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

interface CurrentRoute {
  view: PageView;
  slug: string;
}

const getCurrentRoute = (location: Location): CurrentRoute => {
  if (location.hash) {
    const [rawView, ...slugParts] = decodeURIComponent(location.hash.slice(1)).split('/');
    const validViews: PageView[] = [
      'home',
      'destinations',
      'tours',
      'about',
      'contact',
      'tour-detail',
      'destination-detail',
    ];

    return {
      view: validViews.includes(rawView as PageView) ? (rawView as PageView) : 'home',
      slug: slugParts.join('/'),
    };
  }

  const pathParts = location.pathname.split('/').filter(Boolean).map(decodeURIComponent);
  const category = new URLSearchParams(location.search).get('category') || '';

  if (pathParts.length === 0) return { view: 'home', slug: '' };
  if (pathParts[0] === 'destinations') {
    return pathParts.length > 1
      ? { view: 'destination-detail', slug: pathParts.slice(1).join('/') }
      : { view: 'destinations', slug: category };
  }
  if (pathParts[0] === 'tours') {
    return pathParts.length > 1
      ? { view: 'tour-detail', slug: pathParts.slice(1).join('/') }
      : { view: 'tours', slug: category };
  }
  if (pathParts.length === 1 && (pathParts[0] === 'about' || pathParts[0] === 'contact')) {
    return { view: pathParts[0], slug: '' };
  }

  return { view: 'home', slug: '' };
};

const getRouteUrl = (view: PageView, slug: string) => {
  if (view === 'destination-detail') return `/destinations/${encodeURIComponent(slug)}`;
  if (view === 'tour-detail') return `/tours/${encodeURIComponent(slug)}`;

  const paths: Record<Exclude<PageView, 'destination-detail' | 'tour-detail'>, string> = {
    home: '/',
    destinations: '/destinations',
    tours: '/tours',
    about: '/about',
    contact: '/contact',
  };
  const path = paths[view];

  return slug && (view === 'destinations' || view === 'tours')
    ? `${path}?category=${encodeURIComponent(slug)}`
    : path;
};

export default function App() {
  const [initialRoute] = useState(() => getCurrentRoute(window.location));
  const [currentView, setCurrentView] = useState<PageView>(initialRoute.view);
  const [currentSlug, setCurrentSlug] = useState<string>(initialRoute.slug);
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
      const { view, slug } = getCurrentRoute(window.location);

      setCurrentView(view);
      setCurrentSlug(slug);
      setIsPlanModalOpen(false);
      
      scrollToTarget(view, slug);
    };

    window.addEventListener('popstate', handlePopState);

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // --- INSTANT NAVIGATION ---
  const handleNavigate = (view: PageView, param?: string) => {
    const slug = param || '';
    
    // Update UI Immediately
    setCurrentView(view);
    setCurrentSlug(slug);
    setIsPlanModalOpen(false);
    
    const url = getRouteUrl(view, slug);
    if (`${window.location.pathname}${window.location.search}${window.location.hash}` !== url) {
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
        <Helmet>
          <link
            rel="canonical"
            href={`https://abiyethiopiatours.com${getRouteUrl(currentView, currentSlug).split('?')[0]}`}
          />
          <meta
            property="og:url"
            content={`https://abiyethiopiatours.com${getRouteUrl(currentView, currentSlug).split('?')[0]}`}
          />
        </Helmet>
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