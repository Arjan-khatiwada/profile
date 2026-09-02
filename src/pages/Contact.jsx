import { useState } from 'react';
import SEO from '../components/SEO';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xgvwvzzw';
const CONTACT_EMAIL = 'arjan.khatiwada425@gmail.com';

function buildMailtoLink({ name, email, message }) {
  const subject = encodeURIComponent(`Contact from ${name}`);
  const body = encodeURIComponent(
    `From: ${name}\nReply-To: ${email}\n\n${message}`
  );
  return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new URLSearchParams(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        return;
      }
    } catch {
      // Fall through to mailto fallback below.
    }

    window.location.href = buildMailtoLink(formData);
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with Arjan Khatiwada. Send a message or connect via email, phone, or social networks for full stack development projects and inquiries."
      />
      <div className="container contact-page">
        <div className="container pt-5 px-3 px-md-5">
          <div className="contact-page-inner">
            <div className="contact-intro text-center">
              <div className="eyebrow" style={{ justifyContent: 'center' }}>
                GET IN TOUCH WITH ME
              </div>
              <h1 className="section-heading">Contact Me</h1>
              <p className="contact-intro-text">
                Have a question or want to work together? Send me a message and I'll get back to you soon.
              </p>
            </div>

            <div className="card contact-card">
              <div className="card-body p-4">
                <div className="contact-grid">
                  <section className="contact-form-panel">
                    <div className="contact-section-header">
                      <h2 className="contact-section-label">Send a Message</h2>
                      <span className="contact-section-rule" aria-hidden="true"></span>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label className="contact-field-label" htmlFor="name">
                          Name
                        </label>
                        <input
                          className="form-control"
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Enter identification..."
                          required
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="contact-field-label" htmlFor="email">
                          Email
                        </label>
                        <input
                          className="form-control"
                          id="email"
                          name="email"
                          type="email"
                          placeholder="sys@domain.com"
                          required
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="contact-field-label" htmlFor="message">
                          Message
                        </label>
                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          rows={6}
                          placeholder="Enter transmission data..."
                          required
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>
                      </div>

                      {status === 'success' && (
                        <p className="contact-status contact-status-success">
                          Transmission logged. Channel open — your message has been sent.
                        </p>
                      )}

                      <button
                        type="submit"
                        className="btn btn-primary contact-transmit-btn"
                        disabled={status === 'sending'}
                      >
                        <i className="fas fa-paper-plane" aria-hidden="true"></i>
                        {status === 'sending' ? 'Sending...' : 'Send Message'}
                      </button>
                    </form>
                  </section>

                  <aside className="contact-side-panel">
                    <section className="contact-coordinates-panel">
                      <div className="contact-section-header">
                        <h2 className="contact-section-label">Contact Details</h2>
                        <span className="contact-section-rule" aria-hidden="true"></span>
                      </div>

                      <div className="contact-coordinate">
                        <span className="contact-coordinate-label">Email</span>
                        <a
                          href={`mailto:${CONTACT_EMAIL}`}
                          className="contact-coordinate-value"
                        >
                          {CONTACT_EMAIL}
                        </a>
                      </div>
                      <div className="contact-coordinate">
                        <span className="contact-coordinate-label">Phone</span>
                        <span className="contact-coordinate-value">
                          <a href="tel:9817340169">9817340169</a>
                          <span className="contact-phone-divider" aria-hidden="true">
                            /
                          </span>
                          <a href="tel:9749236498">9749236498</a>
                        </span>
                      </div>
                    </section>

                    <section className="contact-external-panel">
                      <div className="contact-section-header">
                        <h2 className="contact-section-label">Follow Me</h2>
                        <span className="contact-section-rule" aria-hidden="true"></span>
                      </div>
                      <div className="contact-external-icons social-icons">
                        <a
                          href="https://www.facebook.com/arjan.khatiwada.1"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="contact-external-link contact-external-facebook"
                          aria-label="Facebook Profile"
                        >
                          <i className="fab fa-facebook" aria-hidden="true"></i>
                        </a>
                        <a
                          href="https://www.instagram.com/arjan.khatiwada.1/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="contact-external-link contact-external-instagram"
                          aria-label="Instagram Profile"
                        >
                          <i className="fab fa-instagram" aria-hidden="true"></i>
                        </a>
                        <a
                          href="https://www.linkedin.com/in/arjan-khatiwada-24618131b/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="contact-external-link contact-external-linkedin"
                          aria-label="LinkedIn Profile"
                        >
                          <i className="fab fa-linkedin" aria-hidden="true"></i>
                        </a>
                      </div>
                    </section>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

