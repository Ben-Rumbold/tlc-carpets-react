import "./AboutMediaContainer.css";
import FadeIn from "../../effects/FadeIn";

import AboutMediaImgOne from "/assets/images/about/tlc-van.webp";
import AboutMediaImgTwo from "/assets/images/about/terry-lynch.webp";
import AboutMediaImgThree from "/assets/images/about/tlc-tools.webp";
import DrawArrow from "/assets/images/about/draw-arrow.webp";
import DrawCircle from "/assets/images/about/draw-circle.webp";

const AboutMediaContainer = () => {
  return (
    <FadeIn>
      <div className="about-media-container inner-container">
        <div className="about-media-item-container about-media-img-one-container">
          <img src={AboutMediaImgOne} alt={AboutMediaImgOne} />
        </div>
        <div className="about-media-item-container about-media-img-two-container">
          <img src={AboutMediaImgTwo} alt={AboutMediaImgTwo} />
        </div>
        <div className="about-media-item-container about-media-img-three-container">
          <img src={AboutMediaImgThree} alt={AboutMediaImgThree} />
        </div>
        <div className="draw-img-container">
          <img src={DrawArrow} alt={DrawArrow} className="draw-arrow" />
          <img src={DrawCircle} alt={DrawCircle} className="draw-circle" />
        </div>
      </div>
    </FadeIn>
  );
};

export default AboutMediaContainer;
