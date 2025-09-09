import { AppBar, Toolbar, Container, Button, IconButton, Tooltip } from '@mui/material';
import { PictureAsPdf } from '@mui/icons-material';
import { Logo } from '@atoms/Logo';

export const Header = () => {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/Marasco_Resume2025.pdf';
    link.download = 'Christopher_Marasco_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', py: 2 }}>
          <Logo variant="h5" />
          
          {/* Desktop Resume Button */}
          <Button
            variant="outlined"
            startIcon={<PictureAsPdf />}
            onClick={handleResumeDownload}
            sx={{
              display: { xs: 'none', sm: 'flex' },
              borderColor: 'primary.main',
              color: 'primary.main',
              '&:hover': {
                borderColor: 'primary.dark',
                backgroundColor: 'primary.main',
                color: 'white',
              },
            }}
          >
            Resume
          </Button>

          {/* Mobile Resume Button */}
          <Tooltip title="Resume" placement="left">
            <IconButton
              onClick={handleResumeDownload}
              sx={{
                display: { xs: 'flex', sm: 'none' },
                color: 'primary.main',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  color: 'white',
                },
              }}
              aria-label="Resume"
            >
              <PictureAsPdf />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </Container>
    </AppBar>
  );
};