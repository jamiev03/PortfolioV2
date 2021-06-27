import React from "react";
import { ContactHeader, ContactContainer } from "./Contact.style";
import largeGrid from "../../assets/largeGrid.png";
import SignupForm from "./ContactForm";

const Contact = () => {
  return (
    <>
      <ContactContainer>
        <ContactHeader>
          <img src={largeGrid} alt="Large grid" />
          <h3>Lets connect and chat!</h3>
          <p>
            Don’t like forms? Send me an <a href="#">email</a> &#128512;
          </p>
        </ContactHeader>
        <SignupForm />
      </ContactContainer>
    </>
  );
};

export default Contact;
