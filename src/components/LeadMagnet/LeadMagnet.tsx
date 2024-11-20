import React from 'react';

// const Advantages: React.FC = () => {
//   return (

import './LeadMagnet.scss';

const LeadMagnet: React.FC = () => {
  return (
    <div className="lead-magnet">
      <div className="lead-magnet__container">
        <h2 className="lead-magnet__title">
          companies, universities, directors and presidents
        </h2>
        <p className="lead-magnet__description">
          if you'd like to learn more information about our work with large organizations, let's schedule a call.
        </p>
      </div>
  
      <div className="lead-magnet__form-container">
        <form className="form" action="submit_form.php" method="post">
          <label className="form__label" htmlFor="name"></label>
          <input
            placeholder='Name'
            className="form__input"
            type="text"
            id="name"
            name="name"
            required
          />
          <label className="form__label" htmlFor="email"></label>
          <input
            placeholder='Email'
            className="form__input"
            type="email"
            id="email"
            name="email"
            required
          />
          <button className="form__button" type="submit">Schedule a call</button>
        </form>
      </div>
    </div>
  );
}

export default LeadMagnet;