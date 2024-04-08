import "./PortfolioSection.css";
import Subtitle from "../../components/subtitle/Subtitle";
import PortfolioImage from "../../components/portfolio-image/PortfolioImage";

const PortfolioSection = ({ portfolioData, title, onPopUpToggle }) => {
  return (
    <>
      <Subtitle title={title} className="inner-container"></Subtitle>
      <div className="portfolio-section-container">
        {portfolioData.map((p, index) => (
          <PortfolioImage
            key={p.id}
            portfolioData={p}
            imageId={index + 1}
            onPopUpToggle={onPopUpToggle}
          />
        ))}
      </div>
    </>
  );
};

export default PortfolioSection;
