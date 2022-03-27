// home.js

import React from "react";
import kazbegi from "../img/kazbegi.jpeg";
import interior from "../img/old-interior.jpeg";
import NavBar from "./Navbar";

const Home = (props) => {
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
      <h2>
        Gamarjoba! We have all your favorite authentic Georgian recipes, made
        with pride in my kitchen!
      </h2>
      <img src={interior} alt="interior" />
    </div>
  );
};

export default Home;
