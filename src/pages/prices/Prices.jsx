import "./Prices.css";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import HomeHeroImage from "/assets/images/hero/hero-1.webp";
import OuterContainer from "../../components/outer-container/OuterContainer";
import Foooter from "../../components/footer/Footer";
import Title from "../../components/title/Title";
import Text from "../../components/text/Text";
import ContactForm from "../../components/contact-form/ContactForm";
import FormInput from "../../components/form-input/FormInput";

const Prices = () => {
  return (
    <>
      <Header currentPage="prices" />
      <Hero heroImage={HomeHeroImage} />
      <OuterContainer>
        <Title
          title="Price Estimator"
          text="Get a digital quote within seconds with &copy;The Flooring Price Estimator"
        />
        <Text>
          <p>
            Unfortunately, this feature is currently unavailable.
            <b> Floor</b>
            <i>Tech</i>Solutions (a subsidary of <b>Bold</b>
            <i>Code</i>Studios) are working diligently on a software solution to
            make available to flooring customers a quote witin seconds. Saving
            time, money and effort for customer, contractor and buiness alike.
            Watch this space!
          </p>
        </Text>
        <ContactForm formName="tlc-signup-form">
          <h5>
            Sign up to recieve updates on &copy;The Flooring Price Estimator
          </h5>
          <FormInput
            name="name"
            type="text"
            placeholder="Your Name"
            classLabel="custom-width-half-left"
          />
          <FormInput
            name="email"
            type="email"
            placeholder="Email Adress"
            classLabel="custom-width-half-right"
          />
          <button type="submit">Sign Up</button>
        </ContactForm>
      </OuterContainer>
      <Foooter />
    </>
  );
};

export default Prices;
