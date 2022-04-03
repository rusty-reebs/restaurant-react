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
      <div className="bg-zinc-700 opacity-90 px-3 py-5 font-quattro text-white">
        <h2 className="text-xl text-center font-bold">
          Gamarjoba! We have all your favorite authentic Georgian recipes, made
          with pride in my kitchen!
        </h2>
        <img
          src={interior}
          alt="interior"
          className="my-4 border-8 rounded-md"
        />
        <div className="pb-4">
          <h2 className="text-xl text-center font-bold">
            What people are saying about Nina's Restaurant:
          </h2>
          <p className="h-4"></p>
          <p className="text-lg italic">
            "Nina's has the best food I've tasted in Georgia! The khinkhali was
            outstanding!"
          </p>
          <p className="text-lg text-right">- Russell, Canada</p>
          <p className="h-4"></p>
          <p className="text-lg italic">
            "I'm a local, and the food here is like my Grandma's cooking. You'll
            find true Georgian taste and hospitality at Nina's."
          </p>
          <p className="text-lg text-right">- Giorgi, Georgia</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
