import React, { useState } from "react";
import "./ContactForm.css";
import FadeIn from "../../effects/FadeIn";

const ContactForm = ({ children, formName }) => {
  const [formData, setFormData] = useState({
    // Initialize form data state
  });
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSent(!isSent);
    console.log("form submitted");
  };

  return (
    <FadeIn>
      <form
        name={formName}
        method="post"
        data-netlify="true"
        className={`contact-form inner-container ${isSent && "sent"}`}
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value={formName} />
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              value: formData[child.props.name] || "",
              onChange: handleChange,
            });
          }
          return null;
        })}
      </form>
    </FadeIn>
  );
};

export default ContactForm;
