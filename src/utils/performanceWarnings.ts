import { trackEvent } from './analytics';

// Bundle size monitoring
export const monitorBundleSize = () => {
  if (!import.meta.env.DEV) return;

  // Monitor bundle size on load
  window.addEventListener('load', () => {
    const scripts = document.querySelectorAll('script[src]');
    let totalSize = 0;

    scripts.forEach((script) => {
      const src = (script as HTMLScriptElement).src;
      if (src.includes('assets/') && src.includes('.js')) {
        // Estimate size based on network timing
        const timing = performance.getEntriesByName(src)[0] as PerformanceResourceTiming;
        if (timing && timing.transferSize) {
          totalSize += timing.transferSize;
        }
      }
    });

    if (totalSize > 500000) { // > 500KB
      console.warn(`⚠️ Large bundle detected: ${(totalSize / 1024).toFixed(1)}KB`);
      console.warn('Consider code splitting or lazy loading to improve performance');
    }

    console.log(`📦 Bundle size: ${(totalSize / 1024).toFixed(1)}KB`);
  });
};

// Memory usage monitoring
export const monitorMemoryUsage = () => {
  if (!import.meta.env.DEV) return;
  if (!('memory' in performance)) return;

  const checkMemory = () => {
    const memory = (performance as any).memory;
    const usedMB = Math.round(memory.usedJSHeapSize / 1048576);
    const limitMB = Math.round(memory.jsHeapSizeLimit / 1048576);
    const ratio = usedMB / limitMB;

    if (ratio > 0.8) {
      console.warn(`⚠️ High memory usage: ${usedMB}MB / ${limitMB}MB (${(ratio * 100).toFixed(1)}%)`);
    }

    console.log(`🧠 Memory usage: ${usedMB}MB / ${limitMB}MB (${(ratio * 100).toFixed(1)}%)`);
  };

  // Check memory every 30 seconds in development
  setInterval(checkMemory, 30000);
  
  // Initial check
  setTimeout(checkMemory, 5000);
};

// Image optimization warnings
export const checkImageOptimization = () => {
  if (!import.meta.env.DEV) return;

  window.addEventListener('load', () => {
    const images = document.querySelectorAll('img');
    
    images.forEach((img) => {
      const { naturalWidth, naturalHeight, width, height } = img;
      
      // Check if image is oversized
      if (naturalWidth > width * 2 || naturalHeight > height * 2) {
        console.warn(`⚠️ Oversized image detected: ${img.src}`);
        console.warn(`Natural: ${naturalWidth}x${naturalHeight}, Displayed: ${width}x${height}`);
        console.warn('Consider using responsive images or resizing the source');
      }

      // Check for missing alt text
      if (!img.alt && img.src) {
        console.warn(`⚠️ Missing alt text for image: ${img.src}`);
      }

      // Check for lazy loading opportunities
      const rect = img.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (!isVisible && !img.loading) {
        console.warn(`💡 Consider lazy loading for below-fold image: ${img.src}`);
      }
    });
  });
};

// CSS optimization warnings
export const checkCSSOptimization = () => {
  if (!import.meta.env.DEV) return;

  window.addEventListener('load', () => {
    const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
    
    stylesheets.forEach((link) => {
      const href = (link as HTMLLinkElement).href;
      const timing = performance.getEntriesByName(href)[0] as PerformanceResourceTiming;
      
      if (timing && timing.transferSize > 100000) { // > 100KB
        console.warn(`⚠️ Large CSS file detected: ${href} (${(timing.transferSize / 1024).toFixed(1)}KB)`);
        console.warn('Consider splitting CSS or removing unused styles');
      }
    });
  });
};

// Third-party script monitoring
export const monitorThirdPartyScripts = () => {
  if (!import.meta.env.DEV) return;

  window.addEventListener('load', () => {
    const scripts = document.querySelectorAll('script[src]');
    const thirdPartyDomains = ['google', 'facebook', 'twitter', 'linkedin', 'analytics'];
    
    scripts.forEach((script) => {
      const src = (script as HTMLScriptElement).src;
      const isThirdParty = thirdPartyDomains.some(domain => src.includes(domain));
      
      if (isThirdParty) {
        const timing = performance.getEntriesByName(src)[0] as PerformanceResourceTiming;
        if (timing && timing.duration > 1000) {
          console.warn(`⚠️ Slow third-party script: ${src} (${timing.duration.toFixed(0)}ms)`);
          console.warn('Consider async/defer loading or preconnect hints');
        }
      }
    });
  });
};

// Accessibility warnings
export const checkAccessibility = () => {
  if (!import.meta.env.DEV) return;

  window.addEventListener('load', () => {
    // Check for missing heading hierarchy
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const headingLevels: number[] = [];
    
    headings.forEach((heading) => {
      const level = parseInt(heading.tagName.substring(1));
      headingLevels.push(level);
    });

    for (let i = 1; i < headingLevels.length; i++) {
      const current = headingLevels[i];
      const previous = headingLevels[i - 1];
      
      if (current > previous + 1) {
        console.warn(`⚠️ Heading hierarchy skip detected: h${previous} to h${current}`);
        console.warn('Maintain proper heading hierarchy for accessibility');
      }
    }

    // Check for missing form labels
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach((input) => {
      const element = input as HTMLInputElement;
      const hasLabel = element.labels && element.labels.length > 0;
      const hasAriaLabel = element.getAttribute('aria-label');
      const hasAriaLabelledBy = element.getAttribute('aria-labelledby');
      
      if (!hasLabel && !hasAriaLabel && !hasAriaLabelledBy && element.type !== 'hidden') {
        console.warn(`⚠️ Input without label: ${element.name || element.id || element.type}`);
      }
    });

    // Check for missing button text
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
      const hasText = button.textContent && button.textContent.trim().length > 0;
      const hasAriaLabel = button.getAttribute('aria-label');
      
      if (!hasText && !hasAriaLabel) {
        console.warn('⚠️ Button without accessible text content');
      }
    });
  });
};

// Initialize all performance warnings
export const initPerformanceWarnings = () => {
  if (!import.meta.env.DEV) return;

  console.log('🔍 Performance monitoring active in development mode');
  
  monitorBundleSize();
  monitorMemoryUsage();
  checkImageOptimization();
  checkCSSOptimization();
  monitorThirdPartyScripts();
  checkAccessibility();
};