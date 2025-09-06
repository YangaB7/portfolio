import React from 'react';
import TrademarkFooter from '../common/Footer';

const BeyondCodePage = () => {
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
    section: {
      marginBottom: '40px'
    },
    sectionTitle: {
      fontSize: '24px',
      color: '#6B7366',
      marginBottom: '15px',
      fontWeight: '700'
    },
    highlight: {
      background: 'linear-gradient(180deg, transparent 60%, rgba(139, 147, 130, 0.2) 60%)',
      padding: '2px 4px'
    },
    list: {
      lineHeight: '1.8',
      fontSize: '16px'
    }
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.h1}>Beyond Code</h1>
      <p style={styles.subtitle}>
        Life outside the terminal <span style={styles.flourish}>☼</span>
      </p>
      
      <div style={styles.section}>
        <p style={{ fontSize: '18px', marginBottom: '30px' }}>
          While I enjoy programming, I believe that 
          <span style={styles.highlight}> diverse experiences</span> make better engineers. 
          Here's what shapes my perspective beyond the screen.
        </p>
      </div>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>
          Interests <span style={styles.flourish}>✦</span>
        </h3>
        <div style={styles.list}>
          <p><em>Cooking</em> — Fun & experimental destresser and always a rewarding experience</p>
          <p><em>Reading</em> — Philosphy, horror, sci-fi</p>
          <p><em>Investing</em> — Recently started, don't know what I'm doing just yet</p>
          <p><em>Soccer</em> — Pickup warrior, still chasing glimpses of the glory days</p>
        </div>
      </div>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>
          Family <span style={styles.flourish}>→</span>
        </h3>
        <p>
           Even though I'm living far from home, my <em>family</em> continues to be one 
            of the most important parts of my life. I make it a priority to stay <em>connected</em>, 
            whether it's through late-night calls, sharing small updates, or celebrating milestones 
            from afar. They remind me of where I come from and keep me <em>grounded</em>, no matter 
            where I am.
        </p>
      </div>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>
          Favorite Resources <span style={styles.flourish}>※</span>
        </h3>
        <div style={styles.list}>
          <p><strong>Creators:</strong> Mumbo Jumbo, Kurzgesagt, Tommy G</p>
          <p><strong>Books:</strong> "Why Fish Don't Exist", "Blood Meridian", "The Long Walk"</p>
          <p><strong>Movies:</strong> Nope, Parasite, The Dark Knight</p>
          <p><strong>Video Games:</strong> Elden Ring, TFT, Sekiro, Bloodborne</p>
        </div>
      </div>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>
          My Recent Jams <span style={styles.flourish}>◆</span>
        </h3>
        <p>
          • I Want You // Marvin Gaye<br />
          • If // Brent Faiyaz<br />
          • Earrings // Malcom Todd<br />
          • Wanna Know // Dave & Drake<br />
          • New Person, Same Old Mistakes // Tame Impala<br />
        </p>
      </div>
    <TrademarkFooter/>
    </div>
  );
};

export default BeyondCodePage;