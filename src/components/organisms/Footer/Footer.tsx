import { Box, Container, Typography, Link, Stack } from '@mui/material';
import { GitHub } from '@mui/icons-material';

export const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 4,
        mt: 'auto',
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={2} alignItems="center">
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} Christopher Marasco. Built with React & Material-UI.
          </Typography>
          <Link
            href="https://github.com/cxm6467/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              color: 'text.secondary',
              textDecoration: 'none',
              '&:hover': {
                color: 'primary.main',
              }
            }}
          >
            <GitHub fontSize="small" />
            <Typography variant="body2">
              View Source Code
            </Typography>
          </Link>
        </Stack>
      </Container>
    </Box>
  );
};