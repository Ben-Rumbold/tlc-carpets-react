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
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSent(!isSent);
    console.log(`${formName} submitted`);
    console.log("Form data:", formData);
  };

  return (
    <FadeIn>
      <form
        name={formName}
        method="POST"
        data-netlify="true"
        action="/form"
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
