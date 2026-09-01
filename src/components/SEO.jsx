import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description }) {
  const fullTitle = title
    ? `${title} | Arjan Khatiwada`
    : 'Arjan Khatiwada | Full Stack Developer Portfolio';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
    </Helmet>
  );
}
