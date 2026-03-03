/**
 * Web Vitals Tracking Utility
 * 
 * Tracks Core Web Vitals for performance monitoring:
 * - LCP (Largest Contentful Paint)
 * - FID/INP (First Input Delay / Interaction to Next Paint)
 * - CLS (Cumulative Layout Shift)
 * - FCP (First Contentful Paint)
 * - TTFB (Time to First Byte)
 * 
 * Usage:
 * import { reportWebVitals } from './utils/webVitals';
 * reportWebVitals(console.log);
 * 
 * Or send to analytics:
 * reportWebVitals((metric) => {
 *   // Send to Google Analytics, Vercel Analytics, etc.
 *   gtag('event', metric.name, {
 *     value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
 *     event_label: metric.id,
 *     non_interaction: true,
 *   });
 * });
 */

export interface Metric {
  id: string;
  name: 'CLS' | 'FCP' | 'FID' | 'INP' | 'LCP' | 'TTFB';
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  entries: PerformanceEntry[];
  navigationType: 'navigate' | 'reload' | 'back-forward' | 'prerender';
}

type MetricCallback = (metric: Metric) => void;

/**
 * Thresholds for Web Vitals (based on 75th percentile)
 */
const THRESHOLDS = {
  LCP: { good: 2500, poor: 4000 },      // < 2.5s is good
  FID: { good: 100, poor: 300 },        // < 100ms is good  
  INP: { good: 200, poor: 500 },        // < 200ms is good
  CLS: { good: 0.1, poor: 0.25 },       // < 0.1 is good
  FCP: { good: 1800, poor: 3000 },      // < 1.8s is good
  TTFB: { good: 800, poor: 1800 },      // < 800ms is good
};

/**
 * Get rating based on value and thresholds
 */
function getRating(name: Metric['name'], value: number): Metric['rating'] {
  const threshold = THRESHOLDS[name];
  if (!threshold) return 'good';
  
  if (value <= threshold.good) return 'good';
  if (value <= threshold.poor) return 'needs-improvement';
  return 'poor';
}

/**
 * Report Web Vitals using the web-vitals library pattern
 */
export function reportWebVitals(onPerfEntry?: MetricCallback) {
  if (!onPerfEntry || typeof onPerfEntry !== 'function') {
    return;
  }

  // Check if browser supports the APIs we need
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
    return;
  }

  // LCP - Largest Contentful Paint
  try {
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1] as any;
      
      if (lastEntry) {
        const metric: Metric = {
          id: generateUniqueId(),
          name: 'LCP',
          value: lastEntry.renderTime || lastEntry.loadTime,
          rating: getRating('LCP', lastEntry.renderTime || lastEntry.loadTime),
          delta: lastEntry.renderTime || lastEntry.loadTime,
          entries: entries as PerformanceEntry[],
          navigationType: getNavigationType(),
        };
        onPerfEntry(metric);
      }
    });
    
    lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
  } catch (e) {
    // LCP not supported
  }

  // FID - First Input Delay (deprecated, use INP)
  try {
    const fidObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry: any) => {
        const metric: Metric = {
          id: generateUniqueId(),
          name: 'FID',
          value: entry.processingStart - entry.startTime,
          rating: getRating('FID', entry.processingStart - entry.startTime),
          delta: entry.processingStart - entry.startTime,
          entries: [entry],
          navigationType: getNavigationType(),
        };
        onPerfEntry(metric);
      });
    });
    
    fidObserver.observe({ type: 'first-input', buffered: true });
  } catch (e) {
    // FID not supported
  }

  // INP - Interaction to Next Paint (new metric)
  try {
    const inpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      let longestDuration = 0;
      let longestEntry: any = null;

      entries.forEach((entry: any) => {
        if (entry.duration > longestDuration) {
          longestDuration = entry.duration;
          longestEntry = entry;
        }
      });

      if (longestEntry) {
        const metric: Metric = {
          id: generateUniqueId(),
          name: 'INP',
          value: longestDuration,
          rating: getRating('INP', longestDuration),
          delta: longestDuration,
          entries: [longestEntry],
          navigationType: getNavigationType(),
        };
        onPerfEntry(metric);
      }
    });
    
    inpObserver.observe({ type: 'event', buffered: true, durationThreshold: 40 });
  } catch (e) {
    // INP not supported
  }

  // CLS - Cumulative Layout Shift
  try {
    let clsValue = 0;
    const clsEntries: PerformanceEntry[] = [];

    const clsObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
          clsEntries.push(entry);
        }
      });

      const metric: Metric = {
        id: generateUniqueId(),
        name: 'CLS',
        value: clsValue,
        rating: getRating('CLS', clsValue),
        delta: clsValue,
        entries: clsEntries,
        navigationType: getNavigationType(),
      };
      onPerfEntry(metric);
    });
    
    clsObserver.observe({ type: 'layout-shift', buffered: true });
  } catch (e) {
    // CLS not supported
  }

  // FCP - First Contentful Paint
  try {
    const fcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntriesByName('first-contentful-paint');
      
      if (entries.length > 0) {
        const entry = entries[0];
        const metric: Metric = {
          id: generateUniqueId(),
          name: 'FCP',
          value: entry.startTime,
          rating: getRating('FCP', entry.startTime),
          delta: entry.startTime,
          entries: [entry],
          navigationType: getNavigationType(),
        };
        onPerfEntry(metric);
      }
    });
    
    fcpObserver.observe({ type: 'paint', buffered: true });
  } catch (e) {
    // FCP not supported
  }

  // TTFB - Time to First Byte
  try {
    const navigationEntry = performance.getEntriesByType('navigation')[0] as any;
    
    if (navigationEntry) {
      const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
      
      const metric: Metric = {
        id: generateUniqueId(),
        name: 'TTFB',
        value: ttfb,
        rating: getRating('TTFB', ttfb),
        delta: ttfb,
        entries: [navigationEntry],
        navigationType: getNavigationType(),
      };
      onPerfEntry(metric);
    }
  } catch (e) {
    // TTFB not supported
  }
}

/**
 * Generate unique ID for each metric report
 */
function generateUniqueId(): string {
  return `v3-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Get navigation type
 */
function getNavigationType(): Metric['navigationType'] {
  if (typeof window === 'undefined') return 'navigate';
  
  const navEntry = performance.getEntriesByType('navigation')[0] as any;
  
  if (navEntry) {
    return navEntry.type as Metric['navigationType'];
  }
  
  return 'navigate';
}

/**
 * Format metric for logging
 */
export function formatMetric(metric: Metric): string {
  const emoji = metric.rating === 'good' ? '✅' : metric.rating === 'needs-improvement' ? '⚠️' : '❌';
  const value = metric.name === 'CLS' 
    ? metric.value.toFixed(3)
    : `${Math.round(metric.value)}ms`;
  
  return `${emoji} ${metric.name}: ${value} (${metric.rating})`;
}

/**
 * Log all Web Vitals to console
 */
export function logWebVitals() {
  reportWebVitals((metric) => {
    console.log(formatMetric(metric));
  });
}
