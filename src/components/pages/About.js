import React from 'react';

const AboutPage = () => {
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
    flourish: {
      display: 'inline-block',
      margin: '0 10px',
      color: '#8B9382',
      fontSize: '18px'
    },
    highlight: {
      background: 'linear-gradient(180deg, transparent 60%, rgba(139, 147, 130, 0.2) 60%)',
      padding: '2px 4px'
    },
    skillsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '30px',
      marginTop: '30px'
    }
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.h1}>About</h1>
      
      <p style={{ fontSize: '20px', marginBottom: '30px', fontStyle: 'italic' }}>
        The Name (Yanga) <span style={styles.flourish}>◆</span>
      </p>
      
      <p style={{ marginBottom: '20px' }}>
        My name might be the first time you’ve heard it. If you didn't know, I was named after{' '}
        <span style={styles.highlight}>Gaspar Yanga</span> a remarkable person who escaped slavery after being shipped to Mexico.
        Leveraging his creativity, courage, and leadership, he created a town in the mountains of Veracruz where
        escaped slaves could live freely. Yanga is considered one of the first freedom fighters in the Americas. 
        A tough name to live up to...
      </p>
      
      <p style={{ marginBottom: '20px' }}>
        But also inspiring. Reflecting my mixed heritage, I try to embody <em>Gaspar</em> in his virtues
        and skills every day. In this day and age I seek to do that by leveraging technology to create a
        more equitable world where tools that simplify life are available to <em>anyone</em> with{' '} a
        access to a device.
      </p>

      <p style={{ marginBottom: '40px' }}>
        I am a fully self taught developer. I started learning to code in high school through online resources like 
        youtube tutorials and mini projects. I later took AP Computer Science A in my junior year which gave me my first
        formal exposure to programming. Because of my self-taught background, some of these tools still feel foreign to me at times
        and I often have to look up syntax or documentation. But I embrace this as part of my learning process and
        enjoy the challenge of figuring things out on my own. It is the perseverance and grit in Gaspar that I try to channel
        when I hit roadblocks in my coding journey.
      </p>
      
      <h2 style={{ fontSize: '32px', color: '#6B7366', margin: '40px 0 20px' }}>
        Some Skills I've Picked Up<span style={styles.flourish}>※</span>
      </h2>
      
      <div style={styles.skillsGrid}>
        <div>
          <h4 style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', color: '#6B7366', marginBottom: '10px' }}>
            LANGUAGES
          </h4>
          <div style={{ fontSize: '16px', lineHeight: '1.8' }}>
            Python<br />
            JavaScript<br />
            Java<br />
          </div>
        </div>
        <div>
          <h4 style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', color: '#6B7366', marginBottom: '10px' }}>
            ML/AI
          </h4>
          <div style={{ fontSize: '16px', lineHeight: '1.8' }}>
            Jupyter<br />
            Scikit-learn<br />
            NumPy
          </div>
        </div>
        <div>
          <h4 style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', color: '#6B7366', marginBottom: '10px' }}>
            WEB
          </h4>
          <div style={{ fontSize: '16px', lineHeight: '1.8' }}>
            React<br />
            HTML/CSS<br />
            Supabase
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;