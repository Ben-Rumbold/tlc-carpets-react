import { useState } from "react";
import "./Portfolio.css";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import HomeHeroImage from "/assets/images/hero/hero-1.webp";
import OuterContainer from "../../components/outer-container/OuterContainer";
import Title from "../../components/title/Title";
import PortfolioSection from "../../components/portfolio-section/PortfolioSection";
import PortfolioData from "../../assets/data/portfolio-data.json";
import Foooter from "../../components/footer/Footer";

const Portfolio = () => {
  const naturalsArray = PortfolioData["Naturals"];
  const flatweavesArray = PortfolioData["Flatweaves"];
  const patternedArray = PortfolioData["Patterned"];
  const stripedArray = PortfolioData["Striped"];
  const silkArray = PortfolioData["Silk"];

  const [isPopUpVisible, setIsPopUpVisible] = useState(false);

  const handlePopUpToggle = () => {
    setIsPopUpVisible(!isPopUpVisible);
  };

  return (
    <>
      <Header currentPage="portfolio" />
      <Hero heroImage={HomeHeroImage} />
      <OuterContainer isPopUpVisible={isPopUpVisible}>
        <Title
          title="Our Projects"
          text="Discover our craftsmanship: A showcase of exceptional flooring installations tailored for every style and space."
        />
        <PortfolioSection
          title={"Naturals"}
          portfolioData={naturalsArray}
          onPopUpToggle={handlePopUpToggle}
        />
        <PortfolioSection
          title={"Flatweaves"}
          portfolioData={flatweavesArray}
          onPopUpToggle={handlePopUpToggle}
        />
        <PortfolioSection
          title={"Patterned"}
          portfolioData={patternedArray}
          onPopUpToggle={handlePopUpToggle}
        />
        <PortfolioSection
          title={"Striped"}
          portfolioData={stripedArray}
          onPopUpToggle={handlePopUpToggle}
        />
        <PortfolioSection
          title={"Silk"}
          portfolioData={silkArray}
          onPopUpToggle={handlePopUpToggle}
        />
      </OuterContainer>
      <Foooter />
    </>
  );
};

export default Portfolio;
