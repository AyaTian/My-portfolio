import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const service_id = process.env.REACT_APP_SERVICE_ID;
const template_id = process.env.REACT_APP_TEMPLATE_ID;
const public_key = process.env.REACT_APP_PUBLIC_KEY;

const Contact = () => {
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(service_id, template_id, e.target, public_key).then(
      (result) => {
        setMessage(
          "Your message has been successfully sent. I will contact with you soon!"
        );
      },
      (error) => {
        setMessage("Opps! Fail to send message, please try again");
      }
    );
    e.target.reset();
  };
  return (
    <section className="contact">
      <h2>
        Contact <span>Me</span>
      </h2>
      <form action="" onSubmit={sendEmail}>
        <div className="input-box">
          <input type="text" placeholder="Full Name" name="fullName" />
          <input type="email" placeholder="Email Address" name="email" />
        </div>
        <div className="input-box">
          <input type="text" placeholder="Phone Number" name="phone" />
          <input type="text" placeholder="Address" name="address" />
        </div>
        <textarea placeholder="Your message" name="message" />
        <input type="submit" value="send message" className="btn" />
      </form>
      <p className="message">{message}</p>
    </section>
  );
};

export default Contact;
