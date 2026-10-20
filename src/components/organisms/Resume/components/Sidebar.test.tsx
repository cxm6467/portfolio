import { describe, it, expect, vi } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Sidebar } from './Sidebar';
import { renderWithTheme } from '@/test/renderWithTheme';

describe('Sidebar', () => {
  it('renders the name and professional title', () => {
    renderWithTheme(<Sidebar />);
    expect(screen.getByRole('heading', { level: 1, name: /christopher j\. marasco/i })).toBeInTheDocument();
    expect(screen.getByText(/senior full-stack software engineer/i)).toBeInTheDocument();
  });

  it('renders contact information with correct links', () => {
    renderWithTheme(<Sidebar />);

    const email = screen.getByRole('link', { name: /cxm6467@gmail\.com/i });
    expect(email).toHaveAttribute('href', 'mailto:cxm6467@gmail.com');

    const phone = screen.getByRole('link', { name: /585-857-0319/i });
    expect(phone).toHaveAttribute('href', 'tel:585-857-0319');

    const github = screen.getByRole('link', { name: /github\.com\/cxm6467/i });
    expect(github).toHaveAttribute('href', 'https://github.com/cxm6467');
    expect(github).toHaveAttribute('target', '_blank');
    expect(github).toHaveAttribute('rel', expect.stringContaining('noopener'));

    expect(screen.getByText(/rochester, ny 14604/i)).toBeInTheDocument();
  });

  it('renders the technical skills list', () => {
    renderWithTheme(<Sidebar />);
    expect(screen.getByRole('heading', { name: /technical skills/i })).toBeInTheDocument();
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
    expect(screen.getByText('AWS')).toBeInTheDocument();
    expect(screen.getByText('7+ years')).toBeInTheDocument();
  });

  it('renders the certifications', () => {
    renderWithTheme(<Sidebar />);
    expect(screen.getByRole('heading', { name: /certifications/i })).toBeInTheDocument();
    expect(screen.getByText(/aws certified architect associate/i)).toBeInTheDocument();
    expect(screen.getByText(/aws certified developer associate/i)).toBeInTheDocument();
    expect(screen.getAllByText(/amazon web services/i).length).toBeGreaterThan(0);
  });

  it('triggers a resume PDF download when the resume button is clicked', async () => {
    const captured: Array<{ href: string | null; download: string | null }> = [];
    const clickSpy = vi
      .spyOn(HTMLAnchorElement.prototype, 'click')
      .mockImplementation(function (this: HTMLAnchorElement) {
        captured.push({ href: this.getAttribute('href'), download: this.getAttribute('download') });
      });

    renderWithTheme(<Sidebar />);
    await userEvent.click(screen.getByRole('button', { name: /resume/i }));

    expect(captured).toHaveLength(1);
    expect(captured[0].href).toBe('/assets/Marasco_Resume2025.pdf');
    expect(captured[0].download).toBe('Christopher_Marasco_Resume.pdf');

    clickSpy.mockRestore();
  });

  it('exposes landmark semantics for assistive technology', () => {
    renderWithTheme(<Sidebar />);
    expect(screen.getByRole('complementary', { name: /contact information and technical skills/i })).toBeInTheDocument();
  });
});