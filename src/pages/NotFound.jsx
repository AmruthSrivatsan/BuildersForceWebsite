import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="main-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '4rem', marginBottom: '16px' }}>404</h1>
        <p style={{ fontSize: '1.25rem', marginBottom: '32px' }}>The page you are looking for does not exist.</p>
        <Link to="/" className="btn btn-primary">Return Home</Link>
      </div>
    </main>
  );
}
