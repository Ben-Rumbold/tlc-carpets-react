import { useState, useEffect } from "react";
import FadeIn from "../../effects/FadeIn";
import "./LogoCarousel.css";

import LogoCarouselImgOne from "/assets/images/carousel/abingdon-logo.webp";
import LogoCarouselImgTwo from "/assets/images/carousel/alternative-logo.webp";
import LogoCarouselImgThree from "/assets/images/carousel/aw-logo.webp";
import LogoCarouselImgFour from "/assets/images/carousel/axminster-logo.webp";
import LogoCarouselImgFive from "/assets/images/carousel/cormar-logo.webp";
import LogoCarouselImgSix from "/assets/images/carousel/crucial-trading-logo.webp";
import LogoCarouselImgSeven from "/assets/images/carousel/jacaranda-logo.webp";
import LogoCarouselImgEight from "/assets/images/carousel/ldp-logo.webp";
import LogoCarouselImgNine from "/assets/images/carousel/telenzo-logo.webp";
import LogoCarouselImgTen from "/assets/images/carousel/victoria-logo.webp";
import LogoCarouselImgEleven from "/assets/images/carousel/vorwerk-logo.webp";
import LogoCarouselImgTwelve from "/assets/images/carousel/westex-logo.webp";

const LogoCarousel = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsVisible(entry.isIntersecting);
      });
    }, options);

    const target = document.querySelector(".outer-logo-carousel-container");
    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, []);

  useEffect(() => {
    const container = document.querySelector(".inner-logo-carousel-container");

    // Function to pause the animation
    const pauseAnimation = () => {
      container.style.animationPlayState = "paused";
    };

    // Function to resume the animation
    const resumeAnimation = () => {
      container.style.animationPlayState = "running";
    };

    if (isVisible) {
      resumeAnimation();
    } else {
      pauseAnimation();
    }
  }, [isVisible]);

  return (
    <FadeIn>
      <div className="outer-logo-carousel-container inner-container">
        <div className="logo-carousel-text-container">
          <h4>
            <i>We supply and install</i>
          </h4>
          <hr></hr>
        </div>
        <div className="inner-logo-carousel-wrapper">
          <div className="inner-logo-carousel-container">
            <img src={LogoCarouselImgOne} alt={LogoCarouselImgOne} />
            <img src={LogoCarouselImgTwo} alt={LogoCarouselImgTwo} />
            <img src={LogoCarouselImgThree} alt={LogoCarouselImgThree} />
            <img src={LogoCarouselImgFour} alt={LogoCarouselImgFour} />
            <img src={LogoCarouselImgFive} alt={LogoCarouselImgFive} />
            <img src={LogoCarouselImgSix} alt={LogoCarouselImgSix} />
            <img src={LogoCarouselImgSeven} alt={LogoCarouselImgSeven} />
            <img src={LogoCarouselImgEight} alt={LogoCarouselImgEight} />
            <img src={LogoCarouselImgNine} alt={LogoCarouselImgNine} />
            <img src={LogoCarouselImgTen} alt={LogoCarouselImgTen} />
            <img src={LogoCarouselImgEleven} alt={LogoCarouselImgEleven} />
            <img src={LogoCarouselImgTwelve} alt={LogoCarouselImgTwelve} />
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default LogoCarousel;
