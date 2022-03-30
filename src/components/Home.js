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
      <div className="h-screen bg-zinc-700 opacity-90 px-3 py-5">
        <h2 className="font-quattro text-white text-2xl">
          <p className="text-center">
            Gamarjoba! We have all your favorite authentic Georgian recipes,
            made with pride in my kitchen!
          </p>
        </h2>
        {/* needs border around image */}
        <img src={interior} alt="interior" className="py-4" />
        <h2 className="font-quattro text-white text-2xl pb-10">
          <p className="text-center">
            What people are saying about Nina's Restaurant:
          </p>
          <p className="text-xl italic">
            Nina's has the best food I've tasted in Georgia! The khinkhali was
            outstanding! - Russell, Canada
          </p>
          <p className="text-xl italic">
            I'm a local, and the food here is like my Grandma's cooking. You'll
            find true Georgian taste and hospitality at Nina's. - Giorgi,
            Georgia
          </p>
        </h2>
      </div>
    </div>
  );
};

export default Home;
