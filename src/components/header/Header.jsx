import "./Header.css";
import NavbarWide from "./navbar-wide/NavbarWide";
import NavbarSmall from "./navbar-small/NavbarSmall";
import IsScrolled from "../../effects/IsScrolled";

const Header = ({ currentPage }) => {
  const scrolled = IsScrolled();
  return (
    <header className={scrolled ? "shadow scrolled" : ""}>
      <h1>TLC Carpets</h1>
      <NavbarWide currentPage={currentPage} />
      <NavbarSmall currentPage={currentPage} />
    </header>
  );
};

export default Header;
