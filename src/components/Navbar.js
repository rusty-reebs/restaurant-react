// Navbar.js

//TODO no sandwich for mobile, just use hyperlinks across the top
//TODO put current route in state and highlight nav link

import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <div className="bg-zinc-700 opacity-90">
      <div
        className="flex flex-col mx-10 font-merienda text-red-600 text-3xl pt-3 pb-4"
        display={{
          textShadowOffset: { width: "1.5px", height: "1.5px" },
          textShadowRadius: "3px",
          textShadowColor: "white",
        }}
      >
        <div>🇬🇪 Nina's Georgian</div>
        <div className="text-right">Restaurant 🇬🇪</div>
      </div>
      <nav className="font-quattro text-white text-2xl">
        <div className="flex flex-row justify-around pb-4 border-b-4">
          <Link
            to="/home"
            className=" hover:bg-black hover:text-white hover:rounded-lg"
          >
            Home
          </Link>
          <Link to="/menu" className=" hover:bg-black hover:text-white">
            Menu
          </Link>
          <Link to="/contact" className=" hover:bg-black hover:text-white">
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
