// Navbar.js

//TODO no sandwich for mobile, just use hyperlinks across the top
//TODO put current route in state and highlight nav link

import React from "react";

const NavBar = (props) => {
  return (
    <div className="bg-zinc-700 opacity-90">
      <div
        className="flex flex-col mx-5 font-merienda text-red-600 text-4xl pt-3 pb-4"
        display={{
          textShadowOffset: { width: "1.5px", height: "1.5px" },
          textShadowRadius: "3px",
          textShadowColor: "white",
        }}
      >
        <div>🇬🇪 Nina's</div>
        <div className="ml-16">Georgian</div>
        <div className="ml-24">Restaurant 🇬🇪</div>
      </div>
      <nav className="font-quattro text-white text-2xl pb-4">
        <ul className="flex flex-row justify-around">
          <li className=" hover:bg-black hover:text-white hover:rounded-lg">
            Home
          </li>
          <li className=" hover:bg-black hover:text-white">Menu</li>
          <li className=" hover:bg-black hover:text-white">Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
