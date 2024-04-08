import "./TestimonyCard.css";
import FadeIn from "../../effects/FadeIn";

import QuotationMark from "/assets/icons/quotation-mark.svg";

const TestimonyCard = ({ testimonyData }) => {
  return (
    <FadeIn>
      <div className="testimony-card">
        <div className="testimony-top-container">
          <img src={QuotationMark} alt={QuotationMark} />
          <div className="testimony-heading-container">
            <p className="testimony-heading">
              <b>
                {testimonyData.Name}, {testimonyData.Location}
              </b>
            </p>
          </div>
        </div>
        <p className="testimony-text">{testimonyData.Testimony}</p>
      </div>
    </FadeIn>
  );
};

export default TestimonyCard;

// name, location and text props
