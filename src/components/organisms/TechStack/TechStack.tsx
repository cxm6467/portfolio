import { Box, Container, Typography, Chip, Stack } from '@mui/material';
import Grid from '@mui/material/Grid2';

const currentTech = [
  'React',
  'Vite', 
  'TypeScript',
  'Material-UI',
  'Node.js v20',
  'npm'
];

const originalTech = [
  'AWS Amplify',
  'Material UI'
];

const foci = [
  'pure functions',
  'absolute paths', 
  'DRY'
];

export const TechStack = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          component="h2" 
          gutterBottom 
          align="center"
          sx={{ mb: 6 }}
        >
          Tech ...so far
        </Typography>
        
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h5" component="h3" gutterBottom sx={{ mb: 3 }}>
              Current Stack
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {currentTech.map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  variant="outlined"
                  color="primary"
                  sx={{ mb: 1 }}
                />
              ))}
            </Stack>
          </Grid>
          
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h5" component="h3" gutterBottom sx={{ mb: 3 }}>
              Deployment & Legacy
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {originalTech.map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  variant="outlined"
                  color="secondary"
                  sx={{ mb: 1 }}
                />
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Typography variant="h5" component="h3" gutterBottom sx={{ mb: 3 }}>
            Foci
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap" useFlexGap>
            {foci.map((focus) => (
              <Chip
                key={focus}
                label={focus}
                color="success"
                sx={{ 
                  fontSize: '1rem',
                  py: 2.5,
                  px: 1,
                  fontWeight: 500
                }}
              />
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};