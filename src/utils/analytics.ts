import ReactGA from 'react-ga4';

// Google Analytics 4 Configuration
export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || '';

// Initialize Google Analytics
export const initGA = () => {
  if (GA_MEASUREMENT_ID) {
    ReactGA.initialize(GA_MEASUREMENT_ID, {
      gaOptions: {
        debug_mode: import.meta.env.DEV,
      },
    });
  } else {
    console.warn('Google Analytics Measurement ID not found. Set VITE_GA_MEASUREMENT_ID in your environment variables.');
  }
};

// Track page views
export const trackPageView = (path: string, title?: string) => {
  if (GA_MEASUREMENT_ID) {
    ReactGA.send({
      hitType: 'pageview',
      page: path,
      title: title || document.title,
    });
  }
};

// Track custom events
interface EventParams {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export const trackEvent = ({ action, category, label, value }: EventParams) => {
  if (GA_MEASUREMENT_ID) {
    ReactGA.event({
      action,
      category,
      label,
      value,
    });
  }
};

// Track resume interactions
export const trackResumeInteraction = (action: string, section?: string) => {
  trackEvent({
    action,
    category: 'Resume',
    label: section,
  });
};

// Track project interactions
export const trackProjectInteraction = (action: string, project?: string) => {
  trackEvent({
    action,
    category: 'Projects',
    label: project,
  });
};

// Track contact interactions
export const trackContactInteraction = (action: string, method?: string) => {
  trackEvent({
    action,
    category: 'Contact',
    label: method,
  });
};

// Track download events
export const trackDownload = (fileName: string, fileType: string) => {
  trackEvent({
    action: 'Download',
    category: 'Files',
    label: `${fileName} (${fileType})`,
  });
};

// Track external link clicks
export const trackExternalLink = (url: string, linkText?: string) => {
  trackEvent({
    action: 'External Link Click',
    category: 'Outbound',
    label: linkText || url,
  });
};

// Track search actions (if implementing search)
export const trackSearch = (searchTerm: string, results?: number) => {
  trackEvent({
    action: 'Search',
    category: 'Site Search',
    label: searchTerm,
    value: results,
  });
};