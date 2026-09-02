import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Me' },
  { to: '/experience', label: 'Experience' },
  { to: '/education', label: 'Education' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header>
      <nav aria-label="Main Navigation">
        <ul id="mainbar">
          <li>
            <NavLink to="/" onClick={() => setSidebarOpen(false)}>
              <img src="/images/logo.jpg" alt="Arjan Khatiwada Logo" />
              ARJAN
            </NavLink>
          </li>
          {NAV_LINKS.map((link) => (
            <li id="hide" key={link.to}>
              <NavLink to={link.to} end={link.to === '/'}>
                {link.label}
              </NavLink>
            </li>
          ))}
          <li id="menu">
            <button
              type="button"
              className="bg-transparent border-0 text-light p-0 cursor-pointer"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open navigation menu"
            >
              <i className="fa fa-bars" style={{ fontSize: 20 }} aria-hidden="true"></i>
            </button>
          </li>
        </ul>

        <ul className="sidebar" style={{ display: sidebarOpen ? 'flex' : 'none' }}>
          <li className="sidebar-close-item">
            <button
              type="button"
              className="sidebar-close-btn"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close navigation menu"
            >
              <i className="fas fa-times" aria-hidden="true"></i>
            </button>
          </li>
          {NAV_LINKS.map((link) => (
            <li key={link.to} onClick={() => setSidebarOpen(false)}>
              <NavLink to={link.to} end={link.to === '/'}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="status-bar">
          <span className="status-dot" aria-hidden="true"></span>
          <strong>Available for work</strong>
          <span className="divider">·</span>
          <span>Biratnagar, Nepal</span>
          <span className="divider">·</span>
          <span>GMT+5:45</span>
        </div>
      </nav>
    </header>
  );
}

