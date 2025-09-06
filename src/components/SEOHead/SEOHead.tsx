import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  author?: string;
  publishedDate?: string;
  modifiedDate?: string;
  canonicalUrl?: string;
  noindex?: boolean;
  structuredData?: object;
}

const defaultProps: Required<Omit<SEOHeadProps, 'publishedDate' | 'modifiedDate' | 'structuredData'>> = {
  title: 'Christopher Marasco - Senior Full-Stack Software Engineer',
  description: 'Senior full-stack developer with expertise in Node.js, React, TypeScript, and AWS. Specializes in back-end architecture, API design, NoSQL/SQL databases, and IaC with a focus on scalable, maintainable code.',
  keywords: 'Christopher Marasco, Full Stack Developer, Software Engineer, Node.js, React, TypeScript, AWS, JavaScript, PostgreSQL, MongoDB, API Development, Cloud Solutions, Rochester NY',
  image: 'https://chrismarasco.io/assets/logos/Logo.png',
  url: 'https://chrismarasco.io/',
  type: 'website',
  author: 'Christopher Marasco',
  canonicalUrl: 'https://chrismarasco.io/',
  noindex: false,
};

export const SEOHead = ({
  title = defaultProps.title,
  description = defaultProps.description,
  keywords = defaultProps.keywords,
  image = defaultProps.image,
  url = defaultProps.url,
  type = defaultProps.type,
  author = defaultProps.author,
  publishedDate,
  modifiedDate,
  canonicalUrl = defaultProps.canonicalUrl,
  noindex = defaultProps.noindex,
  structuredData,
}: SEOHeadProps) => {
  const fullTitle = title.includes('Christopher Marasco') ? title : `${title} | Christopher Marasco`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Robots */}
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Christopher Marasco" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Article specific (if type is article) */}
      {type === 'article' && (
        <>
          <meta property="article:author" content={author} />
          {publishedDate && <meta property="article:published_time" content={publishedDate} />}
          {modifiedDate && <meta property="article:modified_time" content={modifiedDate} />}
        </>
      )}
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

// Predefined SEO configurations for different pages
export const SEOConfigs = {
  home: {
    title: 'Christopher Marasco - Senior Full-Stack Software Engineer | Node.js, React, TypeScript, AWS',
    description: 'Senior full-stack developer with expertise in Node.js, React, TypeScript, and AWS. Specializes in back-end architecture, API design, NoSQL/SQL databases, and IaC.',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Christopher Marasco",
      "jobTitle": "Senior Full-Stack Software Engineer",
      "description": "Senior full-stack developer with expertise in Node.js, React, TypeScript, and AWS. Specializes in back-end architecture, API design, NoSQL/SQL databases, and IaC",
      "url": "https://chrismarasco.io/",
      "sameAs": [
        "https://github.com/cxm6467",
        "https://linkedin.com/in/chris-marasco"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Rochester",
        "addressRegion": "NY",
        "postalCode": "14604"
      },
      "email": "cxm6467@gmail.com",
      "telephone": "585-857-0319",
      "knowsAbout": [
        "JavaScript", "Node.js", "React", "TypeScript", "AWS", "PostgreSQL", "MongoDB", 
        "GraphQL", "RESTful APIs", "DynamoDB", "Software Architecture", "Cloud Computing"
      ],
      "alumniOf": [
        {
          "@type": "EducationalOrganization",
          "name": "Rochester Institute of Technology"
        },
        {
          "@type": "EducationalOrganization", 
          "name": "Kaplan University"
        }
      ]
    }
  },
  
  resume: {
    title: 'Resume - Christopher Marasco',
    description: 'Professional resume of Christopher Marasco, Senior Full-Stack Software Engineer with 6+ years experience in Node.js, React, TypeScript, and AWS.',
    url: 'https://chrismarasco.io/resume',
    canonicalUrl: 'https://chrismarasco.io/resume',
  },
  
  projects: {
    title: 'Projects - Christopher Marasco',
    description: 'Software development projects by Christopher Marasco, featuring AI Interview Prep Platform and other full-stack applications built with React, Node.js, and AWS.',
    url: 'https://chrismarasco.io/projects',
    canonicalUrl: 'https://chrismarasco.io/projects',
  },
  
  contact: {
    title: 'Contact - Christopher Marasco',
    description: 'Get in touch with Christopher Marasco, Senior Full-Stack Software Engineer. Available for full-stack development opportunities in Rochester, NY.',
    url: 'https://chrismarasco.io/contact',
    canonicalUrl: 'https://chrismarasco.io/contact',
  },
} as const;