import React from "react";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";

import IG from "../img/IG.png";
function Contact() {
  return (
    <div className="contact">
      <h1>
        Send me a message <BsSuitHeart size={25} />{" "}
      </h1>
      <form className="contactForm" action="">
        <input type="text" placeholder="Full Name" name="" id="" />
        <input type="email" placeholder="email address" name="" id="" />
        <input type="phone" placeholder="phone number" name="" id="" />
        <input type="text" placeholder="Your message..." name="" id="message" />
        <button className="btnTwo">Submit</button>
      </form>
      <h1>
        Contact me directly <BsSuitHeartFill size={25} />{" "}
      </h1>

      <p>
        <a href="mailto:mbarr83@aol.com" className="contactFormLink">
          mbarr83@aol.com
        </a>
      </p>
      <p>
        <a href="tel:+17326870347" className="contactFormLink">
          (732) 687-0347
        </a>
      </p>
    </div>
  );
}

export default Contact;
