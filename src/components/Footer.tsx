import React from 'react';

function Footer() {
  return (
    <footer style={{
      background: '#f8f9fa',
      padding: '1rem',
      textAlign: 'center',
      position: 'fixed',
      left: 0,
      bottom: 0,
      width: '100%',
      borderTop: '1px solid #e7e7e7'
    }}>
      © {new Date().getFullYear()} AI Resume Analyzer. All rights reserved.
    </footer>
  );
}

export default Footer;