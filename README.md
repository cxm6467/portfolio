# Portfolio Resume

A professional React-based resume application for [Christopher Marasco](https://chrismarasco.io).

## Features
- Professional resume layout with modern design theme
- Fully responsive design (desktop, tablet, mobile)
- ADA compliant with accessibility features
- Print-optimized styling
- ATS-friendly with hidden keywords for applicant tracking systems
- Modern React components using Material-UI

## Tech Stack
- [React 18](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) - Build tool and dev server  
- [Material-UI (MUI)](https://mui.com/) - Component library
- [Node.js](https://nodejs.org/en/)
- Component architecture following atomic design principles

## Development

### Getting Started
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Project Structure
```
src/
├── components/
│   ├── atoms/               # Basic UI elements (LogoIcon)
│   ├── organisms/Resume/    # Main resume layout (Sidebar, MainContent)
│   ├── SEOHead/             # Reusable SEO/meta configuration
│   └── PerformanceDashboard/ # Dev-only web vitals dashboard
├── data/                    # Resume data (contact, skills, certifications)
├── theme/                   # Material-UI theme configuration
├── utils/                   # Analytics, web vitals, performance monitoring
├── test/                    # Test setup and helpers
└── features/App/            # Main application component
```

### Testing
```bash
# Run the test suite once
npm test

# Run tests in watch mode
npm run test:watch
```

Tests use [Vitest](https://vitest.dev/) with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

## Design Principles
- Responsive design with mobile-first approach
- Accessibility compliance (WCAG guidelines)
- Component reusability following atomic design
- Type safety with TypeScript
- Clean, semantic HTML structure

## Resume Features
- **Sidebar**: Profile photo, contact information, technical skills with progress bars, certifications
- **Main Content**: Professional summary, work experience timeline, featured projects, education, achievements
- **Professional Color Palette**: Custom theme with professional blue tones
- **Print Support**: Optimized CSS for physical printing
- **Screen Reader Support**: Full ARIA labels and semantic markup

