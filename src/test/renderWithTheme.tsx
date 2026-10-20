import { render, type RenderOptions } from '@testing-library/react';
import { ThemeProvider } from '@mui/material';
import type { ReactElement } from 'react';
import { theme } from '@theme';

export const renderWithTheme = (ui: ReactElement, options?: RenderOptions) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>, options);