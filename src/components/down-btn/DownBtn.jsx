import React, { useState, useEffect } from "react";
import "./DownBtn.css";
import DownBtnSvg from "/assets/icons/down-btn.svg";

const DownBtn = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    if (scrollPosition >= 150) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  const scrollDown = () => {
    const scrollDistance = window.innerWidth < 800 ? 270 : 370;
    window.scrollBy({
      top: scrollDistance,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <img
        src={DownBtnSvg}
        alt={DownBtnSvg}
        className={`down-btn ${isVisible ? "fade-in" : "fade-out"}`}
        onClick={scrollDown}
      />
    </>
  );
};

export default DownBtn;
