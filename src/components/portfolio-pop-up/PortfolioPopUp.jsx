import { useState, useEffect } from "react";
import "./PortfolioPopUp.css";
import PopUpCross from "/assets/icons/cross.svg";
import PopUpArrow from "/assets/icons/arrow.svg";
import PortfolioData from "../../assets/data/portfolio-data.json";

const PortfolioPopUp = ({
  selectedImage,
  onClose,
  selectedCategory,
  imageId,
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    const boundingBox = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - boundingBox.left;
    const y = e.clientY - boundingBox.top;
    setMousePosition({ x, y });
  };

  // Add state variables for selected image and category
  const [currentImage, setCurrentImage] = useState(selectedImage);
  const [currentCategory, setCurrentCategory] = useState(selectedCategory);
  const [currentIndex, setCurrentIndex] = useState(imageId - 1);

  const handleBackwardClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const handleForwardClick = () => {
    const categoryArray = PortfolioData[selectedCategory];
    setCurrentIndex((prevIndex) =>
      prevIndex < categoryArray.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  useEffect(() => {
    // Update currentImage and currentCategory based on currentIndex
    const categoryArray = PortfolioData[selectedCategory];
    const newData = categoryArray[currentIndex];
    setCurrentImage(newData.image);
    setCurrentCategory(newData.category);
  }, [currentIndex, selectedCategory]);

  const isBackwardButtonDisabled = currentIndex === 0;
  const isForwardButtonDisabled =
    currentIndex === PortfolioData[selectedCategory].length - 1;

  return (
    <div className="portfolio-pop-up-container">
      <img
        src={PopUpCross}
        alt={PopUpCross}
        className="portfolio-pop-up-cross icon"
        onClick={onClose}
      />
      <div
        className="portfolio-pop-up-content-container"
        onMouseMove={handleMouseMove}
        style={{
          "--x": `${mousePosition.x}px`,
          "--y": `${mousePosition.y}px`,
        }}
      >
        <img
          src={PopUpArrow}
          alt={PopUpArrow}
          className={`portfolio-pop-up-arrow back-arrow ${
            isBackwardButtonDisabled ? "icon-disabled" : "icon"
          }`}
          onClick={handleBackwardClick}
        />
        <div className="portfolio-pop-up-image-container">
          <img src={currentImage} alt={currentImage} />
        </div>
        <img
          src={PopUpArrow}
          alt={PopUpArrow}
          className={`portfolio-pop-up-arrow forward-arrow ${
            isForwardButtonDisabled ? "icon-disabled" : "icon"
          }`}
          onClick={handleForwardClick}
        />
        <div className="portfolio-pop-up-text-container">
          <h3>{currentCategory}</h3>
          <hr />
          {/* <p>imageId: {imageId}</p>
          <p>currentIndex: {currentIndex}</p> */}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPopUp;
