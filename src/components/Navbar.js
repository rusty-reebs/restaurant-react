// Navbar.js

//TODO no sandwich for mobile, just use hyperlinks across the top
//TODO put current route in state and highlight nav link

import React from "react";

const NavBar = (props) => {
  return (
    <div className="bg-zinc-700 opacity-90">
      <div
        className="block font-merienda text-red-500 text-5xl pl-10 leading-tight"
        display={{
          textShadowOffset: { width: "1.5px", height: "1.5px" },
          textShadowRadius: "3px",
          textShadowColor: "rgba(0,0,0,0.75)",
        }}
      >
        🇬🇪 Nina's Georgian Restaurant 🇬🇪
      </div>
      <nav className="font-quattro text-white text-2xl">
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
