import { useState, useEffect } from "react";
import "./PortfolioImage.css";
import PortfolioPopUp from "../portfolio-pop-up/PortfolioPopUp";
import FadeIn from "../../effects/FadeIn";

const PortfolioImage = ({ portfolioData, imageId, onPopUpToggle }) => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    if (isPopupVisible) {
      onPopUpToggle();
    }
  }, [isPopupVisible]);

  const handleImageClick = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
    onPopUpToggle();
  };
  return (
    <FadeIn>
      <div className="portfolio-image-container">
        <img
          src={portfolioData.image}
          alt={portfolioData.image}
          onClick={handleImageClick}
        />
      </div>
      {isPopupVisible && (
        <PortfolioPopUp
          selectedImage={portfolioData.image}
          onClose={handleClosePopup}
          selectedCategory={portfolioData.category}
          imageId={imageId}
        />
      )}
    </FadeIn>
  );
};

export default PortfolioImage;

// Note: Currently clicking the cross triggers isPopUpVisible to change back to false, not ideal, would rather it be based on the state of isPopupVisible

// Below is code to handle the browser back button being clicked, will see if needed when deployed

// useEffect(() => {
//   window.addEventListener("beforeunload", handleClosePopup);
//   return () => {
//     window.removeEventListener("beforeunload", handleClosePopup);
//   };
// }, []);
