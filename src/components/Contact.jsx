import React from "react";

import IG from "../img/IG.png";
function Contact() {
  return (
    <div className="contact">
      <h1>Please feel reach to reach out!</h1>
      <form action="">
        <input type="text" placeholder="message for maggie" name="" id="" />
        <input type="text" placeholder="Full name" name="" id="" />
        <input type="text" placeholder="email address" name="" id="" />
        <input type="text" placeholder="phone number" name="" id="" />
        <button>submit</button>
      </form>
      <h4>email@email.com</h4>
      <h4>+123 123 123</h4>
      <img src={IG} alt="Instagram Logo" />
    </div>
  );
}

export default Contact;
