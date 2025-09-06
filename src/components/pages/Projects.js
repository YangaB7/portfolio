import React, { useState } from 'react';
import ProjectCard from '../common/ProjectCard';

// ProjectCard component - could be moved to its own file later

const ProjectsPage = () => {
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
    }
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.h1}>Projects</h1>
      <p style={styles.subtitle}>
        Selected works <span style={styles.flourish}>✦</span> 2024-2025
      </p>
      
      <ProjectCard
        title="KYMY"
        tech="React Native • Tailwind • Expo"
        description="A mobile app designed to aid senior citizens in strengthening their cognitive abilities through engaging brain exercises. Features a user-friendly interface with customizable difficulty levels and gamified progress tracking. Won 3rd place in Congressional App Challenge 2024."
        link="#"
      />
      
      <ProjectCard
        title="YExchange (In Development)"
        tech="React • Supabase • JavaScript"
        description="Building a web application to facilitate the exchange of skills and languages among Yale students, promoting expansion of knowledge and community engagement on campus."
        link="#"
      />
      
      <ProjectCard
        title="Wander (In Development)"
        tech="React Native • Tailwind • Expo"
        description="Developing a mobile app to encourage users to take walks, find walking routes based on desired distance, duration, and scenery type, promoting mental health in the process."
        link="#"
      />
    </div>
  );
};

export default ProjectsPage;