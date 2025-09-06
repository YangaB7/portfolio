import React, { useState, useEffect } from 'react';
import Image from '../../media/portfolio.jpg';
import TrademarkFooter from '../common/Footer';

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const styles = {
    page: {
      minHeight: '100vh',
      padding: isMobile ? '80px 20px 40px' : '100px 60px 60px',
      maxWidth: '900px',
      margin: '0 auto',
      animation: 'fadeIn 0.6s ease'
    },
    heroSection: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '40px',
      marginBottom: '40px',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: isMobile ? 'center' : 'flex-start',
    },
    contentSection: {
      flex: '1',
      minWidth: '0',
      textAlign: isMobile ? 'center' : 'left',
    },
    imageSection: {
      flexShrink: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '15px',
      order: isMobile ? -1 : 0,
    },
    profileImage: {
      width: isMobile ? '150px' : '180px',
      height: isMobile ? '150px' : '180px',
      borderRadius: '50%',
      objectFit: 'cover',
      border: '3px solid #A5B199',
      boxShadow: '0 8px 24px rgba(139, 147, 130, 0.15)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      cursor: 'pointer'
    },
    profileImageHover: {
      transform: 'scale(1.05)',
      boxShadow: '0 12px 32px rgba(139, 147, 130, 0.25)'
    },
    imageCaption: {
      fontSize: '14px',
      color: '#8B9382',
      fontStyle: 'italic',
      textAlign: 'center',
      maxWidth: '160px'
    },
    h1: {
      fontSize: isMobile ? '36px' : '48px',
      fontWeight: '700',
      marginBottom: '20px',
      letterSpacing: '-1px',
      fontFamily: '"Courier Prime", monospace'
    },
    subtitle: {
      fontSize: isMobile ? '18px' : '20px',
      color: '#8B9382',
      marginBottom: '30px',
      fontStyle: 'italic'
    },
    flourish: {
      display: 'inline-block',
      margin: '0 10px',
      color: '#8B9382',
      fontSize: '18px'
    },
    divider: {
      width: '60px',
      height: '2px',
      background: '#A5B199',
      margin: isMobile ? '20px auto 30px' : '30px 0 40px 0',
      borderRadius: '2px'
    },
    highlight: {
      background: 'linear-gradient(180deg, transparent 60%, rgba(139, 147, 130, 0.2) 60%)',
      padding: '2px 4px'
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.heroSection}>
        <div style={styles.contentSection}>
          <h1 style={styles.h1}>Yanga Booker</h1>
          <p style={styles.subtitle}>
            CS & Psychology <span style={styles.flourish}>✦</span> Builder
          </p>
          <div style={styles.divider}></div>
        </div>
        
        <div style={styles.imageSection}>
          <img
            src={Image}
            alt={"Yanga Booker"}
            style={styles.profileImage}
            onMouseEnter={(e) => {
              Object.assign(e.target.style, styles.profileImageHover);
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = '0 8px 24px rgba(139, 147, 130, 0.15)';
            }}
          />
          <p style={styles.imageCaption}>
            Los Angeles, CA <span style={styles.flourish}>◆</span>
          </p>
        </div>
      </div>
      
      <p style={{ fontSize: isMobile ? '18px' : '20px', lineHeight: '1.8', marginBottom: '30px' }}>
        Hi! I'm a Freshman at <em>Yale University</em>, exploring how humans and technology shape each other through the intersection of{' '}
        <span style={styles.highlight}>computer science</span> and psychology. Some of my interests include <em>Machine Learning</em>, Computer Vision, and <em>Software Engineering</em>.
      </p>
      
      <p style={{ fontSize: isMobile ? '16px' : '18px', marginTop: '40px', textAlign: isMobile ? 'center' : 'left' }}>
        Currently building <span style={styles.flourish}>→</span> mobile apps, web applications,
        and everything in between <span style={styles.flourish}>※</span>
      </p>
      <TrademarkFooter />
    </div>
  );
};

export default HomePage;