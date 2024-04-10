import "./ContactDetailContainer.css";
import ContactDetail from "../contact-detail/ContactDetail";

import PhoneIcon from "/assets/icons/phone.svg";
import EmailIcon from "/assets/icons/email.svg";
import InstagramIcon from "/assets/icons/instagram.svg";

const ContactDetailContainer = () => {
  return (
    <div className="contact-detail-container inner-container">
      <ContactDetail
        icon={PhoneIcon}
        link="tel:07766116573"
        text="07766116573"
      />
      <ContactDetail
        icon={EmailIcon}
        link="mailto: contact@tlccarpets.co.uk"
        text="contact@tlc carpets.co.uk"
      />
      <ContactDetail
        icon={InstagramIcon}
        link="https://www.instagram.com/abbottsinteriors/?hl=en-gb"
        text="TLC Instagram"
        target="_blank"
      />
    </div>
  );
};

export default ContactDetailContainer;
