import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { MainContent } from './MainContent';
import { renderWithTheme } from '@/test/renderWithTheme';

describe('MainContent', () => {
  it('renders all resume sections with correct heading hierarchy', () => {
    renderWithTheme(<MainContent />);

    expect(screen.getByRole('heading', { name: /professional summary/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /professional experience/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /featured projects/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /education & training/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /activities & achievements/i })).toBeInTheDocument();
  });

  it('renders every work experience entry', () => {
    renderWithTheme(<MainContent />);
    expect(screen.getByText(/quest mindshare/i)).toBeInTheDocument();
    expect(screen.getByText(/progress residential/i)).toBeInTheDocument();
    expect(screen.getByText(/aerosafe global/i)).toBeInTheDocument();
    expect(screen.getByText(/medisked/i)).toBeInTheDocument();
    expect(screen.getByText(/modis contract at xerox/i)).toBeInTheDocument();
    expect(screen.getByText(/synergy global solutions/i)).toBeInTheDocument();
  });

  it('renders the featured project with accessible external links', () => {
    renderWithTheme(<MainContent />);
    expect(screen.getByRole('heading', { name: /caboose ai/i })).toBeInTheDocument();

    const liveLink = screen.getByRole('link', { name: /view caboose ai live site/i });
    expect(liveLink).toHaveAttribute('href', 'https://caboose-ai.io');

    expect(screen.queryByRole('link', { name: /view caboose ai skills/i })).not.toBeInTheDocument();
  });

  it('renders education and achievements', () => {
    renderWithTheme(<MainContent />);
    expect(screen.getByText(/rochester institute of technology/i)).toBeInTheDocument();
    expect(screen.getByText(/kaplan university/i)).toBeInTheDocument();
    expect(screen.getByText(/eagle scout/i)).toBeInTheDocument();
  });
});