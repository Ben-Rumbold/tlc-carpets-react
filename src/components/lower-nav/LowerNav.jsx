import { Link } from "react-router-dom";
import "./LowerNav.css";

const LowerNav = ({
  labelOne,
  linkOne,
  labelTwo,
  linkTwo,
  labelThree,
  linkThree,
  labelFour,
  linkFour,
}) => {
  return (
    <div className="lower-nav-container inner-container">
      <Link to={`/${linkOne}`}>
        <button className="lower-nav-button">
          <p>{labelOne}</p>
        </button>
      </Link>
      <Link to={`/${linkTwo}`}>
        <button className="lower-nav-button">
          <p>{labelTwo}</p>
        </button>
      </Link>
      <Link to={`/${linkThree}`}>
        <button className="lower-nav-button">
          <p>{labelThree}</p>
        </button>
      </Link>
      <Link to={`/${linkFour}`}>
        <button className="lower-nav-button">
          <p>{labelFour}</p>
        </button>
      </Link>
    </div>
  );
};

export default LowerNav;
