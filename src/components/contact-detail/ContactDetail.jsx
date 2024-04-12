import { useState } from "react";
import "./ContactDetail.css";
import FadeIn from "../../effects/FadeIn";

const ContactDetail = ({ icon, link, target, text }) => {
  const [isHovered, setIsHovered] = useState(true);

  const handleMouseEnter = () => {
    setIsHovered(false);
    console.log(
      `mouseEntered, isHovered should be false, is actually: ${isHovered}`
    );
  };

  const handleMouseLeave = () => {
    setIsHovered(true);
    console.log(
      `mouseLeave, isHovered should be true, is actually: ${isHovered}`
    );
  };

  const handleTouchStart = () => {
    setIsHovered(false);
    console.log(
      `touchStart, isHovered should be false, is actually: ${isHovered}`
    );
  };

  const handleTouchEnd = () => {
    setIsHovered(true);
    console.log(
      `touchEnter, isHovered should be true, is actually: ${isHovered}`
    );
  };

  return (
    <FadeIn>
      <div
        className="contact-detail-wrapper"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className={`contact-detail ${isHovered ? "show" : ""}`}>
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
