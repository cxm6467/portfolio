import { Box, Typography, useTheme, Link } from '@mui/material';
import { LogoIcon } from '@atoms/LogoIcon';

const contactInfo = [
  { icon: 'envelope', text: 'cxm6467@gmail.com', type: 'email' },
  { icon: 'phone', text: '585-857-0319', type: 'phone' },
  { icon: 'map-pin', text: 'Rochester, NY 14604', type: 'location' },
  { icon: 'github', text: 'github.com/cxm6467', type: 'github', url: 'https://github.com/cxm6467' },
];

const skills = [
  { name: 'JavaScript', years: '7+ years' },
  { name: 'AWS', years: '6+ years' },
  { name: 'Node.js', years: '4+ years' },
  { name: 'TypeScript', years: '4+ years' },
  { name: 'PostgreSQL', years: '4+ years' },
  { name: 'GraphQL', years: '3+ years' },
  { name: 'RESTful APIs', years: '3+ years' },
  { name: 'React', years: '2+ years' },
  { name: 'MongoDB', years: '2+ years' },
  { name: 'DynamoDB', years: '1 year' },
];

const certifications = [
  { name: 'AWS Certified Architect Associate', org: 'Amazon Web Services' },
  { name: 'AWS Certified Developer Associate', org: 'Amazon Web Services' },
];

