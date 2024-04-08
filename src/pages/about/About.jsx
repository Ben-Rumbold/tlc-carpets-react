import "./About.css";

import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import HomeHeroImage from "/assets/images/hero/hero-1.webp";
import OuterContainer from "../../components/outer-container/OuterContainer";
import Title from "../../components/title/Title";
import AboutMediaContainer from "../../components/about-media-container/AboutMediaContainer";
import Text from "../../components/text/Text";
import Subtitle from "../../components/subtitle/Subtitle";
import FaqContainer from "../../components/faq-container/FaqContainer";
import TestimonyCard from "../../components/testimony-card/TestimonyCard";
import TestimonyData from "../../assets/data/testimony-data.json";
import Foooter from "../../components/footer/Footer";

const About = () => {
  const TestimonyArray = TestimonyData["Testimonies"];

  return (
    <>
      <Header currentPage="about" />
      <Hero heroImage={HomeHeroImage} />
      <OuterContainer>
        <Title
          title="Who are we?"
          text="We are your Upminster based flooring company. Small enough to care. Large enough to trust."
        />
        <AboutMediaContainer />
        <Text>
          <p>
            TLC Carpets, led by Terry Lynch, boasts over a decade of fitting
            expertise, serving East London and Essex. Specialising in supplying
            and installing quality materials, our team ensures meticulous
            craftsmanship and personalized service. Trust TLC Carpets for
            exceptional flooring solutions tailored to your needs and style.
          </p>
        </Text>
        <Subtitle title="FAQs" className="inner-container"></Subtitle>
        <FaqContainer />
        <Subtitle title="Testimonies" className="inner-container"></Subtitle>
        <div className="testimony-container">
          {TestimonyArray.map((t) => (
            <TestimonyCard key={t.id} testimonyData={t} />
          ))}
        </div>
      </OuterContainer>
      <Foooter />
    </>
  );
};

export default About;
