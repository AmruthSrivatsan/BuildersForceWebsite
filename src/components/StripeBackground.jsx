import React, { useState, useEffect } from 'react';
import './StripeBackground.css';

const THEMES = {
  'Pre-dawn': {
    c1: '#685D8B', c2: '#4F4769', c3: '#796E9C', c4: '#565073'
  },
  'Sunrise': {
    c1: '#D98A77', c2: '#B5756C', c3: '#C48E85', c4: '#B08278'
  },
  'Daytime': {
    c1: '#598EAE', c2: '#6D9DBA', c3: '#5184A1', c4: '#6294B0'
  },
  'Dusk': {
    c1: '#88698C', c2: '#735A75', c3: '#957A99', c4: '#7A627C'
  },
  'Sunset': {
    c1: '#CF7B6A', c2: '#B86B5A', c3: '#D68676', c4: '#A65F4F'
  },
  'Night': {
    c1: '#3A4B59', c2: '#445663', c3: '#2F3E4A', c4: '#3B4D5C'
  }
};

const ICONS = {
  'Pre-dawn': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>,
  'Sunrise': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path></svg>,
  'Daytime': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"></circle><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path></svg>,
  'Dusk': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>,
  'Sunset': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path><path d="M12 17a5 5 0 0 0-5-5H2v2h5a3 3 0 0 1 3 3v5h2v-5Z"></path></svg>,
  'Night': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
};

export default function StripeBackground({ children }) {
  const [activeTheme, setActiveTheme] = useState('Night');
  const [isOpen, setIsOpen] = useState(false);
  const [prevTheme, setPrevTheme] = useState('Night');
  const [fade, setFade] = useState(false);

  const handleThemeSelect = (theme) => {
    if (theme === activeTheme) return;
    setPrevTheme(activeTheme);
    setActiveTheme(theme);
    setFade(true);
    setIsOpen(false);
    setTimeout(() => setFade(false), 800); // fade duration
  };

  return (
    <div className="stripe-container">
      {/* Background layer 1 (Previous) */}
      <div 
        className="stripe-bg" 
        style={{
          '--c1': THEMES[prevTheme].c1,
          '--c2': THEMES[prevTheme].c2,
          '--c3': THEMES[prevTheme].c3,
          '--c4': THEMES[prevTheme].c4,
          opacity: fade ? 0 : 1,
          transition: 'opacity 0.8s ease-in-out'
        }}
      ></div>

      {/* Background layer 2 (Active) */}
      <div 
        className="stripe-bg active-bg" 
        style={{
          '--c1': THEMES[activeTheme].c1,
          '--c2': THEMES[activeTheme].c2,
          '--c3': THEMES[activeTheme].c3,
          '--c4': THEMES[activeTheme].c4,
          opacity: fade ? 1 : 0,
          transition: 'opacity 0.8s ease-in-out'
        }}
      ></div>

      {/* Particle Effect Overlay */}
      <div className="stripe-particles"></div>

      {/* Content */}
      <div className="stripe-content">
        {typeof children === 'function' ? children(
          <div className="stripe-dropdown-container" style={{ position: 'relative', top: 'auto', right: 'auto', zIndex: 50, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <button className="stripe-dropdown-btn" style={{ width: '80px', height: '80px', borderRadius: '16px' }} onClick={() => setIsOpen(!isOpen)}>
              {React.cloneElement(ICONS[activeTheme], { style: { width: '40px', height: '40px' } })}
            </button>
            {isOpen && (
              <div className="stripe-dropdown-menu" style={{ top: '96px', right: 0 }}>
                {Object.keys(THEMES).map((theme) => (
                  <button 
                    key={theme} 
                    className={`stripe-dropdown-item ${theme === activeTheme ? 'active' : ''}`}
                    onClick={() => handleThemeSelect(theme)}
                  >
                    <span className="icon">{ICONS[theme]}</span>
                    {theme}
                  </button>
                ))}
              </div>
            )}
          </div>
        ) : children}
      </div>

      {/* Time of Day Dropdown (Fallback if not using render prop) */}
      {typeof children !== 'function' && (
        <div className="stripe-dropdown-container">
          <button className="stripe-dropdown-btn" onClick={() => setIsOpen(!isOpen)}>
            {ICONS[activeTheme]}
          </button>
          {isOpen && (
            <div className="stripe-dropdown-menu">
              {Object.keys(THEMES).map((theme) => (
                <button 
                  key={theme} 
                  className={`stripe-dropdown-item ${theme === activeTheme ? 'active' : ''}`}
                  onClick={() => handleThemeSelect(theme)}
                >
                  <span className="icon">{ICONS[theme]}</span>
                  {theme}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
