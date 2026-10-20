// Single source of truth for resume data rendered in the Sidebar.
// Kept separate from components so JSON-LD, the PDF export, and tests can share it.

export interface ContactItem {
  icon: 'envelope' | 'phone' | 'map-pin' | 'github' | 'resume';
  text: string;
  type: 'email' | 'phone' | 'location' | 'github' | 'resume';
  url?: string;
  isDownload?: boolean;
}

export interface Skill {
  name: string;
  years: string;
}

export interface Certification {
  name: string;
  org: string;
}

export const RESUME_PDF_URL = '/assets/Marasco_Resume2025.pdf';
export const RESUME_PDF_FILENAME = 'Christopher_Marasco_Resume.pdf';

export const contactInfo: ContactItem[] = [
  { icon: 'envelope', text: 'cxm6467@gmail.com', type: 'email', url: 'mailto:cxm6467@gmail.com' },
  { icon: 'phone', text: '585-857-0319', type: 'phone', url: 'tel:585-857-0319' },
  { icon: 'map-pin', text: 'Rochester, NY 14604', type: 'location' },
  { icon: 'github', text: 'github.com/cxm6467', type: 'github', url: 'https://github.com/cxm6467' },
  { icon: 'resume', text: 'Resume', type: 'resume', isDownload: true },
];

export const skills: Skill[] = [
  { name: 'JavaScript', years: '7+ years' },
  { name: 'AWS', years: '6+ years' },
  { name: 'Node.js', years: '4+ years' },
  { name: 'TypeScript', years: '4+ years' },
  { name: 'PostgreSQL', years: '4+ years' },
  { name: 'GraphQL', years: '3+ years' },
  { name: 'RESTful APIs', years: '3+ years' },
  { name: 'React', years: '2+ years' },
  { name: 'MongoDB', years: '2+ years' },
  { name: 'DynamoDB', years: '1 year' },
];

export const certifications: Certification[] = [
  { name: 'AWS Certified Architect Associate', org: 'Amazon Web Services' },
  { name: 'AWS Certified Developer Associate', org: 'Amazon Web Services' },
];