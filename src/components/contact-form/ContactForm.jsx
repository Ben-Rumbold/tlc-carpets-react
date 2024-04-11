// import React, { useState } from "react";
// import "./ContactForm.css";
// import FadeIn from "../../effects/FadeIn";

// const ContactForm = ({ children, formName }) => {
//   const [formData, setFormData] = useState({
//   });
//   const [isSent, setIsSent] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSent(!isSent);
//     console.log(`${formName} submitted`);
//     console.log("Form data:", formData);
//   };

//   return (
//     <FadeIn>
//       <form
//         name={formName}
//         method="POST"
//         data-netlify="true"
//         netlify-honeypot="bot-field"
//         className={`contact-form inner-container ${isSent && "sent"}`}
//         onSubmit={handleSubmit}
//       >
//         <input type="hidden" name="form-name" value={formName} />
//         {React.Children.map(children, (child) => {
//           if (React.isValidElement(child)) {
//             return React.cloneElement(child, {
//               value: formData[child.props.name] || "",
//               onChange: handleChange,
//             });
//           }
//           return null;
//         })}
//       </form>
//     </FadeIn>
//   );
// };

// export default ContactForm;

import React from "react";
import "./ContactForm.css";
import FadeIn from "../../effects/FadeIn";

const ContactForm = () => {
  return (
    <FadeIn>
      <form
        name="tlc-contact-form"
        method="post"
        onSubmit="submit"
        data-netlify="true"
        netlify-honeypot="bot-field"
        className="contact-form inner-container"
      >
        <h5>Get In Touch</h5>
        <input type="hidden" name="form-name" value="tlc-contact-form" />
        <input type="text" name="name" placeholder="Your Name" />
        <input type="email" name="email" placeholder="Email Address" />
        <input name="phone" type="text" placeholder="Phone Number" />
        <input name="address" type="text" placeholder="Street Address" />
        <input
          name="town-city"
          type="text"
          placeholder="Town/ City"
          className="custom-width-bigger"
        />
        <input
          name="postcode"
          type="text"
          placeholder="Postcode"
          className="custom-width-smaller"
        />
        <textarea
          name="comment"
          rows="5"
          placeholder="How can we help you?"
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </FadeIn>
  );
};

export default ContactForm;
