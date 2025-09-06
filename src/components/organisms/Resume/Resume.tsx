import { Box, useTheme, Link } from '@mui/material';
import { Sidebar } from './components/Sidebar';
import { MainContent } from './components/MainContent';

export const Resume = () => {
  const theme = useTheme();

  return (
    <>
      {/* Skip navigation for accessibility */}
      <Box
        component="a"
        href="#main-content"
        sx={{
          position: 'absolute',
          top: '-40px',
          left: '6px',
          background: theme.palette.brand.accentBlue,
          color: theme.palette.common.white,
          padding: '8px',
          textDecoration: 'none',
          borderRadius: '0 0 4px 4px',
          fontWeight: 'bold',
          zIndex: 1000,
          '&:focus': {
            top: '6px',
          },
        }}
        tabIndex={1}
      >
        Skip to main content
      </Box>

      <Box
        sx={{
          maxWidth: '8.5in',
          margin: '0 auto',
          backgroundColor: theme.palette.background.default,
          borderRadius: 0,
          boxShadow: '0 0 40px rgba(0,0,0,0.3)',
          display: 'grid',
          gridTemplateColumns: '35% 65%',
          minHeight: '11in',
          fontFamily: theme.typography.fontFamily,
          lineHeight: 1.4,
          color: theme.palette.brand.textSecondary,
          overflow: 'hidden',
          '@media print': {
            boxShadow: 'none',
            maxWidth: 'none',
            margin: 0,
            display: 'block',
          },
          '@media (max-width: 768px)': {
            gridTemplateColumns: '1fr',
            maxWidth: 'none',
          },
          '@media (max-width: 480px)': {
            minHeight: 'auto',
            padding: '10px',
          },
        }}
        role="document"
      >
      {/* ATS-friendly keywords for keyword scanning */}
      <Box
        sx={{
          position: 'absolute',
          left: '-9999px',
          width: '1px',
          height: '1px',
          overflow: 'hidden',
        }}
        aria-hidden="true"
      >
        Christopher J Marasco Senior Full Stack Software Engineer JavaScript TypeScript React Node.js AWS PostgreSQL MongoDB GraphQL REST API Docker Microservices Git HTML CSS SQL NoSQL Backend Frontend Fullstack Developer Programming Software Development Web Applications Cloud Computing Amazon Web Services Lambda DynamoDB RDS API Gateway CloudFormation Express Angular Jest Unit Testing Agile Scrum JIRA Quest Mindshare Progress Residential Aerosafe Global Medisked Xerox Rochester NY Eagle Scout OpenAI GPT-4 Vite Zustand Terraform CloudFront S3 CloudWatch Express.js PII Detection AWS PowerTools
      </Box>
      
        <Sidebar />
        <MainContent />
      </Box>
      
      {/* Copyright Footer */}
      <Box
        sx={{
          fontSize: '0.7rem',
          color: theme.palette.brand.textMuted,
          textAlign: 'center',
          mt: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1,
          '@media print': {
            display: 'none',
          },
        }}
      >
        <span>© {new Date().getFullYear()} Christopher Marasco</span>
        <Link
          href="https://github.com/cxm6467/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: theme.palette.brand.textMuted,
            transition: 'color 0.2s ease',
            display: 'flex',
            alignItems: 'center',
            '&:hover': {
              color: theme.palette.brand.primaryBlue,
            },
          }}
          aria-label="View portfolio source code on GitHub"
        >
          <Box
            component="svg"
            sx={{
              width: 16,
              height: 16,
            }}
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="m8 0c-4.42 0-8 3.58-8 8 0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38a8.013 8.013 0 0 0 5.47-7.59c0-4.42-3.58-8-8-8z" />
          </Box>
        </Link>
      </Box>
    </>
  );
};