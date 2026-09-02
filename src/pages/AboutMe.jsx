import SEO from '../components/SEO';

const SKILLS_LEFT = [
  { label: 'JavaScript (ES6+)', value: 90 },
  { label: 'Node.js / Express.js', value: 85 },
  { label: 'MongoDB', value: 75 },
  { label: 'PHP / Laravel', value: 65 },
];

const SKILLS_RIGHT = [
  { label: 'React.js', value: 90 },
  { label: 'SQL (MySQL/PostgreSQL)', value: 80 },
  { label: 'Python / FastAPI', value: 70 },
  { label: 'AWS / GCP / Docker', value: 60 },
];

function SkillColumn({ title, skills }) {
  return (
    <div className="about-skills-col">
      <div className="about-section-header">
        <h2 className="about-section-label">{title}</h2>
        <span className="about-section-rule" aria-hidden="true"></span>
      </div>
      <div className="about-skills-list">
        {skills.map((skill) => (
          <div className="skill-row" key={skill.label}>
            <div className="skill-label">
              <span>{skill.label}</span>
              <span className="skill-value">{skill.value}%</span>
            </div>
            <div className="skill-track">
              <div className="skill-fill" style={{ width: `${skill.value}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AboutMe() {
  return (
    <>
      <SEO
        title="About Me"
        description="Learn more about Arjan Khatiwada — full stack developer & prompt engineer from Biratnagar, Nepal. Technical competencies, background, and skills."
        image="https://www.arjankhatiwada.com.np/images/a.jpg"
      />
      <div className="container about-page">
        <div className="about-page-inner pt-5 px-3 px-md-5">
          <div className="eyebrow about-eyebrow"> ABOUT_ME</div>

          <div className="about-top-row">
            <aside className="about-card about-profile-card">
              <div className="about-photo-frame">
                <img
                  src="/images/a.jpg"
                  alt="Arjan Khatiwada portrait"
                  loading="lazy"
                />
              </div>
              <div className="about-profile-body">
                <h1 className="about-profile-name">ARJAN KHATIWADA</h1>
                <div className="about-profile-meta-row">
                  <span className="about-meta-item">
                    <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                    Biratnagar, Morang
                  </span>
                  <span className="about-meta-divider" aria-hidden="true"></span>
                  <span className="about-meta-item">Age 23</span>
                </div>
              </div>
            </aside>

            <section className="about-card about-core-card">
              <div className="about-section-header">
                <h2 className="about-section-label">PERSONAL Information</h2>
                <span className="about-section-rule" aria-hidden="true"></span>
              </div>

              <div className="about-core-content">
                <div className="about-field-row">
                  <div className="about-field">
                    <span className="about-field-label">Date of Birth</span>
                    <span className="about-field-value">16 Aug 2003</span>
                  </div>
                  <div className="about-field">
                    <span className="about-field-label">Nationality</span>
                    <span className="about-field-value">Nepali</span>
                  </div>
                </div>
                <div className="about-field about-field-full">
                  <span className="about-field-label">Address</span>
                  <span className="about-field-value">
                    Budhiganga-1, Puspalalchowk, Biratnagar, Koshi
                  </span>
                </div>

                <div className="about-social-section">
                  <div className="about-section-header">
                    <h3 className="about-section-label">SOCIAL NETWORK</h3>
                    <span className="about-section-rule" aria-hidden="true"></span>
                  </div>
                  <div className="about-social-icons social-icons">
                    <a
                      href="https://www.facebook.com/arjan.khatiwada.1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="about-social-link about-social-facebook"
                      aria-label="Facebook Profile"
                    >
                      <i className="fab fa-facebook" aria-hidden="true"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/arjan.khatiwada.1/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="about-social-link about-social-instagram"
                      aria-label="Instagram Profile"
                    >
                      <i className="fab fa-instagram" aria-hidden="true"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/arjan-khatiwada-24618131b/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="about-social-link about-social-linkedin"
                      aria-label="LinkedIn Profile"
                    >
                      <i className="fab fa-linkedin" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>

                <hr className="about-divider" />

                <div className="about-cv-panel">
                  <span className="about-cv-label">CV_FILE</span>
                  <p className="about-cv-description">Full CV in PDF format</p>
                  <a
                    href="/arjan_khatiwada_cv.pdf"
                    download="arjan_khatiwada_cv.pdf"
                    className="btn-solid about-cv-download"
                  >
                    <i className="fas fa-download" aria-hidden="true"></i>
                    Download CV
                  </a>
                </div>
              </div>
            </section>
          </div>

          <section className="about-card about-skills-card">
            <div className="about-skills-grid">
              <SkillColumn title="TECHNICAL_COMPETENCIES" skills={SKILLS_LEFT} />
              <SkillColumn title="SYSTEM LOAD PROFILING" skills={SKILLS_RIGHT} />
            </div>
          </section>

          <section className="about-card about-languages-card">
            <div className="about-section-header">
              <h2 className="about-section-label">LANGUAGES</h2>
              <span className="about-section-rule" aria-hidden="true"></span>
            </div>
            <div className="about-language-row">
              <div className="about-language-segment">
                <span className="about-lang-dot about-lang-dot-active" aria-hidden="true"></span>
                <span className="about-lang-name">Nepali</span>
                <span className="about-lang-level">Native</span>
              </div>
              <div className="about-language-segment">
                <span className="about-lang-dot about-lang-dot-active" aria-hidden="true"></span>
                <span className="about-lang-name">English</span>
                <span className="about-lang-level">Professional</span>
              </div>
              <div className="about-language-segment">
                <span className="about-lang-dot about-lang-dot-active" aria-hidden="true"></span>
                <span className="about-lang-name">Hindi</span>
                <span className="about-lang-level">Conversational</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
