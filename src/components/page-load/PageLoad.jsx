import { useState, useEffect } from "react";
import "./PageLoad.css";

const PageLoad = ({ children }) => {
  const [showPageLoad, setShowPageLoad] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPageLoad(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showPageLoad && (
        <div className="page-load-container">
          <div className="page-load-text-container">
            <h1>TLC Carpets</h1>
            <p>Where Excellence Meets Efficiency</p>
          </div>
        </div>
      )}
      {!showPageLoad && children}
    </>
  );
};

export default PageLoad;
