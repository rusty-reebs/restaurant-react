// Navbar.js

//TODO no sandwich for mobile, just use hyperlinks across the top

import React from "react";

const NavBar = (props) => {
  return (
    <div className="bg-zinc-700">
      <div
        className="block font-merienda text-red-500 text-5xl pl-10"
        display={{
          textShadowOffset: { width: "1.5px", height: "1.5px" },
          textShadowRadius: "3px",
          textShadowColor: "rgba(0,0,0,0.75)",
        }}
      >
        🇬🇪 Nina's Georgian Restaurant 🇬🇪
      </div>
      <nav className="font-quattro text-white">
        <ul className="flex flex-row justify-around">
          <li>Home</li>
          <li>Menu</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
