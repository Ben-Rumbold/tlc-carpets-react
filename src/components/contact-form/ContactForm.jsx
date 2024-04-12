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
