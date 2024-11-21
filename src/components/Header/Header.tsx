import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';  
import Logo from '../../images/Logo.svg';
import IconChevron from '../../images/Icon-courses.svg';
import HeaderImage from '../../images/Img-header.jpg';

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = (event: MouseEvent) => {
    const dropdown = document.querySelector('.nav-courses');
    if (dropdown && !dropdown.contains(event.target as Node)) {
      setIsDropdownOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', closeDropdown);
    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  }, []);

  return (
  <header className="header">
  <div className="header__top">
    <Link to="/" className="header__logo-link">
        <img src={Logo} alt="Logo" className="header__logo-image" />
    </Link>
    <nav className="nav">
        <Link to="/" className="nav__link">Home</Link>
        <div className="nav__courses">
          <Link to="/courses" className="nav__link">Courses</Link>
          <img 
            src={IconChevron} 
            alt="dropdown" 
            className="nav__dropdown-icon" 
            onClick={toggleDropdown} 
          />
          {isDropdownOpen && (
            <div className="nav__dropdown-menu">
              <Link to="/course1" className="nav__dropdown-item">Lorem ipsum dolor sit amet.</Link>
              <Link to="/course2" className="nav__dropdown-item">Lorem ipsum dolor sit amet.</Link>
            </div>
          )}
        </div>
        <Link to="/about" className="nav__link">About</Link>
        <Link to="/contact" className="nav__link">Contact Us</Link>
      </nav>

      <Link to="/login" className="header__login-button"><span>Login</span></Link>
  </div>

  <div className="header__content">
    <div className="header__content-left">
      <h1 className="header__title">
        WELCOME TO <br /> DICKENS EXECUTIVE <br /> COACHING ACADEMY
      </h1>
      <p className="header__subtitle">Your resource of choice for coaching education</p>
      <Link to="/courses" className="header__explore-button">Explore Courses</Link>
    </div>
    <div className="header__content-right">
      <img src={HeaderImage} alt="Header-image" className="header__image"/>   
    </div>
  </div>
  
</header>

  );
};

export default Header;
