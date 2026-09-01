export default function Footer() {
  const confirmAction = (action, url) => {
    if (window.confirm(`Are you sure you want to ${action}?`)) {
      window.location.href = url;
    }
  };

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
            <h5 className="text-uppercase">Contact Info</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <div className="d-flex mb-1 pt-1 pb-1">
                  <i
                    className="fa fa-map-marker fa-lg ms-1 me-2 mt-2"
                    style={{ color: 'green', backgroundColor: 'white', height: 18 }}
                  ></i>
                  <span className="text-wrap ms-2" style={{ color: 'var(--text-primary)' }}>
                    Budhiganga-1,puspalalchowk,Biratnagar
                  </span>
                </div>
              </li>
              <li>
                <div className="d-flex mb-1 pt-1 pb-1" style={{ color: 'white' }}>
                  <span>
                    <i
                      className="id-color fa fa-phone fa-lg mx-1"
                      style={{ color: 'var(--accent-blue)' }}
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
            <h5 className="text-uppercase mb-0">Social Network</h5>
            <ul className="list-unstyled">
              <li>
                <div className="social-icons">
                  <i
                    className="fab fa-facebook fa-lg p-2"
                    style={{ cursor: 'pointer', color: '#3b5998' }}
                    onClick={() =>
                      confirmAction('leave this page', 'https://www.facebook.com/arjan.khatiwada.1')
                    }
                  ></i>
                  <i
                    className="fab fa-instagram fa-lg p-2"
                    style={{ cursor: 'pointer', color: '#ac2bac' }}
                    onClick={() =>
                      confirmAction(
                        'leave this page',
                        'https://www.instagram.com/arjan.khatiwada.1/'
                      )
                    }
                  ></i>
                  <i
                    className="fab fa-linkedin fa-lg p-2"
                    style={{ cursor: 'pointer', color: '#0077b5' }}
                    onClick={() =>
                      confirmAction(
                        'leave this page',
                        'https://www.linkedin.com/in/arjan-khatiwada-24618131b/'
                      )
                    }
                  ></i>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className="text-white" href="#!" onClick={(e) => e.preventDefault()}>
          Arjan Khatiwada
        </a>
      </div>
    </footer>
  );
}
