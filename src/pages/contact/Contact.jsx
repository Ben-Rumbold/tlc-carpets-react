import "./Contact.css";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import HomeHeroImage from "/assets/images/hero/hero-1.webp";
import OuterContainer from "../../components/outer-container/OuterContainer";
import Title from "../../components/title/Title";
import ContactDetailContainer from "../../components/contact-detail-container/ContactDetailContainer";
import ContactForm from "../../components/contact-form/ContactForm";
import FormInput from "../../components/form-input/FormInput";
import FormTextArea from "../../components/form-text-area/FormTextArea";
import MapContainer from "../../components/map-container/MapContainer";
import Foooter from "../../components/footer/Footer";

const Contact = () => {
  return (
    <>
      <Header currentPage="contact" />
      <Hero heroImage={HomeHeroImage} />
      <OuterContainer>
        <Title
          title="Contact Us"
          text="From a general inquiry to booking a free measure, get in touch via phone, email, instagram, or the contact form below."
        />
        <ContactDetailContainer />
        <ContactForm formName="contact form">
          <h5>Get In Touch</h5>
          <FormInput name="name" type="text" placeholder="Your Name" />
          <FormInput name="email" type="email" placeholder="Email Address" />
          <FormInput name="phone" type="text" placeholder="Phone Number" />
          <FormInput name="address" type="text" placeholder="Street Address" />
          <FormInput
            name="town-city"
            type="text"
            placeholder="Town/ City"
            classLabel="custom-width-bigger"
          />
          <FormInput
            name="postcode"
            type="text"
            placeholder="Postcode"
            classLabel="custom-width-smaller"
          />
          <FormTextArea
            name="comment"
            rows="5"
            placeholder="How can we help you?"
          />
          <button type="submit">Send</button>
        </ContactForm>
        <MapContainer />
      </OuterContainer>
      <Foooter />
    </>
  );
};

export default Contact;
