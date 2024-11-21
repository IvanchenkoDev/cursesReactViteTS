
import './OurCourses.scss';
import ButtonDetails from '../../images/ButtonLearn.svg';
import IconStar from '../../images/iconStar.svg';
import IconEn from '../../images/IconEng.svg';
import IconOn from '../../images/IconOnline.svg';
import IconTime from '../../images/IconTime.svg';
import IconTodo from '../../images/IconTodo.svg';
import IconModules from '../../images/Icon-modules.svg';

const OurCourses = () => {
  return (
    <div className="our-courses">
      <h2 className="our-courses__title">Our Courses</h2>

      <div className="our-courses__section">
        <div className="our-courses__subtitle-container">
          <img className="our-courses__icon-star" alt="iconStar" src={IconStar} />
          <h3 className="our-courses__subtitle">Level 1 (ACC Track) Experiential Executive Coaching Program</h3>
          <div className="our-courses__details">
            <a 
              href="https://example.com" 
              className="our-courses__details-link"
              target="_blank" 
              rel="noopener noreferrer"
              >
              <img src={ButtonDetails} alt="Details" className="our-courses__details-icon" />
              <span>Details</span>
            </a>
          </div>
        </div>

        <div className="our-courses__icons">
          <div>
            <img src={IconTime} alt="Time icon" className="our-courses__icon" />
            <p>60-hour</p>
          </div>
          <div>
            <img src={IconOn} alt="Online icon" className="our-courses__icon" />
            <p>Online</p>
          </div>
          <div>
            <img src={IconEn} alt="English icon" className="our-courses__icon" />
            <p>English</p>
          </div>
        </div>

        <div className="our-courses__program">
          <h4 className="our-courses__program-title">The Three Primary Coaching Program Models:</h4>

          <div className="our-courses__model">
            <h5 className="our-courses__model-title">Level 1 (ACC Track) Experiential Executive Coaching Program</h5>
            <div className="our-courses__model-icons">
              <div className="our-courses__model-item">
                <img src={IconTodo} alt="model-icon" className="our-courses__model-icon" />
                <p>In-depth exploration of coaching foundations</p>
              </div>
              <div className="our-courses__model-item">
                <img src={IconTodo} alt="model-icon" className="our-courses__model-icon" />
                <p>Mastery in effective communication strategies</p>
              </div>
              <div className="our-courses__model-item">
                <img src={IconTodo} alt="model-icon" className="our-courses__model-icon" />
                <p>Proficiency in navigating ICF Core Competencies</p>
              </div>
            </div>
          </div>
          <div className="our-courses__model">
            <h5 className="our-courses__model-title">Level 1 (ACC Track) Experiential Executive Coaching Program</h5>
            <div className="our-courses__model-icons">
              <div className="our-courses__model-item">
                <img src={IconTodo} alt="model-icon" className="our-courses__model-icon" />
                <p>In-depth exploration of coaching foundations</p>
              </div>
              <div className="our-courses__model-item">
                <img src={IconTodo} alt="model-icon" className="our-courses__model-icon" />
                <p>Mastery in effective communication strategies</p>
              </div>
              <div className="our-courses__model-item">
                <img src={IconTodo} alt="model-icon" className="our-courses__model-icon" />
                <p>Proficiency in navigating ICF Core Competencies</p>
              </div>
            </div>
          </div>  
          <div className="our-courses__model">
          <h5 className="our-courses__model-title">3. The Coaching Engagement Model</h5>
          <div className="our-courses__model-item">
            <img src={IconTodo} alt="model-icon" className="our-courses__model-icon" />
            <p>Provides a structured framework for coaching sessions</p>
          </div>
          <div className="our-courses__model-item">
            <img src={IconTodo} alt="model-icon" className="our-courses__model-icon" />
            <p>Progresses from data intake to knowledge acquisition, understanding, and ultimately wisdom</p>
          </div>
          <div className="our-courses__model-item">
            <img src={IconTodo} alt="model-icon" className="our-courses__model-icon" />
            <p>Serves as a roadmap for the engagement, fostering clarity and mutual expectations between coach and client</p>
          </div>
        </div>
        
        <div className="our-courses__price">
          <p className="our-courses__price-label">Price</p>
          <p className="our-courses__price-amount">$6499</p>
        </div>
        </div>

        <div className="our-courses__button-container">
          <button className="our-courses__button">join</button>
        </div>
      </div>

      <div className="our-courses__section">
        <div className="our-courses__subtitle-container">
          <img className="our-courses__icon-star" alt="iconStar" src={IconStar} />
          <h3 className="our-courses__subtitle">Level 1 (ACC Track) Experiential Executive Coaching Program</h3>
          <div className="our-courses__details">
            <a 
              href="https://example.com" 
              className="our-courses__details-link"
              target="_blank" rel="noopener noreferrer"
            >
              <img src={ButtonDetails} alt="Details" className="our-courses__details-icon" />
              <span>Details</span>
            </a>
          </div>
        </div>

        <div className="our-courses__icons">
          <div>
            <img src={IconTime} alt="Time icon" className="our-courses__icon" />
            <p>125-hour</p>
          </div>
          <div>
            <img src={IconModules} alt="Time icon" className="our-courses__icon" />
            <p>9 modules</p>
          </div>
          <div>
            <img src={IconOn} alt="Online icon" className="our-courses__icon" />
            <p>Online</p>
          </div>
          <div>
            <img src={IconEn} alt="English icon" className="our-courses__icon" />
            <p>English</p>
          </div>
        </div>

        <div className="our-courses__program">
          <h4 className="our-courses__program-title">The Three Primary Coaching Program Models:</h4>

          <div className="our-courses__model">
            <h5 className="our-courses__model-title">1.The Coaching Certification Model</h5>
            <div className="our-courses__model-icons">
              <div className="our-courses__model-item">
                <img src={IconTodo} alt="model-icon" className="our-courses__model-icon" />
                <p>The program offers three pathways to proficiency: coaching, receiving coaching, or observing coaching sessions</p>
              </div>
              <div className="our-courses__model-item">
                <img src={IconTodo} alt="model-icon" className="our-courses__model-icon" />
                <p>Emphasizes three core areas: ICF Ethics, ICF Regulations, and ICF Core Competencies</p>
              </div>
              <div className="our-courses__model-item">
                <img src={IconTodo} alt="model-icon" className="our-courses__model-icon" />
                <p>Candidates focus on enhancing skills in performance coaching, behavioral coaching, and perceptual coaching</p>
              </div>
            </div>
          </div>
          <div className="our-courses__model">
            <h5 className="our-courses__model-title">2.The Coach’s Learning Model</h5>
            <div className="our-courses__model-icons">
              <div className="our-courses__model-item">
                <img src={IconTodo} alt="model-icon" className="our-courses__model-icon" />
                <p>Illustrates how coaching candidates acquire the necessary skills, tips, tools, and techniques for certification</p>
              </div>
              <div className="our-courses__model-item">
                <img src={IconTodo} alt="model-icon" className="our-courses__model-icon" />
                <p>Progresses from data intake to knowledge acquisition, understanding, and ultimately wisdom</p>
              </div>
              <div className="our-courses__model-item">
                <img src={IconTodo} alt="model-icon" className="our-courses__model-icon" />
                <p>Progresses from data intake to knowledge acquisition, understanding, and ultimately wisdom</p>
              </div>
            </div>
          </div>  
          <div className="our-courses__model">
          <h5 className="our-courses__model-title">3. The Coaching Engagement Model</h5>
          <div className="our-courses__model-item">
            <img src={IconTodo} alt="model-icon" className="our-courses__model-icon" />
            <p>Provides a structured framework for coaching sessions</p>
          </div>
          <div className="our-courses__model-item">
            <img src={IconTodo} alt="model-icon" className="our-courses__model-icon" />
            <p>Guides coaches and clients through phases of awareness, discovery, goal setting, approach determination, progress tracking, and success evaluation</p>
          </div>
          <div className="our-courses__model-item">
            <img src={IconTodo} alt="model-icon" className="our-courses__model-icon" />
            <p>Serves as a roadmap for the engagement, fostering clarity and mutual expectations between coach and client</p>
          </div>
        </div>
        
        <div className="our-courses__price">
          <p className="our-courses__price-label">Price</p>
          <p className="our-courses__price-amount">$8499</p>
        </div>
        </div>

        <div className="our-courses__button-container">
          <button className="our-courses__button">join</button>
        </div>
      </div>

    </div>
  );
}

export default OurCourses;
