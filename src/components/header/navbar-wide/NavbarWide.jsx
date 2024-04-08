import { Link } from "react-router-dom";
import "./NavbarWide.css";
import IsScrolled from "../../../effects/IsScrolled";

const NavbarWide = ({ currentPage }) => {
  const scrolled = IsScrolled();
  return (
    <div className="navbar-wide-container">
      <Link to="/">
        <p
          className={
            currentPage === "home"
              ? "current-page"
              : "not-current-page" +
                (scrolled ? " nav-scrolled" : " nav-not-scrolled")
          }
        >
          Home
        </p>
      </Link>
      <Link to="/about">
        <p
          className={
            currentPage === "about"
              ? "current-page"
              : "not-current-page" +
                (scrolled ? " nav-scrolled" : " nav-not-scrolled")
          }
        >
          About
        </p>
      </Link>
      <Link to="/portfolio">
        <p
          className={
            currentPage === "portfolio"
              ? "current-page"
              : "not-current-page" +
                (scrolled ? " nav-scrolled" : " nav-not-scrolled")
          }
        >
          Portfolio
        </p>
      </Link>
      <Link to="/contact">
        <p
          className={
            currentPage === "contact"
              ? "current-page"
              : "not-current-page" +
                (scrolled ? " nav-scrolled" : " nav-not-scrolled")
          }
        >
          Contact
        </p>
      </Link>
      <Link to="/prices">
        <p
          className={
            currentPage === "prices"
              ? "current-page"
              : "not-current-page" +
                (scrolled ? " nav-scrolled" : " nav-not-scrolled")
          }
        >
          Prices
        </p>
      </Link>
    </div>
  );
};

export default NavbarWide;
