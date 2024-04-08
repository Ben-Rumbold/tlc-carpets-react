import "./Text.css";
import FadeIn from "../../effects/FadeIn";

const Text = ({ children }) => {
  return (
    <FadeIn>
      <div className="inner-container text-container">{children}</div>
    </FadeIn>
  );
};

export default Text;
