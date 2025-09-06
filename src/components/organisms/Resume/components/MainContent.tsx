import { Box, Typography, useTheme, Link, Chip } from '@mui/material';

const experienceData = [
  {
    title: 'Senior Full-Stack Software Engineer',
    company: 'Quest Mindshare',
    location: 'Remote',
    date: '12/2024 - 06/2025',
    responsibilities: [
      'Enhanced an existing full-stack application using React (hooks, context) and TypeScript by developing reusable UI components',
      'Integrated GraphQL APIs using a backend-for-frontend (BFF) approach and worked with both relational and NoSQL databases',
      'Refactored codebase to improve code quality while maintaining backward compatibility of existing functionality',
      'Collaborated with product owners to define software requirements for new features',
    ],
  },
  {
    title: 'Full Stack Software Developer',
    company: 'Progress Residential',
    location: 'Remote',
    date: '10/2022 - 11/2024',
    responsibilities: [
      'True full-stack developer with a passion for back-end development, working with Node.js, AWS, MongoDB, and React stack',
      'Led the back-end community of practice, coordinated production releases, and integrated third-party payment APIs',
      'Contributed to AWS architecture design and provided off-hours support for critical systems',
      'Played a key role in designing and implementing a new customer portal project',
      'Developed unit tests using Jest and worked extensively with Jira platform and agile methodologies',
    ],
  },
  {
    title: 'Software Engineer Full Stack',
    company: 'Aerosafe Global',
    location: 'Remote',
    date: '11/2021 - 08/2022',
    responsibilities: [
      'Developed and maintained software for the Cold Storage supply chain using AWS services',
      'Worked with AWS Lambda Functions, Cloud Formation, API Gateway, Secrets Manager, DynamoDB, and RDS',
      'Utilized Node.js, TypeORM, PostgreSQL, and TypeScript on the back end with Angular frontend',
      'Built scalable microservices architecture for supply chain management systems',
    ],
  },
  {
    title: 'Software Developer Engineer',
    company: 'Medisked',
    location: 'Rochester, NY',
    date: '01/2018 - 11/2020',
    responsibilities: [
      'Worked on a care provider management product using .NET Web Forms focused on improving the life of individuals with intellectual or developmental disabilities',
      'Responsible for a data warehouse and business intelligence platform utilizing .NET MVC',
      'Implemented and designed projects utilizing AWS resources including Lambda, API Gateway, Secrets Manager, and CloudFormation',
      'Integrated with customizable .NET MVC based survey tool for enhanced user experience',
    ],
  },
  {
    title: 'System Administrator',
    company: 'Modis Contract at Xerox',
    location: 'Rochester, NY',
    date: '09/2013 - 01/2015',
    responsibilities: [
      'Provided application support for public development and production VMware-based virtualized environments',
      'Managed Microsoft Server and Microsoft SQL Server along with maintenance and script-based tasks',
      'Responsible for closing day-to-day service tickets and identified opportunities to streamline tasks through scripting',
      'Delivered comprehensive hardware and software technical support for end-users',
    ],
  },
  {
    title: 'Field Service Engineer',
    company: 'Synergy Global Solutions',
    location: 'Rochester, NY',
    date: '04/2013 - 06/2013',
    responsibilities: [
      'Provided hardware and software technical support for end-users in field service capacity',
      'Diagnosed and resolved technical issues across various hardware and software platforms',
      'Maintained detailed service records and communicated technical solutions to clients',
    ],
  },
];

const projectData = {
  title: 'AI Interview Prep Platform',
  technologies: ['React 18', 'TypeScript', 'Node.js', 'AWS Lambda', 'OpenAI GPT-4', 'Terraform', 'Vite', 'Express.js'],
  description: 'Comprehensive AI-powered platform that helps job seekers prepare for technical interviews by analyzing resumes against job descriptions and generating personalized interview materials. Features resume analysis, ATS score calculation, real-time AI coaching with multiple interviewer perspectives, and secure PII detection/scrubbing. Built with modern React architecture using Zustand state management, deployed on AWS with Terraform IaC.',
  links: [
    { label: 'GitHub', url: 'https://github.com/cxm6467/ai-interview-prep' },
    { label: 'Live Demo', url: 'https://ai-ip.chrismarasco.io' },
  ],
};

const educationData = [
  {
    degree: 'Master of Science, Information Technology',
    school: 'Kaplan University',
    date: 'September 2015',
    details: 'Concentration in Information Security and Assurance',
  },
  {
    degree: 'Bachelor of Science, Information Technology',
    school: 'Rochester Institute of Technology',
    date: 'November 2012',
    details: 'Minor in Criminal Justice',
  },
  {
    degree: 'Full-Stack Web Development Bootcamp',
    school: 'The Firehose Project',
    date: 'January 2018',
  },
];

