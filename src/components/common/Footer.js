import React, { useState, useEffect } from 'react';

const TrademarkFooter = () => {
  const [hovered, setHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  const footerVariations = [
    { content: (<><span style={{ fontWeight: '700', fontSize: '16px' }}>YB</span><span>※</span><span>2025</span></>) },
    { content: (<><span>Yanga Booker</span><span>•</span><span>2025</span></>) },
    { content: (<><span style={{ fontWeight: '700', fontSize: '16px' }}>YB</span><span>◆</span><span>2025</span></>) },
    { content: (<><span>Built by</span><span style={{ fontWeight: '700' }}>YB</span><span>※</span><span>2025</span></>) },
    { content: (<><span style={{ fontWeight: '700', fontSize: '16px' }}>YB</span><span>•</span><span>MMXXV</span></>) },
    { content: (<><span>※</span><span style={{ fontWeight: '600' }}>Yanga Booker</span><span>※</span></>) },
    { content: (<><span style={{ fontWeight: '700', fontSize: '16px' }}>YB</span><span>→</span><span>2025</span></>) },
    { content: (<><span style={{ fontWeight: '700', fontSize: '16px' }}>Yanga</span><span>♣♧</span><span>2025</span></>) },
  ];

  const baseStyles = {
    footer: {
      marginTop: '40px',
      paddingTop: '40px',
      borderTop: '1px solid rgba(139, 147, 130, 0.2)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      position: 'relative',
      height: '30px',
      width: '200px', // give it a fixed width so centering is predictable
      overflow: 'hidden',
    },
    trademark: {
      fontSize: '14px',
      color: '#8B9382',
      fontFamily: '"Courier Prime", monospace',
      transition: 'all 0.3s ease',
      cursor: 'default',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: hovered
        ? 'translate(-50%, -50%) translateY(-2px)'
        : 'translate(-50%, -50%)',
      whiteSpace: 'nowrap',
    },
    sliding: { animation: 'slideOut 0.4s ease-in-out' },
    entering: { animation: 'slideIn 0.4s ease-in-out' }
  };

  useEffect(() => {
    if (hovered) return;

    const interval = setInterval(() => {
      setIsSliding(true);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % footerVariations.length);
        setIsSliding(false);
      }, 200); 
    }, 3000);

    return () => clearInterval(interval);
  }, [hovered, footerVariations.length]);

  return (
    <>
      <style>
        {`
          @keyframes slideOut {
            0% { transform: translate(-50%, -50%) translateX(0); opacity: 1; }
            100% { transform: translate(-50%, -50%) translateX(-50%); opacity: 0; }
          }

          @keyframes slideIn {
            0% { transform: translate(-50%, -50%) translateX(50%); opacity: 0; }
            100% { transform: translate(-50%, -50%) translateX(0); opacity: 1; }
          }
        `}
      </style>

      <footer style={baseStyles.footer}>
        <div
          style={baseStyles.container}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div
            style={{
              ...baseStyles.trademark,
              ...(isSliding ? baseStyles.sliding : baseStyles.entering),
            }}
          >
            {footerVariations[currentIndex].content}
          </div>
        </div>
      </footer>
    </>
  );
};

export default TrademarkFooter;