export const Sidebar = () => {
  const theme = useTheme();

  const iconProps = {
    width: 16,
    height: 16,
    filter: 'brightness(0) saturate(100%) invert(67%) sepia(38%) saturate(1757%) hue-rotate(188deg) brightness(103%) contrast(102%)',
  };

  const EnvelopeIcon = () => (
    <Box component="svg" sx={iconProps} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
    </Box>
  );

  const PhoneIcon = () => (
    <Box component="svg" sx={iconProps} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
    </Box>
  );

  const MapPinIcon = () => (
    <Box component="svg" sx={iconProps} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
    </Box>
  );

  const GitHubIcon = () => (
    <Box component="svg" sx={iconProps} viewBox="0 0 16 16" version="1.1" aria-hidden="true">
      <path d="m8 0c-4.42 0-8 3.58-8 8 0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38a8.013 8.013 0 0 0 5.47-7.59c0-4.42-3.58-8-8-8z" />
    </Box>
  );

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'envelope':
        return <EnvelopeIcon />;
      case 'phone':
        return <PhoneIcon />;
      case 'map-pin':
        return <MapPinIcon />;
      case 'github':
        return <GitHubIcon />;
      default:
        return null;
    }
  };

  return (
    <Box
      component="aside"
      role="complementary"
      aria-label="Contact information and technical skills"
      sx={{
        background: `linear-gradient(180deg, ${theme.palette.brand.darkBg} 0%, ${theme.palette.brand.mediumBg} 100%)`,
        color: theme.palette.common.white,
        padding: '40px 30px',
        position: 'relative',
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          right: 0,
          width: '2px',
          height: '100%',
          background: `linear-gradient(180deg, ${theme.palette.brand.accentBlue}, ${theme.palette.brand.brightBlue})`,
        },
        '@media print': {
          background: theme.palette.background.default,
          color: '#000',
          borderRight: `2px solid ${theme.palette.brand.primaryBlue}`,
          marginBottom: '20px',
          '&::after': {
            display: 'none',
          },
        },
        '@media (max-width: 768px)': {
          padding: '30px 20px',
        },
      }}
    >
      {/* Profile Section */}
      <Box
        sx={{
          textAlign: 'center',
          mb: 4.5,
          pb: 3,
          borderBottom: '1px solid #4a5568',
        }}
      >
        <Box
          sx={{
            width: 150,
            height: 150,
            margin: '0 auto 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            border: `3px solid ${theme.palette.brand.accentBlue}`,
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            background: theme.palette.common.white,
            overflow: 'hidden',
            '@media print': {
              display: 'none',
            },
            '@media (max-width: 768px)': {
              width: 120,
              height: 120,
            },
            '@media (max-width: 480px)': {
              width: 100,
              height: 100,
              margin: '0 auto 15px',
            },
          }}
        >
          <Box
            sx={{
              width: '95%',
              height: '95%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <LogoIcon size="100%" />
          </Box>
        </Box>
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontSize: '1.8rem',
            fontWeight: 700,
            mb: 1,
            letterSpacing: '-0.5px',
            color: theme.palette.common.white,
            '@media print': {
              color: '#000',
            },
          }}
        >
          Christopher J. Marasco
        </Typography>
        <Typography
          sx={{
            fontSize: '0.9rem',
            color: '#a0aec0',
            mb: 2.5,
            fontWeight: 400,
          }}
        >
          Senior Full-Stack Software Engineer
        </Typography>
      </Box>

      {/* Contact Section */}
      <Box sx={{ mb: 4.5 }}>
        <Typography
          variant="h6"
          component="h2"
          sx={{
            fontSize: '1rem',
            fontWeight: 700,
            color: theme.palette.brand.brightBlue,
            mb: 2,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-4px',
              left: 0,
              width: '30px',
              height: '2px',
              background: theme.palette.brand.brightBlue,
            },
            '@media print': {
              color: theme.palette.brand.primaryBlue,
              borderBottom: `1px solid ${theme.palette.brand.primaryBlue}`,
            },
          }}
          id="contact-heading"
        >
          Contact Information
        </Typography>
        <Box component="address" aria-labelledby="contact-heading" sx={{ fontStyle: 'normal' }}>
          {contactInfo.map((contact, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                mb: 1.5,
                fontSize: '0.85rem',
                color: '#e2e8f0',
              }}
            >
              <Box
                sx={{
                  width: 16,
                  height: 16,
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.9rem',
                  color: theme.palette.brand.brightBlue,
                  '@media print': {
                    color: theme.palette.brand.primaryBlue,
                  },
                }}
                aria-hidden="true"
              >
                {getIcon(contact.icon)}
              </Box>
              {contact.url ? (
                <Link
                  href={contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'inherit',
                    textDecoration: 'none',
                    ...(contact.type === 'github' && { 
                      fontFamily: 'Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
                    }),
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  {contact.text}
                </Link>
              ) : (
                <Typography component="span" sx={{ fontSize: 'inherit' }}>
                  {contact.text}
                </Typography>
              )}
            </Box>
          ))}
        </Box>
      </Box>

      {/* Skills Section */}
      <Box sx={{ mb: 4.5 }} aria-labelledby="skills-heading">
        <Typography
          variant="h6"
          component="h2"
          sx={{
            fontSize: '1rem',
            fontWeight: 700,
            color: theme.palette.brand.brightBlue,
            mb: 2,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-4px',
              left: 0,
              width: '30px',
              height: '2px',
              background: theme.palette.brand.brightBlue,
            },
            '@media print': {
              color: theme.palette.brand.primaryBlue,
              borderBottom: `1px solid ${theme.palette.brand.primaryBlue}`,
            },
          }}
          id="skills-heading"
        >
          Technical Skills
        </Typography>
        {skills.map((skill, index) => (
          <Box key={index} sx={{ mb: 1.5 }}>
            <Box
              sx={{
                fontSize: '0.85rem',
                color: '#e2e8f0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Typography 
                component="span" 
                sx={{ 
                  fontSize: 'inherit',
                  fontFamily: 'Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                }}
              >
                {skill.name}
              </Typography>
              <Typography
                component="span"
                sx={{
                  fontSize: '0.75rem',
                  color: '#a0aec0',
                  fontWeight: 600,
                }}
              >
                {skill.years}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Certifications Section */}
      <Box aria-labelledby="certs-heading">
        <Typography
          variant="h6"
          component="h2"
          sx={{
            fontSize: '1rem',
            fontWeight: 700,
            color: theme.palette.brand.brightBlue,
            mb: 2,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-4px',
              left: 0,
              width: '30px',
              height: '2px',
              background: theme.palette.brand.brightBlue,
            },
            '@media print': {
              color: theme.palette.brand.primaryBlue,
              borderBottom: `1px solid ${theme.palette.brand.primaryBlue}`,
            },
          }}
          id="certs-heading"
        >
          Certifications
        </Typography>
        {certifications.map((cert, index) => (
          <Box
            key={index}
            sx={{
              background: theme.palette.brand.mediumBg,
              padding: 1.5,
              borderRadius: '4px',
              mb: 1,
              borderLeft: `3px solid ${theme.palette.brand.accentBlue}`,
            }}
          >
            <Typography
              sx={{
                fontSize: '0.8rem',
                color: theme.palette.brand.brightBlue,
                fontWeight: 600,
                mb: 0.5,
              }}
            >
              {cert.name}
            </Typography>
            <Typography
              sx={{
                fontSize: '0.75rem',
                color: '#a0aec0',
              }}
            >
              {cert.org}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};