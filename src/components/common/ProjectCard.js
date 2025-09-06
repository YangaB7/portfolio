import React, { useState } from 'react'; 
  const ProjectCard = ({ title, tech, description, link }) => {
    const [hovered, setHovered] = useState(false);

    const styles = {
        project: {
            background: 'white',
            borderRadius: '20px',
            padding: '35px',
            marginBottom: '30px',
            transition: 'all 0.3s ease',
            border: '1px solid transparent',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
        },
            projectHover: {
            transform: 'translateY(-3px)',
            borderColor: '#A5B199',
            boxShadow: '0 10px 30px rgba(139, 147, 130, 0.15)'
        }
    };
    
    return (
      <div
        style={{
          ...styles.project,
          ...(hovered ? styles.projectHover : {})
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '15px' }}>
          <h3 style={{ fontSize: '22px', margin: 0 }}>{title}</h3>
          <span style={{ fontSize: '14px', color: '#8B9382' }}>{tech}</span>
        </div>
        <p style={{ marginBottom: '15px', lineHeight: '1.7' }}>{description}</p>
        <a href={link} style={{ color: '#6B7366', fontStyle: 'italic', textDecoration: 'none', fontSize: '15px' }}>
          View project <span style={{ display: 'inline-block', transition: 'transform 0.3s ease' }}>→</span>
        </a>
      </div>
    );
};

export default ProjectCard;