declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

let trackingInitialized = false;

function appendScript(id: string, src: string, isAsync = true) {
  if (document.getElementById(id)) return;
  const script = document.createElement('script');
  script.id = id;
  script.src = src;
  script.async = isAsync;
  document.head.appendChild(script);
}

export function initTracking() {
  if (typeof window === 'undefined' || trackingInitialized) return;

  const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  const gtmId = import.meta.env.VITE_GTM_ID;
  const adsId = import.meta.env.VITE_GOOGLE_ADS_ID;

  window.dataLayer = window.dataLayer || [];

  if (gtmId) {
    appendScript('gtm-script', `https://www.googletagmanager.com/gtm.js?id=${gtmId}`);
    window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
  }

  if (gaId || adsId) {
    const measurementId = gaId || adsId;
    appendScript('gtag-script', `https://www.googletagmanager.com/gtag/js?id=${measurementId}`);

    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer.push(args as unknown as Record<string, unknown>);
    };

    window.gtag('js', new Date());

    if (gaId) {
      window.gtag('config', gaId, { send_page_view: false });
    }

    if (adsId) {
      window.gtag('config', adsId);
    }
  }

  trackingInitialized = true;
}

export function trackPageView(path: string, title?: string) {
  if (typeof window === 'undefined') return;

  const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;

  if (window.gtag && gaId) {
    window.gtag('event', 'page_view', {
      page_title: title || document.title,
      page_path: path,
    });
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'page_view',
    page_path: path,
    page_title: title || document.title,
  });
}

export function trackConversion(conversionId?: string, value?: number, currency = 'BRL') {
  if (typeof window === 'undefined' || !window.gtag || !conversionId) return;

  window.gtag('event', 'conversion', {
    send_to: conversionId,
    value,
    currency,
  });
}
