// src/pages/AboutUs.jsx

import React, { useState } from 'react'; // Import useState
import './Aboutus.css';  // CSS file for styling

import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.jpg';
import pic3 from '../assets/pic3.jpg';

const AboutUs = () => {
  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  const [showMore3, setShowMore3] = useState(false);
  
  // State for the modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  // Function to open the modal
  const openModal = (image) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage('');
  };

  const generateDescription = (descriptionArray, showMore, setShowMore) => {
    const shortDescription = descriptionArray.slice(0, 3).map((item, index) => <li key={index}>{item}</li>);
    
    return (
      <>
        <ul>
          {showMore ? descriptionArray.map((item, index) => <li key={index}>{item}</li>) : shortDescription}
        </ul>
        {descriptionArray.length > 3 && (
          <button 
            onClick={() => setShowMore(!showMore)}
            style={{ background: 'linear-gradient(to left, #c57c7c, #0057bb)', color: 'white', border: 'none', padding: '10px', cursor: 'pointer' }}
          >
            {showMore ? "Read Less" : "Read More"}
          </button>
        )}
      </>
    );
  };

  return (
    <section className="about-us">
      <div className="about-us-container">
        <h1>About Us</h1>
        <p>
          Welcome to our Circuit House Room Booking website! We are dedicated to providing an easy and seamless room booking experience. Our gallery showcases various aspects of the service and facilities available at the Circuit House.
        </p>
        <div className="photo-gallery">
          <h2>Photo Gallery With Description</h2>
          <div className="photos">
            <div className="photo-item">
              <div className="photo-wrapper">
                <img src={pic1} alt="hall" onClick={() => openModal(pic1)} />
                <div className="photo-description">
                  {generateDescription(
                    [
                      "The circuit hotel hall is a spacious, elegantly designed venue ideal for various events, from conferences to weddings.",
                      "High ceilings adorned with modern chandeliers create a warm ambiance, while large windows provide natural light and beautiful views.",
                      "The hall's flexible layout accommodates different seating arrangements, complemented by state-of-the-art audio-visual equipment.",
                      "A well-equipped kitchen allows for diverse catering options, ensuring that every event is memorable.",
                      "Attentive staff cater to guests’ needs, making the hall a preferred choice for both professional and personal gatherings.",
                      "With its blend of functionality and elegance, it’s perfect for any occasion."
                    ],
                    showMore1,
                    setShowMore1
                  )}
                </div>
              </div>
            </div>
            <div className="photo-item">
              <div className="photo-wrapper">
                <img src={pic2} alt="Spacious lounge area perfect for relaxation and meetings." onClick={() => openModal(pic2)} />
                <div className="photo-description">
                  {generateDescription(
                    [
                      "The spacious lounge area is designed for ultimate comfort, featuring plush seating and calming decor that invites relaxation.",
                      "It serves as an ideal setting for informal meetings, allowing for productive discussions in a serene environment.",
                      "Whether enjoying a quiet moment alone or collaborating with colleagues, this lounge area enhances the overall experience."
                    ],
                    showMore2,
                    setShowMore2
                  )}
                </div>
              </div>
            </div>
            <div className="photo-item">
              <div className="photo-wrapper">
                <img src={pic3} alt="Fully equipped dining hall offering a variety of meals." onClick={() => openModal(pic3)} />
                <div className="photo-description">
                  {generateDescription(
                    [
                      "Convenient Location: Often situated in key areas for easy access.",
                      "Comfortable Accommodations: Well-furnished rooms with essential amenities.",
                      "Meeting Facilities: Equipped spaces for professional gatherings.",
                      "Affordability: Economical lodging options compared to hotels.",
                      "Local Cuisine: On-site dining featuring authentic regional dishes.",
                      "Quiet Environment: Peaceful atmosphere away from city noise.",
                      "Personalized Service: Attentive staff prioritizing guest needs.",
                      "Cultural Experience: Insights into local customs and traditions.",
                      "Recreational Facilities: Areas for relaxation and socializing.",
                      "Government Affiliation: Trusted choice for officials and dignitaries."
                    ],
                    showMore3,
                    setShowMore3
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal for Larger Image View */}
        {isModalOpen && (
          <div className="modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close" onClick={closeModal}>&times;</span>
              <img src={currentImage} alt="Enlarged view" style={{ width: '100%', height: 'auto' }} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutUs;
