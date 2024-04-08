import { useState } from "react";
import "./FaqQa.css";
import FadeIn from "../../effects/FadeIn";

import FaqArrow from "/assets/icons/arrow.svg";

const FaqQa = ({ children }) => {
  const [isAnswerShowing, setIsAnswerShowing] = useState(false);

  const toggleAnswer = () => {
    setIsAnswerShowing(!isAnswerShowing);
  };

  return (
    <FadeIn>
      <div className="faq-qa-container">
        <div className="faq-qa-question-container" onClick={toggleAnswer}>
          {children[0]}
          <img
            src={FaqArrow}
            alt={FaqArrow}
            className={`faq-img ${isAnswerShowing ? "up" : ""}`}
          />
        </div>
        <div
          className={`faq-qa-answer-container ${
            isAnswerShowing ? "show-answer" : ""
          }`}
        >
          {children[1]}
        </div>
      </div>
    </FadeIn>
  );
};

export default FaqQa;

// import { useState, useEffect } from "react";
// import "./FaqQa.css";

// import FaqArrow from "/assets/icons/arrow.svg";

// const FaqQa = ({ children, index }) => {
//   const [isAnswerShowing, setIsAnswerShowing] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(null);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (!event.target.closest(".faq-qa-container")) {
//         setIsAnswerShowing(false);
//       }
//     };

//     document.body.addEventListener("click", handleClickOutside);
//     return () => {
//       document.body.removeEventListener("click", handleClickOutside);
//     };
//   }, []);

//   const toggleAnswer = () => {
//     // If the clicked FAQ is already open, close it
//     if (isAnswerShowing && currentIndex === index) {
//       setIsAnswerShowing(false);
//       setCurrentIndex(null);
//       console.log(`FAQ ${index} closed. isAnswerShowing: false`);

//       // If the FAQ is closed due to another one being opened, update its state
//       if (currentIndex !== null && currentIndex !== index) {
//         setIsAnswerShowing(false);
//         setCurrentIndex(null);
//       }
//     } else {
//       // Otherwise, open the clicked FAQ
//       setIsAnswerShowing(true);
//       setCurrentIndex(index);
//       console.log(`FAQ ${index} opened. isAnswerShowing: true`);

//       // Close other FAQs
//       const allQuestions = document.querySelectorAll(".faq-qa-container");
//       allQuestions.forEach((question, i) => {
//         if (i !== index) {
//           question
//             .querySelector(".faq-qa-answer-container")
//             .classList.remove("show-answer");
//           question.querySelector(".faq-img").classList.remove("up");
//         }
//       });
//     }
//   };

//   return (
//     <div className="faq-qa-container">
//       <div
//         className="faq-qa-question-container"
//         onClick={() => {
//           if (currentIndex !== index) {
//             setIsAnswerShowing(false);
//             setCurrentIndex(index);
//           }
//           toggleAnswer();
//         }}
//       >
//         {children[0]}
//         <img
//           src={FaqArrow}
//           alt={FaqArrow}
//           className={`faq-img ${isAnswerShowing ? "up" : ""}`}
//         />
//       </div>
//       <div
//         className={`faq-qa-answer-container ${
//           isAnswerShowing ? "show-answer" : ""
//         }`}
//       >
//         {children[1]}
//       </div>
//     </div>
//   );
// };

// export default FaqQa;
