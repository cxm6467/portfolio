import { Box, Typography } from '@mui/material';
import { LogoIcon } from '@atoms/LogoIcon';

interface LogoProps {
  variant?: 'h4' | 'h5' | 'h6';
  showIcon?: boolean;
  showText?: boolean;
}

export const Logo = ({ 
  variant = 'h5', 
  showIcon = true, 
  showText = true 
}: LogoProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
        cursor: 'pointer',
      }}
    >
      {showIcon && (
        <LogoIcon 
          size={variant === 'h4' ? 120 : variant === 'h5' ? 96 : 80} 
          color="primary.main"
        />
      )}
      {showText && (
        <Typography
          variant={variant}
          component="div"
          sx={{
            fontWeight: 'bold',
            color: 'primary.main',
          }}
        >
          Christopher Marasco
        </Typography>
      )}
    </Box>
  );
};