import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router';
import { useEffect, useState, lazy, Suspense } from 'react';
import { AnimatePresence } from 'motion/react';
import { Toaster } from 'sonner@2.0.3';
import { Navigation } from './components/Navigation';
import { Preloader } from './components/Preloader';
import { ScrollToTop } from './components/ScrollToTop';
import { initTracking, trackPageView } from './utils/tracking';
import imgLogoMobile from 'figma:asset/3c97e927488bc929733cf4ce3e498875dd36bb88.png';

// Lazy load pages for better performance (code splitting)
const HomePage = lazy(() => import('./pages/HomePage'));
const BlogPage = lazy(() => import('./pages/BlogPage').then(module => ({ default: module.BlogPage })));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage').then(module => ({ default: module.BlogPostPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(module => ({ default: module.ContactPage })));

// Loading fallback component
function RouteLoadingFallback() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-[#8620e0] border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

// Favicon configuration with optimized logo
function useFavicon() {
  useEffect(() => {
    // Preload critical fonts for better FCP/LCP
    const fontPreloads = [
      { family: 'Saira', weight: '200', display: 'swap' },
      { family: 'Saira', weight: '300', display: 'swap' },
      { family: 'Saira', weight: '400', display: 'swap' },
    ];

    fontPreloads.forEach(({ family, weight, display }) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'font';
      link.type = 'font/woff2';
      link.crossOrigin = 'anonymous';
      // Font preload helps with FOUT/FOIT
      document.head.appendChild(link);
    });

    // Create canvas to generate optimized favicon from logo
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const size = 64; // Higher resolution for better quality
    canvas.width = size;
    canvas.height = size;

    if (ctx) {
      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, size, size);
      gradient.addColorStop(0, '#8620E0');
      gradient.addColorStop(1, '#f900f1');
      
      // Draw rounded rectangle background
      const radius = size * 0.2;
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.roundRect(0, 0, size, size, radius);
      ctx.fill();

      // Load and draw logo
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        // Calculate dimensions to fit logo proportionally with padding
        const padding = size * 0.15;
        const availableSize = size - (padding * 2);
        
        // Calculate scale to fit
        const scale = Math.min(
          availableSize / img.width,
          availableSize / img.height
        );
        
        const logoWidth = img.width * scale;
        const logoHeight = img.height * scale;
        
        // Center the logo
        const x = (size - logoWidth) / 2;
        const y = (size - logoHeight) / 2;
        
        // Draw logo centered
        ctx.drawImage(img, x, y, logoWidth, logoHeight);
        
        // Convert to data URL
        const faviconUrl = canvas.toDataURL('image/png');
        
        // Update or create favicon links
        updateFaviconLink('icon', faviconUrl, 'image/png');
        updateFaviconLink('apple-touch-icon', faviconUrl, 'image/png');
        
        // Add additional sizes for better browser support
        updateFaviconLink('icon', faviconUrl, 'image/png', '32x32');
        updateFaviconLink('icon', faviconUrl, 'image/png', '16x16');
      };
      
      img.onerror = () => {
        // Fallback to SVG if image fails to load
        useSVGFavicon();
      };
      
      img.src = imgLogoMobile;
    }

    // Set document title and meta tags
    document.title = 'Eduardo Pires | Produto & Estratégia';
    
    // Add meta description if not exists
    let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      metaDescription.content = 'Transformo problemas de negócio em decisões de produto. Especialista em conectar estratégia, viabilidade técnica e impacto real.';
      document.head.appendChild(metaDescription);
    }
  }, []);
}

// Helper function to update favicon links
function updateFaviconLink(rel: string, href: string, type: string, sizes?: string) {
  const selector = sizes 
    ? `link[rel~='${rel}'][sizes='${sizes}']`
    : `link[rel~='${rel}']:not([sizes])`;
    
  let link = document.querySelector(selector) as HTMLLinkElement;
  
  if (!link) {
    link = document.createElement('link');
    link.rel = rel;
    if (sizes) link.sizes.value = sizes;
    document.head.appendChild(link);
  }
  
  link.type = type;
  link.href = href;
}

// Fallback SVG favicon
function useSVGFavicon() {
  const svg = `
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="64" height="64" rx="12" fill="url(#gradient)"/>
      <defs>
        <linearGradient id="gradient" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#8620E0"/>
          <stop offset="100%" stop-color="#f900f1"/>
        </linearGradient>
      </defs>
      <text x="32" y="45" font-family="system-ui, -apple-system, sans-serif" font-size="36" font-weight="700" fill="white" text-anchor="middle" dominant-baseline="middle">EP</text>
    </svg>
  `;

  const blob = new Blob([svg], { type: 'image/svg+xml' });
  const url = URL.createObjectURL(blob);
  
  updateFaviconLink('icon', url, 'image/svg+xml');
  
  return () => URL.revokeObjectURL(url);
}

function RouteTracker() {
  const location = useLocation();

  useEffect(() => {
    const path = `${location.pathname}${location.search}`;
    trackPageView(path, document.title);
  }, [location.pathname, location.search]);

  return null;
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  useFavicon();

  useEffect(() => {
    initTracking();
  }, []);

  // CRITICAL: Desabilitar scroll restoration nativo do browser
  // Isso previne que o browser tente restaurar a posição do scroll
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    // Simulate initial loading - check if fonts, critical assets are ready
    // Optimized loading - minimal delay for better performance
    const minLoadTime = 600; // 600ms minimum - fast but smooth
    const startTime = performance.now();
    
    const finishLoading = () => {
      const elapsed = performance.now() - startTime;
      const remainingTime = Math.max(minLoadTime - elapsed, 0);
      
      setTimeout(() => {
        setIsLoading(false);
        
        // CORREÇÃO: Forçar recálculo de scroll após preloader desaparecer
        // Resolve problema de scrollbar comprimida no carregamento inicial
        setTimeout(() => {
          window.dispatchEvent(new Event('resize'));
          document.body.style.height = 'auto';
        }, 100);
      }, remainingTime);
    };

    // Check if fonts are loaded
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(finishLoading);
    } else {
      // Fallback - immediate load if fonts API not available
      finishLoading();
    }
  }, []);

  return (
    <>
      {/* Toast Notifications - Dark theme com borda verde */}
      <Toaster 
        position="top-right"
        theme="dark"
        richColors
        toastOptions={{
          style: {
            background: '#1a1a1a',
            color: '#fff',
            border: '1px solid rgba(134, 32, 224, 0.3)',
          },
        }}
      />

      <AnimatePresence mode="wait">
        {isLoading && <Preloader visible={isLoading} text="Carregando..." />}
      </AnimatePresence>
      
      <Router future={{ v7_startTransition: true }}>
        <ScrollToTop />
        <RouteTracker />
        <div 
          className="min-h-screen bg-[#0A0A0F] text-white w-full max-w-[100vw]"
          style={{ 
            display: isLoading ? 'none' : 'block',
            overflowX: 'hidden',
            overflowY: 'auto'
          }}
        >
          <Navigation />
          <main className="w-full max-w-[100vw]" style={{ overflowX: 'hidden' }}>
            <Suspense fallback={<RouteLoadingFallback />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:id" element={<BlogPostPage />} />
                <Route path="/contato" element={<ContactPage />} />
              </Routes>
            </Suspense>
          </main>
        </div>
      </Router>
    </>
  );
}