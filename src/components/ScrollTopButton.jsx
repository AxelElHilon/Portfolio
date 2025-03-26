import React, { useState, useEffect } from 'react';
import './ScrollTopButton.css';

const ScrollTopButton = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    showScrollTop && (
      <button className="scrollTopBtn" onClick={scrollToTop}>
        ↑
      </button>
    )
  );
};

export default ScrollTopButton;
