import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Code, GitHub } from '@mui/icons-material';

const features = [
  {
    icon: <Code sx={{ fontSize: 40 }} />,
    title: 'ReactApp hosted on AWS via AWS Amplify',
    description: 'Modern React application with serverless deployment'
  },
  {
    icon: <GitHub sx={{ fontSize: 40 }} />,
    title: 'Code hosted here on github',
    description: 'Open source development with version control'
  }
];

export const Features = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          component="h2" 
          gutterBottom 
          align="center"
          sx={{ mb: 6 }}
        >
          Features
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  p: 3,
                  textAlign: 'center',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                  }
                }}
              >
                <CardContent>
                  <Box sx={{ color: 'primary.main', mb: 2 }}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};