import SEO from '../components/SEO';
import RecordCard from '../components/RecordCard';
import { EDUCATION } from '../data/records';

export default function Education() {
  return (
    <>
      <SEO
        title="Education & Academic Background"
        description="Academic background and educational degree history of Arjan Khatiwada, Bachelor of Computer Applications (BCA) candidate."
      />
      <div className="container">
        <div className="container pt-5 px-3 px-md-5">
          <div className="container-md-8">
            <div className="card">
              <div className="card-body p-4">
                <div className="row">
                  <div className="col-lg-12 text-center">
                    <h1 className="section-heading">ACADEMIC BACKGROUND</h1>
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

