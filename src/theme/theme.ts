import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    neutral: {
      main: string;
      light: string;
      dark: string;
    };
    brand: {
      primaryBlue: string;
      accentBlue: string;
      brightBlue: string;
      iceBlue: string;
      amber: string;
      navyBlue: string;
      darkBg: string;
      mediumBg: string;
      textPrimary: string;
      textSecondary: string;
      textMuted: string;
      lightGray: string;
    };
  }

  interface PaletteOptions {
    neutral?: {
      main: string;
      light: string;
      dark: string;
    };
    brand?: {
      primaryBlue: string;
      accentBlue: string;
      brightBlue: string;
      iceBlue: string;
      amber: string;
      navyBlue: string;
      darkBg: string;
      mediumBg: string;
      textPrimary: string;
      textSecondary: string;
      textMuted: string;
      lightGray: string;
    };
  }
}

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1a365d', // Primary blue
      light: '#2b77ad',
      dark: '#0d1421',
    },
    secondary: {
      main: '#4a9eff', // Bright blue
      light: '#e8f4fd',
      dark: '#2b77ad',
    },
    neutral: {
      main: '#f8fafc',
      light: '#ffffff',
      dark: '#e2e8f0',
    },
    brand: {
      primaryBlue: '#1a365d',
      accentBlue: '#2b77ad',
      brightBlue: '#4a9eff',
      iceBlue: '#e8f4fd',
      amber: '#d69e2e',
      navyBlue: '#1a202c',
      darkBg: '#0d1421',
      mediumBg: '#2d3748',
      textPrimary: '#1a202c',
      textSecondary: '#4a5568',
      textMuted: '#718096',
      lightGray: '#e2e8f0',
    },
    background: {
      default: '#ffffff',
      paper: '#f8fafc',
    },
    text: {
      primary: '#1a202c',
      secondary: '#4a5568',
    },
  },
  typography: {
    fontFamily: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: '1.125rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 8,
          padding: '12px 24px',
        },
        contained: {
          boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
          '&:hover': {
            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
          border: '1px solid #f1f5f9',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid #f1f5f9',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: 24,
          paddingRight: 24,
        },
      },
    },
  },
});