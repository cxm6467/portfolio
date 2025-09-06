import { onCLS, onFCP, onINP, onLCP, onTTFB, type Metric } from 'web-vitals';
import { trackEvent } from './analytics';

// Web Vitals thresholds (in milliseconds or as ratios)
const WEB_VITALS_THRESHOLDS = {
  CLS: { good: 0.1, poor: 0.25 },
  FCP: { good: 1800, poor: 3000 },
  INP: { good: 200, poor: 500 },
  LCP: { good: 2500, poor: 4000 },
  TTFB: { good: 800, poor: 1800 },
};

// Rating function for metrics
const getRating = (name: string, value: number): 'good' | 'needs-improvement' | 'poor' => {
  const thresholds = WEB_VITALS_THRESHOLDS[name as keyof typeof WEB_VITALS_THRESHOLDS];
  if (!thresholds) return 'good';
  
  if (value <= thresholds.good) return 'good';
  if (value <= thresholds.poor) return 'needs-improvement';
  return 'poor';
};

// Send metric to Google Analytics
const sendToGA = (metric: Metric) => {
  const rating = getRating(metric.name, metric.value);
  
  // Send to Google Analytics
  trackEvent({
    action: 'Web Vitals',
    category: 'Performance',
    label: `${metric.name} - ${rating}`,
    value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
  });

  // Log in development
  if (import.meta.env.DEV) {
    console.group(`🔍 Web Vital: ${metric.name}`);
    console.log('Value:', metric.value);
    console.log('Rating:', rating);
    console.log('ID:', metric.id);
    console.log('Delta:', metric.delta);
    console.groupEnd();
  }
};

// Send metric to console in development
const sendToConsole = (metric: Metric) => {
  if (import.meta.env.DEV) {
    const rating = getRating(metric.name, metric.value);
    const emoji = rating === 'good' ? '✅' : rating === 'needs-improvement' ? '⚠️' : '❌';
    
    console.log(`${emoji} ${metric.name}: ${metric.value} (${rating})`);
  }
};

// Main function to initialize Web Vitals tracking
export const initWebVitals = () => {
  onCLS(sendToGA);
  onFCP(sendToGA);
  onINP(sendToGA);
  onLCP(sendToGA);
  onTTFB(sendToGA);

  // Also send to console in development
  if (import.meta.env.DEV) {
    onCLS(sendToConsole);
    onFCP(sendToConsole);
    onINP(sendToConsole);
    onLCP(sendToConsole);
    onTTFB(sendToConsole);
  }
};

// Function to get current Web Vitals (for dashboard)
export const getCurrentWebVitals = (): Promise<{[key: string]: Metric}> => {
  return new Promise((resolve) => {
    const vitals: {[key: string]: Metric} = {};
    let count = 0;
    const totalMetrics = 5;

    const collectMetric = (metric: Metric) => {
      vitals[metric.name] = metric;
      count++;
      if (count === totalMetrics) {
        resolve(vitals);
      }
    };

    onCLS(collectMetric);
    onFCP(collectMetric);
    onINP(collectMetric);
    onLCP(collectMetric);
    onTTFB(collectMetric);

    // Fallback timeout
    setTimeout(() => {
      resolve(vitals);
    }, 5000);
  });
};

// Custom hook for Web Vitals in React components
export const useWebVitals = () => {
  const [vitals, setVitals] = React.useState<{[key: string]: Metric}>({});
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    getCurrentWebVitals().then((data) => {
      setVitals(data);
      setIsLoading(false);
    });
  }, []);

  return { vitals, isLoading };
};

// Performance monitoring utilities
export const monitorLongTasks = () => {
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.duration > 50) { // Long task threshold
          trackEvent({
            action: 'Long Task',
            category: 'Performance',
            label: entry.name,
            value: Math.round(entry.duration),
          });

          if (import.meta.env.DEV) {
            console.warn(`⚠️ Long Task detected: ${entry.name} (${entry.duration}ms)`);
          }
        }
      });
    });

    observer.observe({ entryTypes: ['longtask'] });
  }
};

// Monitor resource loading
export const monitorResourceLoading = () => {
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.duration > 1000) { // Slow resource threshold
          trackEvent({
            action: 'Slow Resource',
            category: 'Performance',
            label: entry.name,
            value: Math.round(entry.duration),
          });
        }
      });
    });

    observer.observe({ entryTypes: ['resource'] });
  }
};

// Add React import for the hook
import React from 'react';