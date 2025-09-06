const HomePage = () => {
  // Define styles specific to Home page
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
    divider: {
      width: '60px',
      height: '2px',
      background: '#A5B199',
      margin: '40px 0',
      borderRadius: '2px'
    },
    highlight: {
      background: 'linear-gradient(180deg, transparent 60%, rgba(139, 147, 130, 0.2) 60%)',
      padding: '2px 4px'
    }
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.h1}>Yanga Booker</h1>
      <p style={styles.subtitle}>
        CS & Psychology <span style={styles.flourish}>✦</span> Builder
      </p>
      
      <div style={styles.divider}></div>
      
      <p style={{ fontSize: '20px', lineHeight: '1.8', marginBottom: '30px' }}>
        Hi! I'm a Freshman at <em>Yale University</em>, exploring how humans and technology shape each other through the intersection of{' '}
        <span style={styles.highlight}>computer science</span> and psychology. Some of my interests include <em>Machine Learning</em>, Computer Vision, and <em>Software Engineering</em>.
      </p>
      
      <p style={{ fontSize: '18px', marginTop: '40px' }}>
        Currently building <span style={styles.flourish}>→</span> mobile apps, web applications,
        and everything in between <span style={styles.flourish}>※</span>
      </p>
    </div>
  );
};

export default HomePage;