import { Link } from 'react-router-dom';
import Logo from '../../images/Logo.svg';
import './Footer.scss';

const Footer: React.FC = () => {
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="footer">
      <div className="footer__container">
      <img 
        src={Logo} 
        alt="Logo" 
        className="footer__logo" 
        onClick={handleLogoClick}
          style={{ cursor: "pointer" }}
      />
        <p className="footer__text">© 2024 Dickens Consulting Group, LLC</p>
        <div className="footer__buttons">
          <Link to="/course" className="footer__buttons__link">
            Course
          </Link>
          <Link to="/about" className="footer__buttons__link">
            About
          </Link>
          <Link to="/contact" className="footer__buttons__link">
            Contact
          </Link>
        </div>
      </div>
      
  </footer>
  
  );
};

export default Footer;
