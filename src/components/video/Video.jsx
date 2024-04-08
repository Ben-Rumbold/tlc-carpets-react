import React, { useRef, useState, useEffect } from "react";
import FadeIn from "../../effects/FadeIn";
import "./Video.css";

const Video = ({ isReversed, videoSrc, subheading }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoContainerRef = useRef(null);

  const handleScroll = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      const rect = videoElement.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

      if (isVisible && !isPlaying) {
        setIsPlaying(true);
        videoElement.play();
      } else if (!isVisible && isPlaying) {
        setIsPlaying(false);
        videoElement.pause();
      }
    }
  };

  useEffect(() => {
    FadeIn([videoContainerRef.current]);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isPlaying]);

  return (
    <div
      ref={videoContainerRef}
      className={`video-component ${isReversed && "reversed"}`}
    >
      <div className="video-container">
        <video ref={videoRef} autoPlay loop muted>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="video-text">
        <div className="video-text-subheading">
          <h2>{subheading}</h2>
          <hr />
        </div>
        <p>
          Transform your space with precision and excellence. With over a decade
          of experience and specialized training, we bring craftsmanship and
          quality to every flooring installation.
        </p>
      </div>
    </div>
  );
};

export default Video;
