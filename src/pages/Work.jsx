import SEO from '../components/SEO';
import RecordCard from '../components/RecordCard';
import { WORK } from '../data/records';

const EXPERIENCE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  mainEntity: {
    '@type': 'Person',
    name: 'Arjan Khatiwada',
    jobTitle: 'IT Assistant & Full Stack Developer',
    url: 'https://www.arjankhatiwada.com.np/experience',
    worksFor: {
      '@type': 'Organization',
      name: 'Biratnagar Medical College Teaching Hospital',
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Himalaya Darshan College',
    },
  },
};

export default function Work() {
  return (
    <>
      <SEO
        title="Work Experience"
        description="Explore Arjan Khatiwada's professional work experience as IT Assistant at Biratnagar Medical College Teaching Hospital and Full Stack Developer."
        jsonLd={EXPERIENCE_SCHEMA}
      />
      <div className="container">
        <div className="container pt-5 px-3 px-md-5">
          <div className="container-md-8">
            <div className="card">
              <div className="card-body p-4">
                <div className="row">
                  <div className="col-lg-12 text-center">
                    <h1 className="section-heading">Work Experience</h1>
                  </div>
                </div>
                <div className="record-list">
                  {WORK.map((item) => (
                    <RecordCard key={item.id} record={item} showTags />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