const achievementData = [
  {
    title: 'Eagle Scout',
    organization: 'Boy Scouts of America',
  },
];

export const MainContent = () => {
  const theme = useTheme();

  const SectionTitle = ({ children, id }: { children: React.ReactNode; id?: string }) => (
    <Typography
      variant="h5"
      component="h2"
      id={id}
      sx={{
        fontSize: '1.4rem',
        fontWeight: 700,
        color: theme.palette.brand.textPrimary,
        mb: 2.5,
        position: 'relative',
        paddingLeft: '15px',
        '&::before': {
          content: '">"',
          position: 'absolute',
          left: 0,
          color: theme.palette.brand.primaryBlue,
          fontWeight: 'bold',
        },
        '@media print': {
          color: '#000',
          borderBottom: `1px solid ${theme.palette.brand.primaryBlue}`,
        },
      }}
    >
      {children}
    </Typography>
  );

  return (
    <Box
      component="main"
      id="main-content"
      role="main"
      aria-label="Professional experience and qualifications"
      sx={{
        padding: '40px 35px',
        background: theme.palette.background.default,
        '@media (max-width: 768px)': {
          padding: '30px 20px',
        },
      }}
    >
      {/* Professional Summary */}
      <Box component="section" aria-labelledby="summary-heading" sx={{ mb: 4.5 }}>
        <SectionTitle id="summary-heading">Professional Summary</SectionTitle>
        <Box
          sx={{
            fontSize: '0.95rem',
            lineHeight: 1.6,
            color: theme.palette.brand.textSecondary,
            background: theme.palette.brand.iceBlue,
            padding: 2.5,
            borderRadius: '4px',
            borderLeft: `4px solid ${theme.palette.brand.primaryBlue}`,
            fontFamily: theme.typography.fontFamily,
          }}
        >
          Senior full-stack developer with expertise in Node.js, React, TypeScript, and AWS. Specializes in back-end architecture, API design, NoSQL/SQL databases, and IaC with a focus on scalable, maintainable code.
        </Box>
      </Box>

      {/* Professional Experience */}
      <Box component="section" aria-labelledby="experience-heading" sx={{ mb: 8 }}>
        <SectionTitle id="experience-heading">Professional Experience</SectionTitle>
        {experienceData.map((job, index) => (
          <Box
            key={index}
            sx={{
              mb: index === experienceData.length - 1 ? 5.5 : 3.75,
              position: 'relative',
              paddingLeft: '20px',
              '&::before': {
                content: '""',
                position: 'absolute',
                left: 0,
                top: '8px',
                width: '8px',
                height: '8px',
                background: theme.palette.brand.primaryBlue,
                borderRadius: '50%',
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                left: '3px',
                top: '16px',
                width: '2px',
                height: 'calc(100% - 8px)',
                background: theme.palette.brand.lightGray,
                display: index === experienceData.length - 1 ? 'none' : 'block',
              },
            }}
          >
            <Box sx={{ mb: 1.5 }}>
              <Typography
                variant="h6"
                component="h3"
                sx={{
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: theme.palette.brand.textPrimary,
                  mb: 0.5,
                }}
              >
                {job.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: '0.95rem',
                  color: theme.palette.brand.primaryBlue,
                  fontWeight: 600,
                  mb: 0.5,
                  '@media print': {
                    color: `${theme.palette.brand.primaryBlue} !important`,
                  },
                }}
              >
                {job.company}
              </Typography>
              <Typography
                sx={{
                  fontSize: '0.85rem',
                  color: theme.palette.brand.textMuted,
                  fontStyle: 'italic',
                }}
              >
                {job.location} • {job.date}
              </Typography>
            </Box>
            <Box component="ul" sx={{ listStyle: 'none', fontFamily: theme.typography.fontFamily }}>
              {job.responsibilities.map((responsibility, respIndex) => (
                <Box
                  key={respIndex}
                  component="li"
                  sx={{
                    position: 'relative',
                    paddingLeft: '20px',
                    mb: 0.75,
                    fontSize: '0.9rem',
                    lineHeight: 1.5,
                    color: theme.palette.brand.textSecondary,
                    '&::before': {
                      content: '"→"',
                      position: 'absolute',
                      left: 0,
                      color: theme.palette.brand.primaryBlue,
                      fontWeight: 'bold',
                    },
                  }}
                >
                  {responsibility}
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>

      {/* Featured Projects */}
      <Box
        component="section"
        aria-labelledby="projects-heading"
        sx={{
          background: theme.palette.brand.iceBlue,
          margin: '-35px -35px 35px -35px',
          padding: '35px',
          borderTop: `3px solid ${theme.palette.brand.primaryBlue}`,
          '@media (max-width: 768px)': {
            margin: '-30px -20px 30px -20px',
            padding: '30px 20px',
          },
        }}
      >
        <SectionTitle id="projects-heading">Featured Projects</SectionTitle>
        <Box
          component="article"
          sx={{
            background: theme.palette.background.default,
            border: `1px solid ${theme.palette.brand.lightGray}`,
            borderRadius: '6px',
            padding: 2.5,
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '3px',
              background: `linear-gradient(90deg, ${theme.palette.brand.primaryBlue}, ${theme.palette.brand.accentBlue})`,
            },
          }}
        >
          <Typography
            variant="h6"
            component="h3"
            sx={{
              fontSize: '1.05rem',
              fontWeight: 700,
              color: theme.palette.brand.textPrimary,
              mb: 1,
            }}
          >
            {projectData.title}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: 0.75,
              mb: 1.5,
              flexWrap: 'wrap',
            }}
            aria-label="Technologies used"
          >
            {projectData.technologies.map((tech, index) => (
              <Chip
                key={index}
                label={tech}
                size="small"
                sx={{
                  background: theme.palette.brand.textPrimary,
                  color: theme.palette.common.white,
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  height: '24px',
                }}
              />
            ))}
          </Box>
          <Typography
            sx={{
              fontFamily: 'Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
              fontSize: '0.9rem',
              lineHeight: 1.5,
              mb: 1.5,
              color: theme.palette.brand.textSecondary,
            }}
          >
            {projectData.description}
          </Typography>
          <Box sx={{ display: 'flex', gap: 1.5 }}>
            {projectData.links.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: theme.palette.brand.textPrimary,
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  padding: '6px 12px',
                  border: `1px solid ${theme.palette.brand.textPrimary}`,
                  borderRadius: '3px',
                  transition: 'all 0.2s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    color: theme.palette.common.white,
                    borderColor: theme.palette.brand.primaryBlue,
                    backgroundColor: theme.palette.brand.primaryBlue,
                  },
                  '&:focus': {
                    backgroundColor: theme.palette.brand.primaryBlue,
                    color: theme.palette.common.white,
                    borderColor: theme.palette.brand.primaryBlue,
                    outline: `3px solid ${theme.palette.brand.accentBlue}`,
                    outlineOffset: '2px',
                  },
                }}
                aria-label={`View ${projectData.title} ${link.label}`}
              >
                {link.label}
              </Link>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Education & Training */}
      <Box component="section" aria-labelledby="education-heading" sx={{ mb: 4.5 }}>
        <SectionTitle id="education-heading">Education & Training</SectionTitle>
        {educationData.map((edu, index) => (
            <Box
              key={index}
              sx={{
                padding: '15px 20px',
                background: theme.palette.brand.iceBlue,
                borderRadius: '4px',
                borderLeft: `4px solid ${theme.palette.brand.primaryBlue}`,
                mb: 1.5,
              }}
            >
            <Typography
              sx={{
                fontSize: '0.95rem',
                fontWeight: 600,
                color: theme.palette.brand.textPrimary,
                mb: 0.5,
              }}
            >
              {edu.degree}
            </Typography>
            <Typography
              sx={{
                fontSize: '0.85rem',
                color: theme.palette.brand.primaryBlue,
                fontWeight: 500,
                mb: 0.25,
                '@media print': {
                  color: `${theme.palette.brand.primaryBlue} !important`,
                },
              }}
            >
              {edu.school}
            </Typography>
            <Typography
              sx={{
                fontSize: '0.8rem',
                color: theme.palette.brand.textMuted,
              }}
            >
              {edu.date}
            </Typography>
            {edu.details && (
              <Typography
                sx={{
                  fontSize: '0.8rem',
                  color: theme.palette.brand.textSecondary,
                  fontStyle: 'italic',
                  mt: 0.25,
                }}
              >
                {edu.details}
              </Typography>
            )}
          </Box>
        ))}
      </Box>

      {/* Activities & Achievements */}
      <Box component="section" aria-labelledby="activities-heading">
        <SectionTitle id="activities-heading">Activities & Achievements</SectionTitle>
        {achievementData.map((achievement, index) => (
          <Box
            key={index}
            sx={{
              padding: '10px 15px',
              background: theme.palette.brand.iceBlue,
              borderRadius: '4px',
              borderLeft: `4px solid ${theme.palette.brand.primaryBlue}`,
              mb: 1,
            }}
          >
            <Typography
              sx={{
                fontSize: '0.9rem',
                fontWeight: 600,
                color: theme.palette.brand.textPrimary,
                mb: 0.25,
              }}
            >
              {achievement.title}
            </Typography>
            <Typography
              sx={{
                fontSize: '0.8rem',
                color: theme.palette.brand.primaryBlue,
                fontWeight: 500,
                '@media print': {
                  color: `${theme.palette.brand.primaryBlue} !important`,
                },
              }}
            >
              {achievement.organization}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};