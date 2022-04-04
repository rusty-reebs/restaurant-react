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
      <div className="bg-zinc-700 opacity-90 px-3 pt-5 pb-40 font-quattro text-white">
        <h2 className="text-xl text-center font-bold">Where To Find Us</h2>
        <img src={tbilisi} alt="tbilisi" className="my-4 border-8 rounded-md" />
        <div className="mx-5 py-4">
          <h2 className="text-xl text-center font-bold border-b-4 pb-6">
            We are located in the center of Tbilisi on Rustaveli Avenue.
          </h2>
          <p className="h-8"></p>
          <h2 className="text-xl text-center font-bold">
            Find us on Facebook!
          </h2>
          <p className="h-8"></p>
          <h2 className="text-xl text-center font-bold">
            Come and visit us today!
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Contact;
