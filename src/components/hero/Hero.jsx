import "./Hero.css";

const Hero = ({ heroImage }) => {
  return (
    <div className="hero-container">
      <img src={heroImage} alt={heroImage} className="hero-image" />
    </div>
  );
};

export default Hero;
