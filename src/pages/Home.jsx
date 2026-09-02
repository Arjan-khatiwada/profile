import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const STATS = [
  { value: '99.9%', label: 'Uptime shipped' },
  { value: '40%', label: 'Faster API response' },
  { value: '60%', label: 'Faster deployments' },
  { value: '95+', label: 'Lighthouse score' },
];

const ROLES = ['React', 'Node.js', 'Laravel', 'Python', 'AWS / GCP'];

const HOME_PERSON_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Arjan Khatiwada',
  url: 'https://www.arjankhatiwada.com.np',
  image: 'https://www.arjankhatiwada.com.np/images/arj.jpg',
  jobTitle: 'Full Stack Developer',
  sameAs: [
    'https://github.com/arjankhatiwada',
    'https://linkedin.com/in/arjan-khatiwada-24618131b/',
    'https://www.facebook.com/arjan.khatiwada.1',
    'https://www.instagram.com/arjan.khatiwada.1/',
  ],
};

export default function Home() {
  return (
    <>
      <SEO
        title="Full Stack Developer Portfolio"
        description="Portfolio of Arjan Khatiwada, a full stack developer specializing in React, Node.js, Express, and modern web applications. Explore projects, work experience, and contact details."
        image="https://www.arjankhatiwada.com.np/images/arj.jpg"
        jsonLd={HOME_PERSON_SCHEMA}
      />
      <div className="container-fluid px-4 px-md-5">
        <div className="hero">
          <div className="hero-text">
            <div className="eyebrow">
              <span className="status-dot" aria-hidden="true"></span>
              Prompt Engineer & full stack developer — biratnagar, nepal
            </div>
            <h1 className="hero-name">Arjan Khatiwada</h1>
            <p className="hero-tagline">I build systems that stay up.</p>
            <p className="hero-bio">
              I'm a full stack developer and prompt engineer with hands-on experience building
              and shipping full-stack web applications using React.js, Node.js, Express.js, and
              databases like MongoDB, MySQL, and PostgreSQL. I've designed REST APIs, cut
              response times through query optimization, implemented JWT/OAuth 2.0
              authentication, and deployed apps on AWS and GCP with CI/CD pipelines.
              <br />
              <br />
              I currently work as an IT Assistant at a hospital, where I lead architecture
              planning for an in-house patient management system, and I'm actively expanding
              into Laravel, PHP, and AJAX-driven backend development.
            </p>
            <div className="role-row">
              {ROLES.map((role) => (
                <span className="pill" key={role}>
                  {role}
                </span>
              ))}
            </div>
            <div className="cta-row">
              <Link to="/experience" className="btn-solid">
                View work experience
              </Link>
              <Link to="/contact" className="btn-outline">
                Get in touch
              </Link>
            </div>
          </div>
          <div className="hero-portrait">
            <img
              src="/images/arj.jpg"
              alt="Arjan Khatiwada - Full Stack Developer portrait"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>

        <div className="stats-row">
          {STATS.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

