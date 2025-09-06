import { Box, useTheme } from '@mui/material';

interface LogoIconProps {
  size?: number | string;
  color?: string;
}

export const LogoIcon = ({ size = 40 }: LogoIconProps) => {
  const theme = useTheme();
  
  return (
    <Box
      component="svg"
      sx={{
        width: size,
        height: size,
        maxWidth: '100%',
        maxHeight: '100%',
      }}
      viewBox="0 0 100 100"
      aria-label="Christopher Marasco Logo"
    >
      <text
        x="50"
        y="58"
        textAnchor="middle"
        fontSize="28"
        fontWeight="bold"
        fill={theme.palette.brand.primaryBlue}
        fontFamily={theme.typography.fontFamily}
      >
        CJM
      </text>
    </Box>
  );
};