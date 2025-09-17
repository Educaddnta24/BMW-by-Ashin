import React, { useEffect, useRef } from 'react';
import './Gallery.css';

const FadeInSection = ({ children }) => {
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });
    observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div className="fade-in-section" ref={domRef}>
      {children}
    </div>
  );
};

const Gallery = () => {
  const images = [
    {
      src: 'https://www.bmw-evmautokraft.in/sites/default/files/2023-01/DI22_000065091-2.jpg',
      text: 'BMW X5 M60i'
    },
    {
      src: 'https://www.bmw-evmautokraft.in/sites/default/files/2023-01/cosy_1.jpg',
      text: 'BMW X6 M60i'
    },
    {
      src: 'https://www.bmw-evmautokraft.in/sites/default/files/2023-01/MicrosoftTeams-image%20%284%29_0.png',
      text: 'BMW i7 xDrive60'
    },
    {
      src: 'https://www.bmw-evmautokraft.in/sites/default/files/2023-01/DI22_000065510_0.jpg',
      text: 'BMW i5 M60'
    }
  ];

  return (
    <div className="gallery-container">
      {images.map((img, index) => (
        <FadeInSection key={index}>
          <div className="image-card">
            <img src={img.src} alt={img.text} />
            <div className="overlay">
              <p>{img.text}</p>
            </div>
          </div>
        </FadeInSection>
      ))}
    </div>
  );
};

export default Gallery;
