import "./FaqContainer.css";
import FaqQa from "../faq-qa/FaqQa";

import FaqData from "../../assets/data/faq-data.json";

const FaqContainer = () => {
  const FaqArray = FaqData["Faqs"];

  return (
    <div className="faq-container">
      {FaqArray.map((f) => (
        <FaqQa key={f.id} index={f.id}>
          <p>
            <b>{f.Question}</b>
          </p>
          <p>{f.Answer}</p>
        </FaqQa>
      ))}
    </div>
  );
};

export default FaqContainer;
