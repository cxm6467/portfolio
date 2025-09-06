import { Box, Typography, Paper, Grid, Chip, LinearProgress, Alert, Collapse } from '@mui/material';
import { useWebVitals } from '../../utils/webVitals';
import { useState } from 'react';
import { Speed, Warning, CheckCircle, Error } from '@mui/icons-material';

// Web Vitals thresholds
const THRESHOLDS = {
  CLS: { good: 0.1, poor: 0.25 },
  FCP: { good: 1800, poor: 3000 },
  FID: { good: 100, poor: 300 },
  LCP: { good: 2500, poor: 4000 },
  TTFB: { good: 800, poor: 1800 },
};

const getRating = (name: string, value: number): 'good' | 'needs-improvement' | 'poor' => {
  const thresholds = THRESHOLDS[name as keyof typeof THRESHOLDS];
  if (!thresholds) return 'good';
  
  if (value <= thresholds.good) return 'good';
  if (value <= thresholds.poor) return 'needs-improvement';
  return 'poor';
};

const getRatingColor = (rating: string) => {
  switch (rating) {
    case 'good': return 'success';
    case 'needs-improvement': return 'warning';
    case 'poor': return 'error';
    default: return 'default';
  }
};

const getRatingIcon = (rating: string) => {
  switch (rating) {
    case 'good': return <CheckCircle color="success" />;
    case 'needs-improvement': return <Warning color="warning" />;
    case 'poor': return <Error color="error" />;
    default: return <Speed />;
  }
};

const formatValue = (name: string, value: number): string => {
  if (name === 'CLS') {
    return value.toFixed(3);
  }
  return `${Math.round(value)}ms`;
};

const getDescription = (name: string): string => {
  switch (name) {
    case 'CLS': return 'Cumulative Layout Shift - Visual stability';
    case 'FCP': return 'First Contentful Paint - Time to first content';
    case 'FID': return 'First Input Delay - Interactivity';
    case 'LCP': return 'Largest Contentful Paint - Loading performance';
    case 'TTFB': return 'Time to First Byte - Server response time';
    default: return '';
  }
};

interface PerformanceDashboardProps {
  showDetails?: boolean;
  compact?: boolean;
}

export const PerformanceDashboard = ({ showDetails = false, compact = false }: PerformanceDashboardProps) => {
  const { vitals, isLoading } = useWebVitals();
  const [showDetailsState, setShowDetailsState] = useState(showDetails);

  // Only show in development
  if (!import.meta.env.DEV) {
    return null;
  }

  if (isLoading) {
    return (
      <Paper sx={{ p: 2, mb: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
          <Speed color="primary" />
          <Typography variant="h6">Performance Monitor</Typography>
        </Box>
        <LinearProgress />
        <Typography variant="body2" sx={{ mt: 1 }}>
          Collecting Web Vitals data...
        </Typography>
      </Paper>
    );
  }

  const vitalsList = Object.values(vitals);
  const hasData = vitalsList.length > 0;

  if (!hasData) {
    return (
      <Alert severity="info" sx={{ mb: 2 }}>
        Performance data will appear as you interact with the page.
      </Alert>
    );
  }

  const overallScore = vitalsList.reduce((acc, vital) => {
    const rating = getRating(vital.name, vital.value);
    return acc + (rating === 'good' ? 100 : rating === 'needs-improvement' ? 60 : 20);
  }, 0) / vitalsList.length;

  return (
    <Paper sx={{ p: compact ? 1 : 2, mb: 2 }}>
      <Box 
        sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          mb: 2,
          cursor: 'pointer'
        }}
        onClick={() => setShowDetailsState(!showDetailsState)}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Speed color="primary" />
          <Typography variant={compact ? "body1" : "h6"}>
            Performance Monitor
          </Typography>
          <Chip
            label={`${Math.round(overallScore)}/100`}
            color={overallScore >= 80 ? 'success' : overallScore >= 60 ? 'warning' : 'error'}
            size="small"
          />
        </Box>
        <Typography variant="caption" color="text.secondary">
          Click to {showDetailsState ? 'hide' : 'show'} details
        </Typography>
      </Box>

      <Collapse in={showDetailsState}>
        <Grid container spacing={compact ? 1 : 2}>
          {vitalsList.map((vital) => {
            const rating = getRating(vital.name, vital.value);
            const progress = Math.min((vital.value / (THRESHOLDS[vital.name as keyof typeof THRESHOLDS]?.poor || 1000)) * 100, 100);

            return (
              <Grid item xs={12} sm={6} md={compact ? 6 : 4} key={vital.name}>
                <Paper
                  variant="outlined"
                  sx={{
                    p: compact ? 1 : 1.5,
                    height: '100%',
                    borderColor: rating === 'good' ? 'success.main' : rating === 'needs-improvement' ? 'warning.main' : 'error.main',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    {getRatingIcon(rating)}
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                      {vital.name}
                    </Typography>
                    <Chip
                      label={rating.replace('-', ' ')}
                      color={getRatingColor(rating) as any}
                      size="small"
                      variant="outlined"
                    />
                  </Box>
                  
                  <Typography variant="h6" sx={{ mb: 0.5 }}>
                    {formatValue(vital.name, vital.value)}
                  </Typography>
                  
                  <LinearProgress
                    variant="determinate"
                    value={Math.min(progress, 100)}
                    color={getRatingColor(rating) as any}
                    sx={{ mb: 1, height: 6, borderRadius: 3 }}
                  />
                  
                  <Typography variant="caption" color="text.secondary">
                    {getDescription(vital.name)}
                  </Typography>
                </Paper>
              </Grid>
            );
          })}
        </Grid>

        {/* Performance Tips */}
        <Box sx={{ mt: 2 }}>
          {vitalsList.some(vital => getRating(vital.name, vital.value) !== 'good') && (
            <Alert severity="info" sx={{ fontSize: '0.875rem' }}>
              <Typography variant="body2" sx={{ mb: 1, fontWeight: 'bold' }}>
                Performance Tips:
              </Typography>
              <Box component="ul" sx={{ m: 0, pl: 2 }}>
                {vitalsList
                  .filter(vital => getRating(vital.name, vital.value) !== 'good')
                  .map(vital => (
                    <li key={vital.name} style={{ marginBottom: '4px' }}>
                      <Typography variant="caption">
                        <strong>{vital.name}:</strong> {getPerformanceTip(vital.name)}
                      </Typography>
                    </li>
                  ))}
              </Box>
            </Alert>
          )}
        </Box>
      </Collapse>
    </Paper>
  );
};

const getPerformanceTip = (metric: string): string => {
  switch (metric) {
    case 'CLS':
      return 'Avoid inserting content above existing content, use CSS transforms, set dimensions for media elements';
    case 'FCP':
      return 'Optimize server response time, eliminate render-blocking resources, minify CSS';
    case 'FID':
      return 'Break up long tasks, use web workers, defer non-critical JavaScript';
    case 'LCP':
      return 'Optimize images, preload critical resources, use CDN, improve server response time';
    case 'TTFB':
      return 'Optimize server performance, use CDN, enable compression, cache static assets';
    default:
      return 'Monitor and optimize based on specific metric requirements';
  }
};