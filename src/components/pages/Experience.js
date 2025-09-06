import React from 'react';

const ExperiencePage = () => {
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
    experienceItem: {
      marginBottom: '40px',
      paddingLeft: '30px',
      borderLeft: '2px solid #A5B199'
    }
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.h1}>Experience</h1>
      <p style={styles.subtitle}>
        Professional journey <span style={styles.flourish}>◈</span>
      </p>
      
      <div style={styles.experienceItem}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '10px' }}>
          <h3 style={{ fontSize: '22px', margin: 0 }}>IT Intern</h3>
          <span style={{ fontSize: '15px', color: '#8B9382', fontStyle: 'italic' }}>Spring 2024</span>
        </div>
        <p style={{ fontStyle: 'italic', marginBottom: '10px', color: '#6B7366' }}>
          Culver City City Hall <span style={styles.flourish}>•</span> In-Person
        </p>
        <p>
          Assisted with day-to-day IT operations, including <em>troubleshooting hardware and software issues</em> for staff. 
          Supported network maintenance and system updates to ensure smooth operations across departments. 
          Documented technical processes and provided user support to improve <em>technology accessibility</em> for employees.
        </p>
      </div>
      
      <div style={styles.experienceItem}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '10px' }}>
          <h3 style={{ fontSize: '22px', margin: 0 }}>Math Instructor</h3>
          <span style={{ fontSize: '15px', color: '#8B9382', fontStyle: 'italic' }}>Fall 2023 – Spring 2025</span>
        </div>
        <p style={{ fontStyle: 'italic', marginBottom: '10px', color: '#6B7366' }}>
          Mathnasium <span style={styles.flourish}>•</span> In-Person
        </p>
        <p>
          Taught math concepts to students ranging from elementary through high school levels in a small-group setting. 
          Adapted teaching strategies to fit individual learning styles, resulting in improved student confidence and test performance. 
        </p>
      </div>
      
      {/* <div style={styles.experienceItem}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '10px' }}>
          <h3 style={{ fontSize: '22px', margin: 0 }}>Full Stack Developer</h3>
          <span style={{ fontSize: '15px', color: '#8B9382', fontStyle: 'italic' }}>Spring 2024</span>
        </div>
        <p style={{ fontStyle: 'italic', marginBottom: '10px', color: '#6B7366' }}>
          Startup Name <span style={styles.flourish}>•</span> Part-time
        </p>
        <p>
          blah blah blah
        </p>
      </div> */}
    </div>
  );
};

export default ExperiencePage;