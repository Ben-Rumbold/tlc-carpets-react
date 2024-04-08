import "./Home.css";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import HomeHeroImage from "/assets/images/hero/hero-1.webp";
import OuterContainer from "../../components/outer-container/OuterContainer";
import Title from "../../components/title/Title";
import Text from "../../components/text/Text";
import HomeMediaContainer from "../../components/home-media-container/HomeMediaContainer";
import HomeMediaOneImgOne from "/assets/images/home/home-1-1.webp";
import HomeMediaOneImgTwo from "/assets/images/home/home-1-2.webp";
import HomeMediaOneVideo from "/assets/videos/tlc-stairs.mp4";
import HomeMediaOneImgBackup from "/assets/images/home/home-1-backup.webp";
import HomeMediaTwoImgOne from "/assets/images/home/home-2-1.webp";
import HomeMediaTwoImgTwo from "/assets/images/home/home-2-2.webp";
import HomeMediaTwoVideo from "/assets/videos/tlc-binding.mp4";
import HomeMediaTwoImgBackup from "/assets/images/home/home-2-backup.webp";
import HomeMediaThreeImgOne from "/assets/images/home/home-3-1.webp";
import HomeMediaThreeImgTwo from "/assets/images/home/home-3-2.webp";
import HomeMediaThreeVideo from "/assets/videos/tlc-subfloor.mp4";
import HomeMediaThreeImgBackup from "/assets/images/home/home-3-backup.webp";
import LogoCarousel from "../../components/logo-carousel/LogoCarousel";
import Foooter from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Header currentPage="home" />
      <Hero heroImage={HomeHeroImage} />
      <OuterContainer>
        <Title
          title="Carpet & Flooring Expertise in Upminster"
          text="Transform your space with precision and excellence. With over a decade of experience and specialized training, we bring craftsmanship and quality to every flooring installation. Trust us for impeccable service and superior results."
        />
        <HomeMediaContainer
          imgOne={HomeMediaOneImgOne}
          imgTwo={HomeMediaOneImgTwo}
          video={HomeMediaOneVideo}
          imgBackup={HomeMediaOneImgBackup}
          label="home-media-container-one"
        />
        <Text>
          <p>
            From a single room to a 5 bedroom house, from a standard twist pile
            to herringbone flatweave, at TLC Carpets, no job is too big or too
            small.
          </p>
        </Text>
        <HomeMediaContainer
          imgOne={HomeMediaTwoImgOne}
          imgTwo={HomeMediaTwoImgTwo}
          video={HomeMediaTwoVideo}
          imgBackup={HomeMediaTwoImgBackup}
          label="home-media-container-two"
        />
        <Text>
          <p>
            Our team, headed by the experienced Terry Lynch, excel at both
            commercial and domestic flooring projects. From offices to homes,
            our skilled fitters simultaneously bring efficiency and an eye for
            detail to every job.
          </p>
        </Text>
        <HomeMediaContainer
          imgOne={HomeMediaThreeImgOne}
          imgTwo={HomeMediaThreeImgTwo}
          video={HomeMediaThreeVideo}
          imgBackup={HomeMediaThreeImgBackup}
          label="home-media-container-three"
        />
        <LogoCarousel />
      </OuterContainer>
      <Foooter />
    </>
  );
};

export default Home;
