import SEO from '../components/SEO';
import RecordCard from '../components/RecordCard';
import { EDUCATION } from '../data/records';

export default function Education() {
  return (
    <>
      <SEO
        title="Education"
        description="Arjan Khatiwada's academic background and education system."
      />
      <div className="container">
        <div className="container pt-5 px-3 px-md-5">
          <div className="container-md-8">
            <div className="card">
              <div className="card-body p-4">
                <div className="row">
                  <div className="col-lg-12 text-center">
                    
                    <h2 className="section-heading">ACADEMIC BACKGROUND</h2>
                  </div>
                </div>
                <div className="record-list">
                  {EDUCATION.map((item) => (
                    <RecordCard key={item.id} record={item} />
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
