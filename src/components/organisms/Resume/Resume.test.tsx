import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { Resume } from './Resume';
import { renderWithTheme } from '@/test/renderWithTheme';

describe('Resume', () => {
  it('renders the skip navigation link targeting the main content', () => {
    renderWithTheme(<Resume />);
    const skipLink = screen.getByRole('link', { name: /skip to main content/i });
    expect(skipLink).toHaveAttribute('href', '#main-content');
  });

  it('renders both sidebar and main content regions', () => {
    renderWithTheme(<Resume />);
    expect(screen.getByRole('complementary', { name: /contact information and technical skills/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/professional experience and qualifications/i)).toBeInTheDocument();
    expect(screen.getByText(/professional summary/i)).toBeInTheDocument();
    expect(screen.getByText(/technical skills/i)).toBeInTheDocument();
  });

  it('keeps the ATS keyword block hidden from assistive technology', () => {
    renderWithTheme(<Resume />);
    const atsBlock = screen.getByText(/medisked xerox/i);
    expect(atsBlock).toHaveAttribute('aria-hidden', 'true');
  });

  it('renders the copyright footer with a source code link', () => {
    renderWithTheme(<Resume />);
    const year = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`© ${year} Christopher Marasco`))).toBeInTheDocument();

    const sourceLink = screen.getByRole('link', { name: /view portfolio source code on github/i });
    expect(sourceLink).toHaveAttribute('href', 'https://github.com/cxm6467/portfolio');
  });
});