import React from 'react';

const ContactPage = () => {
  const styles = {
    page: {
      minHeight: '100vh',
      padding: '100px 60px 60px',
      maxWidth: '900px',
      margin: '0 auto',
      animation: 'fadeIn 0.6s ease'
    },
    h1: {
      fontSize: '48px',
      fontWeight: '700',
      marginBottom: '30px',
      letterSpacing: '-1px',
      fontFamily: '"Courier Prime", monospace'
    },
    subtitle: {
      fontSize: '20px',
      color: '#8B9382',
      marginBottom: '40px',
      fontStyle: 'italic'
    },
    flourish: {
      display: 'inline-block',
      margin: '0 10px',
      color: '#8B9382',
      fontSize: '18px'
    },
    contactLink: {
      color: '#2C2C2C',
      textDecoration: 'none',
      fontSize: '18px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      marginBottom: '20px',
      transition: 'color 0.3s ease'
    },
    divider: {
      width: '60px',
      height: '2px',
      background: '#A5B199',
      margin: '40px 0',
      borderRadius: '2px'
    }
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.h1}>Contact</h1>
      <p style={styles.subtitle}>
        Let's connect <span style={styles.flourish}>✉</span>
      </p>
      
      <p style={{ fontSize: '20px', marginBottom: '40px' }}>
        I'm always interested in discussing <em>machine learning</em>,{' '}
        <em>software engineering</em>, <em>fromsoft games</em> or potential collaboration opportunities.
      </p>
      
      <div>
        <a href="mailto:ysb4@yale.edu" style={styles.contactLink}>
          Email <span>→</span> ysb4@yale.edu
        </a>
        <a href="https://www.linkedin.com/in/yanga-booker" style={styles.contactLink}>
          LinkedIn <span>→</span> /in/yanga-booker
        </a>
        <a href="https://github.com/YangaB7" style={styles.contactLink}>
          GitHub <span>→</span> @YangaB7
        </a>
        <a href="#" style={styles.contactLink}>
          Resume <span>→</span> Download PDF
        </a>
      </div>
      
      <div style={{ ...styles.divider, marginTop: '60px' }}></div>
      
      <p style={{ fontSize: '14px', color: '#8B9382' }}>
        <span style={styles.flourish}>※</span> Built with care, 2024
      </p>
    </div>
  );
};

export default ContactPage;