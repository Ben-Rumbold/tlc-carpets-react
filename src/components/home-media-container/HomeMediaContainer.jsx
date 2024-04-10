import "./HomeMediaContainer.css";
import React, { useEffect, useState } from "react";
import FadeIn from "../../effects/FadeIn";

const HomeMediaContainer = ({ imgOne, imgTwo, video, imgBackup, label }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  useEffect(() => {
    const videoElement = document.createElement("video");
    videoElement.src = video;

    videoElement.addEventListener("loadeddata", () => {
      setIsVideoLoaded(true);
    });

    videoElement.addEventListener("error", () => {
      setIsVideoLoaded(false);
    });

    return () => {
      videoElement.removeEventListener("loadeddata", () => {});
      videoElement.removeEventListener("error", () => {});
    };
  }, [video]);
  return (
    <FadeIn>
      <div className={`inner-container home-media-container ${label}`}>
        <div className="home-media-img-one-container home-media-item-container">
          <img src={imgOne} alt={imgOne} />
        </div>
        <div className="home-media-img-two-container home-media-item-container">
          <img src={imgTwo} alt={imgTwo} />
        </div>
        <div className="home-media-video-container home-media-item-container">
          {isVideoLoaded && !prefersReducedMotion ? (
            <video autoPlay playsInline loop muted>
              <source src={video} type="video/mp4" />
            </video>
          ) : (
            <img src={imgBackup} alt={imgBackup} />
          )}
        </div>
      </div>
    </FadeIn>
  );
};

export default HomeMediaContainer;
