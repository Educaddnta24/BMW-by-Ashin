
import React, { useEffect, useRef } from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faLinkedin,
  faXTwitter
} from '@fortawesome/free-brands-svg-icons';
import Gallery from '../Componets/Gallery';

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



const Home = () => {
  return (
    
    
    <div>

       <FadeInSection>
  <section className="hero-banner">
    <div className="hero-content">
      <h1>50 YEARS OF BMW</h1>
      <p>Innovation. Performance. Legacy.</p>
      <button>Check More</button>
    </div>
  </section>
</FadeInSection>

   <section className='home-container'>
      <FadeInSection>
        <section className="section-grey">
          <h1>50 YEARS</h1>
          <button>Discover now</button>
          <p>Find your BMW. Find a new car.</p>
          <button>Search now</button>
          <p>Book a test drive.</p>
          <button>Request a test drive</button>
          <p>Build your own.</p>
          <button>Configure & Price</button>
        </section>
      </FadeInSection>
          <Gallery/>

      <FadeInSection>
        <section className="section">
          <h2>THE NEW</h2>
          <h1>2</h1>
          <p>LEAVE BORING BEHIND.</p>
          <button>Skip Boring</button>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="section-light">
          <img
            src="https://www.apple.com/v/iphone-17-pro/a/images/overview/cameras/lenses/pro_camera_system_v02_statics_endframe__hwtzkm6umyaa_xlarge.jpg"
            alt="BMW X7"
            className="full-img"
          />
          <h2>LUXURY. FAST. FORWARD.</h2>
          <h3>THE BMW 7 RANGE.</h3>
          <button>Discover now</button>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="section">
          <h2>THE ALL-NEW</h2>
          <h1>X3</h1>
          <p>MASTER EVERY MOMENT.</p>
          <button>Discover now</button>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="section-bg2">
          <h1>Explore the new BMW i8</h1>
          <button>Discover</button>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="section-offwhite">
          <h1>iX1 LONG WHEELBASE</h1>
          <p>DOMINATE EVERYDAY. YOUR WAY.</p>
          <button>Know more</button>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="section">
          <h2>BMW Special Offers</h2>
          <p>
            Monthly EMI starting from Rs.38,422*/Month. Check Out similar BMW finance offers available across the BMW range.
          </p>
          <button>Know more</button>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="section-light">
          <img src="https://www.bmw.in/content/dam/bmw/common/images/logo-icons/BMW/BMW_White_Logo.svg.asset.1670245093434.svg" alt="MyBMW Logo" className="logo-small" />
          <p>Stay up to date with the latest news from BMW</p>
          <button>Sign up</button>
        </section>
      </FadeInSection>
      
      <section className="hero-section">
        <h1>HIGHLIGHTS OF THE BMW X1</h1>
        <p>Explore the future of driving.</p>
      </section>
        

      <section className="info-section">
        <h2>Why Choose BMW?</h2>
        <p>Performance, luxury, and innovation.</p>
      </section>





      <FadeInSection>
        <section className="section-bg1">
          <h1>Explore the new BMW i8</h1>
          <button>Discover</button>
        </section>
      </FadeInSection>

      <FadeInSection>
        <footer className="footer">
          <section className="frut">
        
          </section>




          <div className="footer-follow">
            <p>Follow us:</p>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} className="icon facebook" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="icon instagram" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} className="icon youtube" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="icon linkedin" />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faXTwitter} className="icon twitter" />
              </a>
            </div>
          </div>

          <div className="footer-small-text">
            <p>© BMW AG 2025</p>
            <p>Legal Disclaimer / Privacy Policy / Cookie Policy / Contact Us</p>
          </div>
        </footer>
      </FadeInSection>
      </section>
    </div>
  );
};

export default Home;
