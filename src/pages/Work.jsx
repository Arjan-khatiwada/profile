import SEO from '../components/SEO';
import RecordCard from '../components/RecordCard';
import { WORK } from '../data/records';

export default function Work() {
  return (
    <>
      <SEO
        title="Work Experience"
        description="Arjan Khatiwada's professional work experience and system execution history."
      />
      <div className="container">
        <div className="container pt-5 px-3 px-md-5">
          <div className="container-md-8">
            <div className="card">
              <div className="card-body p-4">
                <div className="row">
                  <div className="col-lg-12 text-center">
                   
                    <h2 className="section-heading">Work Experience</h2>
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
