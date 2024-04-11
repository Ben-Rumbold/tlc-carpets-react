import React from "react";
import "./SignUpForm.css";
import FadeIn from "../../effects/FadeIn";

const SignUpForm = () => {
  return (
    <FadeIn>
      <form
        name="tlc-signup-form"
        method="post"
        onSubmit="submit"
        data-netlify="true"
        netlify-honeypot="bot-field"
        className="sign-up-form inner-container"
      >
        <h5>
          Sign up to recieve updates on &copy;The Flooring Price Estimator
        </h5>
        <input type="hidden" name="form-name" value="tlc-signup-form" />
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          className="custom-width-half-left"
        />
        <input
          name="email"
          type="email"
          placeholder="Email Address"
          className="custom-width-half-right"
        />
        <button type="submit">Submit</button>
      </form>
    </FadeIn>
  );
};

export default SignUpForm;
