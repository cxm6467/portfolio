import { AppBar, Toolbar, Container } from '@mui/material';
import { Logo } from '@atoms/Logo';

export const Header = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', py: 2 }}>
          <Logo variant="h5" />
        </Toolbar>
      </Container>
    </AppBar>
  );
};