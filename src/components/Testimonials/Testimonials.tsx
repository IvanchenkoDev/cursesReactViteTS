import "./Testimonials.scss"
import React, { useState } from 'react';
import bPrev from '../../images/ButtonPrev.svg';
import bNext from '../../images/ButtonNext.svg';
import staffPhfoto1 from '../../images/staffPhoto1.jpg';
import staffPhfoto2 from '../../images/staffPhoto2.jpg';
import star from '../../images/Star.svg';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = 4;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - 1 : prevIndex - 1
    );
  };

  return (
    <div className="testimonials">
      <h2 className="testimonials__title">Testimonials</h2>

      <div className="testimonials__wrapper">
        <div className="testimonials__container" id="testimonial-cards">
          <div className="testimonials__item">
            <img className="testimonials__image" src={staffPhfoto1} alt="User 1" />
            <div className="testimonials__info">
              <h3 className="testimonials__name">Name</h3>
              <h4 className="testimonials__role">Role Hear</h4>
              <div className="testimonials__stars">
                <img className="testimonials__star" src={star} alt="star" />
                <img className="testimonials__star" src={star} alt="star" />
                <img className="testimonials__star" src={star} alt="star" />
                <img className="testimonials__star" src={star} alt="star" />
                <img className="testimonials__star" src={star} alt="star" />
                <img className="testimonials__star" src={star} alt="star" />
              </div>
              <p className="testimonials__text">Lorem ipsum dolor sit amet consectetur. Sed commodo lorem sit nec ut. Habitant mattis in vitae sagittis maecenas sed. Sed sit posuere sed sit rhoncus. Nunc leo eu volutpat laoreet est arcu odio vitae egestas. Porttitor urna.</p>
            </div>
          </div>
          <div className="testimonials__item">
            <img className="testimonials__image" src={staffPhfoto2} alt="User 2" />
            <div className="testimonials__info">
              <h3 className="testimonials__name">Name</h3>
              <h4 className="testimonials__role">Role Hear</h4>
              <div className="testimonials__stars">
                <img className="testimonials__star" src={star} alt="star" />
                <img className="testimonials__star" src={star} alt="star" />
                <img className="testimonials__star" src={star} alt="star" />
                <img className="testimonials__star" src={star} alt="star" />
                <img className="testimonials__star" src={star} alt="star" />
              </div>
              <p className="testimonials__text">Lorem ipsum dolor sit amet consectetur. Sed commodo lorem sit nec ut. Habitant mattis in vitae sagittis maecenas sed. Sed sit posuere sed sit rhoncus. Nunc leo eu volutpat laoreet est arcu odio vitae egestas. Porttitor urna.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonials__carousel">
        <button
          className={`testimonials__button ${currentIndex === 0 ? 'testimonials__button--inactive' : ''}`}
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          <img src={bPrev} alt="Previous" />
        </button>
        <div className="testimonials__indicators">
          {Array.from({ length: totalItems }).map((_, index) => (
            <div
              key={index}
              className={`testimonials__indicator ${index === currentIndex ? 'testimonials__indicator--active' : ''}`}
            ></div>
          ))}
        </div>
        <button
          className={`testimonials__button ${currentIndex === totalItems - 1 ? 'testimonials__button--inactive' : ''}`}
          onClick={handleNext}
          disabled={currentIndex === totalItems - 1}
        >
          <img src={bNext} alt="Next" />
        </button>
      </div>
    </div>
    
  );
}

export default Testimonials;