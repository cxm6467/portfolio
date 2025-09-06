import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { Resume } from '@organisms/Resume';
import { theme } from '@theme';
import { PerformanceDashboard } from '@components/PerformanceDashboard';
import { HelmetProvider } from 'react-helmet-async';
import { SEOHead, SEOConfigs } from '@components/SEOHead';
import { useEffect } from 'react';
import { initGA, trackPageView } from '@utils/analytics';
import { initWebVitals } from '@utils/webVitals';
import { initPerformanceWarnings } from '@utils/performanceWarnings';
import { monitorLongTasks, monitorResourceLoading } from '@utils/webVitals';
import './App.css';

function App() {
  useEffect(() => {
    // Initialize analytics
    initGA();
    initWebVitals();
    
    // Track initial page view
    trackPageView('/');
    
    // Initialize performance monitoring
    if (import.meta.env.DEV) {
      initPerformanceWarnings();
    }
    
    // Monitor performance
    monitorLongTasks();
    monitorResourceLoading();
  }, []);

  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SEOHead {...SEOConfigs.home} />
        
        {/* Performance Dashboard - only shown in development */}
        {import.meta.env.DEV && (
          <PerformanceDashboard compact showDetails={false} />
        )}
        
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            background: '#0d1117',
            padding: '20px',
          }}
        >
          <Resume />
        </Box>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
