export default function Footer() {
  return (
    <footer
      className="bg-body-tertiary text-center text-lg-start position-relative fixed-bottom"
      style={{
        color: 'var(--text-primary)',
        backgroundColor: 'var(--secondary-bg)',
        borderTop: '1px solid var(--border-color)',
      }}
    >
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
            <h2 className="h5 text-uppercase">Contact Info</h2>
            <ul className="list-unstyled mb-0">
              <li>
                <div className="d-flex mb-1 pt-1 pb-1">
                  <i
                    className="fa fa-map-marker fa-lg ms-1 me-2 mt-2"
                    style={{ color: 'green', backgroundColor: 'white', height: 18 }}
                    aria-hidden="true"
                  ></i>
                  <span className="text-wrap ms-2" style={{ color: 'var(--text-primary)' }}>
                    Budhiganga-1, Puspalalchowk, Biratnagar
                  </span>
                </div>
              </li>
              <li>
                <div className="d-flex mb-1 pt-1 pb-1" style={{ color: 'white' }}>
                  <span>
                    <i
                      className="id-color fa fa-phone fa-lg mx-1"
                      style={{ color: 'var(--accent-blue)' }}
                      aria-hidden="true"
                    ></i>
                    <a href="tel:9817340169">9817340169</a> /{' '}
                    <a href="tel:9749236498">9749236498</a>
                  </span>
                </div>
              </li>
              <li>
                <div className="d-flex mb-1 pt-1 pb-1">
                  <span>
                    <i
                      className="id-color fab fa-google fa-lg mx-1"
                      style={{ color: 'var(--accent-green)' }}
                      aria-hidden="true"
                    ></i>
                    <a href="mailto:arjan.khatiwada425@gmail.com">
                      arjan.khatiwada425@gmail.com
                    </a>
                  </span>
                </div>
              </li>
            </ul>
          </div>

          <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
            <h2 className="h5 text-uppercase mb-0">Social Network</h2>
            <div className="social-icons mt-3">
              <a
                href="https://www.facebook.com/arjan.khatiwada.1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Profile"
                className="text-decoration-none text-light p-2"
              >
                <i className="fab fa-facebook fa-lg" style={{ color: '#3b5998' }} aria-hidden="true"></i>
              </a>
              <a
                href="https://www.instagram.com/arjan.khatiwada.1/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="text-decoration-none text-light p-2"
              >
                <i className="fab fa-instagram fa-lg" style={{ color: '#ac2bac' }} aria-hidden="true"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/arjan-khatiwada-24618131b/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="text-decoration-none text-light p-2"
              >
                <i className="fab fa-linkedin fa-lg" style={{ color: '#0077b5' }} aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <span className="text-white fw-bold">Arjan Khatiwada</span>
      </div>
    </footer>
  );
}

