import "./OuterContainer.css";
import DownBtn from "../down-btn/DownBtn";

const OuterContainer = ({ isPopUpVisible, children }) => {
  return (
    <div className={`outer-container ${isPopUpVisible ? "popup-visible" : ""}`}>
      <DownBtn />
      {children}
    </div>
  );
};

export default OuterContainer;
