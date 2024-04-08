import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavbarSmall.css";
import NavbarLines from "/assets/icons/nav.svg";
import NavbarBack from "/assets/icons/arrow.svg";

const NavbarSmall = ({ currentPage }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleButtonClick = () => {
    setIsExpanded((prev) => !prev);
  };

  const handleOpacityClick = () => {
    setIsExpanded(false);
  };

  return (
    <>
      <div
        className={`navbar-small-opacity ${
          isExpanded ? "opacity-showing" : "opacity-hidden"
        }`}
        onClick={handleOpacityClick}
      ></div>
      <img
        className={`navbar-button ${
          isExpanded ? "navbar-back" : "navbar-lines"
        }`}
        src={isExpanded ? NavbarBack : NavbarLines}
        alt={isExpanded ? "navbar-back-button" : "navbar-lines-button"}
        onClick={handleToggleButtonClick}
      />
      <div className={`navbar-small-container${isExpanded ? " expanded" : ""}`}>
        <Link to="/">
          <p
            className={
              currentPage === "home" ? "current-page" : "not-current-page"
            }
          >
            Home
          </p>
        </Link>
        <Link to="/about">
          <p
            className={
              currentPage === "about" ? "current-page" : "not-current-page"
            }
          >
            About
          </p>
        </Link>
        <Link to="/portfolio">
          <p
            className={
              currentPage === "portfolio" ? "current-page" : "not-current-page"
            }
          >
            Portfolio
          </p>
        </Link>
        <Link to="/contact">
          <p
            className={
              currentPage === "contact" ? "current-page" : "not-current-page"
            }
          >
            Contact
          </p>
        </Link>
        <Link to="/prices">
          <p
            className={
              currentPage === "prices" ? "current-page" : "not-current-page"
            }
          >
            Prices
          </p>
        </Link>
      </div>
    </>
  );
};

export default NavbarSmall;
