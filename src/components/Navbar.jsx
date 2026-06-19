import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/builders-force-logo-mark.png';
import { NAV_LINKS, GLOBAL } from '../data/content';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setScrolled(currentScrollY > 80);

      if (currentScrollY > lastScrollY.current && currentScrollY > 200) {
        setHidden(true);
        setMenuOpen(false);
      } else {
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'is-scrolled' : ''} ${hidden ? 'is-hidden' : ''}`}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" className="nav-logo-link">
            <img src={logo} alt="Builders Force Logo" className="nav-logo-img" />
            <div className="nav-brand-text brand-text">BUILDERS<span>FORCE</span></div>
          </Link>
          
          <div className="nav-links">
            {NAV_LINKS.map(link => (
              <NavLink 
                key={link.path} 
                to={link.path} 
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="nav-actions" style={{ display: 'none' }}>
            <a href={`mailto:${GLOBAL.email}`} className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.875rem' }}>
              Build with us
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className={`nav-toggle ${menuOpen ? 'is-open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="nav-mobile-menu">
          <div className="nav-mobile-links">
            {NAV_LINKS.map(link => (
              <NavLink 
                key={link.path} 
                to={link.path} 
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
