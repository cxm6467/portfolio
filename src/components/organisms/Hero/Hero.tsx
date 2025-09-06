import { Box, Container, Typography, Button } from '@mui/material';
import { Link as ExternalLinkIcon } from '@mui/icons-material';

export const Hero = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        py: 12,
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h1"
          component="h1"
          gutterBottom
          sx={{ 
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            fontWeight: 700,
            mb: 3
          }}
        >
          Christopher Marasco
        </Typography>
        <Typography
          variant="h5"
          component="p"
          sx={{ 
            fontSize: { xs: '1.1rem', md: '1.25rem' },
            mb: 4,
            opacity: 0.9,
            maxWidth: '600px',
            mx: 'auto'
          }}
        >
          This is a simple web portfolio of sorts for Christopher Marasco
        </Typography>
        <Button
          variant="contained"
          size="large"
          endIcon={<ExternalLinkIcon />}
          sx={{
            py: 1.5,
            px: 4,
            fontSize: '1.1rem',
            bgcolor: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            '&:hover': {
              bgcolor: 'rgba(255, 255, 255, 0.3)',
            }
          }}
        >
          Visit chrismarasco.io
        </Button>
      </Container>
    </Box>
  );
};