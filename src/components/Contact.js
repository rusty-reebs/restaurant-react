// contact.js
import React from "react";
import tbilisi from "../img/tbilisi.jpeg";
import kazbegi from "../img/kazbegi.jpeg";
import NavBar from "./Navbar";

const Contact = (props) => {
  return (
    <div
      className="bg-top"
      style={{
        backgroundImage: `url(${kazbegi})`,
        height: "100vh",
        // opacity: "0.8",
      }}
    >
      <NavBar />
      <h2>Where To Find Us</h2>
      <img src={tbilisi} alt="tbilsi" />
    </div>
  );
};

export default Contact;
