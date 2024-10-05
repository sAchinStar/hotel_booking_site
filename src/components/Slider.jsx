import React, { useState, useEffect } from 'react';
import './Slider.css';
import image1 from '../assets/Image1.jpeg';
import image2 from '../assets/Image2.jpeg';
import image3 from '../assets/Image3.jpeg';
import image4 from '../assets/Image4.jpeg';
import image5 from '../assets/Image5.jpeg';
import image6 from '../assets/Image6.jpeg';
import imageDescriptions from '../assets/image-descriptions.json';
import { Stack } from '@mui/material';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [underline, setUnderline] = useState(false);
  const [animate, setAnimate] = useState(false); // State to trigger animation
  const [images, setImages] = useState([
    { id: 1, url: image1, descriptionh: imageDescriptions[0].descriptions.heading, descriptiond: imageDescriptions[0].descriptions.detail },
    { id: 2, url: image2, descriptionh: imageDescriptions[1].descriptions.heading, descriptiond: imageDescriptions[1].descriptions.detail },
    { id: 3, url: image3, descriptionh: imageDescriptions[2].descriptions.heading, descriptiond: imageDescriptions[2].descriptions.detail },
    { id: 4, url: image4, descriptionh: imageDescriptions[3].descriptions.heading, descriptiond: imageDescriptions[3].descriptions.detail },
    { id: 5, url: image5, descriptionh: imageDescriptions[4].descriptions.heading, descriptiond: imageDescriptions[4].descriptions.detail },
    { id: 6, url: image6, descriptionh: imageDescriptions[5].descriptions.heading, descriptiond: imageDescriptions[5].descriptions.detail },
  ]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setAnimate(true); // Trigger animation when the slide changes
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(intervalId);
  }, [images]);

  useEffect(() => {
    const handleScroll = () => {
      const sliderSection = document.getElementById('slider-section');
      const scrollPosition = window.scrollY + window.innerHeight;
      const sectionTop = sliderSection.offsetTop;
      const sectionHeight = sliderSection.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
        setUnderline(true);
      } else {
        setUnderline(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Reset animation state after a short delay
  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => {
        setAnimate(false); // Reset the animation state after the animation duration
      }, 800); // Match this duration with the CSS animation duration

      return () => clearTimeout(timer);
    }
  }, [animate]);

  // Use effect to trigger animation on index change
  useEffect(() => {
    setAnimate(true); // Trigger animation when the index changes
  }, [currentIndex]);

  return (
    <div id="slider-section">
      <div className="slider-container">
        <div className="image-slider">
          {images.map((image, index) => (
            <div key={image.id} className={`image-slide ${currentIndex === index ? 'active' : ''}`}>
              <img src={image.url} alt={image.description} />
            </div>
          ))}
        </div>
        <div className="description-slider">
          {images.map((image, index) => (
            <div key={image.id} className={`description-slide ${currentIndex === index ? 'active' : ''}`}>
              <div className={`description-content ${animate ? 'animate' : ''}`}> {/* Add animation class */}
                <Stack spacing={3}>
                  <h1 className={`silde-head ${underline ? 'underline-animation' : ''}`} style={{ fontWeight: 'lighter'}}>EXPLORE</h1>
                  <h2 style={{ fontWeight: 'bold', color: 'black'}} className='head2'>
                    {image.descriptionh}
                  </h2>
                  <Stack spacing={1}>
                    <p style={{ color: 'rgba(0,0,0,0.6)' }} className='detail'>{image.descriptiond}</p>
                    <button className="book-button" onClick={() => alert("Login First...")}>Book</button>
                  </Stack>
                </Stack>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
