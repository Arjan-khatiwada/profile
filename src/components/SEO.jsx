import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const DEFAULT_TITLE = 'Arjan Khatiwada | Full Stack Developer Portfolio';
const DEFAULT_DESCRIPTION =
  'Portfolio of Arjan Khatiwada, a full stack developer specializing in React, Node.js, and modern web applications. Explore projects, skills, and contact details.';
const DEFAULT_IMAGE = 'https://www.arjankhatiwada.com.np/images/arj.jpg';
const SITE_URL = 'https://www.arjankhatiwada.com.np';

export default function SEO({ title, description, image, type = 'website', jsonLd }) {
  const location = useLocation();
  const canonicalUrl = `${SITE_URL}${location.pathname === '/' ? '/' : location.pathname.replace(/\/$/, '')}`;
  const fullTitle = title ? `${title} | Arjan Khatiwada` : DEFAULT_TITLE;
  const metaDescription = description || DEFAULT_DESCRIPTION;
  const metaImage = image || DEFAULT_IMAGE;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />

      {/* Structured Data (JSON-LD) */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}

