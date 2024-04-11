import "./Contact.css";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import HomeHeroImage from "/assets/images/hero/hero-1.webp";
import OuterContainer from "../../components/outer-container/OuterContainer";
import Title from "../../components/title/Title";
import ContactDetailContainer from "../../components/contact-detail-container/ContactDetailContainer";
import ContactForm from "../../components/contact-form/ContactForm";
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
        <ContactForm />
        <MapContainer />
      </OuterContainer>
      <Foooter />
    </>
  );
};

export default Contact;
