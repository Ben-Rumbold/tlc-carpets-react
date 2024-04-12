import { useState } from "react";
import "./ContactDetail.css";
import FadeIn from "../../effects/FadeIn";

const ContactDetail = ({ icon, link, target, text }) => {
  const [isHovered, setIsHovered] = useState(true);

  const handleMouseEnter = () => {
    setIsHovered(false);
  };

  const handleMouseLeave = () => {
    setIsHovered(true);
  };

  return (
    <FadeIn>
      <div
        className="contact-detail-wrapper"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`contact-detail ${isHovered ? "show" : ""}`}
          onClick={() => setIsHovered(!isHovered)}
        >
          <img src={icon} alt={icon} />
        </div>
        <div className={`contact-detail-expanded ${isHovered ? "show" : ""}`}>
          <div className="contact-detail-expanded-body">
            <div className="contact-text-container">
              <a className="contact-link" target={target} href={link}>
                <p className="contact-text">{text}</p>
              </a>
            </div>
          </div>
          <div className="contact-detail-expanded-circle"></div>
        </div>
      </div>
    </FadeIn>
  );
};

export default ContactDetail;
