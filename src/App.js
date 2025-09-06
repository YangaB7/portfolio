import React, { useState, useEffect } from 'react';
import HomePage from './components/pages/Home';  
import AboutPage from './components/pages/About';     
import ProjectsPage from './components/pages/Projects';
import ContactPage from './components/pages/Contact';
import ExperiencePage from './components/pages/Experience';
import BeyondCodePage from './components/pages/BeyondCode'; 
import TrademarkFooter from '../src/components/common/Footer';

const App = () => {
  const [activePage, setActivePage] = useState('home');
  const [navHovered, setNavHovered] = useState(false);
  const [navClicked, setNavClicked] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768 || ('ontouchstart' in window);
      setIsMobile(mobile);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const handleClickOutside = (e) => {
      if (isMobile && navClicked) {
        const navElement = document.getElementById('nav-container');
        if (navElement && !navElement.contains(e.target)) {
          setNavClicked(false);
        }
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobile, navClicked]);

  const handleNavClick = (e) => {
    if (isMobile) {
      e.stopPropagation();
      setNavClicked(!navClicked);
    }
  };

  const handlePageChange = (pageId) => {
    setActivePage(pageId);
    if (isMobile) {
      setNavClicked(false);
    }
  };

  const styles = {
    app: {
      fontFamily: '"Courier Prime", monospace',
      background: '#FAF8F3',
      color: '#2C2C2C',
      minHeight: '100vh',
      fontSize: '16px',
      lineHeight: '1.6',
      position: 'relative'
    },
    navContainer: {
      position: 'fixed',
      top: '30px',
      left: '30px',
      zIndex: 1000,
      width: '60px',
      height: '60px'
    },
    navCircle: {
      width: (navHovered || navClicked) ? '360px' : '120px',
      height: (navHovered || navClicked) ? '360px' : '120px',
      background: '#8B9382',
      borderRadius: '0 0 100% 0',
      position: 'absolute',
      top: '-30px',
      left: '-30px',
      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    navIcon: {
      position: 'absolute',
      top: '25px',
      left: '25px',
      color: '#FAF8F3',
      fontSize: '24px',
      fontWeight: '300',
      transition: 'opacity 0.3s ease',
      opacity: (navHovered || navClicked) ? 0 : 1
    },
    navMenu: {
      position: 'absolute',
      top: '0',
      left: '0',
      opacity: (navHovered || navClicked) ? 1 : 0,
      pointerEvents: (navHovered || navClicked) ? 'all' : 'none',
      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
    },
    navItem: {
      position: 'absolute',
      color: '#FAF8F3',
      background: 'none',
      border: 'none',
      fontSize: '16px',
      transition: 'all 0.3s ease',
      fontFamily: '"Courier Prime", monospace',
      cursor: 'pointer',
      padding: '5px 10px'
    },
    navItemHover: {
      color: '#2C2C2C',
      transform: 'translate(3px, -3px)'
    },
    navItemActive: {
      fontStyle: 'italic',
      textDecoration: 'underline',
      textUnderlineOffset: '4px'
    },
  };

  const NavItem = ({ children, pageId, index }) => {
    const [hovered, setHovered] = useState(false);
    const positions = [
      { top: '70px', left: '35px' },
      { top: '105px', left: '35px' },
      { top: '140px', left: '35px' },
      { top: '175px', left: '35px' },
      { top: '210px', left: '35px' },
      { top: '245px', left: '35px' } 
    ];

    return (
      <button
        style={{
          ...styles.navItem,
          ...positions[index],
          ...(hovered && !isMobile ? styles.navItemHover : {}),
          ...(activePage === pageId ? styles.navItemActive : {})
        }}
        onMouseEnter={() => !isMobile && setHovered(true)}
        onMouseLeave={() => !isMobile && setHovered(false)}
        onClick={() => handlePageChange(pageId)}
      >
        {children}
      </button>
    );
  };

  const renderPage = () => {
    switch(activePage) {
      case 'home': return <HomePage />;
      case 'about': return <AboutPage />;
      case 'projects': return <ProjectsPage />;
      case 'experience': return <ExperiencePage />;
      case 'contact': return <ContactPage />;
      case 'beyondcode': return <BeyondCodePage />;
      default: return <HomePage />;
    }
  };

  return (
    <div style={styles.app}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&display=swap');
          
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            margin: 0;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          
          em {
            font-style: italic;
            color: #6B7366;
          }
        `}
      </style>
      
      {/* Navigation */}
      <div 
        id="nav-container"
        style={styles.navContainer}
        onMouseEnter={() => !isMobile && setNavHovered(true)}
        onMouseLeave={() => !isMobile && setNavHovered(false)}
        onClick={handleNavClick}
      >
        <div style={styles.navCircle}>
          <div style={styles.navIcon}>☰</div>
          <nav style={styles.navMenu}>
            <NavItem pageId="home" index={0}>Home</NavItem>
            <NavItem pageId="about" index={1}>About</NavItem>
            <NavItem pageId="projects" index={2}>Projects</NavItem>
            <NavItem pageId="experience" index={3}>Experience</NavItem>
            <NavItem pageId="contact" index={4}>Contact</NavItem>
            <NavItem pageId="beyondcode" index={5}>Beyond Code</NavItem>  
          </nav>
        </div>
      </div>
      
      {/* Page Content */}
      {renderPage()}
    </div>
  );
};

export default App;